import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Map from "./Map";
import { Card, Grid } from "@mui/material";
import { CardMedia } from "@mui/material";
import Container from "@mui/material/Container";
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
      <Container fixed>
        <Grid container spacing={4}>
          {res.map((item) => (
            <Grid item xs={3}>
              <Card>
                {/* Render item details here, e.g., item.name, item.price, etc. */}
                {item.title}-${item.price}
                <CardMedia
                  component="img"
                  height="200"
                  width="50"
                  image={item.imageUrl}
                  // alt={obj.title || "image"}
                  // sx={{ objectFit: "cover" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export default Cart;
