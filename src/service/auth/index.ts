import {request} from "../config";
import { Request } from "../../types/interface/aouth";

export const auth:Request={
    signup: (data)=> request.post("/register",data),
    signin: (data)=> request.post("/login",data),
}