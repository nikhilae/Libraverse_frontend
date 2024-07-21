import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Map from "./Map";
import { Card } from "@mui/material";
function Cart() {
  var [res, setRes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      var url = "http://localhost:8080/cart/fetchCart";
      var response = await axios.get(url);
      setRes(response.data);
      console.log(response.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {res.map((item, index) => (
        <Card key={index}>
          {/* Render item details here, e.g., item.name, item.price, etc. */}
          {item.title}-${item.price}
        </Card>
      ))}
    </div>
  );
}
export default Cart;
