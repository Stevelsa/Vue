<template>
  <div class="navbar" role="navigation">
    <div class="container">
      <div class="header">
          <router-link to="">首页</router-link>
      </div>
      <div class="clearfix">
        <ul>
          <li>
            <router-link to="">登录</router-link>
          </li>
          <li>
            <router-link to="">个人中心</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>