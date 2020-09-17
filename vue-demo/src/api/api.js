import axios from 'axios'

let base = '';
export const getRequest=(url,params)=>{
    return axios({
        method: 'get',
        params: params,
        url: `${base}${url}`
    })
}


export const postRequest=(url,params)=>{
    return axios({
        method: 'post',
        data: params,
        url: `${base}${url}`,
        transformRequest:[function(data){
            let ret=''
            for (let it in data){
                ret+=encodeURIComponent(it)+'='+encodeURIComponent(data[it])+'&'
            }
            return ret
        }]
    })
}