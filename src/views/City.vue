<template>
    <div>
        <van-index-bar :index-list="computedCityList" @change='handleSelect'>
            <div v-for="data in cityList" :key="data.type">
                <van-index-anchor :index='data.type' />
                <van-cell v-for="(item,index) in data.list" :title="item.name" :key="index"
                @click="handleChangePage(item.name,item.cityId)"/>
            </div>
        </van-index-bar>
    </div>
</template>

<script>
import Vue from 'vue'
import { IndexBar, IndexAnchor, Cell, Toast } from 'vant'
import http from '@/util/http'
import { mapMutations } from 'vuex'
Vue.use(IndexBar).use(Cell).use(Toast)
Vue.use(IndexAnchor)
export default {
  data () {
    return {
      cityList: [
      ]

    }
  },
  computed: {
    computedCityList () {
      return this.cityList.map(item => item.type)
    }
  },
  mounted () {
    for (let code = 65; code < 91; code++) {
      this.cityList.push({
        type: String.fromCharCode(code),
        list: []
      })
    }
    http({
      url: '/gateway?k=9496474',
      headers: { 'X-Host': 'mall.film-ticket.city.list' }
    }).then(res => {
      // console.log(res.data)
      this.handleCityDate(res.data.data.cities)
    })
  },
  methods: {
    ...mapMutations('CityModule', ['changeCityName', 'changeCityId']),
    handleCityDate (cities) {
      cities.sort(function (a, b) {
        return a.pinyin.localeCompare(b.pinyin)
      })
      // console.log(cities)
      var i = 0
      // console.log(cities[0].pinyin.substring(0,1).toUpperCase())
      for (const data in cities) {
        const datatype = cities[data].pinyin.substring(0, 1).toUpperCase()
        if (datatype === this.cityList[i].type) {
          this.cityList[i].list.push(cities[data])
        } else {
          while (datatype !== this.cityList[i].type) i++
          this.cityList[i].list.push(cities[data])
        }
      }
      this.cityList = this.cityList.filter(item => item.list.length > 0)
      // console.log(this.cityList)
      // console.log(this.cityList)
    },
    handleSelect (index) {
      // console.log(index)
      Toast(index)
    },
    handleChangePage (name, cityId) {
      // console.log(cityId)
      // this.$store.state.cityName = item
      this.changeCityName(name)
      this.changeCityId(cityId)
      this.$router.back()
    }
  }
}
</script>
