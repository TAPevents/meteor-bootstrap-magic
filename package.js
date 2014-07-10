Package.describe({
    summary: "A Bootstrap Theme Editor ported to Meteor"
});

Package.on_use(function(api) {
    api.use([
        'coffeescript',
        'templating'
    ], ['client']);

    api.add_files('bootstrap-magic.js', ['client', 'server']);
});