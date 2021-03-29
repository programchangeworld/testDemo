<template>
    <ul>
        <film-swiper></film-swiper>
        <filmHeader style="position:sticky;top:0px;"></filmHeader>
        <router-view></router-view>
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
