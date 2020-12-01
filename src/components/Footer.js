import React from "react";
import { LinkedIn, Twitter, Instagram, GitHub, Mail } from "@material-ui/icons";
import Link from "@material-ui/core/Link";

export default function Footer() {
  return (
    <div id="footer">
      <h1 id="foot-head">Feel free to get in touch with me.</h1>
      <h4 id="foot-sub-head">I am just a click away.</h4>
      <div className="icon">
        <Link
          href="https://github.com/ishikalohia"
          target="_blank"
          color="inherit"
        >
          <GitHub />
        </Link>
        <Link
          href="https://www.instagram.com/_ishika_lohia/"
          target="_blank"
          color="inherit"
        >
          <Instagram />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ishika-lohia-30484817a/"
          target="_blank"
          color="inherit"
        >
          <LinkedIn />
        </Link>
        <Link
          href="mailto:ishikalohia4@gmail.com"
          target="_blank"
          color="inherit"
        >
          <Mail />
        </Link>
        <Link
          href="https://twitter.com/Ishika30055013"
          target="_blank"
          color="inherit"
        >
          <Twitter />
        </Link>
      </div>
    </div>
  );
}
