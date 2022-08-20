import { APIRepo } from "../../@types";
import {Api} from "../../api/axios-config";

type IReposList = { 
data : APIRepo[];
headers?: Object;
status?: number;
}
interface IRepoDetails{
    id: number ;
    name: string;
    description : string;
}
export const getAll  = async () : Promise<IReposList> => {
   // user: string, page : string, limit : string
   const user = 'alansllima'
    const urlRelativa =`/users/${user}/repos`;   
    
        const {data, headers, status} = await Api.get(urlRelativa)  
        console.log(data)       
        if(data){
          return({
            data,
            headers,
            status,
          })
        }
        return({
          data,
          headers,
          status,
        }) 
}

export const RepoService = {
    getAll,
}