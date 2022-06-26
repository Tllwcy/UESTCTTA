<!-- 活动内容页面顶部导航 -->
<template>
  <el-header class="el-header-style">
    <el-row type="flex" align="middle" :gutter="20">
      <el-col :span="3">
        <img class="logo" src="https://jingsai.qooroo.cn/resource/home/img/logo.png" />
      </el-col>
      <el-col :span="12">
        <el-menu
          :default-active="this.$router.path"
          router
          mode="horizontal"
          background-color="#fff"
          text-color="#000"
          active-text-color="green"
          class="el-menu-style"
        >
          <el-menu-item
            v-for="item in pageMenu"
            :key="item.id"
            :index="item.path"
          >
            {{ item.label }}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="7" :push="2">
        <el-row type="flex" align="middle">
          <el-input
            placeholder="请输入内容"
            v-model="search"
            clearable
            class="el-input-position"
          ></el-input>
          <el-button
            class="el-button-position"
            icon="el-icon-search"
          ></el-button>
        </el-row>
      </el-col>
      <el-col :span="4" :push="1">
        <el-menu
          :default-active="this.$router.path"
          router
          mode="horizontal"
          background-color="#fff"
          text-color="#000"
          active-text-color="green"
          class="el-menu-style"
        >
          <el-menu-item
            v-for="item in loginMenu"
            :key="item.id"
            :index="item.path"
             class="el-menu-item-login"
             @click="getPanel(0)"
          >
            <span :class="item.id==0?'el-login-bordeRight' : 'el-login-bordeLeft'">
              {{ item.label }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: 'HomeHead',
  data() {
    return {
      which: 0,
      search: this.value,
      pageMenu: [
        { path: '#', label: '首页', id: 0 },
        { path: '/classify', label: '活动分类', id: 1 },
        { path: '/user/band', label: '个人信息', id: 2 },
      ],
      loginMenu: [
        { path: '/login', label: '登录', id: 0 },
        { path: '/login', label: '注册', id: 1 },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    getPanel(id) {
      if (id === 0) {
        this.router.push({ path: '/login', hash: '#team' });
      } else {
        this.router.push({ path: '/login', hash: '#re' });
      }
    },
  },
};
</script>

<!-- 自定义样式 -->
<style scoped>
/*logo图片 */
.el-header img {
  width: 160px;
  height: 60px;
}
/**导航栏样式 */
.el-menu--horizontal > .el-menu-item {
  color: #000;
  font-size: 14px;
}
.el-header-style {
  width: 100%;
  min-width: 1440px;
  height: 70px !important;
  border-bottom: 1px solid #58990a;
  overflow: hidden;
}
.el-menu-style {
  border: 0;
  border-bottom-color: #67c23a;
}
.el-menu-item-login {
  padding: 0;
}
/*搜索框*/
.el-input-position {
  position: relative;
}
.el-input >>> .el-input__inner {
  width: 80%;
  height: 38px;
  border: 3px solid #44730b;
  border-radius: 100px;
  color: #000;
}
/*搜索按钮*/
.el-button-position {
  position: relative;
  right: 120px;
  height: 38px;
}
.el-button {
  padding: 0 22px;
  border: 2px solid #44730b;
  border-radius: 100px;
  background-color: #44730b;
  color: #fff;
}
.el-button:hover {
  background-color: #518512;
}
.el-button >>> i {
  font-size: 18px;
}
/* 登录注册按钮样式 */
.el-login-bordeRight {
  border-right: 1px solid #c2c2c2;
  padding: 0 10px;
  font-size: 14px;
}
.el-login-bordeLeft {
  border-left: 1px solid #c2c2c2;
  padding: 0 10px 0 10px;
  font-size: 14px;
}
</style>
