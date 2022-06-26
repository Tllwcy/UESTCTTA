<template>
  <el-container class="el-containers">
    <el-header class="el-header">
      <h1 class="el-col-h1">参加记录</h1>
    </el-header>
    <el-main class="el-mains-center">
      <el-table :data="tableData" width="100%" height="600px">
        <el-table-column prop="date" label="参加时间" width="180">
        </el-table-column>
        <el-table-column prop="name" label="比赛名称" width="180">
        </el-table-column>
        <el-table-column prop="address" label="城市" width="280"> </el-table-column>
        <el-table-column prop="pay" label="是否付费"> </el-table-column>
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
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          pay: '是',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          pay: '是',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          pay: '是',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          pay: '是',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          pay: '是',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          pay: '是',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          pay: '是',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          pay: '是',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          pay: '是',
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style scoped src="@/assets/css/userinfoPage/childrenPageStyle.css">
</style>

<!--样式穿透-->
<style lang="less" scoped>
/**表头设置 */
/deep/.el-table thead {
    color: #909399;
    font-weight: 500;
    font-size: 16px;
}

/**表格一行内文字 */
/deep/.el-table {
    position: relative;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    max-width: 100%;
    font-size: 16px;
    color: #606266;
}
/**表格行内上下间距 */
/deep/.el-table .el-table__cell {
    padding: 26px 0;
    min-width: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
}
</style>
<style scoped>
.el-mains-center {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.record {
  display: flex;
  flex-direction: column;
}
.usertitle {
  display: flex;
  font-size: 16px;
  font-weight: 600;
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
