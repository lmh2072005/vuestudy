var app = Vue.extend({});
var router = new VueRouter();

router.map({
    '/user/:name':{  //根据路由异步加载对应的组件
        component:function(resolve){
            require.ensure(['../../components/app1.vue'], function(require){  //异步加载组件， 或者用 require(['../../components/app1.vue'], resolve)
                var app1 = require('../../components/app1.vue');
                resolve(app1);
            }, 'app1');
        }
    },
    '/aaa/:name':{
        name : 'message',
        component:function(resolve){
            return false; //虽然return false了 但是url的路由还是会变化
            require.ensure(['../../components/app2.vue'], function(require){
                var app2 = require('../../components/app2.vue');
                resolve(app2);
            }, 'app2');
        }
    },
    '/bbb/:name':{
        component:{
            route :{
                data : function(transition){
                    console.log(123)

                }
            }
        }
    }
});

router.start(app, '#app');
//参考demo:
// 1.https://github.com/vuejs/vue-hackernews
// 2.https://github.com/cwsjoker/Cnode-vue-spa

