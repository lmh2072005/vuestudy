<template>
    <div class="app">
        hello {{name}}
        <span v-on:click="showMsg()">show message</span>
    </div>
</template>

<script>
    module.exports = {
          data : function(){
              return {
                  name : 'world'
              }
          }
          /*methods : function(){
              return {
                  showMsg : function(){
                        alert(this.name);
                  }
              };

          }*/
    };
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
