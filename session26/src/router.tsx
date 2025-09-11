import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./pages/Header";
import { Children } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import TaskList from "./pages/TaskList";
import TaskDetail from "./pages/TaskDetail";

const router = createBrowserRouter([
  //bai1

  // {
  //   path: "/",
  //   element: <Header />,
  //       children: [
  //           {path:"/home",element:<Home/>},
  //           {path:"/about",element:<About/>},
  //           {path:"/contact",element:<Contact/>}

  //   ],
  // },

  //bai2
    { path: "/product", element: <ProductList /> },
    { path: "/productDetail/:id", element: <ProductDetail /> }

  //bai3

//   {
//     path: "/", // Trang danh sách công việc
//     element: <TaskList />,
//   },
//   {
//     path: "/task/:id", // Trang chi tiết công việc (id lấy từ URL)
//     element: <TaskDetail />,
//   },
]);
export default router;
