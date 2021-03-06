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
import splitwise from "../../assets/splitwise.JPG";
import texteditor from "../../assets/texteditor.JPG";
import path from "../../assets/path.JPG";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const name = ["Splitwise", "Shortest Path", "Text Editor"];
const image = [splitwise, path, texteditor];
const index = [0, 1, 2];
const link = [
  "https://github.com/ishikalohia/Splitwise",
  "https://github.com/ishikalohia/shortest-path",
  "https://github.com/ishikalohia/text-editor",
];
const Detials = [
  "A web-application displaying the logic used in popular Splitwise App. It shows different puzzles where there is a complex transition happening between a group of people. The logic provides a simplified way to complete the transition.",
  "A Web-application displaying the use of Dijkstra's Alogorithm in various map based app. It provide the shortest path between different places displayed in a puzzle.",
  "This web-application showcase the use of stack in different text editor. The user can type in the test area and the application will show how stack is being used internally.",
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
                    {Detials[i]}
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
