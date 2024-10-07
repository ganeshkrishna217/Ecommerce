import { createBrowserRouter, Navigate } from "react-router-dom";
import ProductDetails from "../../features/catalogs/ProductDetails";
import Contact from "../../features/contacts/ContactPage";
import Catalog from "../../features/catalogs/Catalog";
import HomePage from "../../features/home/HomePage";
import AboutPage from "../../features/about/AboutPage";
import App from "../layout/app";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/Basket/BasketPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductDetails /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <AboutPage /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "basket", element: <BasketPage /> },
      { path: "*", element: <Navigate replace to="not-found" /> },
    ],
  },
]);
export default router;
