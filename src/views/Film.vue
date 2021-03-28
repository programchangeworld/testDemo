<template>
    <ul>
        <div style="height:300px;background:yellow">轮播</div>
        <filmHeader></filmHeader>
        <router-view></router-view>
    </ul>
</template>
<script>
import filmHeader from './film/film-header'
export default {
  components: {
    filmHeader
  }
}
</script>
