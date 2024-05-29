import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Links from "@router-files";

import  {Signup,Home,ProductCart,ErrorPage}  from "@pages";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Signup />}/>
        <Route path="/product/:id" element={<ProductCart/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        {Links?.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default index;
