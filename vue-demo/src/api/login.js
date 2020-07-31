import request from '@utils/request'

export function login(userId,password){
    return request({
        utl: '/login',
        method:'post',
        data: {
            userId,
            password
        }
    })
}

export function logout(){
    return request ({
        url: '/logout',
        method: 'get'
    })
}