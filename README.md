# Meteor Bootstrap Magic

### A Bootstrap Theme Editor *ported from [Bootstrap Magic](https://github.com/pikock/bootstrap-magic)*

This package is just for client-side UI. It allows you to edit and generate a list of less variables for use with bootstrap. It simply creates a reactive dictionary with key/val pairs for less variable defaults and overrides.

# Installation

```
meteor add hitchcott:bootstrap-magic
```

Make sure you have bootstrap added to your project.

Include the `{{> BootstrapMagic}}` template anywhre in your project to get the UI.

# Usage

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
````

# TODO

- i18n
- better UI / examples
- reactive variable inheretance: changing `@brand-primary` should change `@link-color` unless `@link-color` is override

# Lisence

MIT 2014

Thanks to https://github.com/pikock/bootstrap-magic for creating the original.