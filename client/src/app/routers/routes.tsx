import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../../features/catalogs/ProductDetails";
import Contact from "../../features/contacts/ContactPage";
import Catalog from "../../features/catalogs/Catalog";
import HomePage from "../../features/home/HomePage";
import AboutPage from "../../features/about/AboutPage";
import App from "../layout/app";

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
    ],
  },
]);
export default router;
