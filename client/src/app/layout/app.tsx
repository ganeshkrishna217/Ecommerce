import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/ConfigureStore";
import { fetchBasketAsync } from "../../features/Basket/BasketSlice";
import { fetchCurrentUser } from "../../features/account/AccountSlice";
import HomePage from "../../features/home/HomePage";

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [Loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  const [darkTheme, setDarkTheme] = useState(false);
  const paletteType = darkTheme ? "dark" : "light";
  const darkmode = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: darkTheme ? "#121212" : "#eaeaea",
      },
    },
  });

  function changeMode() {
    setDarkTheme(!darkTheme);
  }

  if (Loading) return;

  return (
    <ThemeProvider theme={darkmode}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header changeMode={changeMode}></Header>
      {Loading ? (
        <LoadingComponent message="Intializing App ..." />
      ) : location.pathname === "/" ? (
        <HomePage />
      ) : (
        <Container sx={{ mt: 4 }}>
          <Outlet />
        </Container>
      )}
    </ThemeProvider>
  );
}
export default App;
