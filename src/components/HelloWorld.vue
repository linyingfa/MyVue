<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <!--添加了六个可以点击的连接，前三个用的是vue推荐的router-link方式，后三个用的是最传统的href的方式-->
    <ul>
      <router-link id="Home" to="/Home">Home</router-link>
      <router-link id="FirstPage" to="/FirstPage">FirstPage</router-link>
      <router-link id="SecondPage" to="/SecondPage">SecondPage</router-link>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://localhost:8080/#/Home" target="_blank">Home</a></li>
      <li><a href="http://localhost:8080/#/FirstPage" target="_blank">FirstPage</a></li>
      <li><a href="http://localhost:8080/#/SecondPage" target="_blank">SecondPage</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
