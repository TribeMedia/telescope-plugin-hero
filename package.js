Package.describe({
  name: 'jeremy:telescope-plugin-hero',
  summary: 'A configurable hero banner for Telescope.',
  version: '0.2.5',
  git: 'https://github.com/jshimko/telescope-plugin-hero.git'
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0.4");

  api.use([
    'telescope:core@0.20.4',
    'perak:codemirror@1.2.3'
  ]);

  api.imply('perak:codemirror@1.2.3');

  api.addFiles([
    'lib/client/hero_layout.html',
    'lib/client/hero_layout.js',
    'lib/client/hero.html',
    'lib/client/hero.js',
    'lib/client/hero.scss'
  ], 'client');

  api.addFiles([
    'lib/collections.js',
    'lib/lib.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/publications.js'
  ], 'server');

  api.export([
    'HeroSettings'
  ]);

});
