
var app = require('../../components/app1.vue');
new Vue({
    el: 'body',
    data : {
        message : 'test'
    },
    methods : {
        /*handleIt : function(msg){
            alert(0)
            console.log(msg);
        }*/
    },
    events : {
        'child-msg' : function(msg){
            alert(1);
            this.message = msg;
        }
    },
    components: {
        app: app
    }
})
