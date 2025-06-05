import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
export default function Product() {
  const { user } = useContext(AppContext);
  const [product, setProduct] = useState([]);
  const API = import.meta.env.VITE_API_URL;
  const fetchProduct = async () => {
    const res = await axios.get(`${API}/products/all`);
    setProduct(res.data.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);



   return (
    <div>
      <h3>Welcome {user.name}! </h3>
    Product List
       {product && product.map((value) => <li>{value.name}-${value.price}</li>)}
     </div>
   );
 }