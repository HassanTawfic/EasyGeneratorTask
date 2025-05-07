import axios from "axios";
import type { LoginProps, RegisterProps } from "../Models/User";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:4000/"

export const loginApi = async (data: LoginProps) => {
    
    try{
        const response = await axios.post(api + 'auth/login', data, {headers:{
            'Content-Type': 'application/json',
        }})
        return response;
    }catch(err){
        handleError(err);
    }
}

export const RegisterApi = async (data: RegisterProps) => {
    try{
        const response = await axios.post(api + 'auth/signup', data, {headers:{
            'Content-Type': 'application/json',
        }})
        return response;
    }catch(err){
        handleError(err)
    }
}