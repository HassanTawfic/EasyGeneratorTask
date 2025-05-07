import axios from "axios"
import { toast } from "react-toastify"

export const handleError = (error:any) => {

    if(axios.isAxiosError(error)){
        const err = error.response
        if(typeof err?.data.message === "string"){
            toast.warning(err?.data.message)
        }
    }
}