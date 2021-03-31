<template>
    <v-touch @swiperight='onSwipeRight'>
      <div v-if="filminfo" class="filminfo">

          <detail-head v-top :title="filminfo.name"></detail-head>
          <div :style="{backgroundImage:'url('+filminfo.poster+')'}" style="width:100%;height:200px;background-size:cover;
          backgroun-position:center"></div>
          <div>
            <h3>{{filminfo.name}}--{{filminfo.filmType.name}}</h3>
            <i>{{filminfo.grade}}</i>
          </div>
          <div>{{filminfo.category}}</div>
          <div>{{filminfo.premiereAt | dateFilter}}上映</div>
          <div>{{filminfo.nation}}|{{filminfo.runtime}}分钟</div>
          <div :class="isShow?'':'synopsis'">{{filminfo.synopsis}}</div>
          <div style="text-align:center;">
            <i class="iconfont" :class="isShow?'icon-xiangshang':'icon-xiangxia'" @click="isShow=!isShow"></i>
          </div>
          <h3>演职人员</h3>
            <detail-swiper :perslide="4" swiperclass="swiper-actors">
              <div class="swiper-slide" v-for="(data,index) in filminfo.actors" :key="index">
                <img :src="data.avatarAddress"/>
                <div style="text-align:center;font-size:10px">
                  <div>{{data.name}}</div>
                  <div>{{data.role}}</div>
                </div>
              </div>
            </detail-swiper>
          <h3>剧照</h3>
          <detail-swiper :perslide="4" swiperclass="swiper-photos">
            <div class="swiper-slide" v-for="(data,index) in filminfo.photos" :key="index">
                <div :style="{backgroundImage:'url('+data+')'}" style="height:70px;background-size:cover;
                backgroun-position:center" @click="handlPreview(index)"></div>
            </div>
          </detail-swiper>
      </div>
    </v-touch>
</template>
<script>
import http from '@/util/http'
import Vue from 'vue'
import moment from 'moment'
import detailSwiper from './detail/DetailSwiper'
import detailHead from './detail/DetailHead'
import { ImagePreview } from 'vant'
import { mapMutations } from 'vuex'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, { name: 'v-touch' })
Vue.filter('dateFilter', (date) => {
  return moment(date * 1000).format('YYYY-MM-DD')
})
Vue.directive('top', {
  inserted (el) {
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > 50) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})
export default {
  data () {
    return {
      filminfo: null,
      isShow: false
    }
  },
  components: {
    detailSwiper,
    detailHead
  },
  methods: {
    ...mapMutations('TabbarModule', ['showTabbar', 'hideTabbar']),
    handlPreview (index) {
      ImagePreview({
        images: this.filminfo.photos,
        startPosition: index,
        closeable: true,
        loop: true,
        closeIconPosition: 'top-left'
      })
    },
    onSwipeRight () {
      this.$router.back()
    }
  },
  mounted () {
    this.hideTabbar()
    // console.log(this.$route.params.myid)
    // this.$store.commit('hideTabbar')
    http({
      url: `/gateway?filmId=${this.$route.params.myid}&k=5201205`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      // this.datalist = res.data.data.films
      // console.log(res.data.data.film)
      this.filminfo = res.data.data.film
    })
  },
  beforeDestroy () {
    this.showTabbar()
  }
}
</script>
<style lang="scss" scoped>
  .synopsis{
    height: 50px;
    overflow: hidden;
  }
</style>
