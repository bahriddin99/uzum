import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { PostData } from "../../../types/interface/product";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductCarts = ({ product }: PostData | any) => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center text-[22px]  ml-[-1100px] font-bold text-3xl">
        {product?.product_name}
      </h1>
      <div className="flex  ml-[35px] items-center gap-3 ">
        <Stack spacing={1} sx={{ paddingY: 1 }}>
          <Rating name="size-medium" defaultValue={3} size="large" />
        </Stack>

        <div className="flex gap-1">
          <button className="bg-white">
          <FavoriteBorderIcon  />
          </button>
          <p className="text-black">Sevimlilarga</p>
        </div>
      </div>
      <div className="bg-black w-full h-[1px]"></div>


      <div className="flex flex-col md:flex-row  items-center gap-[30px]">
        <div className="max-w-[400px] max-h-[600px] ml-6 ">
          <img
            className=" max-h-[450px]  w-full h-full"
            src={product?.image_url}
            alt={product?.product_name}
          />
        </div>
        <div className="p-5  max-w-[450px] mt-[-60px] flex flex-col gap-2 text-xl">
          <p className="  text-gray-500 pl-2">
            Islab chiqarilgan joyi :{" "}
            <span className="text-black pl-2"> {product?.made_in}</span>
          </p>
          <p className="  text-gray-500 pl-2">
            Mahsulot rangi :{" "}
            <span className="text-black"> {product?.color}</span>
          </p>
          <p className=" text-gray-500 pl-2">
            Mahsulot o'lchami :{" "}
            <span className="text-black pl-2"> {product?.size}</span>
          </p>
          <p className="  text-gray-500 pl-2">
            Mahsulot soni :{" "}
            <span className="text-black pl-2">{product?.count} ta</span>
          </p>
          <p className="  text-gray-500 pl-2">
            Chegirma ko'rsatgich :{" "}
            <span className="text-black pl-2">{product?.discount} %</span>{" "}
          </p>
          {/* <del className=" text-gray-500 font-serif pl-12">{product?.cost} UZS</del>  */}

          <p className=" text-gray-500 pl-2">
            {" "}
            Kimlar uchun :{" "}
            <span
              className={
                product?.for_gender == "male"
                  ? "text-black pl-2"
                  : "text-red-500 ml-2"
              }
            >
              {product?.for_gender}
            </span>
          </p>
          <p className=" text-gray-500 pl-2">
            Yosh oraligi :{" "}
            <span className="text-black">
              {product?.age_min} yoshdan - {product?.age_max} yoshgacha
            </span>{" "}
          </p>

          <p
            onClick={() => {
              navigate("/");
            }}
            className=" flex  cursor-pointer rounded-md  p-2 w-[260px] bg-[#299efe]  text-white  "
          >
            ← Asosoiy sahifaga qaytish
          </p>
        </div>

        <div className="border border-black p-6 w-[300px] mt-[-200px]">
          <h1 className="  text-gray-500 pl-2 text-3xl font-bold">
            <span className=" text-black">
              {" "}
              {Math.ceil(
                product?.cost - (product?.cost / 100) * product?.discount
              )}{" "}
              UZS
            </span>
          </h1>
          <button className="border w-full mt-3 p-2 text-2xl font-bold bg-[#299efe] text-white">
            Karzinka
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCarts;
