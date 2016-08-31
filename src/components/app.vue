<template>
    <div>
        <nav>
            <a v-link="{'path':'/home'}">首页</a>
            <a v-link="{'path':'/tv'}">视频</a>
            <a v-link="{'path':'/gonglue'}">攻略</a>
            <a v-link="{'path':'/usercenter'}">个人中心</a>
        </nav>
        <router-view keep-alive></router-view>
    </div>
</template>
<style scoped>
    nav{
        margin:30px;
    }
    nav a{
        margin-right:10px;
        color:#000;
    }
</style>