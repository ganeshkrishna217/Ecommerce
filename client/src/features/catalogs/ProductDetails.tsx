import {
  Divider,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/Product";
import agent from "../../app/api/agent";
import NotFound from "../../app/errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponent";

function ProductDetails() {
  const { id } = useParams<string>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    id &&
      agent.Catalog.details(parseInt(id))
        .then((Response) => setProduct(Response))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingComponent message="Loading Product" />;
  if (!product) return <NotFound />;
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <img
          src={product.pictureUrl}
          alt={product.name}
          style={{ width: "100%" }}
        ></img>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2 }}></Divider>
        <Typography variant="h4" color="secondary">
          INR {(product.price / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{product.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell>{product.brand}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>{product.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>{product.type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Quantity in Stock</TableCell>
              <TableCell>{product.quantityInStock}</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
export default ProductDetails;
