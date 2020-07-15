<template>
  <div id="container">
    <div class="film">
      <img src="@/assets/douban.jpg" width="25%" />
      <h1>{{ msg }}</h1>
      <ul>
        <li>
          <a href="https://movie.douban.com/subject/27060077/" target="_blank">
            <img src="@/assets/tgb.jpg" width="16.5%" />
          </a>
          <a href="https://movie.douban.com/subject/1851857/" target="_blank">
            <img src="@/assets/darknight.png" width="20%" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "豆瓣电影推荐"
    };
  }
};
</script>