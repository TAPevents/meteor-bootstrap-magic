flattenedMagic = {}
flattenedMagicValues = {}
for group in bootstrap_magic_variables
  for item in group.data
    flattenedMagic[item._id] = item
    flattenedMagicValues[item._id] = item.value

###
# EXPORTS
###
@BootstrapMagic =
  dictionary :
    overrides : new ReactiveDict()
    defaults : new ReactiveDict()
    currentCategory : new ReactiveVar()
    currentSubCategory : new ReactiveVar()
    searchTerms : new ReactiveVar('')

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
  setOverrides : (obj) ->
    # clear the previous overrides
    for key,val of @dictionary['overrides'].keys
      @dictionary['overrides'].set key, null
    # override wth passed obj
    @setMany 'overrides', obj

  setDefault : (key, val) -> @setOne 'defaults', key, val
  setDefaults : (obj) ->
    # clear the previous defaults
    for key,val of @dictionary['defaults'].keys
      @dictionary['defaults'].set key, null
    # set the botostrap defautls
    @setMany 'defaults', flattenedMagicValues
    # override with user defaults
    @setMany 'defaults', obj


###
# UI
###
# default starting script: load hard-coded defaults
# this function can be overriden by other packages for integrations
BootstrapMagic.on 'start', -> @setDefaults {}

Template._bootstrap_magic.onCreated ->
  BootstrapMagic.start() if BootstrapMagic.start

Template._bootstrap_magic.onRendered ->
  BootstrapMagic.dictionary.currentCategory.set bootstrap_magic_variables[0].category
  BootstrapMagic.dictionary.currentSubCategory.set bootstrap_magic_variables[0]._id

# this recursive function takes an object with {_id: bootstrapKey} format
# it will return all 'computed' values, if it's value relates to another bootstrap variable
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

getCurrentCategory = ->
  myCat = BootstrapMagic.dictionary.currentCategory.get()
  subCats = _.where bootstrap_magic_variables, category: myCat
  # https://github.com/TAPevents/tap-i18n/issues/100
  return _.sortBy subCats, (cat) -> TAPi18n.__ cat._id

getCurrentVariables = ->
  subCatId = BootstrapMagic.dictionary.currentSubCategory.get()
  return _.find bootstrap_magic_variables, (group) -> group._id is subCatId

showSearchResults = ->  # only show the search results if there are 3 characters or more
  BootstrapMagic.dictionary.searchTerms.get().length >= 3

getSearchResults = ->
  query = BootstrapMagic.dictionary.searchTerms.get()
  searchResults = {search: true}
  searchResults.data = _.filter flattenedMagic, (obj) -> obj._id.indexOf(query) > -1
  return searchResults

camelToSnake = (str) -> str.replace(/\W+/g, '_').replace(/([a-z\d])([A-Z])/g, '$1-$2')
spaceToHyphen = (str) -> str.replace(/\s/g, '-')
  
Template._bootstrap_magic.helpers
  "categories" : _.map _.groupBy(bootstrap_magic_variables, 'category'), (obj) -> _id: obj[0].category
  "subCategories" : getCurrentCategory
  "isSelectedCat" : -> @_id is BootstrapMagic.dictionary.currentCategory.get()
  "currentVars" : -> if showSearchResults() then getSearchResults() else getCurrentVariables()
  "mappedVariables" : -> _.map @data, mapVariableOverrides
  "isSelectedSubCat" : ->  @_id is BootstrapMagic.dictionary.currentSubCategory.get()
  "previewTmpl" : -> Template["bootstrap_magic_preview_#{camelToSnake @_id}"] || null
  "inputTmpl" : -> Template["bootstrap_magic_input_#{@type}"] || null
  "typeIs" : (type) -> @type is type

Template._bootstrap_magic.events
  'keyup .search-input' : (e) ->
    BootstrapMagic.dictionary.searchTerms.set spaceToHyphen(e.currentTarget.value)

  'change .bootstrap-magic-input' : (e) ->
    $input = $(e.currentTarget)
    BootstrapMagic.setOverride @_id, $input.val() || undefined

  'click .main-menu a' : ->
    BootstrapMagic.dictionary.currentCategory.set @_id
    BootstrapMagic.dictionary.currentSubCategory.set getCurrentCategory()[0]._id # set subcategory to the first child
 
  'click .sub-menu a' : ->
    BootstrapMagic.dictionary.currentSubCategory.set @_id


###
# Colorpicker Create/Destroy
###

Template.bootstrap_magic_input_color.onRendered ->
  self = @
  $thisColorPicker = $(@firstNode)

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

  @picker = $thisColorPicker.data('colorpicker').picker

  # auto update color if value changes
  @autorun ->
    mappedVar = mapVariableOverrides({_id: self.data._id})
    thisColor = mappedVar.reference?.value || mappedVar.value
    # don't update the value of the input box
    oldInputVal = $('input', $thisColorPicker).val()
    $thisColorPicker.colorpicker('setValue', thisColor).colorpicker('update', true)
    $('input', $thisColorPicker).val oldInputVal

Template.bootstrap_magic_input_color.onDestroyed ->
  @picker.remove()
  $(@firstNode).colorpicker('destroy')


###
# Bootstrap Popovers, Tooltips & EZ-Modal
###

# Informed variables popover

Template.bootstrap_magic_input.helpers
  'myChildren' : -> 
    items = _.map flattenedMagic, mapVariableOverrides
    return _.filter items, (obj) => obj.value?.indexOf(@._id) >- 1

Template.bootstrap_magic_input.onRendered ->
  $popoverLabel = @$('.popover-label')
  $popoverLabel.popover
    placement: 'right'
    trigger: 'manual'
    html: true
    animation: true
    container: $popoverLabel
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
