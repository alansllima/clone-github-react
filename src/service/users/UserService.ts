import { APIUser } from "../../@types";
import {Api} from "../../api/axios-config";

export const getUser = async (user? : string): Promise<APIUser>  => {
const url = `/users/${user}`;

const {data} = await Api.get(url);
console.log(data)
if(data){
  return data
}
return data
}

export const UserService = {
    getUser,
}