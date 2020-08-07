const key='user'

export function getUser(){
    return localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)):undefined
}

export function setUser(user){
    return localStorage.setItem(key,JSON.stringify(user))
}

export function removeUser(){
    return localStorage.removeItem(key)
}