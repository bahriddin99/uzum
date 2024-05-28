import { Home, About, Service, ErrorPage, Signin,Signup, ProductCart } from "@pages";
import MenuIcon from "@mui/icons-material/Menu";

const router = [
  {
    path: "/",
    element: <Home />,
    // content:"Home",
  },
  {
    path: "/signin",
    element: <Signin />,
    content: "Kirish",
    icon: <MenuIcon />,
  },
  {
    path: "/signup",
    element: <Signup />,
    
    
  },
  {
    path: "/product/:id",
    element: <ProductCart/>,
    
    
  },
  {
    path: "/about",
    element: <About />,
    content: "Saralangan",
    icon: <MenuIcon />,
  },
  {
    path: "/service",
    element: <Service />,
    content: "Savat",
    icon: <MenuIcon />,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default router;
