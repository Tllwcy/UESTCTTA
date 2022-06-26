<!-- 组件切换：注册账号 -->
<template>
  <el-container class="register">
    <el-input placeholder="昵称" v-model="username" clearable></el-input>
    <el-input
      placeholder="请输入密码"
      v-model="userpassword"
      show-password
    ></el-input>
    <span class="register-point" v-if="isErr === 0">
      <i class="el-icon-info"></i>不能包括空格
    </span>
    <span class="register-point" v-if="isErr === 0">
      <i class="el-icon-info"></i>长度为8-16的字符
    </span>
    <span class="register-pop-red" v-if="isErr === 1"
      ><i class="el-icon-info"></i>密码不能为空</span
    >
    <el-input placeholder="手机号" v-model="phone" clearable></el-input>
    <span class="register-pop-red" v-if="isErr === 1"
      ><i class="el-icon-info"></i>请填写正确的手机号</span
    >
    <div class="register-code">
      <el-input
        placeholder="短信验证码"
        v-model="code"
        class="register-code-input"
      ></el-input>
      <el-button class="register-code-btn">验证码</el-button>
    </div>
    <el-button class="register-btn">立刻注册</el-button>
    <div class="register-pop-success" v-if="isloginIn === 0">
      <i class="el-icon-success"></i>
      <span>注册成功</span>
      <el-button>确定</el-button>
    </div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      userpassword: '',
      phone: '',
      code: '',
      isErr: 0,
      isloginIn: 0,
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style scoped>
/*注册框样式 */
.register {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 0;
}
/*输入框样式 */
.register .el-input {
  margin: 6px 24px;
}
.el-input >>> .el-input__inner {
  border: 1px solid #44730b !important;
  border-radius: 0;
  color: #000;
}
/*规则文字提示样式设置 */
.register-point {
  display: block;
  width: 150px;
  margin-right: 90px;
  font-size: 14px;
}
/*规则文字提示图标 */
.register-point i {
  padding-right: 5px;
  color: #a5c5f6;
}
/* 错误提示样式*/
.register-pop-red {
  display: block;
  width: 150px;
  margin-right: 90px;
  font-size: 14px;
  color: red;
}
/*错误提示图标 */
.register-pop-red i {
  padding-right: 5px;
}
/*短信验证码 */
.register-code {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
}
/**输入框 */
.register-code-input {
  width: 160px !important;
  margin-right: 10px !important;
}
/**验证码按钮 - 发送验证码 */
.register-code-btn {
  padding: 12px 20px !important;
  border-radius: 5px;
}

/*注册按钮 */
.register .el-button{
  padding: 12px 100px;
  margin: 8px auto;
  font-size: 16px;
  background-color: #44730b;
  color: #fff;
}

/*注册成功弹窗样式*/
.register-pop-success {
    position: relative;
    bottom:260px;
    width: 200px;
    padding: 20px 0;
    border: 1px solid rgb(143, 143, 143);
    border-radius: 10px;
    background-color: #fff;
    text-align: center;
}
.register-pop-success i {
  font-size: 40px;
  color: #44730b;
}
.register-pop-success span {
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
}
.register-pop-success .el-button {
    width: 150px;
    padding: 12px;
    margin: 10px 0;
    border-radius: 5px;
    font-size: 14px;
}
</style>
