import {Api} from "../../api/axios-config";

type IReposList = { 
data : IRepoDetails[];
headers?: Object;
status?: number;
}
interface IRepoDetails{
    id: number ;
    name: string;
    description : string;
}
export const getAll  = async () : Promise<IReposList | Error> => {
   // user: string, page : string, limit : string
   const user = 'alansllima'
    const urlRelativa =`/users/${user}/reposs`;   
    try {
        const {data, headers, status} = await Api.get(urlRelativa)         
        if(data){
          return({
            data,
            headers,
            status,
          })
        }
       return new Error('Não foi possivel conectar com o repositorio')

    } catch (error) {
        return new Error((error as {message: string}).message ||'Não foi possivel conectar com o repositorio 2')
    }


}

export const getById  = async () : Promise<IReposList | Error> => {
    // user: string, page : string, limit : string
    const user = 'alansllima'
     const urlRelativa =`/users/${user}/repos`;   
     try {
         const {data, headers, status} = await Api.get(urlRelativa)              
         if(data){
           return({
             data,
             headers,
             status,
           })
         }
        return new Error('Não foi possivel conectar com o repositorio')
 
     } catch (error) {
         return new Error('Não foi possivel conectar com o repositorio 2')
     }
 
 
 }

export const RepoService = {
    getAll,
}