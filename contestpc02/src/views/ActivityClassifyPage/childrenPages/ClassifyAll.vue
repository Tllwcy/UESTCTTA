<!-- 【组件】活动分类页面：全部 -->
<template>
  <el-row>
    <h1>分类活动</h1>
    <el-row type="flex" align="middle" justify="center" >
      <el-col class="choice-nav" v-for="item in classifyList" :key="item.id">
        <img :src="item.img" alt="#" />
        <el-row class="title-choice">{{item.label}}</el-row>
        <el-row class="subhead-choice">{{item.subhead}}</el-row>
      </el-col>
    </el-row>
    <el-row class="contents">
      <h1>举办地区</h1>
      <el-row
        v-for="item in placeList"
        :key="item.id"
        class="root-content"
        ref="rootContent"
        :gutter="42"
      >
        <el-col :span="14">
          <img src="https://jingsai.qooroo.cn/resource/home/pic/1200.jpg" /></el-col>
        <el-col
        class="div-content">
          <el-row class="title-p">{{ item.title }}</el-row>
          <br/><br/><br/>
          <el-row>{{ item.subhead }}</el-row>
          <br/><br/>
          <el-row>{{ item.palce }}</el-row>
          <el-row>{{ item.adress }}</el-row>
        </el-col>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'ContentAll',
  data() {
    return {
      classifyList: [
        { img: 'https://jingsai.qooroo.cn/resource/home/icon/icon-contest.png', label: '比赛', subhead: '企业投票工具' },
        { img: 'https://jingsai.qooroo.cn/resource/home/icon/icon-answer.png', label: '答题', subhead: '企业答题工具' },
        { img: 'https://jingsai.qooroo.cn/resource/home/icon/icon-taste.png', label: '体验', subhead: '企业用户体验' },
      ],
      placeList: [
        {
          pic: '1200.jpg',
          title: '初赛广州分赛区',
          subhead:
            '世界互联网峰会@ - 苏州站将于2017年3月18日——19日，在苏州举行。',
          palce: '独墅湖公共学院报告厅',
          adress:
            '地址：苏州工业园区独墅湖高等教育区林泉街337号（独墅湖永安桥派出所对面）',
        },
        {
          pic: '1200.jpg',
          title: '初赛广州分赛区',
          subhead:
            '世界互联网峰会@ - 苏州站将于2017年3月18日——19日，在苏州举行。',
          palce: '独墅湖公共学院报告厅',
          adress:
            '地址：苏州工业园区独墅湖高等教育区林泉街337号（独墅湖永安桥派出所对面）',
        },
        {
          pic: '1200.jpg',
          title: '初赛广州分赛区',
          subhead:
            '世界互联网峰会@ - 苏州站将于2017年3月18日——19日，在苏州举行。',
          palce: '独墅湖公共学院报告厅',
          adress:
            '地址：苏州工业园区独墅湖高等教育区林泉街337号（独墅湖永安桥派出所对面）',
        },
      ],
    };
  },
};
</script>
<style scoped>
/*小标题 */
h1 {
  color: green;
  text-align: center;
  margin:20px 0;
  font-size: 20px;
}
/*导航块 */
.choice-nav {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  padding: 18px 8px;
  border: 1px solid grey;
}
/*导航块-图片图标 */
.choice-nav img{
  width: 50px;
  height: 50px;
}
/*导航标题 黑字 */
.title-choice {
  color: black;
  margin: 10px 0;
  font-size: 12px;
}
/*导航说明 灰字 */
.subhead-choice {
  color: lightgrey;
  margin: 0;
  font-size: 14px;
}
/*下面的块 上间距 */
.contents {
  margin-top: 20px;
}
/*一行 */
.root-content {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  border-bottom: 1px solid #000;
}
.root-content img {
  width: 100%;
  height: 200px;
  border-radius: 25px;
  margin: 20px 0 30px 0;
}
/**文字块 */
.div-content {
  font-size: 13px;
}
/**标题 */
.title-p {
  font-size: 14px;
}
</style>
