<template>
  <div id="container">
    <div class="title">
      <img src="@/assets/douban.jpg" width="15%" />
      <h1>{{ msg }}</h1>
    </div>
    <div class="film">
      <el-row :gutter="0">
        <el-col :span="6">
          <el-card :body-style="{padding:'2px'}">
            <a href="https://movie.douban.com/subject/27060077/" target="_blank">
              <img src="@/assets/tgb.jpg" width="55%" />
            </a>
            <div style="padding: 14px;">
              <span>the Green Book</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{padding:'2px'}">
            <a href="https://movie.douban.com/subject/1851857/" target="_blank">
              <img src="@/assets/darknight.png" width="67%" />
            </a>
            <div style="padding: 14px;">
              <span>Bat Man the Dark Knight</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{padding:'2px'}">
            <a href="https://movie.douban.com/subject/3718279/" target="_blank">
              <img src="@/assets/deadpool.jpg" width="60%" />
            </a>
            <div style="padding: 14px;">
              <span>DealPool</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{padding:'2px'}">
            <a href="https://movie.douban.com/subject/3718279/" target="_blank">
              <img src="@/assets/bigshort.jpg" width="56%" />
            </a>
            <div style="padding: 14px;">
              <span>the Big Short</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  }
};
</script>


<style rel='stylesheet/scss' lang="scss" scoped=''>
// .title {
//   float: left;
//   width: 1190px;
//   margin: 0px auto;
// }
</style>