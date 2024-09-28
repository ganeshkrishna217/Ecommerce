import { useState, useEffect } from "react";
import { Product } from "../app/models/Product";
import Button from "@mui/material/Button";
import ProductList from "./ProductList";

function Catalog() {
  const [Products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

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
