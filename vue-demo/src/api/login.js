import service from '@/utils/request'

export function login(username,password){
    
    return service({
        method:'post',
        url: '/login',
        data: {
            username,
            password
        },
        transformRequest:[function(data){
            let ret=''
            for (let it in data){
                ret+=encodeURIComponent(it)+'='+encodeURIComponent(data[it])+'&'
            }
            return ret
        }]
    })
}

export function logout(){
    return service ({
        url: '/logout',
        method: 'get'
    })
}