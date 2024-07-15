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

function Books1() {
  var b = "Shreyas";
  b = 2;
  const [res, setRes] = useState([]);

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

  //setRes(b); // res = [backend array]

  return (
    <div>
      BookStore
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

export default Books1;
