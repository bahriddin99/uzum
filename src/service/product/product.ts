import {request}  from "../config"
import {Product} from "../../types/interface/product"

export const product:Product = {
    get: (params)=> request.get(`/products`, {params}),
    getId: (id)=> request.get(`/product/${id}`),
    like_product: (id) => request.post(`/like/${id}`),
    get_liked_products: () => request.get(`/wishlist?page=1&limit=100`)
    
   
}