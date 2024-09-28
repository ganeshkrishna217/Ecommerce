import { Product } from "../app/models/Product";
import Grid from "@mui/material/Grid2";
import Card from "./Cards";

interface Props {
  Products: Product[];
}

function ProductList(props: Props) {
  return (
    <Grid container spacing={3}>
      {props.Products.map((item) => {
        return (
          <Grid size={3}>
            <Card Product={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}
export default ProductList;
