# BootstrapMagic+

### A client-side GUI for editing Bootstrap varaibles without having to know CSS

Welcome to Bootstrap Magic+, a Meteor Package  of the  __Bootstrap Theme Editor *ported from [Bootstrap Magic](https://github.com/pikock/bootstrap-magic)*__. It has been adapted and updated from the original, and now it's even better! It includes some cool new features:

* Search Function
* Sliders for numerical values
* User-friendly Organization
* More Examples
* Internationalization
* Updated variables for [Bootstrap v3.3.5](http://getbootstrap.com/)

## Usage

Make sure you have a Bootstrap package added to your project. You could use [`tap:meteorstrap`](http://github.com/tapevents/meterostrap) or [`twbs:bootstrap`](https://github.com/twbs/bootstrap), for example. The former will enable you to modify your theme in real-time.

Then simply add this package to your project by using `meteor add tap:bootstrap-magic`.

Include the `{{> BootstrapMagic}}` template anywhere in your project to access the GUI.

While editing the variables, BootstrapMagic+ maintains reactive dictionary of LESS variables, which contains key-value pairs for LESS variable defaults and overrides, which you can access at any time.

You can access the variables generated at any time using the following API:

```coffeescript
BootstrapMagic.on 'start', ->
  # do something

BootstrapMagic.on 'change', (change) ->
  key = Object.keys(change)[0]
  val = change[key]
  # log the change
  console.log 'you just changed', key, val

Template.myTempalte.events
  'click .something' : ->
    # log all default variables
    console.log BootstrapMagic.dictionary.defaults.keys
    # log all override variables
    console.log BootstrapMagic.dictionary.overrides.keys

Tracker.autorun ->
  # reactive source for any given variable
  console.log BootstrapMagic.dictionary.overrides.get('@gray-darker')
```

## i18n

Meteor internationalisation package [tap-i18n](https://github.com/TAPevents/TAP-i18n) has been used for i18n. We currently support:

* English
* Chinese

## Credits & Contributions

Originally Ported by [Chris Hitchcott](https://github.com/hitchcott)

Additional developmeny by [Talia Scotchbrook](https://github.com/titaniumtails)

Credit to [pikock](https://github.com/pikock/bootstrap-magic) for creating the original BootstrapMagic.

**TAP**events - we make [apps for events](http://tapevents.com).

**MIT License**, 2014