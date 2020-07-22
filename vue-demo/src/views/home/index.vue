<template>
  <div class="home">
    <img src="@/assets/douban.jpg" width="25%" />
    <router-link to="/film">
      <h2>{{msg}}</h2>
    </router-link>
    <SearchBar/>
  </div>
</template>

<script>

import SearchBar from '@/components/SearchBar/index.vue'

export default {
  name: "home",
  components:{
    SearchBar
  },
  data() {
    return {
      msg: "豆瓣电影"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>