import { Home, About, Service, ErrorPage, Signin,Signup, ProductCart } from "@pages";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const router = [
  // {
  //   path: "/",
  //   element: <Home />,
  //   // content:"Home",
  // },
  {
    path: "/signin",
    element: <Signin />,
    content: " Войти",
    icon: <PersonOutlineIcon />,
  },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  
    
  // },
  // {
  //   path: "/product/:id",
  //   element: <ProductCart/>,
    
    
  // },
  {
    path: "/about",
    element: <About />,
    content: "Избранное",
    icon: <FavoriteBorderIcon />,
  },
  {
    path: "/service",
    element: <Service />,
    content: "Корзина",
    icon: <ShoppingCartIcon />,
  },

  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
];

export default router;
