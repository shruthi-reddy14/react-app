
// import React, { useEffect, useState } from "react";
// import { useContext } from "react";
// import { AppContext } from "../App";
// import axios from "axios";
// export default function Product() {
//   const { user } = useContext(AppContext);
//   const [product, setProduct] = useState([]);
//   const API = import.meta.env.VITE_API_URL;
//   const fetchProduct = async () => {
//     const res = await axios.get(`${API}/products/all`);
//     setProduct(res.data.data);
//   };
//   useEffect(() => {
//     fetchProduct();
//   }, []);



//    return (
//     <div>
//       <h3>Welcome {user.name}! </h3>
//     Product List
//        {product && product.map((value) => <li>{value.name}-${value.price}</li>)}
//      </div>
//    );
//  }

import React, { useEffect, useState } from "react";
import { useContext } from "react"; 



import { AppContext } from "../App";
import axios from "axios";

export default function Product() {
  const { user } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const API = import.meta.env.VITE_API_URL;
  const fetchProducts = async () => {
    // const res = await axios.get(`${API}/products/all`);
    const res = await axios.get(`https://node-app-gamma.vercel.app/products/all`);
    console.log(res.data);
    setProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h3>Welcome {user.name}! </h3>
      <div className="App-Product-Row">
        {products &&
          products.map((value) => (
            <div key={value._id}>
              <h3>{value.name}</h3>
              <h4>{value.price}</h4>
              <button>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
}