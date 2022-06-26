<!-- 页脚链接：意见反馈 -->
<template>
  <el-container
    class=".el-container-main"
    style="flex-direction: column;
    justify-content: center;"
  >
    <el-row
      class="el-rows-header"
      type="flex"
      align="middle"
      justify="space-between"
    >
      <el-col class="el-col-marginleft">
        <el-page-header @back="goBack" content="联系我们"> </el-page-header>
      </el-col>
    </el-row>
    <div class="el-rows-border"></div>
    <el-main class="el-mains-pageContent">
      <el-row class="el-rows-margin" v-for="item in colList" :key="item.id">
        <el-col class="el-cols-title">{{ item.title }}：</el-col>
        <el-col v-for="i in item.content" :key="i.id"
        class="el-cols-content">
            <el-col class="el-cols-content-font">{{i.subtitle}}</el-col>
            <el-col class="el-cols-content-font">{{i.value}}</el-col>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      colList: [
        {
          id: 1,
          title: '公司简介',
          content: [
            { value: '环球赛乐 ( 北京 ) 科技有限公司是一赤以校园赛事作为切入点，致力于大学生成长和前途、打造中国高校互联网第一品牌。公司于2014年由原百度、腾讯项目负责人及清华、中科院博士等创立，团队成员有6年大学生社区运营经验，对高校赛事领域有着深刻的理解。我们拥有专业的研发和设计团队，丰富的行业资源,以及覆盖1000所高校的校园地推团队。汇聚大学生学和竞赛、提供免费赛事报名管理系统为主，致力于为赛事提供更加简单吻用的个性化定制服务，满足组委会对报名信息的管理及推广需求，令学生能够能方便的寻找和参与优质竞赛，开拓眼界、提升能力。' },
          ],
        },
        {
          id: 2,
          title: '产品服务',
          content: [
            { subtitle: '竞赛',
              value: '竞赛云集了当前大学生全部的3万多项赛事，并划分成32个大类。包括 : ACM、数学建模、机器人、电子&自动化、计算机&信息技术、工程机械、交通车辆、土木建筑、航空航天、船舶海洋、分子、环境能源、商业、创业、挑战杯、创青春、职业技能、体育、环保公益、歌舞书画&摄影、演讲主持、数学、物理、化学化工、生命医学、社会综合、Ui设计、工业&创意设计、服装设计、模特。涵盖了高校学习生活的大多数领域。' },
            { subtitle: '活动',
              value: '竞赛云集了当前大学生全部的3万多项赛事，并划分成32个大类。包括 : ACM、数学建模、机器人、电子&自动化、计算机&信息技术、工程机械、交通车辆、土木建筑、航空航天、船舶海洋、分子、环境能源、商业、创业、挑战杯、创青春、职业技能、体育、环保公益、歌舞书画&摄影、演讲主持、数学、物理、化学化工、生命医学、社会综合、Ui设计、工业&创意设计、服装设计、模特。涵盖了高校学习生活的大多数领域。' },
            { subtitle: '免费的报名系统',
              value: '网站不仅是最全的赛事资讯、活动发布平台 ， 还具备强大的报名系统功能，注册用户可以免费发布比赛、活动，进而生成竞赛报名、活动主页。赛拇报名系统集官方主页搭建、竞赛报名、电子版材料上传于一体。参赛者随时随地都可自主在网上完成报名，主办方(即比赛创建者 ) 可以一键导出参赛者的所有报名信息。免费报名系统的诞生大大简化了竞赛主办方的组织工作，使得举办竞赛不再繁琐。' },
            { subtitle: '社区',
              value: '本网站在竞赛的深度运营中积累了大量的意见领袖，这些各个学科的牛人在相应领域里拥有众多粉丝。但是我们发现这些拥有丰富经验的竞赛专家缺少一个展示平台 ，而大多数参赛新手们也没有一个渠道来与这些学霸形成有效互动，从而提高竞赛技能，交流参赛经验。于是赛氢上线\'社区\'，围绕竞赛、活动打造高质量的垂直精英社区，以问答、文章的形式使高质量的内容得以沉淀，进而吸引更多高校用户 ,扩展称为高校学习社区第一品牌。' },
          ],
        },
      ],
    };
  },
  methods: {},
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
  margin: 40px 0;
}
/** 每行标题*/
.el-cols-title {
    text-align: center;
  font-size: 36px;
  font-weight: 900;
}
/** 每块文字的上下边距*/
.el-rows-margin {
  margin: 60px 0;
}
/**每个标题下的内容块文字和上间距 */
.el-cols-content {
  font-size: 26px;
  margin-top: 40px;
}
/** 产品服务下的副标题和内容块文字大小 */
.el-cols-content-font {
  font-size: 26px;
}
</style>
