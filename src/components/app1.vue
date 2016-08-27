<template>
    <div class="app">
        hello {{name}}
        <p>
            <span v-on:click="showMsg()">点击我向父组件派发事件</span>
        </p>
    </div>
</template>

<script>
    module.exports = {
          data : function(){
              return {
                  name : 'world'
              }
          },
          methods : {
              showMsg : function(){
                  alert(this.name);
                  this.$dispatch('child-msg', this.name); //向父组件派发事件，事件沿着父链冒泡，冒泡过程中第一次触发回调之后自动停止冒泡，除非回调明确返回 true
              }
          }
    };
    /*
    * 使用 $on() 监听事件；
     使用 $emit() 在它上面触发事件；
     使用 $dispatch() 派发事件，事件沿着父链冒泡；
     使用 $broadcast() 广播事件，事件向下传导给所有的后代。*/
</script>
<style>
    .app{
        color:#ff3300;
    }
</style>


<!--
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>-->
