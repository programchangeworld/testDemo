const module = {
  namespaced: true,
  state: {
    isTabbarShow: true
  },
  mutations: {
    hideTabbar (state) {
      state.isTabbarShow = false
    },
    showTabbar (state) {
      state.isTabbarShow = true
    }
  },
  actions: {

  }
}
export default module
