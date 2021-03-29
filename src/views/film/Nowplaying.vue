<template>
    <div>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" class="vanlist" :immediate-check='false'>
            <van-cell v-for="data in datalist" :key='data.filmId' @click="handleClick(data.filmId)" class="vancell">
                <img :src="data.poster" alt="">
                <h3>{{data.name}}</h3>
                <p>主演:{{data.actors | actorFilter}}</p>
                <p>{{data.nation}} | {{data.runtime}}分钟</p>
            </van-cell>
        </van-list>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { List, Cell } from 'vant'

Vue.use(List).use(Cell)
Vue.filter('actorFilter', (actors) => {
  if (actors === undefined) return '暂无主演'
  return actors.map(item => item.name).join(' ')
})
export default {
  data () {
    return {
      datalist: [],
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      current: 1,
      total: 0
    }
  },
  methods: {
    handleClick (id) {
      // console.log(id)
      // location.href= '#/center'
      this.$router.push(`/Detail/${id}`)
    },
    onLoad () {
      // console.log(this.datalist)
      if (this.datalist.length === this.total) {
        this.loading = true
        return
      }
      this.current++
      axios({
        url: `https://m.maizuo.com/gateway?cityId=210300&pageNum=${this.current}&pageSize=10&type=1&k=4832314`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16168921093001537894809601","bc":"210300"}',
          'X-Host': 'mall.film-ticket.film.list'
        },
        method: 'get'
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.films]
        // console.log(this.datalist)
        // console.log(1111)
        this.loading = false
      })
    }
  },
  mounted () {
    axios({
      url: `https://m.maizuo.com/gateway?cityId=210300&pageNum=${this.current}&pageSize=10&type=1&k=4832314`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16168921093001537894809601","bc":"210300"}',
        'X-Host': 'mall.film-ticket.film.list'
      },
      method: 'get'
    }).then(res => {
      this.datalist = [...this.datalist, ...res.data.data.films]
      this.total = res.data.data.total
    })
  }
}
</script>
<style lang="scss" scoped>
.vanlist{
  padding-top: 2px;
}
.vancell{
  overflow: hidden;
  padding: 10px;
  img{
    float: left;
    width: 100px;
  }
  p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
