import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
export default function Product() {
  const { user } = useContext(AppContext);
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    const res = await axios.get("http://localhost:8080/product");
    setProduct(res.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);



   return (
    <div>
      <h3>Welcome {user.name}! </h3>
    Product List
       {product && product.map((value) => <li>{value.name}-{value.price}</li>)}
     </div>
   );
 }