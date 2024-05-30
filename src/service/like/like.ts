import {request}  from "../config"
import {Like} from "../../types/interface/like"

export const like:Like = {
    post: (id)=> request.post(`/like/${id}`,),
    getProductLike: (params)=> request.get(`/wishlist?page=${params.page}&limit=${params.limit}`),
}