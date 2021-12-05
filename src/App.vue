<template>
  <div id="app">
    <!-- 将页面交给vue-router接管   -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

a {
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
</style>
