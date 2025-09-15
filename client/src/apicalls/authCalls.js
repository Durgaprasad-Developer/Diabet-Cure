import axios from "axios"
import {API_BASE_URL} from "./config.js"

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
})

export const signUp = async({name, userName, email, password}) => {
    try{
        const response = await api.post('/api/auth/signup',{
            name, userName, email,password,
        })
        console.log("response: ", response);
        return response.data;
    }catch(err){
        console.log("Error during Signup",err)
    }
}

export const signIn = async({userName, password}) =>{
    try{
        const response = await api.post('api/auth/signin', {
            userName, password,
        })
        console.log("response: ", response);
        return response.data
    }catch(err){
        console.log("Error during SignIn", err)
    }
}