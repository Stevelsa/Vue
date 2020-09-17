<template>
  <el-container v-loading="loading" class="post-article">
    <el-header class="header">
      <el-form :inline="true" ref="form" label-position="left">
        <el-form-item class="item" label="TITLE:">
          <el-input
            v-model="form.title"
            placeholder="请输入标题..."
            style="width: 300px;margin-left: 10px"
          ></el-input>
        </el-form-item>
        <el-select
          v-model="form.cid"
          placeholder="请选择文章栏目"
          style="width: 150px; margin-left: 20px;"
        >
          <el-option
            v-for="item in categories"
            :key="item.id"
            :label="item.cateName"
            :value="item.id"
          ></el-option>
        </el-select>
        <!-- <mavonEditor style="height: 100%;width: 100%;" ref="md" v-model="form.mdContent"></mavonEditor> -->
        <el-form-item class="item" label="CONTENT:">
          <el-input
            v-model="form.mdContent"
            type="textarea"
            rows="16"
            class="input-new-tag"
            placeholder="请输入内容..."
            style="width: 900px;margin-left: 10px"
          ></el-input>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main class="main">
      <div style="display: flex;align-items: center;margin-top: 15px;justify-content: flex-end">
        <el-button @click="cancelEdit()">放弃修改</el-button>
        <template>
          <el-button>保存到草稿箱</el-button>
          <el-button type="primary" @click="postArticle()">发表文章</el-button>
        </template>
        <template>
          <el-button type="primary">保存修改</el-button>
        </template>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import isNotNullORBlank from "@/utils/util";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  data() {
    return {
      categories: [],
      listData: {},
      loading: false,
      form: {
        id: "-1",
        title: "",
        mdContent: "",
        cid: "",
      },
    };
  },
  components: {
    mavonEditor,
  },
  inject:['reload'],
  mounted() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      this.getRequest("/category/all")
        .then((resp) => {
          if (resp.status == 200) {
            this.categories = resp.data;
          } else {
            this.$message("get data fail");
          }
        })
        .catch((resp) => {
          this.$message("error");
        });
    },
    cancelEdit() {
      this.$router.go(-1);
    },
    postArticle() {
      this.postRequest("/article/postArticle", this.form)
        .then((resp) => {
          if (resp.status == 200) {
            this.$message(resp.data.msg);
            this.reload()
            this.$router.replace({path:'/home'})
          } else {
            this.$message(resp.data.msg);
          }
        })
        .catch(() => {
          this.$message("error");
        });
    },
  },
};
</script>

<style>
.post-article {
  width: 100%;
  height: 600px;
  text-align: left;
}

.post-article > .header {
  background-color: #f7fcf9;
  margin-top: 20px;
  padding-left: 25px;
  display: flex;
  justify-content: flex-start;
}

.main {
  /*justify-content: flex-start;*/
  display: flex;
  flex-direction: column;
  margin-top: 420px;
  padding-left: 5px;
  padding-top: 0px;
}

.post-article > .header > .el-tag + .el-tag {
  margin-left: 10px;
}

.post-article > .header > .button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.post-article > .header > .input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.post-article {
  background-color: #f7fcf9;
  width: 1190px;
  margin: 10px auto;
  border: 1px solid #ececec;
}

.item .el-form-item__label {
  color: #5b9c20;
}
</style>
