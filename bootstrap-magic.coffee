###
# EXPORTS
###

@BootstrapMagic =
  dictionary :
    overrides : new ReactiveDict()
    defaults : new ReactiveDict()
    currentCategory : new ReactiveVar()
    currentSubCategory : new ReactiveVar()

  on : (eventName, callback) ->
    @[eventName] = callback

  off : (eventName) ->
    delete @[eventName]

  setOne: (dictionaryName, key, val) ->
    @dictionary[dictionaryName].set key, val
    obj = {}
    obj[key] = val
    @change obj if @change

  setMany: (dictionaryName, obj) ->
    for key,val of obj
      @dictionary[dictionaryName].set key, val

  setOverride : (key, val) -> @setOne 'overrides', key, val
  setOverrides : (obj) -> @setMany 'overrides', obj
  setDefault : (key, val) -> @setOne 'defaults', key, val
  setDefaults : (obj) -> @setMany 'defaults', obj


###
# UI
###

getCurrentCategory = ->
  myCat = BootstrapMagic.dictionary.currentCategory.get()
  return _.where(bootstrap_magic_variables, { category: myCat })

getCurrentSubCategory = ->
  subCatId = BootstrapMagic.dictionary.currentSubCategory.get()
  return _.find bootstrap_magic_variables, (group) -> group._id is subCatId

Template._bootstrap_magic.created = ->
  BootstrapMagic.start() if BootstrapMagic.start

Template._bootstrap_magic.rendered = ->
  BootstrapMagic.dictionary.currentCategory.set bootstrap_magic_variables[0].category
  BootstrapMagic.dictionary.currentSubCategory.set bootstrap_magic_variables[0]._id


# default starting script: load hard-coded defaults
# this function can be overriden by other packages for integrations
BootstrapMagic.on 'start', ->
  defaultDefaults = {}
  for category in bootstrap_magic_variables
    for variable in category.data
      defaultDefaults[variable._id] = variable.value
  @setDefaults defaultDefaults

camelToSnake = (str) -> str.replace(/\W+/g, '_').replace(/([a-z\d])([A-Z])/g, '$1-$2')

Template._bootstrap_magic.helpers
  "categories" : ->  _.map _.groupBy(bootstrap_magic_variables, 'category'), (obj) ->  obj[0]
  "subCategories" : getCurrentCategory
  "currentSubCat" : getCurrentSubCategory
  "isSelectedCat" : -> @category is BootstrapMagic.dictionary.currentCategory.get()
  "isSelectedSubCat" : ->  @_id is BootstrapMagic.dictionary.currentSubCategory.get()
  "previewTmpl" : -> Template["bootstrap_magic_preview_#{camelToSnake @_id}"] || null
  "inputTmpl" : -> Template["bootstrap_magic_input_#{@type}"] || null
  "typeIs" : (type) -> @type is type

Template._bootstrap_magic.events
  'change input.bootstrap-magic-input' : (e) ->
    $input = $(e.currentTarget)
    BootstrapMagic.setOverride $input.attr('name'), $input.val()

  'click .main-menu a' : ->
    BootstrapMagic.dictionary.currentCategory.set @category
    BootstrapMagic.dictionary.currentSubCategory.set getCurrentCategory()[0]._id # set subcategory to the first child
 
  'click .sub-menu a' : ->
    BootstrapMagic.dictionary.currentSubCategory.set @_id

# TODO replace this with a block template helper
# attach override to type child type templates
getOverride = ->
  BootstrapMagic.dictionary.overrides.get(@_id) || BootstrapMagic.dictionary.defaults.get(@_id)

for type in ['text','color','font']
  Template["bootstrap_magic_input_#{type}"].helpers
    "override" : getOverride


###
# Colorpicker Create/Destroy
###

Template.bootstrap_magic_input_color.rendered = ->
  thisColorPicker = $(@firstNode)
  .colorpicker horizontal: true
  .on 'showPicker', ->
    @startVal = $('input', @).val()
  .on 'hidePicker', ->
    $input = $('input',@)
    @endVal = $input.val()
    if @startVal and @startVal isnt @endVal
      @startVal = @endVal
      $input.trigger 'change'

  @picker = thisColorPicker.data('colorpicker').picker

Template.bootstrap_magic_input_color.destroyed = ->
  @picker.remove()
  $(@firstNode).colorpicker('destroy')


###
# EZ-Modal
###

Template.bootstrap_magic_preview_popovers.rendered = ->
  $('[data-toggle="popover"]').popover()
