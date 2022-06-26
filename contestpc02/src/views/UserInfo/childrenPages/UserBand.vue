<!-- 子页面：账号绑定 -->
<template>
  <el-container class="el-containers">
    <el-header>
      <el-row type="flex" justify="space-between">
        <el-col>
          <h1 class="el-col-h1">账号绑定</h1>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="el-container-main" v-for="item in UserBandRowList" :key="item.id">
      <el-row type="flex" align="middle" justify="center" :gutter="20">
        <el-col :span="8" :push="1">
          <i :class="item.icon" class="el-row1-icon-i"></i>
        </el-col>
        <el-col :span="24">
          <el-row>
            <span class="el-row1-text-title">{{ item.title }}</span>
          </el-row>
          <el-row>
            <span
              class='el-row1-text-subhead'
              >{{ item.subhead }}</span
            >
          </el-row>
        </el-col>
        <el-col>
          <el-button v-if="item.btntext != ''" class="el-greenbtn-color el-greenbtn-style">
            {{ item.btntext }}</el-button>
        </el-col>
      </el-row>
      <el-row v-if="item.id === 2"
       type="flex" class="el-row2-margin" justify="space-between" >
        <el-row v-for="i in item.appList" :key="i.id"
            type="flex" align="middle">
          <el-col>
            <div :class="
            i.state == 0 ? 'el-row2-icon-bg el-icon-bg-unactive'
                         : i.id == 'wechat' ? 'el-row2-icon-bg el-icon-bg-wechat'
                                :i.id == 'qq' ? 'el-row2-icon-bg el-icon-bg-qq'
                                                : 'el-row2-icon-bg el-icon-bg-weibo' " >
              <span class="el-row2-icon-style" :class="i.icon"></span>
            </div>
          </el-col>
          <el-col>
            <el-row>
              <el-col>
                  <span class="el-row2-text-title">{{ i.aname }}</span>
              </el-col>
              <el-col>
                  <span :class="i.state == 0?'el-row2-subhead-unacitve':'el-row2-subhead-acitve'">
                  {{ i.state == 0?'未绑定':'已绑定' }}</span></el-col>
              <el-col><el-button class="el-row2-greybtn">添加绑定</el-button></el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'UserBand',
  data() {
    return {
      UserBandRowList: [
        {
          icon: 'el-icon-message',
          title: '邮箱',
          subhead: '可用邮箱加密登录',
          btntext: '立即绑定',
          id: 0,
        },
        {
          icon: 'el-icon-mobile',
          title: '手机',
          subhead: '可用手机号加密登录',
          btntext: '立即验证',
          id: 1,
        },
        {
          icon: 'el-icon-chat-dot-square',
          title: '社交账号',
          subhead:
            '绑定第三方账号，可直接登录，还可以将内容同步到以下平台，与更多好友分享',
          btntext: '',
          id: 2,
          appList: [
            { icon: 'el-row2-icon-wechat', aname: '微信', state: 1, id: 'wechat' },
            { icon: 'el-row2-icon-qq', aname: 'QQ', state: 0, id: 'qq' },
            { icon: 'el-row2-icon-weibo', aname: '微博', state: 1, id: 'weibo' },
          ],
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style scoped src="@/assets/css/userinfoPage/childrenPageStyle.css"/>

<style scoped>
/*绑定页面竖向排列的三个绑定类型样式 */
/* - 文字粗细大小 */
.el-row1-text-title {
  font-size: 16px;
  font-weight: 900;
}
.el-row1-text-subhead {
  /* display: block; */
  /* width: 600px; */
  padding-top: 5px;
  font-size: 14px;
  color: #a5a9af;
}

/* - 按钮样式 */
.el-greenbtn-style {
  padding: 16px 30px;
  border-radius: 60px;
}
.el-greenbtn:hover {
  background-color: #44730b;
  color: #fff;
}
/* - 图标*/
.el-row1-icon-i {
  color: #d9dee2;
  font-size: 50px;
}
/*绑定页面横向排列的三个社交平台账号样式 */
.el-row2-margin {
  margin: 80px 20px;
}
/* - 图标*/
/* - 图标背景块样式 */
.el-row2-icon-bg {
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 120px;
}
/* - 四种图标背景色切换 */
.el-icon-bg-unactive {
  background: #c8cdd3;
}
.el-icon-bg-qq {
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 120px;
  background: skyblue;
}
.el-icon-bg-wechat {
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 120px;
  background: lightgreen;
}
.el-icon-bg-weibo {
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 120px;
  background: red;
}
/* - 图片样式 */
.el-row2-icon-style {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
/* - 四种图标图片切换 */
.el-row2-icon-wechat {
  background-image: url("https://jingsai.qooroo.cn/resource/home/icon/wechat.png");
}
.el-row2-icon-qq {
  background-image: url("https://jingsai.qooroo.cn/resource/home/icon/qq.png");
}
.el-row2-icon-weibo {
  background-image: url("https://jingsai.qooroo.cn/resource/home/icon/weibo.png");
}
/* - 文字粗细大小 */
.el-row2-text-title {
    font-size: 15px;
    font-weight: 900;
}
.el-row2-subhead-acitve {
    font-size: 12px;
    color: green;
}
.el-row2-subhead-unacitve {
    font-size: 12px;
    color: red;
}
/* - 按钮样式 */
.el-row2-greybtn {
    padding: 8px;
    margin-top: 5px;
    font-size: 12px;
}
</style>
