import { useState, useEffect } from "react";
import { Product } from "../../app/models/Product";
import Button from "@mui/material/Button";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";

function Catalog() {
  const [Products, setProducts] = useState<Product[]>([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (Loading) return <LoadingComponent message="Loading Products" />;

  function AddProduct() {
    setProducts((prevState) => {
      return [
        ...prevState,
        {
          id: prevState.length + 2024101,
          name: "product" + (Products.length + 1),
          price: 100 * Products.length + 100,
          pictureUrl: "http://picsum/random/101",
          brand: "unkown brand",
        },
      ];
    });
  }
  return (
    <>
      <ProductList Products={Products}></ProductList>
      <Button variant="contained" onClick={AddProduct}>
        ADD Product
      </Button>
    </>
  );
}
export default Catalog;
