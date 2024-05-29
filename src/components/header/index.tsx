import { Link, NavLink } from "react-router-dom";
import { Container } from "@containers";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Links from "@router-files";
import { PhoneIcon } from "../../assets/icons/phone-icon";
import logo from "../../assets/images/logo.png";
import PlaceIcon from "@mui/icons-material/Place";
``;
import "./style.scss";

const index = () => {
  return (
    <header className="border-b-2 z-[50] bg-white fixed top-0 left-0 right-0 shadow-sm ">
      <div className=" max-sm:hidden py-2 bg-[#FCFCFC] ">
        <div className="container flex justify-between ">
          <div className="hover:text-[#36B7F7] text-black  transition-all duration-300">
            <a className="flex items-center gap-2" href="#">
              <PlaceIcon />
              Uzbekistan
            </a>
          </div>
          <div className="flex items-center justify-end gap-6">
            <div className="hover:text-[#36B7F7] text-black  transition-all duration-300">
              <NavLink>Yetkazib berish va to'lash</NavLink>
            </div>
            <div className="hover:text-[#36B7F7] text-black  transition-all duration-300">
              <NavLink>Qabul qilish punktlari</NavLink>
            </div>
            <div className="hover:text-[#36B7F7] text-black transition-all duration-300">
              <NavLink>Qo'llab-quvvatlash</NavLink>
            </div>
            <div className="hover:text-[#36B7F7] text-black  transition-all duration-300">
              <a className="flex items-center gap-4" href="tel:+998332000607">
                <PhoneIcon />
                +998(90)-647-79-99
              </a>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <nav className="flex justify-between items-center  mt-3 mb-3">
          <div className="w-[130px] sm:w-[110px] flex items-center justify-center">
            <Link to="/">
              <img className="w-[120px]" src={logo} alt="" />
            </Link>
          </div>
          <button className="text-[18px] hover:shadow-md duration-200 active:shadow-none items-center gap-2 flex  text-white py-[10px] px-3 border  rounded-md  ">
            <MenuIcon className="text-[#7000FF]"  />
            <span className="text-[#7000FF]">Katalog</span>
          </button>

          <div className=" relative w-[500px]  rounded-md h-[48px]">
            <input
              type="text"
              className="w-full h-full rounded-md  outline-none pl-3   pr-14 text-[16px] placeholder:text-black text-black border"
              placeholder="Mahsulotlar izlash"
            />
            <button className=" absolute right-0 top-0  text-slate-100 rounded-r-md py-[11px] px-3">
              <SearchIcon sx={{ color: "black" }} />
            </button>
          </div>

          <ul className="flex gap-3 items-center">
            {Links?.map((link: any) => {
              return (
                <li key={link.path}>
                  <NavLink
                    className="text-black flex items-center gap-2  hover:border-black p-2 rounded-md hover:shadow-md duration-200 active:shadow-none"
                    to={link.path}
                  >
                    {link.icon}
                    {link.content}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default index;
