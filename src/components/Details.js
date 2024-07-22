import { useLocation, useNavigate } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
// function Details() {
//   const a = useLocation();
//   console.log();

function Details() {
  const a = useLocation().state;
  const nav = useNavigate();
  var [quantity, setQuantity] = useState(1);

  console.log(a);

  async function addToCartClickFun() {
    console.log("Add to cart button clicked!!");
    // Backend call
    var body = {
      id: a.id,
      title: a.title,
      imageUrl: a.imageUrl,
      quantity: quantity,
      price: a.price,
    };

    var response = await axios.post(
      "http://localhost:8080/cart/addToCart",
      body
    );
    nav("/cart");

    console.log(response);
    // const obj = [obj.title, obj.imageUrl, obj.quantity, obj.price];
    // pOST request
  }

  return (
    <div>
      {
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={a.imageUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {a.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {a.description}
              </Typography>

              <Typography variant="body3" color="text.primary">
                Price: ${a.price}
              </Typography>
              <Typography>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                Quantity &nbsp;
                <Select
                  id="demo-simple-select"
                  value={quantity}
                  onChange={function (event) {
                    // here in this function
                    // i have to set value field above
                    // to the new changed value
                    // in event.target.value
                    setQuantity(event.target.value);
                  }}
                  // when i change dropdown value
                  // onChange event will be triggered
                  // i have to set value/quantity to this new event's value
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
                {/* Quantity selected: {quantity} */}
                {/* <br /> */}
                &nbsp; Book Total: ${a.price * quantity}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Link to="/cart"> */}
            <Button onClick={addToCartClickFun} size="small" color="primary">
              Add to cart
              {/* quantity, price, title, imageURL */}
            </Button>
            {/* </Link> */}

            <Button size="small" color="primary">
              Buy now
            </Button>
          </CardActions>
        </Card>
      }
    </div>
  );
}

export default Details;
