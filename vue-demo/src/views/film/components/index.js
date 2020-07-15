import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'home'
    },
    {
      path: '/home',
      name: 'homepage',
      component: ()=> import('@/views/home/index')
    },
    {
      path: '/film',
      name: 'film',
      component: ()=> import('@/views/film/film')
    },
    {
      path: '/search',
      name: 'search',
      component: ()=> import('@/views/search/index')
    },
    {
      path: '/404',
      name: '404',
      component: ()=> import('@/views/404')
    },
    {
      path: '*',
      redirect: '404'
    }
  ]

})
