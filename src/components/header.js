import React from "react";
import ParticlesBg from "particles-bg";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default function header() {
  return (
    <>
      <div id="header">
        <ParticlesBg type="circle" bg={true} />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 id="Head-text">Hii, I'm Ishika</h1>
          </Grid>

          <Grid item xs={12} sm={12} md={3}></Grid>
          <Grid item xs={12} sm={12} md={6}>
            <h3 id="head-para">
              I am a web development engineer and I use react and python to
              develop pages. This project is a resume template that can be used
              as the project home page or resume page.
            </h3>
          </Grid>
          <Grid item xs={12} sm={12} md={3}></Grid>
        </Grid>
        <Button
          variant="contained"
          color="default"
          size="large"
          className="button"
        >
          Github
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="button"
        >
          LinkedIn
        </Button>
      </div>
    </>
  );
}
