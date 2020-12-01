import React from "react";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import image from "../assets/girl-sitting-with-laptop-with-crossed-legs-vector-25970282-removebg-preview.png";

export default function About() {
  return (
    <div id="about">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          {" "}
          <center>
            <img src={image} className="about-image" alt="laptop" />
          </center>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1 className="about-head">About Me</h1>
          <p className="about-content">
            I am Computer Science student pursuing my bachelor's degree from
            MAIT, Delhi. Coding, programming, development has always been my
            interest. I'm a passionate programmer and a Web Developer. I love to
            grind technology and weld it with creativity and fun into beautiful
            and efficient websites. I have worked on multiple projects on
            individual level as well as with different organization.
            <br />
            In addition to that I am connected with various cummunities like
            Vahani, defhacks, DSC Mait etc. I am always interested in helping
            other communities, mentoring student, conducting webinars.
          </p>
          <Button
            variant="contained"
            color="default"
            size="large"
            className="button"
            href="https://drive.google.com/file/d/1zLIL8zSVQN-WBDr51Ji-vjHphrN1X-vO/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </Button>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
    </div>
  );
}
