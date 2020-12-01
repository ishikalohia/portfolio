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
              I'm a passionate programmer and a Web Developer. I love to grind
              technology and weld it with creativity and fun into beautiful and
              efficient websites.
            </h3>
          </Grid>
          <Grid item xs={12} sm={12} md={3}></Grid>
        </Grid>
        <Button
          variant="contained"
          color="default"
          size="large"
          className="button"
          href="https://github.com/ishikalohia"
          target="_blank"
        >
          Github
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="button"
          href="https://www.linkedin.com/in/ishika-lohia-30484817a/"
          target="_blank"
        >
          LinkedIn
        </Button>
      </div>
    </>
  );
}
