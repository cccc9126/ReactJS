import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> }, 
      { path: "product", element: <Product /> },
      { path: "detail", element: <Detail /> },
    ],
  },
]);

export default router;
