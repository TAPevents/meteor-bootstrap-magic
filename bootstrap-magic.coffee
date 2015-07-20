reactive =
  overrides : new ReactiveDict
  defaults : new ReactiveDict

@BootstrapMagic =
  on : (eventName, callback) ->
    @[eventName] = callback

  off : (eventName) ->
    delete @[eventName]

  setOne: (dictionary, key, val) ->
    reactive[dictionary].set key, val
    obj = {}
    obj[key] = val
    @change obj if @change

  setMany: (dictionary, obj) ->
    for key,val of obj
      reactive[dictionary].set key, val

  dictionary: reactive

  setOverride : (key, val) -> @setOne 'overrides', key, val
  setOverrides : (obj) -> @setMany 'overrides', obj
  setDefault : (key, val) -> @setOne 'defaults', key, val
  setDefaults : (obj) -> @setMany 'defaults', obj

 # why not make this scoped to the template?
UI.registerHelper 'BootstrapMagicOverride', ->
  reactive.overrides.get(@key) || reactive.defaults.get(@key)

#Something for Everyone
format = (str, del) -> str.replace(/\s+/g, del || '-').toLowerCase()
formatCamel = (str) -> 
  str = str.replace(/([^A-Za-z0-9\.\$])|([A-Z])(?=[A-Z][a-z])|([^\-\$\.0-9])(?=\$?[0-9]+(?:\.[0-9]+)?)|([0-9])(?=[^\.0-9])|([a-z])(?=[A-Z])/g, '$2$3$4$5 ')
  str.charAt(0).toUpperCase() + str.slice(1)

@currentPage = new ReactiveVar()

getCurrentGroup = ->
  for group in bootstrap_magic_variables
    if group.keyName is currentPage.get()
      return group

# getCurrentCat = ->

#   menuItems =[]
#   uniqueItems = []
#   for group in bootstrap_magic_variables
#     menuItems.push group.category
#   for item, i in menuItems
#     if item isnt menuItems[i+1]
#       uniqueItems.push item
#   return uniqueItems

# getCurrentCat()

initColorPicker = (node) ->

  # colorpicker's changeColor fires too often!
  $('.color-picker-group', node).colorpicker
    horizontal: true

  .on 'showPicker', ->
    @startVal = $('input', @).val()

  .on 'hidePicker', ->
    $input = $('input',@)
    @endVal = $input.val()
    if @startVal and @startVal isnt @endVal
      @startVal = @endVal
      $input.trigger 'change'


#Time for Templates

Template._bootstrap_magic.created = ->
  # trigger start event
  BootstrapMagic.start() if BootstrapMagic.start

Template._bootstrap_magic.rendered = ->
  currentPage.set bootstrap_magic_variables[0].keyName
  @.autorun -> 
    currentPage.get()
    Meteor.defer -> initColorPicker($('.color-picker-area'))

Template._bootstrap_magic.helpers
  "groups" : ->
    for group in bootstrap_magic_variables
      for lessVar in group.data
        lessVar.value = reactive.defaults.keys[lessVar.key] || lessVar.value
    return bootstrap_magic_variables

  "menuItems" : ->
    cats =[]
    uniqueItems = []
    for group in bootstrap_magic_variables
      cats.push formatCamel(group.category)
    for item, i in cats
      if item isnt cats[i+1] 
        uniqueItems.push item
    console.log uniqueItems
    return uniqueItems

    # menuItems =[]
    # for group in bootstrap_magic_variables
    #   for item in menuItems
    #     console.log "item: #{item}"
    #     console.log "gc: #{group.category}"
    #     if group.category isnt item
    #       menuItems.push(formatCamel(group.category))
    # return menuItems

    # menuItem = _.groupBy(bootstrap_magic_variables, "categories")
    # console.log "categories: #{menuItem}"
    # #make menuItem is global variable

    # for group, i in bootstrap_magic_variables
    #   if group[i].category isnt group[i+1].category
    #     @menuItem.push(formatCamel group.category)
    #     @menuItem


  "previewTmpl" : -> Template["bootstrap_magic_preview_#{format @name, '_'}"] || null
  "inputTmpl" : -> Template["bootstrap_magic_input_#{@type}"] || null
  "formattedName" : -> format @name
  "formattedMenu" : -> formatCamel @category
  "typeIs" : (type) -> @type is type
  "currentGroup" : getCurrentGroup
  "isActive" :-> @keyName is currentPage.get()

Template._bootstrap_magic.events
  'change input.bootstrap-magic-input' : (e) ->
    $input = $(e.currentTarget)
    BootstrapMagic.setOverride $input.attr('name'), $input.val()

  'click .submenu-list' : -> 
    currentPage.set(@keyName)