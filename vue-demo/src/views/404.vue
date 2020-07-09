<template>
  <div class="404-container">
    <div class="pic">
      <img width="25%" src="@/assets/404.jpg" />
    </div>
    <div class="msg">
      {{messag}}
      <router-link to="/">返回首页</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page404",
  data() {
    return {
      message: "页面走丢了"
    };
  }
};
</script>