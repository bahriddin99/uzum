import { NavLink } from "react-router-dom";
import { Container } from "@containers";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Links from "@router-files";
import logo from "@images/react.svg";
``;
import "./style.scss";

const index = () => {
  return (
    <header className="bg-slate-900">
      <Container>
        <nav className="flex justify-between items-center h-[70px]">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <button className="text-[18px] hover:shadow-md duration-200 active:shadow-none  text-white py-[10px] px-3 border rounded-md ">
            <MenuIcon /> <span>Katalog</span>
          </button>
          <div className=" relative w-[500px]  rounded-md h-[48px]">
                <input
                  type="text"
                  className="w-full h-full rounded-md  outline-none pl-3  pr-14 text-[16px] placeholder:text-black text-black border"
                  placeholder="Mahsulotlar izlash"
                />
                <button className=" absolute right-0 top-0 text-slate-100 rounded-r-md py-[11.7px] px-3 bg-gray-500">
                  <SearchIcon />
                </button>
              </div>
          <ul className="flex gap-x-8">
            {Links?.map((link: any) => {
              return (
                <li key={link.path}>
                  <NavLink className="text-white" to={link.path}>
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
