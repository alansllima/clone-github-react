import { AxiosError } from "axios";

export const errorInterceptor = (error : AxiosError) => {
    if(error.message ==='Network Error'){
        return Promise.reject(new Error('Erro de conexao'))
    }
    if(error.response?.status === 404){       
        return Promise.reject(new Error('Erro de conexao 404'))
    }
    if(error){
        console.log(error.message)
    }
    return Promise.reject(error)
}