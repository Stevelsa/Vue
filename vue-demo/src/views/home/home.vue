<template>
  <div id="container">
  <img width="25%" src="@/assets/douban.jpg">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <a href="https://vuejs.org" target="_blank">the Green Book</a>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg:'豆瓣电影'
        }
    }
}
</script>