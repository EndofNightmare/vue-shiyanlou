<template>
    <div class="homeHeader">
      <!-- LOGO   -->
      <img src="https://static.shiyanlou.com/frontend/dist/img/9f43b00.svg" class="logo"/>
      <span class="logo-text">做实验，学编程</span>

      <div style="flex-grow: 2"></div>

      <a href="#" class="tabs-a separator">企业版</a>
      <a href="#" class="tabs-a">学校版</a>
      <a href="#" class="btn login-btn">登录</a>
      <a href="#" class="btn register-btn">注册</a>
    </div>
</template>

<style type="text/css" scoped>

</style>

<script>
export default {
  name: "homeHeader"
}
</script>

<style scoped>
.homeHeader {
  width: 1128px;
  /*页面缩放时自动居中*/
  margin: auto;
  display: flex;
  /*交叉轴上的对齐方式  文字在父盒子中居中*/
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 50px;
}

.logo-text {
  font-size: 18px;
  color: #274a59;
}
.tabs-a {
  /*display: inline-block;*/
  color: #999999;
  padding: 0 6px;
}

.btn {
  padding: 12px 25px;
}

.login-btn {
  color: #08bf91;
}

.register-btn {
  color: #fff;
  background: #08bf91;
}
</style>