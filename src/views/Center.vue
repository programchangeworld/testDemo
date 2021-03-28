<template>
    <div>
        center
    </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    if (!localStorage.getItem('token')) {
      next('/login')
    } else {
      next()
    }
  },
  mounted () {
    // console.log(localStorage.getItem('token'))
    // if(!localStorage.getItem('token')){
    //     this.$router.push('/login')
    // }
  }
}
</script>
