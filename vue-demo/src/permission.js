import router from './router'
import {getUser} from '@/utils/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 全局前置守卫
// to : Toute: 目标路由
// from : Toute: 当前路由
// next : Function: 

router.beforeEach((to,from,next)=>{
    // 启动进度条
    NProgress.start()

    if(getUser()){
        if(to.path==='/login'){
            next({path: '/'})
            NProgress.done()
        }
        else{
            next()
        }
    }else{
        if(
            true
        ){
            next('/login?redirect=${to.path')
        }else{
            next()
        }
    }
})

router.afterEach(()=>{
    NProgress.done()
})