import Framework7 from 'framework7/framework7.esm.bundle.js';
import 'framework7/css/framework7.bundle.css';
import '../css/icons.css';
import '../css/app.less';
import cordovaApp from './cordova-app.js';
import routes from './routes.js';

var app = new Framework7({
    root: '#app',
    id: 'io.framework7.myapp',
    name: 'Astro',
    theme: 'auto',
    data: function () {
        return {
            data: {},
        };
    },
    methods: {
        get: function () {
        },
    },
    routes: routes,
    panel: {
        leftBreakpoint: 960,
    },
    input: {
        scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
        scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
    },
    statusbar: {
        overlay: Framework7.device.cordova && Framework7.device.ios || 'auto',
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
    },
    on: {
        init: function () {
            var f7 = this;
            if (f7.device.cordova) {
                cordovaApp.init(f7);
            }
        },
    },
});