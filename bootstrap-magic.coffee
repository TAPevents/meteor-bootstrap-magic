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
camelToSnake = (str) -> str.replace(/\W+/g, '_').replace(/([a-z\d])([A-Z])/g, '$1-$2')

@currentSubCat = new ReactiveVar()
@currentCat = new ReactiveVar()

getCurrentSubCat = ->
  isSubCat = currentSubCat.get()
  for group in bootstrap_magic_variables
    if group.keyName is isSubCat
      return group

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

objByCat = ->
  myCat = currentCat.get()
  _.where(bootstrap_magic_variables, { category: myCat })

#Time for Templates
Template._bootstrap_magic.created = ->
  # trigger start event
  BootstrapMagic.start() if BootstrapMagic.start

Template._bootstrap_magic.rendered = ->
  currentCat.set bootstrap_magic_variables[0].category
  currentSubCat.set bootstrap_magic_variables[0].keyName
  @.autorun -> 
    currentSubCat.get()
    currentCat.get()
    Meteor.defer -> initColorPicker($('.color-picker-area'))

Template._bootstrap_magic.helpers
  
  # "groups" : ->
  #   for group in bootstrap_magic_variables
  #     for lessVar in group.data
  #       lessVar.value = reactive.defaults.keys[lessVar.key] || lessVar.value
  #   return bootstrap_magic_variables

  "categories" : ->  _.map _.groupBy(bootstrap_magic_variables, 'category'), (obj) ->  obj[0]
  "subCategories" : ->  _.map objByCat(), (obj) -> obj
  "previewTmpl" : -> Template["bootstrap_magic_preview_#{camelToSnake @keyName}"] || null
  "inputTmpl" : -> Template["bootstrap_magic_input_#{@type}"] || null
  "typeIs" : (type) -> @type is type
  "currentSubCat" : getCurrentSubCat
  "isSelectedCat" : -> @category is currentCat.get()
  "isSelectedSubCat" : ->  @keyName is currentSubCat.get()

Template._bootstrap_magic.events
  'change input.bootstrap-magic-input' : (e) ->
    $input = $(e.currentTarget)
    BootstrapMagic.setOverride $input.attr('name'), $input.val()

  'click .menu-secondary-list' : -> 
    currentCat.set(@category)
    currentSubCat.set(objByCat()[0].keyName)      
 
  'click .menu-tertiary-list' : -> currentSubCat.set(@keyName)

  # 'click #reset' :-> setDefaults(obj)