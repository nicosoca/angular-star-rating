/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 */
'use strict';
var path = require('path');
module.exports = (function () {

    var projectName = "Angular Stars";

    var ENV_LOCAL = "local",
        ENV_STAGING = "staging",
        ENV_PRODUCTION = "production",
        ENV_TESTING = "testing";

    var validEnvs = [ENV_LOCAL, ENV_STAGING, ENV_PRODUCTION, ENV_TESTING];

    //dir paths
    var root = './',
        src = 'src',
        dist = 'www',

        entryFile = 'app.js',
        indexFile = 'index.html',
        app = 'app',
        assets = 'assets';

    var styleguideFolder = 'sc5-styleguide';
    var styleguideCopies = [
        {
            src: [
                path.join( 'src', 'app', 'common', 'star-rating', '*.svg')
            ],
            dest: path.join(styleguideFolder, 'assets', 'images'),
            name: 'styleguide copies'
        }
    ];

    var config = {
        projectName:projectName,
        root: root,
        src: src,
        dist: dist,

        app: app,
        assets: assets,

        entryFile: entryFile,
        indexFile: indexFile,

        sc5Styleguide:{
            destFolder : styleguideFolder,
            copies : styleguideCopies
        }
    };

    return config;

})();