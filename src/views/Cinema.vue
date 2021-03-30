<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="handleLeft"
      @click-right='handleRight'
    >
      <template #left>
        {{cityName}}<van-icon name="arrow-down" color='black'/>
      </template>
      <template #right>
        <van-icon name="search" size="23" color='black'/>
      </template>
    </van-nav-bar>
    <div class="cinema" :style="{height:height}">
        <ul>
            <li v-for="data in cinemaList" :key='data.cinemaId'>
                <div>{{data.name}}</div>
                <div class="address">{{data.address}}</div>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
// import http from '@/util/http'
import BetterScroll from 'better-scroll'
import Vue from 'vue'
import { NavBar, Icon } from 'vant'
import { mapActions, mapMutations, mapState } from 'vuex'
Vue.use(NavBar).use(Icon)
export default {
  computed: {
    ...mapState('CinemaModule', ['cinemaList']),
    ...mapState('CityModule', ['cityID', 'cityName'])
  },
  data () {
    return {
      cinemaListL: [],
      height: 0
    }
  },
  methods: {
    ...mapActions('CinemaModule', ['getCinemaList']),
    ...mapMutations('CinemaModule', ['clearCinemaList']),
    handleLeft () {
      this.clearCinemaList()
      this.$router.push('/city')
    },
    handleRight () {
      this.$router.push('/cinema/search')
    }
  },
  mounted () {
    this.height = document.documentElement.clientHeight - 100 + 'px'
    if (this.cinemaList.length === 0) {
      const a = this.getCinemaList(this.cityID)
      a.then(res => {
        this.$nextTick(() => {
          new BetterScroll('.cinema', {
            scrollbar: {
              fade: true
            }
          })
        })
      })
    } else {
      console.log('缓存')
    }
  }
}
</script>
<style lang="scss" scoped>
li{
    padding: 5px;
    .address{
        font-size: 12px;
        color: gray;
    }
}
</style>

<style lang="scss" scoped>
.cinema{
    // height: 300px;
    overflow: hidden;
    position: relative;
}
</style>
