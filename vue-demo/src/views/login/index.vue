<template>
  <div class="login-page">
    <div style="width: 100%; background-color:#fff;">
      <div class="navbar">
        <img src="@/assets/douban.jpg" class="logo" style="margin-top:18px;" />
      </div>
    </div>
    <div style="clear:both"></div>
    <div class="container">
      <el-row type="flex" justify="start">
        <div class="login-container">
          <el-col :span="12">
            <div class="slogan">
              <img src="@/assets/dtt.png" width="50%" class="img-contain" />
            </div>
          </el-col>
          <el-col :span="12">
            <el-form
              ref="loginForm"
              :inline="true"
              :model="loginForm"
              :rules="loginRules"
              class="login-form"
              label-position="left"
            >
              <el-form-item label="用户名" prop="username">
                <el-input
                  type="text"
                  v-model="loginForm.username"
                  name="username"
                  auto-complete="on"
                  placeholder="用户名"
                ></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input
                  type="pwdType"
                  v-model="loginForm.password"
                  name="password"
                  auto-complete="on"
                  placeholder="密码"
                  @keyup.enter.native="handleLogin"
                ></el-input>
              </el-form-item>
              <el-button
                :loading="loading"
                type="primary"
                class="login-btn"
                @click.native.prevent="handleLogin"
              >登录</el-button>
            </el-form>
          </el-col>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import {postRequest} from '@/api/api'
export default {
  name: "Login",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("password required"))
      }
      if (value.length < 3) {
        callback(new Error("密码须不小于3位！"))
      }
      callback()
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: "blur",
            message: "请输入用户名",
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            validator: validatePass,
          },
        ],
      },
      loading: false,
      pwdType: "password",
      redirect:this.$route.query.redirect
        ?this.$route.query.redirect
        :undefined
    }
  },
  methods: {
    // handleLogin() {
    //   this.$refs.loginForm.validate(valid => {
    //     if (valid) {
    //       this.loading = true
    //       this.$store
    //         .dispatch("Login", this.loginForm)
    //         .then(() => {
    //           this.loading = false
    //           this.$router.push({ path: this.redirect || "/" })
    //         })
    //         .catch(() => {
    //           this.loading = false;
    //         })
    //     } else {
    //       console.log("error submit!");
    //       return false
    //     }
    //   })
    // }
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          postRequest('/login',{
            username:this.loginForm.username,
            password:this.loginForm.password
          }).then(resp=>{
            this.loading=false;
            if(resp.status==200){
              var json=resp.data;
              localStorage.setItem('user',JSON.stringify(json.status))
              this.$message(localStorage.getItem('user'))
              this.$store.commit('SET_USER',json)
              if(json.status=='success'){
                this.$router.replace({path: '/home'});
              }else{
                this.$alert('200 login fail')
              }
            }else{
              this.$alert('login fail')
            }
            },resp=>{
              this.loading=false;
              this.$alert('can not reach server');
            });
        }else {
          console.log("error submit!");
          return false
        }
      })
    }
  }
}
</script>