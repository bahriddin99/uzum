import {create}  from "zustand"
import { toast } from "react-toastify"
import { StoreLike, } from "@StoreLike";
import { like } from "../service/like/like";
const useLikeStore = create <StoreLike> ((set)=>({
    isLoader: false,
    data: [],
    totlCount: 0,
    getLikes : async()=>{
        try{
           set({isLoader: true})
           const respons = await like.getProductLike({page:1 , limit:100})
           if(respons.status === 200){
               set({data: respons?.data?.products});
               set({totlCount: respons?.data?.total_count})
           }
           set({isLoader: false})
       }catch(error:any){
        console.log(error)
        toast.error("Error : " + error?.message);
       }
       
    },


    postLike: async(id)=>{
        try{
           const respons = await like.post(id)
           if(respons.status === 201){
               return respons.data;
           }
        }catch(error:any){
            console.log(error)
            toast.error("Error : " + error?.message);
        }
    }

}))

export default useLikeStore

