import classes from "./Skills.module.css";

const Skills = (props) => {
  return (
    <section className={classes.main_container}>
      <div className={classes.section_header}>
        <h3>Skills</h3>
      </div>
      <div className={classes.skills_container}></div>
    </section>
  );
};

export default Skills;
