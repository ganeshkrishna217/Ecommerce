import { StrictMode } from "react";
import "./app/layout/app.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import router from "./app/routers/routes";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Store } from "./app/store/ConfigureStore";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
