/**
 * Created by Administrator on 16-8-31.
 */
var app = require('../components/app.vue');
var router = new VueRouter();
router.map({
    '/home' : {
        component : {
            template : '<p>this is home</p>'
        }
    },
    '/tv' : {
        component : {
            template : '<p>this is tv</p>'
        }
    },
    '/gonglue' : {
        component : {
            template : '<p>this is gonglue</p>'
        }
    },
    '/usercenter' : {
        component : {
            template : '<p>this is usercenter</p>'
        }
    }
});
router.start(app, '#app');