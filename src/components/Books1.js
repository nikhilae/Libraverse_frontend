import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

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
      <Grid container spacing={4}>
        {res.slice(0, 12).map(function (obj) {
          return (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={obj.imageUrl}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {obj.title}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                  {obj.description}
                </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Books1;
