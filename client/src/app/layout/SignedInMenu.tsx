import { Button, Fade, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../store/ConfigureStore";
import { signOut } from "../../features/account/AccountSlice";
import { clearBasket } from "../../features/Basket/BasketSlice";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function SignedInMenu() {
  const dispatch = useAppDispatch();
  // const { user } = UseAppSelector((state) => state.account);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick} color="inherit" sx={{ typography: "h6" }}>
        <AccountCircleIcon
          fontSize="large"
          sx={{
            color: "inherit",
            "&:hover": { color: "grey.500" },
            "&.active": { color: "#1b5e20" },
          }}
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem component={Link} to="/orders">
          My orders
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(signOut());
            dispatch(clearBasket());
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
