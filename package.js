Package.describe({
  name: "hitchcott:bootstrap-magic",
  summary: "A Bootstrap Theme Editor ported to Meteor",
  version: '0.1.2',
  git: 'https://github.com/hitchcott/meteor-bootstrap-magic'
});

Package.on_use(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'coffeescript',
    'reactive-var',
    'reactive-dict',
    'nahue:simple-line-icons',
    'templating',
    'underscore'
  ], ['client']);

  api.add_files([
    'lib/templates/preview/border-radius.html',
    'lib/templates/preview/buttons.html',
    'lib/templates/preview/dropdowns.html',
    'lib/templates/preview/form-states.html',
    'lib/templates/preview/forms.html',
    'lib/templates/preview/grays.html',
    'lib/templates/preview/how-to.html',
    'lib/templates/preview/jumbotron.html',
    'lib/templates/preview/links.html',
    'lib/templates/preview/list-group.html',
    'lib/templates/preview/my-variables.html',
    'lib/templates/preview/navbar.html',
    'lib/templates/preview/navs-tabs.html',
    'lib/templates/preview/padding.html',
    'lib/templates/preview/pagination.html',
    'lib/templates/preview/popover.html',
    'lib/templates/preview/screen-sizes.html',
    'lib/templates/preview/sprites.html',
    'lib/templates/preview/tables.html',
    'lib/templates/preview/text-colors.html',
    'lib/templates/preview/tooltip.html',
    'lib/templates/preview/typography.html',
    'lib/colorpicker/css/bootstrap-colorpicker.css',
    'lib/colorpicker/img/bootstrap-colorpicker/alpha-horizontal.png',
    'lib/colorpicker/img/bootstrap-colorpicker/alpha.png',
    'lib/colorpicker/img/bootstrap-colorpicker/hue-horizontal.png',
    'lib/colorpicker/img/bootstrap-colorpicker/hue.png',
    'lib/colorpicker/img/bootstrap-colorpicker/saturation.png',
    'lib/colorpicker/js/bootstrap-colorpicker.js',
    'lib/bootstrap-magic-variables.js',
    // and now for the actual package code
    'bootstrap-magic-editor.html',
    'bootstrap-magic-editor.css',
    'bootstrap-magic.coffee'
  ], ['client']);

});