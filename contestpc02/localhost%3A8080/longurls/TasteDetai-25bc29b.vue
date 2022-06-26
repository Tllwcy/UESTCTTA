<!-- 活动详情页：体验课 -->
<template>
  <el-container>
    <pageHead></pageHead>
    <el-main class="pagecontent">
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/classify' }"
            >活动分类</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/classify/taste' }"
            >体验</el-breadcrumb-item
          >
        </el-breadcrumb>
        <el-mian class="el-infoContent">
          <img src="https://jingsai.qooroo.cn/resource/home/pic/w014.png" />
          <el-row class="el-info-row">
            <p>尤克里里体验课</p>
            <el-container class="el-info-row-container">
              <span>开始时间:2022年02月18日~2022年06月08日</span>
              <div class="container-div">
                <span>价格 ￥0.0</span>
                <span>200人参加</span>
              </div>
            </el-container>
            <el-button class="el-info-row-btn">立即参加</el-button>
          </el-row>
        </el-mian>
      </el-main>
      <el-row></el-row>
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
/deep/.el-card__body,
.el-main {
  // padding: 0;
  // margin: 0 auto;
  // width: 1200px;
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
/** 活动内容信息块 */
.el-infoContent {
  display: flex;
  margin-top: 20px;
}
.el-info-row {
  margin-left: 20px;
  font-size: 16px;
}
.el-info-row p {
  margin: 0;
  padding: 10px;
  font-size: 22px;
  color: #4f6f2b;
}
.el-info-row-container {
  padding: 20px;
  background: #f2f2f2;
  border-radius: 10px;
}
.container-div{
  display: flex;
  padding-top: 10px;
}
.el-info-row-btn {
  background-color: #4f6f2b;
  color: white;
  border: 1px solid #4f6f2b;
  border-radius: 20px;
}
</style>
