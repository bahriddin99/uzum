export interface PostData {
  product_id: string;
    product_name: string;
    category_id: string;
    description: string;
    made_in: string;
    color: string;
    size: number;
    count: number;
    cost: number;
    discount: number;
    age_min: number;
    age_max: number;
    for_gender: string;
    image_url: string;
}

export interface UpdateData extends PostData {
  product_id: string;
}

export interface getParams {
  page: number;
  limit: number;
  name?: string;
}

export interface Product {
  get: (params: getParams) => any;
  getId : (id:string | undefined)=> any,
  like_product: (id:string) => any
  get_liked_products: () => any
}

        
export interface StoreProduct {
  isLoader: boolean;
  data: any[];
  totlCount: number;
  getProduct: (params: getParams) => Promise<any>;
  getIdProduct:(id:string | undefined)=>Promise<any>;
  likeProduct: (id:string) => void
    getLikedProducts: () => void
}
