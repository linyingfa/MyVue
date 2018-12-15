<template>

  <div id="home">
    <h1> This is Home Page </h1>
    <!--这里FirstPart的路由是”/”，代表着是默认选择，否则的话，一打开Home页面，FirstPart和-->
    <router-link id="FirstPart" to="/Home/FirstPart">FirstPart</router-link>
    <router-link id="SecondPart" to="/Home/SecondPart">SecondPart</router-link>
    <!--需要跳转的，都要添加这个路由-->
    <!--嵌套路由就是路由里面嵌套他的子路由，可以有自己的路由导航和路由容器-->
    <!--（router-link、router-view），通过配置children可实现多层嵌套-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home'

}
</script>

<style scoped>

</style>
