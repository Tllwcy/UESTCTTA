<!-- 【组件】活动分类页面：投票 -->
<template>
  <el-main class="el-flex">
    <el-container class="el-cols-big-width" v-for="value in object" :key="value">
        <img class="el-img" :src="value.img"/>
      <el-row class="el-rows">
        <el-clo class="el-rows-text" >
        <span>作者：{{ value.author }}</span></el-clo>
        <el-clo class="el-rows-text" >
        <span>时间：{{ value.time }}</span></el-clo>
      </el-row>
      <el-row class="el-rows">
        <el-col class="el-rows-text">
          <span class="el-rows-text-padding-r">{{ value.good }} 赞</span></el-col>
        <el-col class="el-rows-text">
          <span class="el-rows-text-padding-l">{{ value.ticket }} 票</span></el-col>
      </el-row>
      <el-row class="el-rows">
        <el-col :pull="3" class="el-rows-icon">
          <img @click="popup('点赞')" src="https://jingsai.qooroo.cn/resource/home/icon/icon-good.png"/></el-col>
        <el-col :push="3" class="el-rows-icon">
          <img @click="popup('投票')" src="https://jingsai.qooroo.cn/resource/home/icon/icon-ticket.png"/></el-col>
      </el-row>
    </el-container>
  </el-main>
</template>

<script>
export default {
  name: 'ContentTicket',
  data() {
    return {
      object: [
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/536.png', author: '张三', time: '2022-4-1', good: '1800', ticket: '1800' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/536.png', author: '张三', time: '2022-4-1', good: '1800', ticket: '1800' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/536.png', author: '张三', time: '2022-4-1', good: '1800', ticket: '1800' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/536.png', author: '张三', time: '2022-4-1', good: '1800', ticket: '1800' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/536.png', author: '张三', time: '2022-4-1', good: '1800', ticket: '1800' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/536.png', author: '张三', time: '2022-4-1', good: '1800', ticket: '1800' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/536.png', author: '张三', time: '2022-4-1', good: '1800', ticket: '1800' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/536.png', author: '张三', time: '2022-4-1', good: '1800', ticket: '1800' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/536.png', author: '张三', time: '2022-4-1', good: '1800', ticket: '1800' },
      ],
    };
  },
  methods: {
    popup(text) {
      this.$alert(`${text}成功！`, '消息提示', {
        confimButtonText: '确定',
      });
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.el-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 0;
    align-items: center;
}
</style>

<style scoped>
.el-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 100px;
  overflow: hidden;
}
.el-cols-big-width {
    flex: 0 0 33.33333%;
    margin: 20px 0;
}
/**点赞内容块展示的图片宽度 */
.el-img{
   width: 240px;
}
/**点赞内容块的设置 */
.el-rows {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
/**点赞内容块的文字设置 */
.el-rows-text {
  font-size: 14px;
  padding-top: 3px;
}
.el-rows-text-padding-r {
  padding-right: 10px;
}
.el-rows-text-padding-l {
  padding-left: 10px;
}
/**点赞内容块的图标大小设置 外框和图片 */
.el-rows-icon {
  width: 20px;
  height: 18px;
}
.el-rows-icon img {
  width: 100%;
  height: 100%;
}
</style>

