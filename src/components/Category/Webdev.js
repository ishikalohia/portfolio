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
import alan from "../../assets/alan.JPG";
import Chatapp from "../../assets/Chatapp.JPG";
import Colorgame from "../../assets/Colorgame.JPG";
import Corona from "../../assets/corona.JPG";
import dscmait from "../../assets/dscmait.JPG";
import Facebook from "../../assets/Facebook.JPG";
import ipl from "../../assets/ipl.JPG";
import Patarap from "../../assets/Patarap.JPG";
import portfolio from "../../assets/portfolio.JPG";
import todo from "../../assets/todo.JPG";
import Yaras from "../../assets/Yaras.JPG";
import Yelpcamp from "../../assets/Yelpcamp.JPG";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const name = [
  "Voice-Controlled News Application",
  "IPL Dashboard",
  "Yaras",
  "DSC-MAIT Website",
  "Portfolio",
  "React Chat App",
  "YelpCamp",
  "Color Game",
  "Patarap",
  "Facebook Bot",
  "To-do List",
  "Corona Checklist",
];
const image = [
  alan,
  ipl,
  Yaras,
  dscmait,
  portfolio,
  Chatapp,
  Yelpcamp,
  Colorgame,
  Patarap,
  Facebook,
  todo,
  Corona,
];
const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const link = [
  "https://news-app-best.herokuapp.com/",
  "https://ipl-dashboard-1.herokuapp.com/",
  "https://www.yaras.in/",
  "https://dscmait.xyz/#/",
  "https://github.com/ishikalohia/portfolio",
  "https://5f8d6153ea9a901b9f4a805d--confident-wilson-98453d.netlify.app/",
  "https://fathomless-fortress-27104.herokuapp.com/",
  "https://github.com/ishikalohia/Colorgame",
  "https://github.com/ishikalohia/Patarap",
  "https://github.com/ishikalohia/facebook-chatbot",
  "https://github.com/ishikalohia/To-do-list",
  "https://github.com/ishikalohia/Cov-CheckList",
];

export default function Webdev() {
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
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
                  Share
                </Button> */}
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
