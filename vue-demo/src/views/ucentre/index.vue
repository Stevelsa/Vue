<template>
  <div class>
    <div class="brand">
      <router-link to="/home">
        <img src="@/assets/douban.jpg" width="15%" alt class="logo" />
      </router-link>
      <div style="clear:both"></div>
    </div>
    <div class="user-query user-admin">
      <div class="app-container">
        <div class="user-query-title">
          <span>查询区</span>
        </div>
        <el-form :inline="true" ref="form" size="mini" label-position="right" label-width="60px">
          <el-row type="flex" justify="start">
            <el-col :span="8">
              <el-form-item label="用户" prop="name">
                <el-input v-model="form.id" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="关键字" prop="words">
                <el-input v-model="form.words" placeholder="请输入" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" justify="start">
            <el-col :span="8">
              <el-form-item label="日期">
                <el-col :span="11">
                  <el-form-item prop="startDate" class="dateDouble">
                    <el-date-picker
                      class="date-input"
                      v-model="form.startDate"
                      value-format="yyyy-MM-dd"
                      placeholder="起始日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-form-item prop="endDate">
                    <el-date-picker
                      class="date-input"
                      v-model="form.endDate"
                      value-format="yyyy-MM-dd"
                      placeholder="结束日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="query-btn">
            <el-button type="primary" @click="onSubmit('form')">查询</el-button>
            <el-button @click="onReset('form')">重置</el-button>
          </el-row>
        </el-form>

        <div class="user-query-title">
          <span>所有信息</span>
        </div>
        <el-table :data="listData" stripe border tooltip-effect="dark" empty-text="没有可显示的订单">
          <el-table-column prop="name" label="用户">
            <template slot-scope="scope">{{scope.row.nickname}}</template>
          </el-table-column>
          <el-table-column prop="words" label="关键字">
            <template slot-scope="scope">
              <span
                style="color:#409eff; cursor: pointer"
                @click="itemClick(scope.row)"
              >{{scope.row.title}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="words" label="创建日期">
            <template slot-scope="scope">{{scope.row.publishDate}}</template>
          </el-table-column>
        </el-table>
        <pagenation
          v-show="total>0"
          :total="total"
          :current.sync="pagenation.current"
          :size="pagenation.size"
          @pagenation="getDataQuantity"
        >
        </pagenation>
      </div>
    </div>
  </div>
</template>

<script>
import Pagenation from "@/components/Pagenation/";

export default {
  components: {
    Pagenation,
  },
  data() {
    return {
      form: {
        name: "",
        id: "",
        startDate: "",
        endDate: "",
      },
      pagenation: {
        current: 1,
        size: 10,
      },
      total: 0,
      listData: [],
    };
  },
  created() {
    this.getDataQuantity();
  },
  methods: {
    getDataQuantity() {
      this.getRequest("/article/all")
        .then((resp) => {
          this.loading;
          if (resp.status == 200) {
            this.listData = resp.data
            this.total=resp.data.length
          } else {
            this.$message({ type: "error", message: "200 数据加载失败" });
          }
        })
        .catch((resp) => {
          this.$message({ type: "error", message: "catch 数据加载失败" });
        });
    },
    itemClick(row) {
      this.$router.push({ path: "/article" });
    },
  },
};
</script>

<style lang="scss"  scoped>
.line {
  text-align: center;
}
</style>