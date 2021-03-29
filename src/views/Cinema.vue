<template>
    <div class="cinema" :style="{height:height}">
        <ul>
            <li v-for="data in cinemaListL" :key='data.cinemaId'>
                <div>{{data.name}}</div>
                <div class="address">{{data.address}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
import http from '@/util/http'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      cinemaListL: [],
      height: 0
    }
  },
  mounted () {
    this.height = document.documentElement.clientHeight - 50 + 'px'
    http({
      url: '/gateway?cityId=110100&ticketFlag=1&k=3949637',
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      // console.log(res)
      this.cinemaListL = res.data.data.cinemas
      this.$nextTick(() => {
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true
          }
        })
      })
    })
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
