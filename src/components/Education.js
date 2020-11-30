import React from "react";
import Grid from "@material-ui/core/Grid";
import { CalendarToday } from "@material-ui/icons";

export default function Education() {
  return (
    <div className="sections">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md="4">
          <h1 className="title">Education</h1>
        </Grid>
        <Grid item xs={12} sm={12} md="8">
          <h1 className="name">
            Maharaja Agrasen Institute of Technology, New Delhi
          </h1>
          <span className="list">Btech (Computer Science)</span>
          <span id="date" className="list">
            <CalendarToday />
            2018-2022
          </span>
          <p>Aggregate CGPA : 9.4</p>
          <h3 className="sub-title"> Modules Attended</h3>
          <p className="list">
            Data Structure in C and C++ <br />
            Java Programming <br />C Language <br />
            Algorithms design and Analysis <br /> Software Engineering <br />{" "}
            Digital Communication <br /> Database Management System (MySQL)
          </p>
        </Grid>
      </Grid>
      <hr className="divide" />
    </div>
  );
}
