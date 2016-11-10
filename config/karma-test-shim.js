require('core-js/es6');
require('core-js/es7/reflect');
require('ts-helpers');

var appContext = require.context('../src', true, /\.spec\.ts/);
appContext.keys().forEach(appContext);
