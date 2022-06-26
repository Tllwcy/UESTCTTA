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
            >体验</el-breadcrumb-item
          >
        </el-breadcrumb>
        <el-mian class="el-infoContent">
          <el-row class="el-info-top" type="flex" justify="space-between">
            <img src="https://jingsai.qooroo.cn/resource/home/pic/w014.png" />
            <div class="el-info-topleft">
              <p>尤克里里体验课</p>
              <el-container class="el-info-top-container">
                <span>开始时间:2022年02月18日~2022年06月08日</span>
                <div class="container-div">
                  <span>价格 <span class="div-price">￥0.0</span></span>
                  <span>200人参加</span>
                </div>
              </el-container>
              <el-button class="el-info-top-btn">立即参加</el-button>
            </div>
          </el-row>
          <el-row class="el-info-content-bg" type="flex">
            <el-row class="el-info-content-text">
              <p class="el-info-content-title">活动详情</p>
              <div></div>
              <p
                >应对新型冠状病毒肺炎造成的全国高校延期开课，爱课程中国大学1V100^紧急启动应急支援，为全国因疫情推迟开学的高校提供
                免费的课程资源、平台服务。同时在24小时内迅速召集了一批国内教育学、心理学以及其他各学科专家启动系列直播，为全国高
                校教师及学习者提供关于教和学的全方位方法指导。</p
              >
              <p class="el-info-content-title">概述</p>
              <p
                >课程由24位来自国内高校的教育学、心理学、中医学以及各学科的专家，分别从生态保护与身心健康、教育与学习理论方法、混合教学
                模式及实践、在线开放课程建设等方面，全方位为广大高校的学习者提供最有营养的指导，"停课不停学"，帮助大家快速充电，提升学
                习与教学能力，全面保障身心健康，度过一个充实的假期。
                课程大纲中，星标内容，推荐高校在校生及其他学习者学习；其余内容，推荐高校教师学习。</p
              >
              <p class="el-info-content-title">參考</p>
              <p>
                01 积极应对疫情 课时 叮.1疫期心理调适（田媛）<br>
                02以礼怡情，安度疫期，冲刺未来（何婷）<br>
                03从传染病看环境保护、生态毒理与人体健康（张勇、何国富、张颖）<br>
                04理性与积极：情绪管理（叶映华）<br>
                05乐观是最好的“免疫力”（张晓文）<br>
                06中医指导下的疫期隔离防护与养生保健（王长松） 02 在线课程开发<br>
                课时 2.1 在线开放课程的设计与开发（黄明睿） 2.2<br>
                慕课视频及说课视频的设计与制作（曹敏惠） 2.3<br>
                在线课程讨论区话题设计（梁林梅） 03 教学理论方法 课时 3.1<br>
                混合式课程设计的原理与实践（李笃峰）<br>
                *3.2让在线学习更有效的五个基本原则（嵩天） ・<br>
                3.3如何成为优秀的在线学习者（杜玉震） 04 混合式教学模式篇 课时<br>
                4.1 线上线下混合式教学中应关注的几个问题（吴宁） 4.2<br>
                线上为经，线下为纬一^非常时期利用在线课程开展教学的新模式（王震亚）<br>
                4.3 手把手带你玩转新形态学习模式（赵洱亲） 4.4<br>
                线上学习与直播答疑的教学模式（尹逊波）</p
              >
            </el-row>
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
/** 课程介绍头部 */
.el-info-top {
  width:100%;
  padding-bottom: 40px;
}
.el-info-topleft {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-left: 20px;
  font-size: 16px;
}
/** 课程标题 */
.el-info-top p {
  margin: 0;
  padding: 10px 10px 20px 10px;
  font-size: 26px;
  color: #4f6f2b;
}
/** 课程图片左边内容块 */
.el-info-top-container {
  width: 100%;
  padding: 12px 18px;
  background: #f2f2f2;
  border-radius: 5px;
  font-size: 17px;
}
/** 课程图片左边文字信息介绍 */
.container-div {
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
}
/**价格大小字号 */
.div-price {
  padding-left: 10px;
  font-size: 20px;
  font-weight: 400;
}
/** 课程按钮 */
.el-info-top-btn {
    margin-top: 20px;
    padding: 16px 48px;
    background-color: #4f6f2b;
    color: white;
    border: 1px solid #4f6f2b;
    border-radius: 100px;
}
/** 课程详情块-背景布局*/
.el-info-content-bg {
  flex-direction: column;
  background: #f2f2f2;
}
/** 课程详情块-文字 */
.el-info-content-text {
  margin: 40px 10%;
  padding: 0 2%;
  background: #fff;
  font-size: 20px;
  line-height: 38px;
}
/** 课程详情块-小标题 */
.el-info-content-title {
  font-size: 22px;
  color:#4f6f2b;
}
</style>
