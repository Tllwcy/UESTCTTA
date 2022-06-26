<!-- 页脚链接：意见反馈 -->
<template>
  <el-container
    class=".el-container-main"
    style="flex-direction: column;
    justify-content: center;"
  >
    <el-row class="el-rows-header" type="flex" align="middle" justify="space-between">
      <el-col class="el-col-marginleft">
        <el-page-header @back="goBack" content="帮助中心"> </el-page-header>
      </el-col>
    </el-row>
    <div class="el-rows-border"></div>
    <el-main class="el-mains-pageContent">
      <el-col class="el-cols">
        <el-collapse
          v-for="item in helpCollapseList"
          :key="item.id"
          v-model="activeNames"
          @change="handleChange"
        >
          <el-collapse-item :title="item.title" :name="item.aname">
            <div>
              答：
            </div>
            <div v-for="i in item.content" :key="i.id">{{ i }}</div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1'],
      helpCollapseList: [
        {
          aname: '1',
          title: '怎么注册组织者账号 ?',
          content: [
            "1.注册组织者帐号 ; 打开竞赛官网点击右上角的\"注册\"， 选择'组织方'进行注册。为竞赛组织方专门定制了幅通过审核的竞赛组织者享有创建、发布竞赛的特权，另外，赛氢在多年深度运营竞赛的基础上，开发了简单易用的报名管理系统 ，现免费提供给赛所用户使用。",
            "2.完善官方信息 : 填写注册信息后，点击右上角头像，选择进入'帐号设置'， 完善管理组织信息、帐号设置等。为了更好的突出竞赛组织的官方属性，需要按照规范填写真实信息、官方头像等，便于赛氢言方茧核您的资质、进而及时发布竞赛。",
            '3.创建竞赛 : 审核通过后，登录竞赛官网，点击头像进入 组织主页 就可以创建自己的竞赛啦。请规范填写基本信息、赛事详情，如有疑问请详询客服。',
          ],
        },
        {
          aname: '2',
          title: '怎样创建竞赛 ?',
          content: [
            '1.竞赛名称 : 请尽量与注册帐号名称保持一致 ;',
            "2.主办方、承办方 : 请按照级别来填写，如联合主办方过多，只需填写主要的主办方，其余可在 竞赛详情'里详述。",
            '3. 按照注册帐号级别来选择，如\'2016年全国大学生英语竞赛\'级别为"国家级`、“2016年全国大学生英语竞赛 - 北京大学研完生为\'校级\'。',
            '4. 建议使用官方宣传海报，推荐尺寸1242"439px ,目前赛握设计师团队也提供免费的定制化服务，如有需要可以联系工作人员。',
            '5. 报名时间 : 主要在竞赛列表中按照报名时间往选时使用，精确到年、月、日、时、 分、秒，请尽量接近实际报名时间。',
            '6. 竞赛时间 : 主要在竞赛列表中按照报名时间躲选时使用，精确到年、月、日、时、 分、秒，请尽量接近实际报名时间。了奖项设置 : 只需填写相关关键词，用于吸引参赛者。',
          ],
        },
        {
          aname: '3',
          title: '为什么有些竞赛的时间与竞赛详情里描述的不一致 ?',
          content: [
            "1.注册组织者帐号 ; 打开竞赛官网点击右上角的\"注册\"， 选择'组织方'进行注册。为竞赛组织方专门定制了幅通过审核的竞赛组织者享有创建、发布竞赛的特权，另外，赛氢在多年深度运营竞赛的基础上，开发了简单易用的报名管理系统 ，现免费提供给赛所用户使用。",
            "2.完善官方信息 : 填写注册信息后，点击右上角头像，选择进入'帐号设置'， 完善管理组织信息、帐号设置等。为了更好的突出竞赛组织的官方属性，需要按照规范填写真实信息、官方头像等，便于赛氢言方茧核您的资质、进而及时发布竞赛。",
            '3.创建竞赛 : 审核通过后，登录竞赛官网，点击头像进入 组织主页 就可以创建自己的竞赛啦。请规范填写基本信息、赛事详情，如有疑问请详询客服。',
          ],
        },
        {
          aname: '4',
          title: '我是学生，可以发布竞赛吗 ? ',
          content: [
            "1.注册组织者帐号 ; 打开竞赛官网点击右上角的\"注册\"， 选择'组织方'进行注册。为竞赛组织方专门定制了幅通过审核的竞赛组织者享有创建、发布竞赛的特权，另外，赛氢在多年深度运营竞赛的基础上，开发了简单易用的报名管理系统 ，现免费提供给赛所用户使用。",
            "2.完善官方信息 : 填写注册信息后，点击右上角头像，选择进入'帐号设置'， 完善管理组织信息、帐号设置等。为了更好的突出竞赛组织的官方属性，需要按照规范填写真实信息、官方头像等，便于赛氢言方茧核您的资质、进而及时发布竞赛。",
            '3.创建竞赛 : 审核通过后，登录竞赛官网，点击头像进入 组织主页 就可以创建自己的竞赛啦。请规范填写基本信息、赛事详情，如有疑问请详询客服。',
          ],
        },
        {
          aname: '5',
          title: '报名竞赛如何邀请队友 ?',
          content: [
            "1.注册组织者帐号 ; 打开竞赛官网点击右上角的\"注册\"， 选择'组织方'进行注册。为竞赛组织方专门定制了幅通过审核的竞赛组织者享有创建、发布竞赛的特权，另外，赛氢在多年深度运营竞赛的基础上，开发了简单易用的报名管理系统 ，现免费提供给赛所用户使用。",
            "2.完善官方信息 : 填写注册信息后，点击右上角头像，选择进入'帐号设置'， 完善管理组织信息、帐号设置等。为了更好的突出竞赛组织的官方属性，需要按照规范填写真实信息、官方头像等，便于赛氢言方茧核您的资质、进而及时发布竞赛。",
            '3.创建竞赛 : 审核通过后，登录竞赛官网，点击头像进入 组织主页 就可以创建自己的竞赛啦。请规范填写基本信息、赛事详情，如有疑问请详询客服。',
          ],
        },
      ],
    };
  },
  methods: {
    goBack() {
      console.log('go back');
    },
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
  // font-weight: 500;
  // font-weight: 600;
  font-size: 28px;
}
/deep/.el-page-header__content {
  font-size: 28px;
  font-weight: 600;
  color: #303133;
}
/**折叠面板样式 */
/**上下间距 */
/deep/.el-cols[data-v-08e8eef0] {
  padding: 20px 120px;
}
/**上下灰色线条删除 */
/deep/.el-collapse {
  border-top: none;
  border-bottom: none;
}
/** 问题头部字体颜色、大小、头部间距修改*/
/deep/.el-collapse-item__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 48px;
  line-height: 48px;
  background-color: #fff;
  color: #4b6c12;
  cursor: pointer;
  border-bottom: none;
  font-size: 26px;
  font-weight: 900;
  -webkit-transition: border-bottom-color 0.3s;
  transition: border-bottom-color 0.3s;
  outline: 0;
  margin-top: 20px;
}
/** 折叠面板回答区域背景色、字体大小设置*/
/deep/.el-collapse-item__content {
  padding: 5px 10px;
  font-size: 20px;
  color: #303133;
  line-height: 1.769230769230769;
  background: #f2f2f2;
}
/** 折叠面板回答每块问答区域下面那条线 删除设置 */
/deep/.el-collapse-item__wrap {
  will-change: height;
  background-color: #fff;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: none;
  margin-top: 14px;
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
}
</style>
