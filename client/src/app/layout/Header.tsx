import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { Badge, Box, IconButton, List, ListItem } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { UseAppSelector } from "../store/ConfigureStore";

interface Props {
  changeMode: () => void;
}
const primaryLinks = [
  { title: "products", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];
const secondaryLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];
const sxProp = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": { color: "grey.500" },
  "&.active": { color: "secondary.main" },
};
function Header(props: Props) {
  const { basket } = UseAppSelector((state) => state.basket);
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" component={NavLink} to={"/"} sx={sxProp}>
              BKG_Store
            </Typography>
            <Switch onChange={props.changeMode}></Switch>
          </Box>
          <List sx={{ display: "flex" }}>
            {primaryLinks.map((item) => {
              return (
                <ListItem
                  component={NavLink}
                  to={item.path}
                  key={item.path}
                  sx={sxProp}
                >
                  {item.title.toUpperCase()}
                </ListItem>
              );
            })}
          </List>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              component={Link}
              to="/basket"
              size="large"
              edge="start"
              color="inherit"
              sx={{
                mr: 2,
                ml: 2,
                "&:hover": { color: "grey.500" },
                "&.active": { color: "secondary.main" },
              }}
            >
              <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCart></ShoppingCart>
              </Badge>
            </IconButton>
            <List sx={{ display: "flex" }}>
              {secondaryLinks.map((item) => {
                return (
                  <ListItem
                    component={NavLink}
                    to={item.path}
                    key={item.path}
                    sx={sxProp}
                  >
                    {item.title.toUpperCase()}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
