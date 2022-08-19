import axios, { AxiosError } from "axios";
import { Environment } from "../../environment";
import { responseInterceptor } from "./interceptors";
import { errorInterceptor } from "./interceptors";

const Api = axios.create({
    baseURL : Environment.URL_BASE
})

//esse trecho de codigo está fazendo quebrar
Api.interceptors.response.use( 
  (response)=>{ return responseInterceptor(response)},
  (error)=>{return errorInterceptor(error)})

export {Api};