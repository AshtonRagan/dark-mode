import {useLocalStorage} from "./useLocalStorage"
import { useEffect} from "react"

 export  const useDarkMode = () =>{
const [darkMode,setDarkMode] = useLocalStorage("darkMode", false)

useEffect(()=>{
if(darkMode === false){
    setDarkMode(false)
  return  document.body.classList.add("dark-mode") 
} else {
    setDarkMode(true)
 return document.body.classList.remove("dark-mode")
}
    },[darkMode])

return [darkMode,setDarkMode]
}