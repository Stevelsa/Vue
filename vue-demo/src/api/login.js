import service from '@/utils/request'

export function login(userId,password){
    
    return service({
        method:'post',
        url: '/login',
        data: {
            userId,
            password
        }
    }
    )
}

export function logout(){
    return service ({
        url: '/logout',
        method: 'get'
    })
}