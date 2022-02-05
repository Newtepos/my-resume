import classes from "./Experience.module.css";

const Experience = (props) => {
  return (
    <section className={classes.main_container}>
      <div className={classes.section_header}>
        <h3>Education & Experience</h3>
      </div>
      <div className={classes.experience_detail}></div>
    </section>
  );
};

export default Experience;
