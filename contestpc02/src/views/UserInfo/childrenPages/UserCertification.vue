<!-- 实名认证 -->
<template>
  <el-container class="el-containers">
    <el-header class="el-header">
      <el-row type="flex" direction="vertical">
        <el-col><h1 class="el-col-h1">实名认证</h1></el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row type="flex" class="certification">
        <el-col class="certification-btn" v-if="!pass">
          <el-button
            type="success"
            @click="dialogFormVisible = true"
            class="certification-btn-success"
            >开始认证</el-button
          >
          <el-dialog
            title="认证"
            :visible.sync="dialogFormVisible"
            custom-class="certification-dialog"
          >
            <el-form :model="form">
              <el-form-item label="真实姓名:" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="身份证号:" :label-width="formLabelWidth">
                <el-input v-model="form.idcard" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <el-row slot="footer" class="dialog-footer">
              <el-button round @click="dialogFormVisible = false"
                >取 消</el-button
              >
              <el-button type="success" round @click="dialogFormVisible = false"
                >确 定</el-button
              >
            </el-row>
          </el-dialog>
        </el-col>
        <el-col class="certification-pass" v-if="pass">
          <el-row class="certification-pass-title"
            ><i class="el-icon-circle-check"></i>已通过实名认证</el-row
          ><br />
          <span>张三</span><br />
          <span>身份证号：</span>
          <span>44*********6</span>
        </el-col>
      </el-row>
      <el-row class="notice" v-for="value in PointOutTextList" :key="value">
        <el-col>{{value}}</el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        idcard: '',
      },
      formLabelWidth: '80px',
      pass: false,
      /** 提示文字：认证须知 */
      PointOutTextList: [
        '认证须知',
        '1、实名认证可以提升您个人信息及虚拟财产的安全等级，同时也能够更好的体验各项虚拟服务',
        '2、实名认证通过后，将无法修改和删除，请谨慎填写',
        '3、实名认证通过后，系统将自动发放10个积分作为奖励',
        '4、我们会确保你所提供的信息均处于严格的保密状态，不会泄露',
        '5、如果多次认证不通过，请联系邮箱user@imooc..com',
        '6、如存在恶意乱填写姓名，身份证号码，及上传与身份证证件无关图片者，一经发现将冻结账号',
      ],
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style scoped src="@/assets/css/userinfoPage/childrenPageStyle.css"></style>
<style scoped>
/**验证按钮背景版 */
.certification {
  height: 150px;
  background-color: #f4f5f7;
  text-align: center;
}
/**验证按钮 */
.certification-btn {
  height: 150px;
  padding-top: 55px;
}
/***提示文字 */
.notice {
  margin-top: 10px;
  font-size: 16px;
  text-align: left;
  color: #80878b;
}

.certification-btn-success {
  font-size: 16px;
}
.certification-dialog {
  line-height: 0 !important;
}
.certification-pass {
  padding-top: 30px;
  padding-left: 30px;
  text-align: left;
}
.certification-pass-title {
  font-size: 16px;
  font-weight: 600;
}
</style>
