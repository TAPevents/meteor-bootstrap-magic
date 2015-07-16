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

format = (str, del) -> str.replace(/\s+/g, del || '-').toLowerCase()

Template._bootstrap_magic.helpers
  "groups" : ->
    for group in bootstrap_magic_variables
      for lessVar in group.data
        lessVar.value = reactive.defaults.keys[lessVar.key] || lessVar.value
    bootstrap_magic_variables

  "previewTmpl" : -> Template["bootstrap_magic_preview_#{format @name, '_'}"] || null
  "inputTmpl" : -> Template["bootstrap_magic_input_#{@type}"] || null
  "formattedName" : -> 
    format @name
    console.log "the name: #{name}"
  "typeIs" : (type) -> @type is type

Template._bootstrap_magic.created = ->
  # trigger start event
  BootstrapMagic.start() if BootstrapMagic.start

Template._bootstrap_magic.rendered = ->

  # colorpicker's changeColor fires too often!
  $('.color-picker-group').colorpicker
    horizontal: true

  .on 'showPicker', ->
    @startVal = $('input',@).val()

  .on 'hidePicker', ->
    $input = $('input',@)
    @endVal = $input.val()
    if @startVal and @startVal isnt @endVal
      @startVal = @endVal
      $input.trigger 'change'

Template._bootstrap_magic.events
  'change input.bootstrap-magic-input' : (e) ->
    $input = $(e.currentTarget)
    BootstrapMagic.setOverride $input.attr('name'), $input.val()

  'click .submenu-list' : ->
    $('.sub-item').toggleClass('show-item')