<!-- 登录注册页面顶部导航 -->
<template>
    <el-header class="el-header-style">
        <a href="#"><img class="logo" src="https://jingsai.qooroo.cn/resource/home/img/logo.png" ></a>
        <span class="rightbox">基本版 | English | 手机版 | 企业邮箱</span>
    </el-header>
</template>

<script>
export default {
  name: 'LoginHead',
};
</script>

<style scoped>
.el-header img {
  width: 160px;
  height: 60px;
}

.el-header-style {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 1440px;
  height: 70px !important;
  border-bottom: 1px solid #58990a;
  overflow: hidden;
}

.rightbox {
    color: #44730B;
    font-size: 14px;
}
</style>
