<!-- 活动详情页面 -->
<template>
  <el-container>
    <pageHead></pageHead>
    <el-main class="pagecontent">
      <el-carousel :interval="3000" height="400px" arrow="always">
        <el-carousel-item v-for="item in imgList" :key="item">
          <img class="pagecontent-img" :src="item.src" />
        </el-carousel-item>
      </el-carousel>
      <p class="title">第十二届广东省科普作品创作大赛</p>

      <div class="container" v-for="item in TextList" :key="item.id">
        <p>{{ item.name }}</p>
        <span v-if="item.name === '活动意义'">{{ item.contents }}</span>
        <span v-if="item.name === '活动时间'">{{ item.contents }}</span>
        <span v-if="item.name === '活动要求'">
          <span>{{ item.contents[0] }}</span
          ><br /><br />
          <span>{{ item.contents[1] }}</span
          ><br /><br />
          <span>{{ item.contents[2] }}</span
          ><br /><br />
          <span>{{ item.contents[3] }}</span
          ><br /><br />
          <span>{{ item.contents[4] }}</span
          ><br /><br />
        </span>
        <span v-if="item.name === '活动奖励'">
          <span>{{ item.contents[0] }}</span
          ><br /><br />
          <span>{{ item.contents[1] }}</span
          ><br /><br />
          <span>{{ item.contents[2] }}</span
          ><br /><br />
          <span>{{ item.contents[3] }}</span
          ><br /><br />
        </span>
        <div class="scan-container" v-if="item.name === '活动二维码'">
          <img class="img_scan" src="https://jingsai.qooroo.cn/resource/home/img/scan.png" alt="" />
          <span>{{ item.contents[1] }}</span>
        </div>
        <div class="sponsor-container" v-if="item.name === '赞助商'">
          <img
            class="img_sponsor"
            src="https://jingsai.qooroo.cn/resource/home/img/img-sponsor-yidong.png"
            alt=""
          />
          <img
            class="img_sponsor"
            src="https://jingsai.qooroo.cn/resource/home/img/img-sponsor-yidong.png"
            alt=""
          />
          <img
            class="img_sponsor"
            src="https://jingsai.qooroo.cn/resource/home/img/img-sponsor-yidong.png"
            alt=""
          />
          <img
            class="img_sponsor"
            src="https://jingsai.qooroo.cn/resource/home/img/img-sponsor-yidong.png"
            alt=""
          />
          <img
            class="img_sponsor"
            src="https://jingsai.qooroo.cn/resource/home/img/img-sponsor-yidong.png"
            alt=""
          />
          <img
            class="img_sponsor"
            src="https://jingsai.qooroo.cn/resource/home/img/img-sponsor-yidong.png"
            alt=""
          />
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import HomeHead from '../Header/homeHead';

export default {
  name: 'ActivityDetailed',
  data() {
    return {
      imgList: [
        { src: 'https://jingsai.qooroo.cn/resource/home/img/banner.png' },
        { src: 'https://jingsai.qooroo.cn/resource/home/img/banner.png' },
        { src: 'https://jingsai.qooroo.cn/resource/home/img/banner.png' },
      ],
      TextList: [
        {
          name: '活动意义',
          contents:
            '旨在深入贯彻党的十九大精神，围绕“弘扬科学精神，普及科学知识，开展移风易俗，弘扬时代新风行动，抵制腐朽落后文化侵蚀”的要求，通过多种科普作品创作表现形式，宣传习近平新时代中国特色社会主义思想，大力传播科学发展理念、价值和方法，提升公众科学文化素质。',
        },
        { name: '活动时间', contents: '2019年2月至2019年3月' },
        {
          name: '活动要求',
          contents: [
            '1.作品规格统一为A1尺寸(594mm×841mm)，以A1尺寸的jpg图片形式，RGB颜色模式，请务必保证图片内文字的可辨识度，可分多图提交，每张图片大小控制在5M以内。同时，在报名表内容简介部分填写参赛作品设计说明包括：设计理念、设计目的、定位等；',
            '2.参赛者应保留高精度的设计原图(如AI、CDR、PSD、犀牛等)，以便获奖后提交给大赛组委会保存；',
            '3.所有参赛者必须是参赛作品的合法拥有者，具有自主版权，合法使用图片资料等素材，并承担相应的法律责任；',
            '4.严禁抄袭、舞弊行为，如有发现，立即取消参赛资格；',
            '5.为坚持公平公正公开原则，设计稿中禁止出现任何可识别参赛者身份的信息；\n',
          ],
        },
        {
          name: '活动奖励',
          contents: [
            '一等奖10名：奖金2000元人民币并颁发证书；',
            '二等奖15名：奖金1200元人民币并颁发证书；',
            '三等奖25名：奖金800元人民币并颁发证书；',
            '优秀奖100名：颁发证书',
          ],
        },
        { name: '活动二维码', contents: ['@/assets/img/scan.png', '扫码报名'] },
        { name: '赞助商', contents: ['list[0]'] },
      ],
    };
  },

  components: {
    pageHead: HomeHead,
  },
};
</script>

<style lang="less" scoped>
/** el-main布局调整 */
/deep/.el-card__body,
.el-main {
  padding: 0;
  margin: 0 auto;
  width: 1200px;
}
/** ? */
/deep/.el-carousel {
    position: relative;
    margin-top: 20px;
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

/**轮播图 = 走马灯 | 样式 */
/**轮播图片 */
.pagecontent-img {
  width: 100%;
  height: 100%;
}

/** 标题样式 */
.title {
  margin: 60px auto;
  color: green;
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 900;
}
/**每一块的上下间距 */
.container {
  margin: 60px 40px;
}
/***每一块里面的标题文字容器p*/
.container p {
  font-size: 20px;
  font-weight: 900;
}
/*** 每一块里面的内容文字容器span*/
.container span {
  font-size: 16px;
}
/**扫码报名 */
.scan-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
/** 文字 */
.scan-container > span {
  display: block;
  padding-left: 18px;
}
/**图片 */
.img_scan {
  width: 100px;
  height: 100px;
}
/** 赞助商 */
.sponsor-container {
  display: flex;
  width: 400px;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-evenly;
}

.img_sponsor {
  width: 100px;
  margin: 10px;
  box-shadow: 2px 2px 5px #dcdfe6;
}
</style>
