<!-- 所有vue文件的行尾号：IF-->
<template>
  <div id="app">
    <!-- 页面 -->
    <router-view class="router-view"></router-view>
        <!-- 页脚 -->
    <pageFooter class="router-view"></pageFooter>
  </div>
</template>

<script>
import AFooter from '@/views/Footer/aFooter';

export default {
  name: 'App',
  // 注册组件
  components: {
    pageFooter: AFooter,
  },
};
</script>

<style>
.router-view {
      min-width: 1440px;
    overflow: hidden;
}
</style>
