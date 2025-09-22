import { API_BASE_URL } from "./config";
import axios from "axios";

const api = axios.create({
    baseURL : API_BASE_URL,
    withCredentials : true
})

export const addGlucose = async({value, mealContext,mealTag, notes,}) =>{
    try{
    const response = await api.post(`/api/glucose`,{
        value, mealContext, mealTag, notes
    })
    console.log("add Glucose respone: ", response.data)
    return response.data
}catch(err){
    console.error("add Glucose error", err);
}
}
