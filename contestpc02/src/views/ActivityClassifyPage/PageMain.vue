<!-- 活动分类页面 -->
<template>
  <el-container>
    <pageHead></pageHead>
    <el-main class="pagecontent">
      <img src="https://jingsai.qooroo.cn/resource/home/img/banner.png" />
      <el-tabs v-model="activeName" type="card" :stretch="false">
        <el-tab-pane
          class="tagstitle"
          label="活动分类："
          disabled
        ></el-tab-pane>
        <el-tab-pane label="全部" name="first" :key="'first'">
          <ContentAll />
        </el-tab-pane>
        <el-tab-pane label="投票" name="second" :key="'second'">
          <ContentTicket />
        </el-tab-pane>
        <el-tab-pane label="体验" name="third" :key="'third'">
          <ContentTaste />
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import HomeHead from '../Header/homeHead';
import ContentAll from './childrenPages/ClassifyAll';
import ContentTicket from './childrenPages/ClassifyTicket';
import ContentTaste from './childrenPages/ClassifyTaste';

export default {
  name: 'ActivityClassify',
  data() {
    return {
      activeName: 'first',
      tablist: [{ label: '全部' }, { label: '投票' }, { label: '体验' }],
    };
  },

  components: {
    pageHead: HomeHead,
    ContentAll,
    ContentTicket,
    ContentTaste,
  },

  methods: {},
};
</script>

<style scoped>
.el-container {
  flex-direction: column;
}
.pagecontent {
    overflow: hidden;
}
.pagecontent img {
    width: 100%;
    margin: 10px 0;
}

.tagstitle {
  padding: 0;
  padding-left: 10px;
}
</style>
<style lang="less" scoped>
/deep/.el-tabs--card > .el-tabs__header {
  border: 1px solid #e4e7ed;
}
/deep/.el-tabs__header {
  padding: 10px;
  margin-top: 30px;
  border: 1px solid #e4e7ed;
}
/deep/.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: none;
  font-size: 14px;
}
/deep/.el-tabs--card > .el-tabs__header .el-tabs__item {
  border: none;
  font-size: 14px;
}
/deep/.el-tabs__item.is-active {
  color: #7b9453;
}
/deep/.el-tabs__item:hover {
  color: #7b9453;
  cursor: pointer;
}
/deep/.el-card__body,.el-main {
  padding: 0;
  margin: 0 auto;
  width: 1000px;
}
</style>
