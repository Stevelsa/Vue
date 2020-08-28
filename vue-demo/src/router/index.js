import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Layout,
      children: [{
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/home')
        },
        {
          path: 'film',
          name: 'film',
          component: () => import('@/views/film/film')
        },
        {
          path: 'ucentre',
          name: 'ucentre',
          component: () => import('@/views/ucentre/index')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index')
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
