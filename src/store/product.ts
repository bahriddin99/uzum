import create from "zustand";
import { toast } from "react-toastify";
import { StoreProduct } from "@product";
import { product } from "../service/product/product";

const useProductStore = create<StoreProduct>((set) => ({
  isLoader: false,
  data: [],
  totlCount: 0,
  getProduct: async (data) => {
    try {
      set({ isLoader: true });
      const respons = await product.get(data);
      console.log(respons);
      if (respons.status === 200) {
        set({ data: respons?.data?.products });
        set({ totlCount: respons?.data?.total_count });
      }
      set({ isLoader: false });
    } catch (error: any) {
      console.log(error);
      toast.error("Error : " + error?.message);
    }
  },
  getIdProduct: async (id) => {
    try {
      const respons = await product.getId(id);
      //
      if (respons.status === 200) {
        return respons.data;
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Error : " + error?.message);
    }
  },
}));

export default useProductStore;
