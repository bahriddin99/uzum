import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Links from "@router-files";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        {Links?.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default index;
