import axios from 'axios'

let base = '';
export const getRequest=(url,params)=>{
    return axios({
        method: 'get',
        data: params,
        url: `${base}${url}`
    })
}


export const postRequest=(url,params)=>{
    return axios({
        method: 'post',
        data: params,
        url: `${base}${url}`
    })
}