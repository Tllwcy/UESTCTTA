<!-- 页脚链接：意见反馈 -->
<template>
  <el-container
    class=".el-container-main"
    style="flex-direction: column;
    justify-content: center;"
  >
    <el-row
      class="el-rows-header"
      type="flex"
      align="middle"
      justify="space-between"
    >
      <el-col class="el-col-marginleft">
        <el-page-header @back="goBack" content="意见反馈"> </el-page-header>
      </el-col>
      <el-col>
        <span class="el-col-span">
          Hi，欢迎提交任何关于竞赛管理的问题和建议，我们将尽快回复您。感澳您对本网站的帮助。：)
        </span>
      </el-col>
    </el-row>
    <div class="el-rows-border"></div>
    <el-main class="el-mains-pageContent">
      <el-col class="el-cols">
        <el-form ref="ruleForm" class="el-suggestionForm">
          <el-form-item>
            <el-input
              type="textarea"
              :rows="20"
              resize="none"
              v-model="ruleForm.desc"
            ></el-input>
            <span class="el-span-red">请输入反馈内容</span>
          </el-form-item>
          <el-form-item>
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或<em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip">
                最多可以上传5张，图片大小不能超过不超过2M
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item label="" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
            <span class="el-span-red">请填写联系方式（QQ）</span>
          </el-form-item>
        </el-form>
      </el-col>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        moreLines: '',
        suggestionPicList: [],
        qqNumebr: '',
      },
      rules: {
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
        return true;
      });
    },
  },
};
</script>

<style scoped src="@/assets/css/userinfoPage/childrenPageStyle.css"></style>

<!--样式穿透 -->
<style lang="less" scoped>
/**页头字体样式 */
/deep/.el-page-header__left .el-icon-back {
  font-size: 30px;
}
/deep/.el-page-header__title {
  font-size: 28px;
}
/deep/.el-page-header__content {
  font-size: 28px;
  font-weight: 600;
  color: #303133;
}
/**表单样式 */
/deep/.el-form-item {
  margin-bottom: 60px;
}
/deep/.el-form-item__content {
  line-height: 30px;
  position: relative;
  font-size: 14px;
  margin-left: 0 !important;
}
/** 表单textarea 文本域 第一个输入框 */
/deep/.el-textarea__inner {
  display: block;
  resize: vertical;
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  padding: 5px 15px;
  background-color: #fff;
  color: #606266;
  font-size: 20px;
  line-height: 1.5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px #ededed;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
/** 表单input 第二个输入框 */
/deep/.el-input__inner {
  display: inline-block;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: 1px solid #e8e8e8;
  padding: 0 15px;
  color: #606266;
  background-color: #fff;
  font-size: 20px;
  line-height: 40px;
  -webkit-appearance: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px #ededed;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  outline: 0;
}
/**  表单 上传图片 提示文字 */
/deep/.el-upload__tip {
  font-size: 20px;
  color: rgb(215, 29, 29);
  // color: #606266;
  margin-top: 0;
}
</style>

<style scoped>
/**页头右边返回块左侧间距 */
.el-col-marginleft {
  margin-left: 2%;
}
/**页头标题边距 */
.el-rows-header {
  margin: 20px;
}
/**页头左边长文本 文字大小和宽度（不换行） */
.el-col-span {
  font-size: 20px;
  width: 900px;
}
/** 页头导航下面那条线 */
.el-rows-border {
  border-bottom: 1px solid #000;
  margin: 0 30px;
}

/**页面内容main的布局排版 */
.el-mains-pageContent {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/**意见反馈页：意见提交表单 */
.el-suggestionForm {
  width: 60%;
  padding-bottom: 60px;
  margin: auto;
}
/**表单四周padding间距 */
.el-cols {
  padding: 40px 0;
}
/** 表单 红字提醒部分 */
.el-span-red {
  display: block;
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: 20px;
  color: rgb(215, 29, 29);
}
</style>
