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
import Snake from "../../assets/snake.JPG";
import Shooting from "../../assets/shooting.JPG";
import sudoku from "../../assets/sudoku.JPG";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
}));

const name = ["Snake Game", "Multiplayer Shooting Game", "Sudoku Solver"];
const image = [Snake, Shooting, sudoku];
const index = [0, 1, 2];
const link = [
  "https://github.com/ishikalohia/snake-ladder",
  "https://github.com/ishikalohia/Shooting_game",
  "https://github.com/ishikalohia/sudoku-solver",
];
const Detials = [
  "Snake Game - eat, grow, repeat! Control a snake using the arrow keys. Grow your snake by eating food/objects.",
  "A multiplayer Shooting game. Multiple users can join and play against each other. The user who get shoot by another player fails.",
  "Sudoku Solver provides users different puzzles. User can enjoy the game and can finally see the Solution",
];

export default function Game() {
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
