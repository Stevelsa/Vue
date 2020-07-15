import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index')
    },
    {
      path: '/',
      component: Layout,
      children: [{
          path: '',
          redirect: 'index'
        },
        {
          path: '/index',
          name: 'index',
          component: () => import('@/views/home/home')
        }
      ]
    },
    {
      path: '/film',
      name: 'film',
      component: () => import('@/views/film/film')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search/index')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404')
    },
    {
      path: '*',
      redirect: '404'
    }
  ]

})
