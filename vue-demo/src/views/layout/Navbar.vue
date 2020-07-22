<template>
  <div class="navbar navbar-default" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <router-link :to="{path:'/home'}" class="navbar-brand">首页</router-link>
      </div>

      <div class="clearfix">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/login">登录</router-link>
          </li>
          <li>
            <router-link to="/ucentre">个人中心</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style rel='stylesheet/scss' lang="scss" scoped=''>
.navbar-main {
  padding: 0;
  line-height: 45px;
  background: #009237;
  border: none;
}

.navbar-main .navbar-nav > li > a {
  padding: 9px 15px;
  line-height: 12px;
  color: #fff;
}
</style>