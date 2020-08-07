import {login, logout} from '@/api/login'
import {getUser,setUser,removeUser} from '@/utils/auth'

const user={
    state:{
        user:getUser
    },
    mutations:{
        SET_USER:(state,user)=>{
            state.user=user
        }
    },
    actions:{
        Login({commit},userInfo){
            const userId=userInfo.userId.trim()
            return new Promise((resolve,reject)=>{
                login(userId,userInfo.password)
                .then(response=>{
                    const data=response.data
                    setUser(data)
                    commit('SET_USER',data)
                    resolve()
                })
                .catch(error=>{
                    reject(error)
                })
            })
        }
    },
    LogOut({commit,state}){
        return new Promise((resolve,reject)=>{
            logout().then(()=>{
                commit(SET_USER,null)
                removeUser()
                resolve()
            }).catch(error=>{
                reject(error)
            })
        })
    }
}

export default user