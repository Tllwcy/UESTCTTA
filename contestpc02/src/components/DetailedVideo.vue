<!-- 活动详情页：体验课 -->
<template>
  <el-container>
    <pageHead></pageHead>
    <el-main class="pagecontent">
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="el-title">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/classify' }"
            >活动分类</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/classify/taste' }"
            >精彩瞬间</el-breadcrumb-item
          >
        </el-breadcrumb>
        <el-mian class="el-infoContent">
        </el-mian>
      </el-main>
    </el-main>
  </el-container>
</template>

<script>
import HomeHead from '../views/Header/homeHead';

export default {
  data() {
    return {};
  },

  components: {
    pageHead: HomeHead,
  },
  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang="less" scoped>
/** el-main布局调整 */
/deep/.el-card__body, .el-main {
padding: 0;
margin: 0 auto;
width: 1200px;
}
</style>
<style scoped>
/**整体布局结构 */
.el-container {
  flex-direction: column;
}
.pagecontent {
  overflow: hidden;
}
/**头部 */
.el-title {
  margin-top: 20px;
  font-size: 18px;
}
/** 活动内容信息块 */
.el-infoContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}
</style>
