import axios from "axios";
const Axios= axios.create({
    baseURL: "http://localhost:4000/"
    // "https://projetpeintre.onrender.com"
    //"http://localhost:4000/"
})
export default Axios