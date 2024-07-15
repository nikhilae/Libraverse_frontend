import { useLocation } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// function Details() {
//   const a = useLocation();
//   console.log();

function Details() {
  const a = useLocation().state;

  console.log(a);
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
              <Typography variant="body2" color="text.secondary">
                ${a.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
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
