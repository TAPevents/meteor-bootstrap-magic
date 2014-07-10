BootstrapMagicOverrides = new ReactiveDict

@BootstrapMagic =
  on : (eventName, callback) ->
    @[eventName] = callback

  off : (eventName) ->
    delete @[eventName]

  overrides: ->
    return BootstrapMagicOverrides.keys

  setOverride : (key,val,noFire) ->
    BootstrapMagicOverrides.set key, val
    obj = {}
    obj[key] = val
    unless noFire
      @change obj if @change

  setOverrides: (obj) ->
    for key,val of obj
      BootstrapMagicOverrides.set key, val


UI.registerHelper 'BootstrapMagicOverride', -> BootstrapMagicOverrides.get(@key) || @value

format = (str, del) -> str.replace(/\s+/g, del || '-').toLowerCase()

Template._bootstrap_magic.helpers
  "groups" : -> bootstrap_magic_variables
  "previewTmpl" : -> Template["bootstrap_magic_preview_#{format @name, '_'}"] || null
  "inputTmpl" : -> Template["bootstrap_magic_input_#{@type}"] || null
  "formattedName" : -> format @name
  "typeIs" : (type) -> @type is type

Template._bootstrap_magic.rendered = ->
  # colorpicker's changeColor fires too often!
  $cpg = $('.color-picker-group')
  $cpg.colorpicker()
  .on 'showPicker', ->
    @startVal = $('input',@).val()
  .on 'hidePicker', ->
    $input = $('input',@)
    @endVal = $input.val()
    if @startVal isnt @endVal
      BootstrapMagic.setOverride $input.attr('name'), @endVal
      $input.trigger 'change'
