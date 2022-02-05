import { useState } from "react";
import classes from "./Experience-select.module.css";

const ExpereiceSelect = (props) => {

  const [radio, setRadio] = useState(2);  

  const clickHandler = (e) => {
    setRadio(e.currentTarget.value);
    props.radioHandler(e.currentTarget.value);
  };

  return (
    <div className={classes.main_container}>
      <div className={classes.experience_container}>
        <input
          type="radio"
          name="experience"
          value='0'
          onClick={clickHandler}
          checked={radio == 0}
        />
        <span className={classes.experience_checkmark}></span>
      </div>
      <div className={classes.small_circle_container}>
        <div className={classes.small_circle} />
        <div className={classes.small_circle} />
        <div className={classes.small_circle} />
        <div className={classes.small_circle} />
        <div className={classes.small_circle} />
      </div>
      <div className={classes.experience_container}>
        <input
          type="radio"
          name="experience"
          value="1"
          onClick={clickHandler}
          checked={radio == 1}
        />
        <span className={classes.experience_checkmark}></span>
      </div>
      <div className={classes.small_circle_container}>
        <div className={classes.small_circle} />
        <div className={classes.small_circle} />
        <div className={classes.small_circle} />
        <div className={classes.small_circle} />
        <div className={classes.small_circle} />
      </div>
      <div className={classes.experience_container}>
        <input
          type="radio"
          name="experience"
          value="2"
          onClick={clickHandler}
          checked={radio == 2}
        />
        <span className={classes.experience_checkmark}></span>
      </div>
      <div></div>
    </div>
  );
};

export default ExpereiceSelect;
