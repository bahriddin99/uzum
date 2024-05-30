import { useNavigate } from "react-router-dom";
import { PostData } from "../../../types/interface/product";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useLikeStore from "../../../store/like";
import { ToastContainer } from "react-toastify";
import { getCookies } from "@cooki";
import { toast } from "react-toastify";
import { useState } from "react";
import Notifation from "@notifation";
const ProductCarts = ({ product }: PostData | any) => {
  const navigate = useNavigate();
  const { postLike } = useLikeStore();
  // const [count, setCount] = useState(1);

  const btnLike = async (id: string) => {
    if (getCookies("user_id")) {
      const like = await postLike(id);
      if (like == true) {
        Notifation({
          title: "Tizimga muvaffaqiyatli qo'shildi",
          type: "success",
        });
      } else if (like == false) {
        toast.info("removed from the list");
      }
    } else {
      toast.info("You are not logged in");
    }
  };
  return (
    <>
      <ToastContainer />
      <h1 className="text-center text-[36px] pb-3  ml-[-1100px] font-bold text-3xl">
        {product?.product_name}
      </h1>

      <div className="flex flex-col md:flex-row  mb-6 items-center gap-[30px]">
        <div className="max-w-[700px] flex rounded-md  max-h-[600px]  border-2  ml-6 ">
          <img
            className=" max-h-[450px]  "
            src={product?.image_url}
            alt={product?.product_name}
          />
          <div className="p-4 ">
            <button
              className="bg-white ml-[-40px]"
              onClick={() => {
                btnLike(product?.product_id);
              }}
            >
              <FavoriteBorderIcon />
            </button>
          </div>
        </div>
        {/* <div className='flex items-center gap-5 border p-2 rounded-md'>
              
              <button  className=' text-[22px]' disabled={count == 1} onClick={()=>{setCount(count -1)}}><RemoveIcon /></button>
               <span className='text-[20px]'>{count}</span>
              <button className=' text-[22px]' onClick={()=>{setCount(count + 1)}} disabled={count == product?.count}><AddIcon /></button>
             </div> */}
        <div className="mt-[-100px]">
          <span className=" text-black  gap-8 flex items-center">
            <p className="text-xl text-slate-500">Narxi</p>{" "}
            <p className="text-2xl font-bold">
              {Math.ceil(
                product?.cost - (product?.cost / 100) * product?.discount
              )}{" "}
              USZ
            </p>
          </span>
          <div className=" w-[300px] pb-4">
            <button className="border w-full mt-3 p-2 text-2xl font-bold bg-[#7000FF] rounded-md text-white">
              Xarid qilish
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-slate-500">
              {" "}
              <LocalShippingIcon sx={{ bgcolor: "text-slate-400" }} /> Yetkazib
              berish O’zbekiston bo’ylab
            </h1>
            <h1 className="text-slate-500">
              {" "}
              <StoreIcon /> Do’kondi o’zidan olib ketishingiz mumkin
            </h1>
            <h1 className="text-slate-500">
              {" "}
              <AccessTimeIcon /> Tahminiy yetkazib berish vaqti 1 kundan 3
              kungacha......
            </h1>
          </div>
        </div>
      </div>

      <div className="p-5  max-w-[450px]  flex flex-col gap-2 text-xl">
        <h1 className="pl-2 font-bold text-2xl pb-4">Xususiyatlar</h1>
        <div className="w-[500px]  ">
          <div className="w-[400px] gap-2 flex flex-col">
            <p className="  text-gray-500 pl-2  flex justify-between ">
              Islab chiqarilgan joyi
              <span className="text-gray-500 pl-2 "> {product?.made_in}</span>
            </p>
            <h1 className="border border-dashed h-[1px] border-gray-500"></h1>
            <p className="  text-gray-500 pl-2   flex justify-between">
              Mahsulot rangi
              <span className="text-gray-500"> {product?.color}</span>
            </p>
            <h1 className="border border-dashed h-[1px] border-gray-500"></h1>
            <p className=" text-gray-500 pl-2  flex justify-between">
              Mahsulot o'lchami
              <span className="text-gray-500 pl-2 flex justify-between">
                {" "}
                {product?.size}
              </span>
            </p>
            <h1 className="border border-dashed h-[1px] border-gray-500"></h1>
            <p className="  text-gray-500 pl-2   flex justify-between">
              Mahsulot soni
              <span className="text-gray-500 pl-2 flex justify-between">
                {product?.count} ta
              </span>
            </p>
            <h1 className="border border-dashed h-[1px] border-gray-500"></h1>
            <p className="  text-gray-500 pl-2   flex justify-between">
              Chegirma ko'rsatgich
              <span className="text-gray-500 pl-2 flex justify-between">
                {product?.discount} %
              </span>{" "}
            </p>
            <h1 className="border border-dashed h-[1px] border-gray-500"></h1>

            <p className=" text-gray-500 pl-2  flex justify-between ">
              {" "}
              Kimlar uchun
              <span
                className={
                  product?.for_gender == "male"
                    ? "text-gray-500 pl-2"
                    : "text-red-500 ml-2"
                }
              >
                {product?.for_gender}
              </span>
            </p>
            <h1 className="border border-dashed h-[1px] border-gray-500"></h1>
            <p className=" text-gray-500 pl-2 flex justify-between ">
              Yosh oraligi
              <span className="text-gray-500">
                ({product?.age_min} - {product?.age_max} )
              </span>{" "}
            </p>
            <h1 className="border border-dashed h-[1px] border-gray-500"></h1>
          </div>
        </div>

        <p
          onClick={() => {
            navigate("/");
          }}
          className=" flex  cursor-pointer rounded-md  p-2 w-[38px] bg-[#7000FF]  text-white  "
        >
          ←
        </p>
      </div>
    </>
  );
};

export default ProductCarts;
