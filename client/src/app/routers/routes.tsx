import { createBrowserRouter, Navigate } from "react-router-dom";
import ProductDetails from "../../features/catalogs/ProductDetails";
import Contact from "../../features/contacts/ContactPage";
import Catalog from "../../features/catalogs/Catalog";
import AboutPage from "../../features/about/AboutPage";
import App from "../layout/app";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/Basket/BasketPage";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
import RequireAuth from "./RequireAuth";
import Orders from "../../features/orders/Orders";
import CheckoutWrapper from "../../features/checkout/CheckoutWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <RequireAuth />,

        children: [
          { path: "checkout", element: <CheckoutWrapper /> },
          { path: "orders", element: <Orders /> },
        ],
      },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductDetails /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <AboutPage /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "basket", element: <BasketPage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <Navigate replace to="not-found" /> },
    ],
  },
]);
export default router;
