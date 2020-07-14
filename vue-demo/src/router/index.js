import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'homepage',
      component: ()=> import('@/views/home/home')
    },
    {
      path: '/',
      component: Layout,
      children: [
      {
        path: '',
        redirect:'film'
      },
      {
        path: 'film',
        name: 'film',
        component: () => import('@/views/film/film')
      }]
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
