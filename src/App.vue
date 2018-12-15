<!--
vue文件都是这个模式，一共由三个部分构成：
上边的<template>包含有最终用户看到的按钮框框；
中间的 <script> 定义了这个组件（module）所用到的数据和函数；
后边的<style>定义了这个组件的样式等等。
-->

<template>
  <div id="app">
    <!--3 使用-->
    <mynavbar></mynavbar>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
// 1 引入
// import 那个组件。
// 添加到mynavbar到export中。
// 在div最上方写：<mynavbar></mynavbar>
// (修改一下下边的Style里边的那个margin-top为0px.)
import mynavbar from './components/AppComponents/Navbar.vue'

export default {
  name: 'app',
  // 添加该组件
  components: {
    // 2 声明
    mynavbar
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
