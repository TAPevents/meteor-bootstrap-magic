Package.describe({
  summary: "A Bootstrap Theme Editor ported to Meteor"
});

// Get package assets recursively
var getPackageAssets=function(a,b){function f(a){var b=[],g=d.readdirSync(a);return c.each(g,function(c){var g=a+e.sep+c,h=d.statSync(g);h.isDirectory()?b=b.concat(f(g)):b.push(g)}),b}var c=Npm.require("underscore"),d=Npm.require("fs"),e=Npm.require("path"),g=process.cwd();process.chdir("packages"+e.sep+a);var h=f(b);return process.chdir(g),h};

Package.on_use(function(api) {
  api.use([
    'coffeescript',
    'reactive-dict',
    'templating'
  ], ['client']);

  api.add_files(getPackageAssets('bootstrap-magic','templates'), ['client']);
  api.add_files(getPackageAssets('bootstrap-magic','lib/colorpicker'), ['client']);

  api.add_files([
    'lib/bootstrap-magic-variables.js',
    'lib/bootstrap-magic-client.coffee'
  ], ['client']);

});