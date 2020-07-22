<template>
  <div class="fof-container">
    <div class="fof">
      <div class="pic">
        <img width="50%" src="@/assets/404.jpg" />
      </div>
      <div class="msg">
        <div class="msg__headline">{{ message }}</div>
        <div class="msg__info">请检查网址是否正确，请点击以下按钮返回首页</div>
        <div class="msg__return"><router-link to="/">返回首页</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page404",
  data() {
    return {
      message: '页面走丢了'
    }
  }
}
</script>