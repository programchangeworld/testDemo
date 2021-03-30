const module = {
  namespaced: true,
  state: {
    cityID: '310100',
    cityName: '上海'
  },
  mutations: {
    changeCityName (state, name) {
      // console.log(1111)
      state.cityName = name
    },
    changeCityId (state, cityId) {
      state.cityID = cityId
    }
  },
  actions: {
  }
}
export default module
