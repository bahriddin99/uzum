import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

// import "./style.scss";

interface PropsData {
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

export const Card = ({ key, data }: { key: number; data: PropsData }) => {
  const navigate = useNavigate();

  const navigetBtn = (id: string) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <div className=" border pb-[10px] relative overflow-hidden group transition rounded-md hover:shadow-lg">
        <div className="w-full mx-auto flex items-center justify-center overflow-hidden ">
          <img
          onClick={() => {
            navigetBtn(data?.product_id);
          }}

            src={data.image_url}
            alt={data.product_name}
            className="max-h-[260px] w-full  group-hover:scale-125 duration-300"
          />
          <div className=" absolute -top-5 -right-11 flex flex-col items-center group-hover:right-1  group-hover:top-1 duration-300">
            <IconButton
              aria-label="add to favorites"
              onClick={() => {
                console.log(data.product_id);
              }}
            >
              <FavoriteIcon fontSize="medium" />
            </IconButton>
          </div>
        </div>
        <div className="pt-[8px] px-5">
          <h2
            className=" text-center mb-[5px] font- font-bold  "
            
          >
            {data?.product_name?.length > 25
              ? data?.product_name?.slice(0, 10) + "..."
              : data?.product_name}
          </h2>
          <p>
            {" "}
            Made in : <span className="text-red-500">{data?.made_in}</span>
          </p>
          <p>
            {" "}
            For gender :{" "}
            <span className="text-red-500">{data?.for_gender}</span>
          </p>
          <del className=" text-gray-500 font-serif ">{data?.cost} UZS</del>
          <div className="flex justify-between">
            <p className="bg-[#299efe] rounded-md text-white   p-2">
              Narxi :{" "}
              <span className=" text-white">
                {" "}
                {Math.ceil(
                  data?.cost - (data?.cost / 100) * data?.discount
                )}{" "}
                UZS
              </span>
            </p>
            <div className="border-2 border-[#299efe] rounded-md  ">
              <IconButton aria-label="add to favorites">
                <ShoppingCartIcon sx={{ color: red[500] }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
