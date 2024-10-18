import { Box, Button, Grid, Typography } from "@mui/material";
import { Order } from "../../app/models/Order";
import BasketTable from "../Basket/BasketTable";
import { BasketItem } from "../../app/models/Basket";
import BasketSummary from "../Basket/BasketSummary";

interface Props {
  order: Order;
  setSelectedOrder: (id: number) => void;
}

export default function OrderDetailed({ order, setSelectedOrder }: Props) {
  const subtotal =
    order.orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ) ?? 0;

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom sx={{ p: 2 }}>
          Order# {order.id} - {order.orderStatus}{" "}
        </Typography>
        <Button
          onClick={() => setSelectedOrder(0)}
          variant="contained"
          size="large"
          sx={{
            m: 2,
            backgroundColor: "#00897b",
            "&:hover": { backgroundColor: "#424242" },
          }}
        >
          Back to orders
        </Button>
      </Box>
      <BasketTable isBasket={false} items={order.orderItems as BasketItem[]} />
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary subtotal={subtotal} />
        </Grid>
      </Grid>
    </>
  );
}
