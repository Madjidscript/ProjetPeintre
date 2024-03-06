
import Axios from "./collerService";
const projet = (data)=>{
    return Axios.post("/projet",data)
}
export const api = { 
    projet
} 