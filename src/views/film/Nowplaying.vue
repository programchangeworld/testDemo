<template>
    <div>
        <ul style="flex-direction: column;">
            <li v-for="data in datalist" :key='data.filmId' @click="handleClick(filmId)">
                <img :src="data.poster" alt="">
                <h3>{{data.name}}</h3>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  methods: {
    handleClick (id) {
      // console.log(id)
      // location.href= '#/center'
      this.$router.push(`/Detail/${id}`)
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=210300&pageNum=1&pageSize=10&type=1&k=4832314',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16168921093001537894809601","bc":"210300"}',
        'X-Host': 'mall.film-ticket.film.list'
      },
      method: 'get'
    }).then(res => {
      this.datalist = res.data.data.films
      console.log(this.datalist)
    })
  }
}
</script>
<style lang="scss" scoped>
li{
  overflow: hidden;
  padding: 10px;
  img{
    float: left;
    width: 100px;
  }
}
</style>
