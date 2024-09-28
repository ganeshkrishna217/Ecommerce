import { ThemeProvider, createTheme } from "@mui/material/styles";
import Catalog from "../../features/Catalog";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useState } from "react";

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
      <CssBaseline />
      <Header changeMode={changeMode}></Header>
      <Container>
        <Catalog></Catalog>
      </Container>
    </ThemeProvider>
  );
}
export default App;
