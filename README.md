# Bootstrap Magic+

Welcome to Bootstrap Magic+ for Meteor, a __Meteor Bootstrap Theme Editor *ported from [Bootstrap Magic](https://github.com/pikock/bootstrap-magic)*__. It has been adapted and updated from the original, and now it's even better!  It includes some really cool new features:

* [Bootstrap v3.3.5](http://getbootstrap.com/) support
* Incremental search (Find-as-you-type)
* Search filtering
* Better performance
* Live previews of theme changes
* User-friendly icons

This package is just for client-side GUI for changing Bootstrap framework theme (or any themes you choose to install). It allows anyone with minimal programming experience to adapt 

Under the hood, it allows you to edit and generate a list of LESS variables for use with Bootstrap. It simply creates a reactive dictionary with key-value pairs for LESS variable defaults and overrides.

# Installation

1. Add this package to your project, by typing in the commant line of your project folder:

```
meteor add tap:bootstrap-magic
```

2. Make sure you have a Bootstrap package added to your project. You can search for them on Meteor's package repository, [Atmosphere](https://atmospherejs.com/).

# Usage

Include the `{{> BootstrapMagic}}` template anywhere in your project's markup (*.html) to get the GUI.

# Under the Hood

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

#Dependencies

Meteor internationalisation package [TAP-i18n](https://github.com/TAPevents/TAP-i18n) has been used.

Currently, only English has been added. See the `i18n` folder > `en.i18n.json` for 
More information on usage and examples are available [here](https://github.com/TAPevents/TAP-i18n#advanced-i18n).

#Customisation

You can edit `bootstrap-magic-variables.js` to re-order and re-organise Bootstrap variables according to your project's requirements.

Changes in the `category` key will affect the primary menu, while `icon` key will affect the associated [Glyphicon](http://getbootstrap.com/components/#glyphicons) icon that is shown. The rest is up to you!


#License

The MIT License

Copyright (c) 2015 TAPevents, http://www.tapevents.com

#Credits & Contributions

Packaged for Meteor by [Christ Hitchcott](https://github.com/hitchcott)

Major credit to [pikock](https://github.com/pikock/bootstrap-magic) & [Autre planete](http://www.autreplanete.com/) for creating the original Bootstrap Magic.