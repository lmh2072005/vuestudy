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
    /*在切换过程中，<router-view> 组件可以通过实现一些钩子函数来控制路由的组件切换过程。这些钩子函数包括：
     data 在激活阶段被调用，在 activate 被断定（ resolved ，指该函数返回的 promise 被 resolve ）。用于加载和设置当前组件的数据。
     data切换钩子会在 activate 被断定（ resolved ）以及界面切换之前被调用
     切换进来的组件会得到一个名为 $loadingRouteData 的元属性，其初始值为 true ，在 data 钩子函数被断定后会被赋值为 false 。这个属性可用来会切换进来的组件展示加载效果
     data在每次路由变动时都会被调用，即使是当前组件可以被重用的时候，但是 activate 仅在组件是新创建时才会被调用
     activate 的作用是控制切换到新组件的时机。data 切换钩子会在 activate 被断定（ resolved ）以及界面切换之前被调用，所以数据获取和新组件的切入动画是并行进行的，而且在 data 被断定（ resolved ）之前，组件会处在“加载”状态。
     如果你想等到数据获取之后再切换视图，可以在组件定义路由选项时，添加 waitForData: true 参数。
     在模板中使用 $loadingRouteData ：
     <div v-if="$loadingRouteData">Loading ...</div>
     <div v-if="!$loadingRouteData">
         <user-profile user="{{user}}"></user-profile>
         <user-post v-repeat="post in posts"></user-post>
     </div>
     activate  //只会在组件被创建时调用，可复用的组件切换时如果已经被创建了就不会调用该方法
     deactivate //禁用和移除之时被调用
     canActivate //在验证阶段，是否可以创建激活，当一个组件将要被切入的时候被调用。 调用 transition.next() 可以断定（ resolve ）此钩子函数。调用 transition.abort() 可以无效化并取消此次切换。
     canDeactivate //在验证阶段，是否可以终止，当一个组件将要被切出的时候被调用。
     canReuse*/ //决定组件是否可以被重用。如果一个组件不可以重用，当前实例会被一个新的实例替换，这个新实例会经历正常的验证和激活阶段。
    '/bbb/:name':{
        component:{
            template : '<h1>test activate</h1>',
            route :{
                data : function(transition){
                    console.log(123)

                },
                activate : function(){
                    console.log(333)
                }
            }
        }
    }
});

router.start(app, '#app');
//参考demo:
// 1.https://github.com/vuejs/vue-hackernews
// 2.https://github.com/cwsjoker/Cnode-vue-spa

