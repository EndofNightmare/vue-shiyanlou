<template>
  <div class="home">
    <home-header></home-header>
    <home-nav></home-nav>
  </div>
</template>

<script>
import homeHeader from '@/components/Home/homeHeader'
import homeNav from "@/components/Home/homeNav";
export default {
  name: "home",
  components: {homeHeader,homeNav}
}
</script>

<style scoped>
/* 此时每个组件看作一个子元素 */
.home {
  display: flex;
  flex-direction: column;
}
</style>