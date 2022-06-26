<template>
  <div>
    <el-menu
      :default-active="this.$router.path/band"
      router
      class="el-menu-vertical-demo"
      background-color="#f9fafc"
      text-color="#000"
      active-text-color="#fff"
    >

      <el-menu-item v-for='item in menuList' :key="item.id"
         :index=item.path @click="i_count++;i_flag = item.id">
        <span slot="title">{{item.label}}</span>
        <i :class="i_count % 2 == 1 && i_flag == item.id ? 'el-icon-arrow-down'
        : 'el-icon-arrow-right'"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i_count: 0,
      i_flag: 0,
      menuList: [
        { path: '/user/band', label: '账号绑定', id: 0 },
        { path: '/user/info', label: '个人消息', id: 1 },
        { path: '/user/certification', label: '实名认证', id: 2 },
        { path: '/user/message', label: '消息管理', id: 3 },
        { path: '/user/record', label: '参加记录', id: 4 },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style scoped>
.el-menu-vertical-demo {
  margin-left: 70px;
  border: 0;
}
.el-menu-item {
  height: 52px;
  line-height: 52px;
  padding-right: 10px;
  font-size: 16px;
}
.el-menu-item i {
  float: right;
  padding-top: 18px;
}
.el-menu-item:focus, .el-menu-item:hover {
    background-color: #44730b !important;
}
.el-menu-item.is-active {
  background: #44730b !important;
}
</style>
