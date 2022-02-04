import Skilltile from "./Skill-tile";
import classes from "./Skills.module.css";

const Skills = (props) => {
  return (
    <section className={classes.main_container}>
      <div className={classes.section_header}>
        <h3>Skills</h3>
      </div>
      <div className={classes.skills_container}>
        <div className={classes.skills_row}>
          <div className={classes.one}>
            <Skilltile word="A"></Skilltile>
            <Skilltile word="B"></Skilltile>
            <Skilltile word="C"></Skilltile>
            <Skilltile word="D"></Skilltile>
            <Skilltile word="E"></Skilltile>
            <Skilltile word="F"></Skilltile>
            <Skilltile word="G"></Skilltile>
          </div>
          <div className={classes.second}>
          <Skilltile word="A"></Skilltile>
            <Skilltile word="B"></Skilltile>
            <Skilltile word="C"></Skilltile>
            <Skilltile word="D"></Skilltile>
            <Skilltile word="E"></Skilltile>
            <Skilltile word="F"></Skilltile>
            <Skilltile word="G"></Skilltile>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
