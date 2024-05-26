import {request}  from "../config"
import {Product} from "../../types/interface/product"

export const product:Product = {
    get: (params)=> request.get(`/products`, {params}),
    
   
}