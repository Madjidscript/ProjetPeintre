
//import Axios from "./collerService";
// const projet = (data)=>{
//     return Axios.post("/projet",data)
// }
let savelocal=(data)=>{
localStorage.setItem("Mydata",data)
}
let deconnexion=()=>{
localStorage.removeItem("Mydata")
}
let local=()=>{
let locals= localStorage.getItem("Mydata")
return !!locals
}
export const accountService = { 
    savelocal,deconnexion,local
} 