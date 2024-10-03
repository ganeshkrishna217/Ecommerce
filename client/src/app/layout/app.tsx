import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
  return (
    <ThemeProvider theme={darkmode}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header changeMode={changeMode}></Header>
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}
export default App;
