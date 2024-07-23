import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { Button, TextField } from "@mui/material";
import Navbar from "./Navbar";
import SearchIcon from '@mui/icons-material/Search';
import Rating from "@mui/material/Rating";

function Home() {
  var b = "Shreyas";
  b = 2;
  const [res, setRes] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      var url = "http://localhost:8080/api/books";
      var response = await axios.get(url);
      setRes(response.data);
      console.log(response.data);
    }
    // useState
    // useEffect

    fetchData();
  }, []);

  console.log(b);
  const x = JSON.stringify(res);

  //declaring function using arrow function
  // const deleteCart = async () => {
  //   let url = "http://localhost:8080/cart/deleteCart";
  //   let res = await axios.post(url);
  //   alert("cart deleted");
  // };

  const searchButton = async () => {
    let url = "http://localhost:8080/api/books/search/" + search;
    let res = await axios.get(url);

    setRes(res.data);
    console.log(res);
  };

  // const viewCart = async () => {
  //   let url = "http://localhost:8080/cart/deleteCart";
  //   let res = await axios.post(url);
  //   alert("cart deleted");
  // };

  //setRes(b); // res = [backend array]
  console.log(search);
  return (
    <div>
      <Navbar />
      <br />
      <TextField
        value={search}
        onChange={function (event) {
          // here in this function
          // i have to set value field above
          // to the new changed value
          // in event.target.value

          setSearch(event.target.value);
        }}
        label="Search"
        variant="outlined"
      />
      <Button onClick={searchButton}><SearchIcon /></Button>
      <br />
      <br />
      <Container fixed>
        <Grid container spacing={4}>
          {res.slice(0, 12).map(function (obj) {
            return (
              <Grid item xs={3}>
                <Link to="/details" state={obj}>
                  <Box>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="150"
                          image={obj.imageUrl}
                          alt={obj.title || "image"}
                          sx={{ objectFit: "cover" }}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {obj.title}
                          </Typography>
                          <Rating name="read-only" value={obj.rating} readOnly />
                          <Typography gutterBottom variant="h6" component="div">
                            ${obj.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
