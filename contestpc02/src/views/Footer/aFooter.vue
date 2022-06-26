<!-- 页面页脚 -->
<template>
  <el-footer height="100%" class="el-footers">
    <el-row type="flex" align="middle" justify="space-between">
      <el-row>
        <el-row gutter="20" class="footer-link nodefault-a">
          <span v-for="item in FooterOhterLinkList" :key="item.id"
          ><router-link :to="item.path">{{item.title}}</router-link></span>
        </el-row>
        <el-row gutter="20" class="footer-link nodefault-a">
          <span>Cospanyright © 2013-2022 runoob.com</span>
          <span>闽ICspan备15012807号-11</span>
          <span>京公网备 1001010001010号</span>
        </el-row>
      </el-row>

      <el-row gutter="20" class="el-footer-img"
        type="flex" align="middle">
        <el-col>
          <img
            width="50px"
            height="50px"
            src="https://jingsai.qooroo.cn/resource/home/img/24-hourService.png"
            alt="https://jingsai.qooroo.cn/resource/home/img/nopicture.png"
            class="img-footer"
          />
        </el-col>
        <el-col class="el-footer-phone">
          <p>参赛热线</p>
          <p>400-888-1688</p>
        </el-col>
        <el-col class="el-footer-code">
          <p>二维码</p>
          <img
            src="https://jingsai.qooroo.cn/resource/home/img/scan.png"
            alt="https://jingsai.qooroo.cn/resource/home/img/nopicture.png"
            width="54px"
            height="54px"
            class="img-footer"
          />
        </el-col>
      </el-row>
    </el-row>
    <el-row class="footer-link-three nodefault-a">
      <span>友情链接:</span>
      <span v-for="item in FriendLinkList" :key="item.id"
      ><router-link :to="{ path: item.path }">{{ item.title }}</router-link></span>
    </el-row>
  </el-footer>
</template>

<script>
export default {
  name: 'afooter',
  data() {
    return {
      FooterOhterLinkList: [
        { title: '网站地图', path: '/#' },
        { title: '企业服务', path: '/#' },
        { title: '关于我们', path: '/about' },
        { title: '联系我们', path: '/contact' },
        { title: '讲师招募', path: '/#' },
        { title: '帮助中心', path: '/help' },
        { title: '意见反馈', path: '/suggestion' },
        { title: '慕客大学', path: '/#' },
      ],
      FriendLinkList: [
        { title: '帮考网', path: '/#' },
        { title: '考验网', path: '/#' },
        { title: '慕课教程', path: '/#' },
        { title: '懂视', path: '/#' },
        { title: '听力课堂', path: '/#' },
        { title: '高帧教育', path: '/#' },
        { title: '可可英语', path: '/#' },
        { title: 'W3Cschool', path: '/#' },
        { title: '会计学院', path: '/#' },
        { title: 'PHP 培训', path: '/#' },
        { title: '中博教育', path: '/#' },
        { title: '西部数码', path: '/#' },
      ],
    };
  },
};
</script>
<style scoped>
/**页脚的背景色 */
.el-footers {
  background: grey;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
/* 参赛热线宽度设置 */
.el-footer-phone p {
  width: 120px;
}
/**页脚三行文字的间距 */
.footer-link {
  padding: 10px;
}
/** 页脚文字链接 */
.footer-link span {
  padding: 0 20px;
  font-size: 14px;
}
/** 页脚文字链接 */
.footer-link-three {
   padding: 10px;
}
/** 页脚第三行文字链接 */
.footer-link-three span {
  padding: 0 12px;
  font-size: 14px;
}
/**标签a链接 */
.nodefault-a a {
  color: black;
  text-decoration: none;
}
/**二维码居中 */
.el-footer-code p{
  margin-bottom: 4px;
  text-align: center;
}
</style>
