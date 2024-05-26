import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { blue,  red } from '@mui/material/colors';

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

export const Card = ({ key, data }: { key: string; data: PropsData }) => {
  return (
    <>
      <div className=" border h-[405px] relative overflow-hidden group transition rounded-md hover:shadow-lg">
        <div className="w-full mx-auto flex items-center justify-center overflow-hidden ">
          <img
            src={data.image_url}
            alt={data.product_name}
            className="max-h-[260px] w-full  group-hover:scale-125 duration-300"
          />
          <div className=" absolute -top-5 -right-11 flex flex-col items-center group-hover:right-1  group-hover:top-1 duration-300">
            <IconButton aria-label="add to favorites">
              <FavoriteIcon fontSize="medium" sx={{ color: red[800] }} />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <VisibilityIcon fontSize="medium" sx={{ color: blue[800] }}  />
            </IconButton>
          </div>
        </div>
        <div className="pt-[8px] px-5">
          <h2 className=" text-center mb-[5px] font- font-bold ">
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
          <del className=" text-gray-500 font-serif ">
            {data?.cost} UZS
          </del>
          <p>
            Narxi :{" "}
            <span className=" text-red-500">
              {" "}
              {Math.ceil(data?.cost - (data?.cost / 100) * data?.discount)} UZS
            </span>
          </p>
          <div className=" absolute -right-11 -bottom-5 group-hover:right-1 group-hover:bottom-1 duration-300 border border-red-500 rounded-md">
            <IconButton aria-label="add to favorites">
              <ShoppingCartIcon  sx={{ color: red[500] }} />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};
