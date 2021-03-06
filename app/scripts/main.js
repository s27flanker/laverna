require.config({
    packages: [
        // Ace editor
        {
            name     : 'ace',
            location : '../bower_components/ace/lib/ace',
            main     : 'ace'
        },
        // Pagedown-ace editor
        {
            name     : 'pagedown-ace',
            location : '../bower_components/pagedown-ace',
            main     : 'Markdown.Editor'
        }
    ],
    paths: {
        sjcl                       :  '../bower_components/sjcl/sjcl',
        // Dependencies            :  and libraries
        text                       :  '../bower_components/requirejs-text/text',
        jquery                     :  '../bower_components/jquery/jquery',
        underscore                 :  '../bower_components/underscore/underscore',
        // Backbone &              :  Marionette
        backbone                   :  '../bower_components/backbone/backbone',
        marionette                 :  '../bower_components/marionette/lib/core/amd/backbone.marionette',
        localStorage               :  '../bower_components/backbone.localStorage/backbone.localStorage',
        IndexedDBShim              :  '../bower_components/IndexedDBShim/dist/IndexedDBShim.min',
        indexedDB                  :  '../bower_components/indexeddb-backbonejs-adapter/backbone-indexeddb',
        enquire                    :  '../bower_components/enquire/dist/enquire.min',
        dropbox                    :  'libs/dropbox',
        'backbone.wreqr'           :  '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter'      :  '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
        // Keybindings             :
        'Mousetrap'                :  '../bower_components/mousetrap/mousetrap',
        'mousetrap-pause'          :  '../bower_components/mousetrap/plugins/pause/mousetrap-pause',
        'backbone.mousetrap'       :  '../bower_components/backbone.mousetrap/backbone.mousetrap',
        // Pagedown                :
        'pagedown'                 :  '../bower_components/pagedown/Markdown.Editor',
        'pagedown-extra'           :  '../bower_components/pagedown-extra/Markdown.Extra',
        'to-markdown'              :  '../bower_components/to-markdown/src/to-markdown',
        // Markdown helpers        :
        'checklist'                :  'libs/checklist',
        'tags'                     :  'libs/tags',
        // Other                   :  libraries
        'bootstrap'                :  '../bower_components/bootstrap/dist/js/bootstrap.min',
        'prettify'                 :  '../bower_components/google-code-prettify/src/prettify',
        // View                    :  scripts here
        'modalRegion'              :  'views/modal',
        'brandRegion'              :  'views/brand',
        'apps'                     :  'apps/'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        localStorage: {
            deps: ['underscore', 'backbone']
        },
        indexedDB: {
            deps: ['underscore', 'backbone']
        },
        // Mousetrap
        'Mousetrap': { },
        'mousetrap-pause': {
            deps: ['Mousetrap']
        },
        'backbone.mousetrap': {
            deps: ['Mousetrap', 'mousetrap-pause', 'backbone']
        },
        // Ace && pagedown editor
        ace: {
            exports: 'ace'
        },
        'pagedown': {
            exports: 'Markdown',
            deps: [ 'pagedown-ace' ]
        },
        'pagedown-extra': [ 'pagedown-ace' ],
        'pagedown-ace/Markdown.Editor': {
            exports: 'Markdown',
            deps: [ 'pagedown-ace/Markdown.Converter' ]
        },
        'pagedown-ace/Markdown.Sanitizer': {
            deps: [ 'pagedown-ace/Markdown.Converter' ]
        },
        'to-markdown': {
            exports: 'toMarkdown'
        },
        bootstrap: {
            deps: ['jquery']
        },
        sjcl: {
            exports: 'sjcl'
        },
        prettify: {
            exports: 'prettify'
        }
    },
    findNestedDependencies: true,
    waitSeconds: 10
});

require([
    'jquery',
    'app',
    'bootstrap',
    'IndexedDBShim'    // IndexedDB support in Safari and in old Chrome
], function ($, App) {
    'use strict';

    App.start();

});
