import React from "react";
import Grid from "@material-ui/core/Grid";
import { CalendarToday } from "@material-ui/icons";

export default function Work() {
  return (
    <div className="sections">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md="4">
          <h1 className="title">Work</h1>
        </Grid>
        <Grid item xs={12} sm={12} md="8">
          <h1 className="name">YaRaS, Pune, Maharastra</h1>
          <span className="list">
            <b>Role : </b>Web Developer
          </span>
          <span id="date" className="list">
            <CalendarToday />
            June 2020 - November 2020
          </span>
          <h3 className="sub-title"> Job Responsibilities</h3>
          <p className="list">
            Worked as prime member in Development Team. <br />
            Worked on developing company's main e-learing website.
            <br />
            Contibuted in developing Coding course structure for class K-12.
            <br />
            Conducted Platform Awareness sessions with New Teachers. <br />
          </p>
          <h1 className="name">Developer Students Club, MAIT, New Delhi</h1>
          <span className="list">
            <b>Role : </b>Web Developer, Executive Member
          </span>
          <span id="date" className="list">
            <CalendarToday />
            August 2020 - Present
          </span>
          <h3 className="sub-title"> Job Responsibilities</h3>
          <p className="list">
            Working to conduct seminars, webinars and coding events for
            students.
            <br />
            Working on various projects with team as well as individually.
            <br />
            Mentoring and guiding students in Web development.
            <br />
          </p>
          <h1 className="name">PopXo, Luxeva Limited, Gurugram</h1>
          <span className="list">
            <b>Role : </b>Summer Intern
          </span>
          <span id="date" className="list">
            <CalendarToday />
            June 2019 - July 2019
          </span>
          <h3 className="sub-title"> Job Responsibilities</h3>
          <p className="list">
            Worked with Technology Team on Databases.
            <br />
            Worded for building Web Scraper for Company's Story Page.
            <br />
            Learned about Python and created Projects on Django.
            <br />
          </p>
        </Grid>
      </Grid>
      <hr className="divide" />
    </div>
  );
}
