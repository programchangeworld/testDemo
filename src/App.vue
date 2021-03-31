<template>
  <div>
    <tabbar v-show="isTabbarShow"></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from './components/Tabbar'
import { mapState } from 'vuex'
export default {
  date () {
    return {

    }
  },
  components: {
    tabbar
  },
  computed: {
    ...mapState('TabbarModule', ['isTabbarShow'])
  },
  mounted () {
    // console.log(mapState("TabbarModule"),["isTabbarShow"])
    // axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=891732708F9511EB9C721961B822E040D0B6F6C180D6419183F645935CB18C52&optimus_risk_level=71&optimus_code=10').then(res => {
    //   console.log(res.data)
    // })
    // axios.get('https://m.maizuo.com/gateway?cityId=210300&pageNum=1&pageSize=10&type=1&k=4832314').then(res=>{
    //   console.log(res.data)
    // })
    // axios({
    //   url:'https://m.maizuo.com/gateway?cityId=210300&pageNum=1&pageSize=10&type=1&k=4832314',
    //   headers:{
    //     'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"16168921093001537894809601","bc":"210300"}',
    //     'X-Host': 'mall.film-ticket.film.list'
    //   },
    //   method:'get'
    // }).then(res=>{console.log(res)})
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  touch-action: manipulation;
}
</style>
