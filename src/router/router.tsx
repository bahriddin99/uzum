import { Home, About, Service, ErrorPage, Signin } from "@pages";
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
