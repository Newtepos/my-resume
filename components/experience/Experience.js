import classes from "./Experience.module.css";
import ExperienceDetail from "./Experience-detail"

const Experience = (props) => {
  return (
    <section className={classes.main_container}>
      <div className={classes.section_header}>
        <h3>Education & Experience</h3>
      </div>
      <ExperienceDetail/>
    </section>
  );
};

export default Experience;
