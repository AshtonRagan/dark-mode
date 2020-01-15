import { useState } from "react"


export const useLocalStorage = (key,initvalue) =>{
const [storedValue,setStoredValue] = useState(()=>{
if(localStorage.getItem(key)){
    return JSON.parse(localStorage.getItem(key))
}else{
    localStorage.setItem(key, JSON.stringify(initvalue))
    return initvalue
}

})
const setValue = (value) =>{
    setStoredValue(value)
    localStorage.setItem(key, JSON.stringify(value))
}



return[storedValue, setValue]
}