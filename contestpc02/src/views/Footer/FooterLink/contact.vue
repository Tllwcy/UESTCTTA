
<!-- 页脚链接：意见反馈 -->
<template>
  <el-container
    class=".el-container-main"
    style="flex-direction: column;
    justify-content: center;"
  >
    <el-row class="el-rows-header" type="flex" align="middle" justify="space-between">
      <el-col class="el-col-marginleft">
        <el-page-header @back="goBack" content="联系我们"> </el-page-header>
      </el-col>
    </el-row>
    <div class="el-rows-border"></div>
    <el-main class="el-mains-pageContent">
      <el-row class="el-rows-margin"
      v-for="item in colList" :key="item.id">
          <el-col class="el-cols-title">{{item.title}}：</el-col>
          <el-col v-for="i in item.content" :key="i.id"
           class="el-cols-content">{{i}}</el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      colList: [
        { title: '客服', content: ['客服QQ : 2563054446', '客服微信 : albacy', '在线时间 : 周一至周五 10:00-19:00'] },
        { title: '竞赛合作', content: ['联系人 : 任先生', '邮箱 : renlifeng@saikrcom'] },
        { title: '公司地址', content: ['北京市昌平区回龙观东大街腾讯众创空间B座三楼', '邮编102208'] },
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped src="@/assets/css/userinfoPage/childrenPageStyle.css"></style>

<!--样式穿透 -->
<style lang="less" scoped>
/**页头字体样式 */
/deep/.el-page-header__left .el-icon-back {
  font-size: 30px;
}
/deep/.el-page-header__title {
  font-size: 28px;
}
/deep/.el-page-header__content {
  font-size: 28px;
  font-weight: 600;
  color: #303133;
}
</style>

<style scoped>
/**页头右边返回块左侧间距 */
.el-col-marginleft {
  margin-left: 2%;
}
/**页头标题边距 */
.el-rows-header {
  margin: 20px;
}
/** 页头导航下面那条线 */
.el-rows-border {
  border-bottom: 1px solid #000;
  margin: 0 30px;
}
/**页面内容main的布局排版 */
.el-mains-pageContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 80px;
}
/** 每行标题*/
.el-cols-title {
    font-size: 36px;
    font-weight: 900;
}
/** 每块文字的上下边距*/
.el-rows-margin{
    margin: 40px 0;
}
/**每个标题下的内容块文字和上间距 */
.el-cols-content {
    font-size: 26px;
    margin-top: 20px;
}
</style>
