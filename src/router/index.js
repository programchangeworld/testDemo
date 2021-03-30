import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film'
import Cinema from '../views/Cinema.vue'
import Nowplaying from '../views/film/Nowplaying.vue'
import Comingsoon from '../views/film/Comingsoon.vue'
import Detail from '../views/Detail.vue'
import City from '../views/City.vue'
import Search from '../views/film/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: 'Nowplaying',
        component: Nowplaying
      },
      {
        path: 'Comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: 'Nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/cinema/search',
    component: Search
  },
  {
    path: '/detail/:myid',
    component: Detail
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/center',
    component: () => import('../views/Center.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '',
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) =>{
//   let auth = ['/center','/order','/money','/card']
//   if(auth.includes(to.fullPath)){
//     if(!localStorage.getItem('token')){
//       next('/login')
//     }
//   }
//   else{
//     next()
//   }
// })

export default router
