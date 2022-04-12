import Skilltile from "./Skill-tile";
import classes from "./Skills.module.css";
import html from "../../icons/html-icon.svg";
import js from "../../icons/js-icon.svg";
import css from "../../icons/css-icon.svg";
import react from "../../icons/react-icon.png";
import redux from "../../icons/redux-icon.png";
import thingworx from "../../icons/thingworx-icon.png";
import mysql from "../../icons/mysql-icon.png";
import mongodb from "../../icons/mongodb-icon.png";
import figma from "../../icons/figma-icon.png";
import xd from "../../icons/xd-icon.png";

const Skills = (props) => {
  return (
    <section name="skills" className={classes.main_container}>
      <div className={classes.section_header}>
        <h3>Skills</h3>
      </div>
      <div className={classes.skills_container}>
        <div className={classes.skills_row}>
          <div className={classes.one}>
            <Skilltile word="HTML" img={html}></Skilltile>
            <Skilltile word="JS" img={js}></Skilltile>
            <Skilltile word="CSS" img={css}></Skilltile>
            <Skilltile word="React" img={react}></Skilltile>
            <Skilltile word="Redux" img={redux}></Skilltile>
            <Skilltile word="Thingworx" img={thingworx}></Skilltile>
            <Skilltile word="MySQL" img={mysql}></Skilltile>
            <Skilltile word="MongoDB" img={mongodb}></Skilltile>
            <Skilltile word="Figma" img={figma}></Skilltile>
            <Skilltile word="Adobe XD" img={xd}></Skilltile>
          </div>
          <div className={classes.second}>
            <Skilltile word="HTML" img={html}></Skilltile>
            <Skilltile word="JS" img={js}></Skilltile>
            <Skilltile word="CSS" img={css}></Skilltile>
            <Skilltile word="React" img={react}></Skilltile>
            <Skilltile word="Redux" img={redux}></Skilltile>
            <Skilltile word="Thingworx" img={thingworx}></Skilltile>
            <Skilltile word="MySQL" img={mysql}></Skilltile>
            <Skilltile word="MongoDB" img={mongodb}></Skilltile>
            <Skilltile word="Figma" img={figma}></Skilltile>
            <Skilltile word="Adobe XD" img={xd}></Skilltile>
          </div>
        </div>
      </div>
      <div className={classes.skills}>
        <h1>Skills.</h1>
      </div>
    </section>
  );
};

export default Skills;
