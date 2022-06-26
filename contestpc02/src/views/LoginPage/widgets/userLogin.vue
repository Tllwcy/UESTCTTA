<!-- 组件切换：登录账号 -->
<template>
  <el-container class="main-rightbox-login">
    <el-input
      placeholder="请输入用户名"
      v-model="username"
      clearable
    ></el-input>
    <el-input
      placeholder="请输入密码"
      v-model="userpassword"
      show-password
    ></el-input>
    <el-checkbox v-model="checked">下次自动登陆</el-checkbox>
    <el-button>登录</el-button>
    <div><i class="el-icon-chat-round"></i>企业微信登录</div>
    <div class="main-rightbox-login-success" v-if="isloginIn === 0">
      <i class="el-icon-success"></i>
      <span>登录成功</span>
      <el-button>确定</el-button>
    </div>
    <p class="main-rightbox-login-lose" v-if="isloginIn === 1">你的账号或者密码输入不正确,请重试</p>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      userpassword: '',
      checked: false,
      isloginIn: 0,
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style scoped>
/* 登录框样式 */
.main-rightbox-login {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 40px 0;
}
.main-rightbox-login .el-input {
    margin: 12px 24px;
}
.el-input >>> .el-input__inner {
    height: 38px;
    border:1px solid #44730b!important;
    border-radius: 0;
    font-size: 14px;
}
/* 选择框样式 */
.main-rightbox-login .el-checkbox {
    margin-right: 140px;
    color: #000;
}
/* 登录按钮样式 */
.main-rightbox-login .el-button {
    width: 260px;
    margin: 20px 24px;
    color: #fff;
    background-color: #44730b;
    font-size: 14px;
}
/* 企业微信登录样式 */
.main-rightbox-login a {
    display: block;
    margin: 20px 0;
    font-size: 14px;
    cursor: pointer;
}
.main-rightbox-login a i {
  padding-right: 8px;
}
/* 登录成功弹窗样式 */
.main-rightbox-login-success {
    position: relative;
    bottom:260px;
    width: 200px;
    padding: 20px 0;
    border: 1px solid rgb(143, 143, 143);
    border-radius: 10px;
    background-color: #fff;
    text-align: center;
}
.main-rightbox-login-success i {
    color: #44730b;
    font-size: 40px;
}
.main-rightbox-login-success span {
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
}
.main-rightbox-login-success .el-button {
    width: 150px;
    padding: 12px;
    margin: 20px;
    border-radius: 5px;
    font-size: 14px;
}
/* 登陆失败弹窗样式 */
.main-rightbox-login-lose {
    position: absolute;
    top: 50px;
    left: 24px;
    color: red;
    font-size: 13px;
}
</style>
