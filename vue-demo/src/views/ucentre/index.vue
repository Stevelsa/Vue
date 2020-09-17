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
          <el-table-column label="用户">
            <template slot-scope="scope">{{scope.row.nickname}}</template>
          </el-table-column>
          <el-table-column label="关键字">
            <template slot-scope="scope">
              <span
                style="color:#409eff; cursor: pointer"
                @click="itemClick(scope.row)"
              >{{scope.row.title}}</span>
            </template>
          </el-table-column>
          <el-table-column label="创建日期">
            <template slot-scope="scope">{{scope.row.publishDate}}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button size="mini" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <pagenation
          v-show="total>0"
          :total="total"
          :current.sync="pagenation.current"
          :size="pagenation.size"
          @pagenation="getDataQuantity"
        ></pagenation>
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
  inject:['reload'],
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
    this.getDataQuantity(this.pagenation);
  },
  methods: {
    getDataQuantity(pagenation) {
      this.getRequest("/article/all/user", pagenation)
        .then((resp) => {
          if (resp.status == 200) {
            this.listData = resp.data.list;
            this.total = resp.data.total;
          } else {
            this.$message({ type: "error", message: "数据加载失败" });
          }
        })
        .catch((resp) => {
          this.$message({ type: "error", message: "catch 异常" });
        });
    },
    itemClick(row) {
      this.$router.push({ path: "/article/", query: { aid: row.id } });
    },
    handleDelete(param) {
      this.$confirm("永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
          this.postRequest("/article/delete",{aid:param.id})
          .then(resp=>{
            if(resp.status==200){
              if(resp.data.status=='success'){
                this.$message({type:"success",message:"delete success"}),
                this.reload()
              }
            }else{
              this.$message({type:"error", message: "delete fail"})
            }
          })
          .catch(()=>{
            this.$message({type:"error", message: "catch error"})
          })
        }).catch(() => {
          this.$message({
            type: "info",
            message: "delete cancel",
          });
        })
    }
  }
};
</script>

<style lang="scss"  scoped>
.line {
  text-align: center;
}
</style>