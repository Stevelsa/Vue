<template>
  <div class="card">
    <el-row>
      <el-card>
        <div slot="header" class="head">
          <span>{{article.title}}</span>
        </div>
        <div v-html="article.htmlContent" class="body"></div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {},
      param: this.$route.query.aid
    }
  },
  created() {
    this.getArticleDetail(this.param);
  },
  methods: {
    getArticleDetail(param) {
      this.getRequest("/article/all/" + this.param)
        .then((resp) => {
          if (resp.status == 200) {
            this.article = resp.data
          } else {
            this.$message({ type: "error", message: "200 数据加载失败" });
          }
        })
        .catch((resp) => {
          this.$message({ type: "error", message: "数据加载失败" });
        });
    },
  },
};
</script>