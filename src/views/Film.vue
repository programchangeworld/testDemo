<template>
    <ul>
        <film-swiper></film-swiper>
        <filmHeader style="position:sticky;top:0px;"></filmHeader>
        <section>
          <router-view></router-view>
        </section>
    </ul>
</template>
<script>
import filmHeader from './film/film-header'
import filmSwiper from './film/FilmSwiper'
export default {
  components: {
    filmHeader,
    filmSwiper
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
li{
  list-style: none;
}
html,body{
  height: 100%;
}
</style>
