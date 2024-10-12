import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { formatCurrency } from "../../app/util/util";
import { UseAppSelector } from "../../app/store/ConfigureStore";

interface Props {
  subtotal?: number;
}

export default function BasketSummary({ subtotal }: Props) {
  const { basket } = UseAppSelector((state) => state.basket);
  if (subtotal == undefined) {
    subtotal = basket
      ? basket.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      : 0;
  }

  const deliveryFee =
    subtotal === 0 ? 0 : subtotal < 100000 ? 5000 + subtotal / 10 : 0;

  return (
    <>
      <TableContainer component={Paper} variant={"outlined"}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{formatCurrency(subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Delivery fee*</TableCell>
              <TableCell align="right">{formatCurrency(deliveryFee)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">
                {formatCurrency(subtotal + deliveryFee)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span style={{ fontStyle: "italic" }}>
                  *Minimum delivery Fee is INR 50 for any order below INR 1000
                </span>
                <br />
                <span style={{ fontStyle: "italic" }}>
                  *Orders over INR 1000 qualify for free delivery
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
