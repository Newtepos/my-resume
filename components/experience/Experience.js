import classes from "./Experience.module.css";
import ExperienceDetail from "./Experience-detail"
import ExpereiceSelect from "./Experience-select";
import { useState } from "react";

const Experience = (props) => {

    const [experience, setExperience] = useState(2);

    const radioHandlerFunction = (value) => {
        setExperience(value);
    }

  return (
    <section name="experience" className={classes.main_container}>
      <div className={classes.section_header}>
        <h3>Education & Experience</h3>
      </div>
      <ExpereiceSelect radioHandler={radioHandlerFunction}/>
      <ExperienceDetail experienceIndex={experience}/>
    </section>
  );
};

export default Experience;
