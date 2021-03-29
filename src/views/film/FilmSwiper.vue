<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="data in imgList" :key="data.bannerId">
                <img :src="data.imgUrl" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'
import axios from 'axios'
export default {
  data () {
    return {
      imgList: []
    }
  },
  mounted () {
    new Swiper('.swiper-container',
      {
        pagination:
        {
          el: '.swiper-pagination'
        }
      })
    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=110100&k=9101372',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16168921093001537894809601"}',
        'X-Host': 'mall.cfg.common-banner'
      },
      method: 'get'
    }).then(res => {
      this.imgList = res.data.data
      // console.log(this.imgList)
    })
  }

}
</script>
<style lang="scss" scoped>
.swiper-wrapper{
    height: 167px;
    img{
        width: 100%;
    }
}
</style>
