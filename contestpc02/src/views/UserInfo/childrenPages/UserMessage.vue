<template>
  <el-container class="el-containers">
    <el-header class="el-header">
      <h1 class="el-col-h1">通知</h1>
    </el-header>
    <el-main class="el-mains-center">
      <el-table :data="tableData" width="100%" height="600px">
        <el-table-column prop="id" label="序号"> </el-table-column>
        <el-table-column prop="title" label="标题"> </el-table-column>
        <el-table-column prop="name" label="比赛名称" width="180">
        </el-table-column>
        <el-table-column prop="date" label="发布时间" width="180">
        </el-table-column>
        <el-table-column prop="result" label="通知结果"> </el-table-column>
      </el-table>
      <el-row class="changepage">
        <ul>
          <li>上一页</li>
          <li>1</li>
          <li>2</li>
          <li>下一页</li>
        </ul>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: '1',
          title: '设计大赛',
          name: '王小虎',
          date: '2016-05-02',
          result: '已通知',
        },
        {
          id: '2',
          title: '设计大赛',
          name: '王小虎',
          date: '2016-05-02',
          result: '已通知',
        },
        {
          id: '3',
          title: '设计大赛',
          name: '王小虎',
          date: '2016-05-02',
          result: '已通知',
        },
        {
          id: '4',
          title: '设计大赛',
          name: '王小虎',
          date: '2016-05-02',
          result: '已通知',
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style scoped src="@/assets/css/userinfoPage/childrenPageStyle.css" ></style>

<style lang="less" scoped>
/deep/.el-table th.el-table__cell > .cell {
  font-size: 16px;
  margin: 10px auto;
}
/deep/.el-table td.el-table__cell div {
  font-size: 16px;
  margin: 20px auto;
}
</style>

<style scoped>
.el-mains-center {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.changepage {
  margin: auto;
}
.changepage li {
  float: left;
  text-align: center;
  cursor: pointer;
  padding: 10px 10px;
  margin-right: 20px;
  list-style: none;
  font-size: 16px;
}
.changepage li:hover {
  background-color: #44730b;
  color: #fff;
}
</style>
