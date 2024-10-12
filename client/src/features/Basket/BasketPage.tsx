import { Button, Grid, Typography } from "@mui/material";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { UseAppSelector } from "../../app/store/ConfigureStore";
import BasketTable from "./BasketTable";

export default function BasketPage() {
  const { basket } = UseAppSelector((state) => state.basket);

  if (!basket) return <Typography variant="h3">Your Cart is Empty</Typography>;
  return (
    <>
      <BasketTable items={basket.items} />
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary />
          <Button
            color="primary"
            size="large"
            fullWidth
            variant="contained"
            component={Link}
            to="/checkout"
          >
            CHECKOUT
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
