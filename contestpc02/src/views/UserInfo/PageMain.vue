<!-- 绑定页面主页面，包含左侧菜单组件和右侧面板 -->
<template>
  <el-container class="el-container-all">
    <pageHead></pageHead>
    <el-container class="el-container-all .el-container-second-level">
      <el-aside>
        <div class="el-aside-imgbox">
          <img src="https://jingsai.qooroo.cn/resource/home/img/o01.png" />
        </div>
        <p class="el-aside-username">喵喵喵喵喵</p>
        <h4 class="el-aside-h4">账户管理</h4>
        <Menu></Menu>
      </el-aside>
      <el-main class="el-mains">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HomeHead from '../Header/homeHead';
import menu from './widgets/menu';

export default {
  name: 'UserInfoMain',
  components: {
    pageHead: HomeHead,
    Menu: menu,
  },
  data() {
    return {
      li_flag: -1,
      i_flag: -1,
      value: '',
    };
  },
  methods: {},
};
</script>

<style scoped>
/**全部拘束 */
.el-container-all {
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
}
.el-container-second-level {
  flex-direction: row;
}
/**侧边菜单区域块 */
.el-aside {
  width: 200px;
  margin-top: 20px;
  background-color: #f9fafc;
  margin-left: 160px;
}
/** 用户头像的样式设置 */
.el-aside-imgbox {
  width: 100px;
  height: 100px;
  border: 3px solid #d9dce1;
  border-radius: 50%;
  margin: auto;
  margin-top: 60px;
  overflow: hidden;
}
.el-aside-imgbox img {
  width:100%;
  height: 100%;
}
/**用户昵称的样式设置 */
.el-aside-username {
  font-size: 16px;
  text-align: center;
}
/**左侧菜单带下划线的目录小标题 */
.el-aside-h4 {
  margin: 50px 40px 10px 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dee2e6;
  font-size: 16px;
  font-weight: 900;
}

/**切换面板的区域 */
.el-mains {
  width: 860px;
  height: 1000px;
  margin-right: 140px;
}
</style>
