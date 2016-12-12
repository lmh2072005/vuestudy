/**
 * Created by Administrator on 16-12-11.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './app.vue'


//使用插件
Vue.use(VueRouter)

//定义路由http://router.vuejs.org/zh-cn/essentials/getting-started.html
const routes = [
    {
        path : '/index',
        component : function(resolve){
            require.ensure(['./components/index.vue'], function(require){
                var index = require('./components/index.vue');
                resolve(index)
            }, 'index');
        }
    },
    {
        path : '/video',
        component : function(resolve){
            require.ensure(['./components/video.vue'], function(require){
                var video = require('./components/video.vue');
                resolve(video)
            }, 'video');
        }
    }
];

//创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes : routes
})

//创建和挂载根实例
const appVm = new Vue({
    router : router,
    components: {  //有s
        'app' : app
    }
}).$mount('#app')