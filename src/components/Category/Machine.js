import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Face from "../../assets/face.JPG";
import Harry from "../../assets/harry.JPG";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
}));

const name = ["Face Recogination", "harry Potter Invisibility Clock"];
const image = [Face, Harry];
const index = [0, 1];
const link = [
  "https://github.com/ishikalohia/Face-Detection",
  "https://github.com/ishikalohia/invisiblity-clock",
];
const Details = [
  "A face Detection project using python and openCV. The application will use webcam to find a face and highlight it with a square.",
  "Harry Potter Invisiblity-Clock application using openCV and numpy. User can use a Red Coloured cloth as their invisibility clock to make themselves invisible.",
];

export default function Machine() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {index.map((i) => (
          <Grid item sm={12} sm={12} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image[i]}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {name[i]}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {Details[i]}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={link[i]}
                  target="_blank"
                >
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
