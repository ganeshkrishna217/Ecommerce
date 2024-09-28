import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

interface Props {
  changeMode: () => void;
}

function Header(props: Props) {
  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6">BKG_Store</Typography>
          <Switch onChange={props.changeMode}></Switch>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
