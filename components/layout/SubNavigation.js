import React from "react";
import classes from "./SubNavigation.module.css";
import { Link } from "react-scroll/modules";

function SubNavigation() {
  return (
    <div className={classes.main_container}>
      <ul className={classes.navigation_wrapper}>
        <li>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            activeClass={classes.active}
          >
            aboutme
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            activeClass={classes.active}
          >
            skills
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            activeClass={classes.active}
          >
           experience
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SubNavigation;
