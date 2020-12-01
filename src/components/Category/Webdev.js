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
const details = [
  "Conversational Voice Controlled React News Application using Alan AI It allows you to control absolutely everything in the app using your voice.",
  "IPL Dashboard visualizing data from 2008-16. The dashboard displays all the teams and seasons summary. The data is parsed from a CSV file and represented in a structured manner.",
  "An Instructor led e-learning platform for K-12 students. The website is in use by a startup YaRaS. This is the main platform used for buying courses and conducting classes",
  "DSC MAIT official Website. Worked on landing page which give users a page where they can know more about DSC MAIT",
  "Portfolio Website made in reactJs. The website provides complete Educational and work information about me.",
  "A real Time chat application where multiple users can join-in in different rooms and talk to each other. The application used reactJs and Socket.io",
  "A real-life web application where users can add their camping experience and campground details. The website has a well-designed database.",
  "Javascript based Color Application where user have to select correct color based on rgb code. The game has different level.",
  "Patatap is a website that lets you press keys and it makes sounds. I have used PaperJS, HowlerJS and basic jQuery to make this work.",
  "A Facebook Echo bot which user can link with their Facebook Pages. The bot will echo whatever the user types.",
  "A javascript based Application where users can enter their To-Do. They can enter any number of items and can delete or cut-out the done tasks.",
  "A Web ApPlication which provides users all the basic info about COVID-19 like What is Covid? its symptoms, help lines, Do-don'ts etc",
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
                    {details[i]}
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
