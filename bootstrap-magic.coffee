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

Template._bootstrap_magic.onCreated ->
  BootstrapMagic.start() if BootstrapMagic.start

Template._bootstrap_magic.onRendered ->
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

mapVariableOverrides = (obj) ->
  obj.isOverride = false
  obj.isReference = false

  myVal = BootstrapMagic.dictionary.overrides.get(obj._id)
  if myVal
    obj.isOverride = true
  else
    myVal = BootstrapMagic.dictionary.defaults.get(obj._id)

  if myVal
    obj.value = myVal

  # get the refernece recursively
  if obj.value?.indexOf('@') > -1
    obj.isReference = true
    obj.parentVar = obj.value 

    obj.reference = mapVariableOverrides {_id: obj.value}
    obj.reference.value?= '?'
    if obj.reference.reference
      obj.reference = obj.reference.reference

  return obj

flattenMagic = {}
for group in bootstrap_magic_variables
  for item in group.data
    flattenMagic[item._id] = item

camelToSnake = (str) -> str.replace(/\W+/g, '_').replace(/([a-z\d])([A-Z])/g, '$1-$2')
searchTerms = new ReactiveVar("")

Template._bootstrap_magic.helpers
  "categories" : ->  _.map _.groupBy(bootstrap_magic_variables, 'category'), (obj) ->  obj[0]
  "subCategories" : getCurrentCategory
  "currentSubCat" : getCurrentSubCategory
  "mappedVariables" : -> _.map @data, mapVariableOverrides
  "isSelectedCat" : -> @category is BootstrapMagic.dictionary.currentCategory.get()
  "isSelectedSubCat" : ->  @_id is BootstrapMagic.dictionary.currentSubCategory.get()
  "previewTmpl" : -> Template["bootstrap_magic_preview_#{camelToSnake @_id}"] || null
  "inputTmpl" : -> Template["bootstrap_magic_input_#{@type}"] || null
  "typeIs" : (type) -> @type is type
  "searchInactive" : -> true if searchTerms.get() is "" || " "

Template._bootstrap_magic.events
  'keyup .magic-search' : (e) -> 
    e.preventDefault
    searchVal = $(e.currentTarget).val()
    searchTerms.set searchVal

  'click .magic-filter-item' :(e) ->
    $filter = $(e.currentTarget)
    $filter.addClass 'filtered'
    $filterTerms = $('.filtered').text()
    $('.magic-filter')
    .removeClass "glyphicon glyphicon-filter"
    .html $filterTerms

  'change .bootstrap-magic-input' : (e) ->
    $input = $(e.currentTarget)
    BootstrapMagic.setOverride @_id, $input.val() || undefined

  'click .main-menu a' : ->
    BootstrapMagic.dictionary.currentCategory.set @category
    BootstrapMagic.dictionary.currentSubCategory.set getCurrentCategory()[0]._id # set subcategory to the first child
 
  'click .sub-menu a' : ->
    BootstrapMagic.dictionary.currentSubCategory.set @_id

###
# Colorpicker Create/Destroy
###

Template.bootstrap_magic_input_color.onRendered ->
  self = @
  $thisColorPicker = $(@firstNode)
  colorPickerStartColor = self.data.reference?.value || self.data.value

  # THIS IS A HACK colorpicker library fail: `color` parameter doesn't work
  $thisInput = $('input', $thisColorPicker)
  originalInputValue = $thisInput.val()
  $thisInput.val colorPickerStartColor

  # init colorpicker
  $thisColorPicker.colorpicker
    horizontal: true
  .on 'showPicker', ->
    @startVal = $('input', @).val()
  .on 'hidePicker', ->
    $input = $('input',@)
    @endVal = $input.val()
    if @startVal isnt @endVal
      @startVal = @endVal
      $input.trigger 'change'

  # THIS IS A HACK colorpicker library fail: `color` parameter doesn't work
  $('input', $thisColorPicker).val originalInputValue

  @picker = $thisColorPicker.data('colorpicker').picker

Template.bootstrap_magic_input_color.onDestroyed ->
  @picker.remove()
  $(@firstNode).colorpicker('destroy')


###
# Bootstrap Popovers, Tooltips & EZ-Modal
###

# Informed variables popover

Template.bootstrap_magic_input.helpers
  'myChildren' : -> 
    items = _.map flattenMagic, mapVariableOverrides
    return _.filter items, (obj) => obj.value?.indexOf(@._id) >- 1

Template.bootstrap_magic_input.onRendered ->
  $popoverLabel = @$('.popover-label')
  $popoverLabel.popover
    placement: 'auto right'
    trigger: 'manual'
    html: true
    container: $popoverLabel
    animation: true
    template: """
      <div class="popover popover-list" role="tooltip">
        <div class="arrow"></div>
        <h3 class="popover-title"></h3>
        <ul class="popover-content list-group"></ul>
        <button class='btn btn-default btn-xs pull-right mar-xs popover-pin' href='#' role='button'>
          <i class='glyphicon glyphicon-pushpin'></i>
        </button>
      </div>
    """

  .hover ->
    unless $popoverLabel.hasClass 'pinned'
      $popoverLabel
      .addClass 'popover-active'
      .popover 'show'
      .find('.popover-pin').off('click').click ->
        $popoverLabel.toggleClass 'pinned'

  , ->
    unless $popoverLabel.hasClass 'pinned'
      $popoverLabel
      .removeClass 'popover-active'
      .popover 'hide'


Template.bootstrap_magic_input.onDestroyed ->
  @$('[data-toggle="popover"]').popover('destroy')

# Tempalte examples

Template.bootstrap_magic_preview_popovers.onRendered ->
  @$('[data-toggle="popover"]').popover()

Template.bootstrap_magic_preview_tooltips.onRendered ->
  @$('[data-toggle="tooltip"]').tooltip()

Template.bootstrap_magic_preview_modals.events
  'click .ez-modal-example' : ->
    EZModal
      title: 'Please confirm'
      body: 'Are you sure you want to do that?'
      leftButtons: [
        html: 'Cancel'
        color: 'danger'
      ]
      rightButtons: [
        html: 'Confirm'
        color: 'success'
        fn: ->
          # do something
          @EZModal.modal 'hide' # hide parent
          EZModal 'Confirmation Received' # open new modal
      ]