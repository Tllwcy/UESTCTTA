<!-- 子页面：个人信息页面 -->
<template>
  <el-container class="el-containers">
    <el-header>
      <el-row type="flex" align="middle">
        <el-col>
          <h1 class="el-col-h1">个人消息</h1>
        </el-col>
        <el-col :span="2">
          <el-button class="el-greenbtn-style el-greenbtn-color">编辑</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="el-container-main currentContaniner">
      <el-form :model="form" :label-width="formLabelWidth">
        <el-form-item label="用户名称">
          <el-col :span="16">
            <el-input
              v-model="form.username"
              autocomplete="off"
              :disabled="true"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="用户电话">
          <el-col :span="16">
            <el-input
              v-model="form.phone"
              autocomplete="off"
              :disabled="true"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="联系地址">
          <el-col :span="16">
            <el-input
              v-model="form.address"
              autocomplete="off"
              :disabled="true"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="生日">
          <el-col :span="16">
              <el-input
                v-model="form.birthday"
                autocomplete="off"
                :disabled="true"
              ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="电子门票">
          <el-upload class="upload-demo" drag action="#[上传的地址]" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        phone: '',
        adress: '',
        birthday: '',
      },
      formLabelWidth: '260px',
      formItemWidth: '100px',
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style scoped src="@/assets/css/userinfoPage/childrenPageStyle.css"/>
<style scoped>
.currentContainer {
  display: flex;
  align-items: center;
}
.el-form-item {
  margin: 60px 0;
}
.el-greenbtn-style {
  border-radius: 10px;
}
</style>
<style lang="less" scoped>
/deep/.el-table th.el-table__cell > .cell {
  font-size: 20px;
  margin: 10px auto;
}
/deep/.el-table td.el-table__cell div {
  font-size: 18px;
  margin: 20px auto;
}
</style>

