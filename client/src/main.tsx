import { StrictMode } from "react";
import "./app/layout/app.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import router from "./app/routers/routes";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { StoreProvider } from "./app/context/StoreContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </StrictMode>
);
