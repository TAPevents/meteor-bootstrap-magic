Package.describe({
  name: "tap:bootstrap-magic",
  summary: "A Bootstrap Theme Editor ported to Meteor",
  version: '0.1.2',
  git: 'https://github.com/TAPevents/meteor-bootstrap-magic'
});

Package.on_use(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'coffeescript',
    'reactive-var',
    'reactive-dict',
    'templating',
    'underscore',
    'less',
    'tap:i18n@1.5.1',
    'hitchcott:ez-modal@0.3.1'
  ], ['client', 'server']);

  api.add_files("package-tap.i18n", ["client", "server"]);

  api.add_files([
    // colorpicker lib
    'lib/colorpicker/css/bootstrap-colorpicker.css',
    'lib/colorpicker/img/bootstrap-colorpicker/alpha-horizontal.png',
    'lib/colorpicker/img/bootstrap-colorpicker/alpha.png',
    'lib/colorpicker/img/bootstrap-colorpicker/hue-horizontal.png',
    'lib/colorpicker/img/bootstrap-colorpicker/hue.png',
    'lib/colorpicker/img/bootstrap-colorpicker/saturation.png',
    'lib/colorpicker/js/bootstrap-colorpicker.js',
    'lib/templates/preview/borders.html',
    'lib/templates/preview/badges.html',
    'lib/templates/preview/breadcrumbs.html',
    'lib/templates/preview/carousels.html',
    'lib/templates/preview/close.html',
    'lib/templates/preview/icons.html',
    'lib/templates/preview/padding.html',
    'lib/templates/preview/alerts.html',
    'lib/templates/preview/jumbotron.html',
    'lib/templates/preview/labels.html',
    'lib/templates/preview/layout.html',
    'lib/templates/preview/lists.html',
    'lib/templates/preview/modals.html',
    'lib/templates/preview/navbars.html',
    'lib/templates/preview/pagination.html',
    'lib/templates/preview/panels.html',
    'lib/templates/preview/progressbars.html',
    'lib/templates/preview/thumbnails.html',
    'lib/templates/preview/tooltips.html',
    'lib/templates/preview/validation.html',
    'lib/templates/preview/buttons.html',
    'lib/templates/preview/colors.html',
    'lib/templates/preview/dropdowns.html',
    'lib/templates/preview/forms.html',
    'lib/templates/preview/misc.html',
    'lib/templates/preview/tables.html',
    'lib/templates/preview/typography.html',
    'lib/templates/preview/zindex.html',
    // all-important default bootstrap variables
    'lib/bootstrap-magic-variables.js',
    // and now for the actual package code
    'bootstrap-magic-editor.html',
    'bootstrap-magic-editor.less',
    'bootstrap-magic.coffee'
  ], ['client']);

  api.add_files(["i18n/en.i18n.json"], ["client", "server"]);

});