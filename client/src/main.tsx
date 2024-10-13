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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);
