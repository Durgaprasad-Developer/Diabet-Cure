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
    console.error("add Glucose error: ", err);
}
}

export const getGlucose = async() => {
    try{
        const response = await api.get(`/api/glucose`)
        console.log("get Glucose response", response.data);
        return response.data
    }catch(err){
        console.error("get Glucose error: " err)
    }
}

export const getGlucoseAverages = async() =>{
    try{
        const response = await api.get(`/api/glucose/averages`);
        console.log("get Glucose averages: ", response.data);
        return response.data;
    }catch(err){
        console.error("get Glucose averages error: ", err);
    }
}

export const getGlucoseSummary = async() =>{
    try{
        const response = await api.get(`/api/glucose/summary`);
        console.log("get Glucose Summary: ", response.data);
        return response.data;
    }catch(err){
        console.error("get Glucose Summary error: ", err);
    }
}
