<!-- 登录注册页面 -->
<template>
    <div>
        <pageHead></pageHead>
        <div class="main">
            <img src="https://jingsai.qooroo.cn/resource/home/img/background.png">
            <div class="main-rightbox">
                <div class="top-rightbox">
                    <el-button @click="isLogin++;">登录账号<template></template></el-button>
                    <el-button @click="isLogin++;">注册账号</el-button>
                </div>
                <hr>
                <component :is="isLogin%2 == 1? 'userLogin' : 'userRegister'">
                </component>
            </div>
        </div>
    </div>
</template>

<script>
import LoginHead from '../Header/loginHead';
import userLogin from '../LoginPage/widgets/userLogin';
import userRegister from '../LoginPage/widgets/userRegister';

export default {
  name: 'PCLogin',
  components: {
    pageHead: LoginHead,
    userLogin,
    userRegister,
  },
  data() {
    return {
      username: '',
      userpassword: '',
      checked: false,
      isLogin: 0,
      isLogins: this.$route.params.which,
    };
  },
  template: '<div>Details {{ $route.hash.slice(1) }} </div>',
  created() { },
  computed: {
  },
  methods: {
    getPanel() {
    },
  },
};
</script>

<style scoped>
.main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 1440px;
    overflow: hidden;
}
.main img {
    margin: 60px 280px;
}
.main-rightbox {
    position: relative;
    width: 300px;
    height: 380px;
    border-radius: 20px;
    border: 1px solid #44730b;
    margin:0 120px;
}
.top-rightbox {
    display: flex;
    justify-content: space-around;
    padding: 2px 0;
}
/* 登录注册按钮样式 */
.el-button {
    border: 1px solid white;
    background: none;
    font-size: 14px;
}
.el-button:focus, .el-button:hover {
    color: #000;
    font-weight: 600;
}
hr {
  border-top: 1px solid #44730b;
    margin: 0;
}

</style>
