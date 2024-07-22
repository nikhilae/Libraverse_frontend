import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Map from "./Map";
import { Card, CardActions, CardContent, Grid } from "@mui/material";
import { CardMedia } from "@mui/material";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";

function Cart() {
  var totalSum = 0;
  var [res, setRes] = useState([]);

  // var [count, setCount] = useState(1);

  useEffect(() => {
    async function fetchData() {
      var url = "http://localhost:8080/cart/fetchCart";
      var response = await axios.get(url);
      setRes(response.data);
      console.log(response.data);
    }

    fetchData();
  }, []);

  res.map((item) => {
    totalSum += item.price * item.quantity;
  });

  const deleteCartItem = async (a) => {
    let url = "http://localhost:8080/cart/deleteCartItem/" + a;
    let res1 = await axios.post(url);
    setRes(res1.data);
    console.log(res1.data);
    alert("cart item deleted");
  };

  const update = async (id, quantity) => {
    let url =
      "http://localhost:8080/cart/updateCartQuantity/" + id + "/" + quantity;
    let res2 = await axios.put(url);
    setRes(res2.data);
  };

  return (
    <div>
      <Container fixed>
        <Grid container spacing={4}>
          {res.map((item) => (
            <Grid item xs={3}>
              <Card>
                {/* Render item details here, e.g., item.name, item.price, etc. */}
                {item.title}-${item.price}
                <br />
                {item.quantity}
                <br />
                <CardMedia
                  component="img"
                  height="200"
                  width="50"
                  image={item.imageUrl}
                  // alt={obj.title || "image"}
                  // sx={{ objectFit: "cover" }}
                />
                <CardActions>
                  <CardContent>
                    <Button
                      onClick={() => deleteCartItem(item.id)}
                      size="small"
                      color="primary"
                    >
                      Delete Item
                    </Button>

                    <Button
                      onClick={function (e) {
                        update(item.id, item.quantity + 1);
                      }}
                    >
                      +
                    </Button>
                    <Button
                      onClick={function (e) {
                        update(item.id, item.quantity - 1);
                      }}
                    >
                      -
                    </Button>
                    {/* <NumberInput
                      // slotProps={{
                      //   input: { className: "my-num-input" },
                      //   incrementButton: { direction: "UP" },
                      //   decrementButton: { direction: "DOWN" },
                      // }}

                      value={count}
                      onChange={function (event) {
                        setCount(event.target.value);
                      }}
                    /> */}
                  </CardContent>
                </CardActions>
                {/*  */}
              </Card>
            </Grid>
          ))}
        </Grid>
        <br />
        Total price =${totalSum.toFixed(2)}
      </Container>
    </div>
  );
}
export default Cart;
