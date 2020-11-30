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
            interest. My tech stack mostly includes some programming language
            like C++, C, python, JavaScript, web development etc. Currently I am
            working as a web developer with a startup and building an e-learning
            platform. In addition to that I am connected with various
            organizations like Vahani, defhacks, DSC Mait etc. As a part of DSC
            Mait, I am working to guide new programmers and conduct different
            tech based webinars. I am always interested in helping other
            communities, mentoring student, conducting webinars.{" "}
          </p>
          <Button
            variant="contained"
            color="default"
            size="large"
            className="button"
          >
            Download CV
          </Button>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
    </div>
  );
}
