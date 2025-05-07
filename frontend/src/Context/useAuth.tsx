/* eslint-disable react-refresh/only-export-components */
import type { LoginProps, RegisterProps, UserProfileToken } from "../Models/User"
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi, RegisterApi } from "../Services/AuthServices";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";

type UserContextType = {
    userToken: UserProfileToken | null;
    RegisterUser: (data: RegisterProps) => void;
    LoginUser: (data: LoginProps)=> void;
    LogoutUser: () => void;
    isLoggedIn: () => boolean;
}

type Props = {children: React.ReactNode}

const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({children}: Props) => {
    const navigate = useNavigate();
    const [ userToken, setUserToken] = useState<UserProfileToken | null>(null);
    const [ isReady, setIsReady] = useState(false)

    useEffect(()=> {
        const token = localStorage.getItem("userToken");
        if(token){
            setUserToken(userToken)
            axios.defaults.headers.common["Authorization"] = "Bearer " + userToken
        }
        setIsReady(true)
    }, [])

    const RegisterUser = async(data: RegisterProps) => {
        await RegisterApi(data).then((res) => {
            if(res?.data.token){
                localStorage.setItem("userToken", res?.data.token)
                setUserToken(res?.data.token)
                toast.success("Registered Successfully!")
                navigate("/");
            }
        }).catch((err) => toast.warning("Server error occured"))
    }

    const LoginUser = async(data: LoginProps) => {

        await loginApi(data).then((res) => {
            if(res?.data.token){
                localStorage.setItem("userToken", res?.data.token)
                setUserToken(res?.data.token)
                toast.success("Login Success!")
                navigate("/");
            }
        }).catch((err) => toast.warning("Server error occured"))
    }

    const isLoggedIn = () => {
        return !!userToken;
    }

    const LogoutUser = () => {
        localStorage.removeItem("userToken")
        setUserToken(null)
        navigate("/login")
    }

    return(
        <UserContext.Provider value={{LoginUser, RegisterUser, isLoggedIn, LogoutUser, userToken }}>
            {isReady? children: null}
        </UserContext.Provider>
    )
}

export const useAuth = () => React.useContext(UserContext)
