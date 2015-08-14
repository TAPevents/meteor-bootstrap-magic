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
  return _.where bootstrap_magic_variables, { category: myCat }

getCurrentVariables = ->
  subCatId = BootstrapMagic.dictionary.currentSubCategory.get()

  # allVars =  _.find bootstrap_magic_variables, (group) -> group._id is subCatId
  # console.log "all Vars: ", allVars
  # console.log "allVars value: ", allVars.data
  # pixResult = _.contains allVars.value, 'px'
  # console.log "pixVars: ", pixResult

  return _.find bootstrap_magic_variables, (group) -> group._id is subCatId

showSearchResults = ->  # only show the search results if there are 3 characters or more
  BootstrapMagic.dictionary.searchTerms.get().length >= 3

getSearchResults = ->
  query = BootstrapMagic.dictionary.searchTerms.get()
  searchResults = {search: true}
  searchResults.data = _.filter flattenedMagic, (obj) -> obj._id.indexOf(query) > -1
  return searchResults

# PSUEDO CODE
# if type is numebr 
#    if value is in pixels
#    
#       if _id contains font-size
#          then the min should be 6, max should be 96, the step should be 1
#          return value in px
#           
#       if _id contains 'scaffolding' or  'padding'
#           then the min should be 0, max should be 120, the step should be 1
#           
#       if _id contains 'radius'
#           then the min should be 0, max should be 100, the step should be 1 (so vanilla!)
#       
#       if _id is 'table' or contains 'arrow width'
#           then the min should be 0, max should be 50, the step should be 1
#       
#       if _id contains 'max width' or 'max-height'
#           then the min should be 0, max should be 500, the step should be 1
#       
#       if _id contains modal
#           then the min should be 0, max should be 200, the step should be 1
#       
#       if value contains 2 'px' value
#           then add class multiple to range
#       
#    for values not pixels      
#       if _id is line-height
#           then the min should be 0.2, max should be 8, the step should be 0.1
#
#       if _id is font-weight
#            then the min should be 100, max should be 900, the step should be 100
#            
#       if _id contains opacity
#             then the min should be 0, max should be 1, the step should be 0.5  
#
#     if value is percent
#       then min should be 0, max should be 100, the step should be 1


camelToSnake = (str) -> str.replace(/\W+/g, '_').replace(/([a-z\d])([A-Z])/g, '$1-$2')

Template._bootstrap_magic.helpers
  'categories' : ->  _.map _.groupBy(bootstrap_magic_variables, 'category'), (obj) ->  obj[0]
  'subCategories' : getCurrentCategory
  'isSelectedCat' : -> @category is BootstrapMagic.dictionary.currentCategory.get()
  'currentVars' : -> if showSearchResults() then getSearchResults() else getCurrentVariables()
  'mappedVariables' : -> 
    myMap = _.map @data, mapVariableOverrides

    allPx = _.filter myMap, (data) -> 

      if data.type is 'number'
        num = (data.value).match /\d+/g #regex to parse numbers from string
        unit = (data.value).match /\D+/g #regex to parse unit from string

        if data.value?.indexOf('px') > -1
          data.unit = unit
          data.step = 1
          data.min = 0
          data.max = num*7
        
        else if data._id?.indexOf('opacity') > -1
          data.step = 0.05
          data.min = 0
          data.max = 1

        else if data._id?.indexOf('headings-font-weight') > -1
          data.step = 100
          data.min = 100
          data.max = 900

        else if data._id?.indexOf('line-height') > -1
          data.step = 0.1
          data.min = 0.2
          console.log "this max: ", num
          console.log "num is type: ", Object.prototype.toString.call num
          console.log "num is type: ", Array.isArray num
          console.log "the first value: ", 
          # data.max = 7.00*num[1]

        else if data.value?.indexOf('%') > -1
          data.unit = unit
          data.step = 1
          data.min = 0
          data.max = 100

        #get values for obj.reference.value 

    console.log "filtered it: ", allPx

    return myMap
  

  'isSelectedSubCat' : ->  @_id is BootstrapMagic.dictionary.currentSubCategory.get()
  'previewTmpl' : -> Template["bootstrap_magic_preview_#{camelToSnake @_id}"] || null
  'inputTmpl' : -> Template["bootstrap_magic_input_#{@type}"] || null

Template._bootstrap_magic.events
  'keyup .search-input' : (e) ->
    BootstrapMagic.dictionary.searchTerms.set e.currentTarget.value
    # BootstrapMagic.dictionary.searchTerms.set 'padd' #setting search so I don't have to click page


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

pxRange = -> 
  pixelTypes = {}
  pixelTypes.data = _.filter flattenedMagic, (obj) -> obj.value.indexOf('px') > -1


  # console.log "flat magic: ", flattenedMagic
  # console.log "flat value only: ", _.filter flattenedMagic, (obj) -> obj.value
  # console.log "mapped Var: ", _.map @data, mapVariableOverrides

  # pixelTypes.data = _.filter flattenedMagic, (obj) -> obj.value.indexOf('px') > -1
  # console.log "where: ", _.contains flattenedMagic.value, 'px'
  return pixelTypes

pxRange()

# "typeIs" : (type) -> 
#   console.log "type: ", @type
#   @type is type

Template.bootstrap_magic_input_number.helpers
  # 'isPx': -> 
  # 'min': -> return 0
  # 'max': -> 100
  # 'step': -> 1

Template.bootstrap_magic_input_number.onRendered ->
  @$('[data-toggle="tooltip"]').tooltip()

Template.bootstrap_magic_input_number.onDestroyed ->
  @$('[data-toggle="tooltip"]').tooltip('destroy')

# Template examples

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
