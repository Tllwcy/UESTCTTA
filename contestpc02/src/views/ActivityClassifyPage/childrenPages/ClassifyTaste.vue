<!-- 【组件】活动分类页面：体验 -->
<template>
  <el-main class="el-flex">
    <el-col class="el-cols-width"
     v-for="item in object" :key="item.id">
        <img class="el-cols-img" :src="item.img" />
        <span class="el-cols-span">{{ item.name }}体验课</span>
    </el-col>
  </el-main>
</template>

<script>
export default {
  name: 'Content/Taste',
  data() {
    return {
      object: [
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/w014.png', name: '尤克里里' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/w014.png', name: '尤克里里' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/w014.png', name: '尤克里里' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/w014.png', name: '尤克里里' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/w014.png', name: '尤克里里' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/w014.png', name: '尤克里里' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/w014.png', name: '尤克里里' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/w014.png', name: '尤克里里' },
        { img: 'https://jingsai.qooroo.cn/resource/home/pic/w014.png', name: '尤克里里' },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
/deep/.el-col-24 {
    width: 100%;
    flex: 0 0 25%;
    margin: 40px;
}
</style>

<style scoped>
.el-flex{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}
.el-cols-span {
  display: block;
  padding-top: 10px;
  font-size: 16px;
}
.el-cols-img {
  width: 100% !important;
}
</style>
