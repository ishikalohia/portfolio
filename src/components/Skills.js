import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Grid from "@material-ui/core/Grid";

const index = [0, 1, 2, 3, 4, 5, 6, 7];
const Skill = [
  "C++ & Data Structures",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "NodeJS",
  "ExpressJs",
  "MongoDB",
];
const per = [90, 95, 90, 80, 75, 80, 70, 65];
const colorCode = [
  "#fa8704ed",
  "#8c00ff",
  "#37d799",
  "#dceb40",
  "#97184580",
  "#4404a1b5",
  "#0a8957ed",
  "#db0d37ed",
];

export default function Skills() {
  return (
    <div className="sections">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md="4">
          <h1 className="title">Skills</h1>
        </Grid>
        <Grid item xs={12} sm={12} md="8">
          {index.map((i) => (
            <Progress
              percent={per[i]}
              theme={{ active: { color: colorCode[i], symbol: Skill[i] } }}
            />
          ))}
        </Grid>
        <hr className="divide" />
      </Grid>
    </div>
  );
}
