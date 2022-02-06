import { useState } from "react";
import classes from "./Experience-select.module.css";
import { IoIosBook, IoIosDesktop } from "react-icons/io";
import { IoTerminalSharp } from "react-icons/io5";
import { SiWindicss } from "react-icons/si";

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
          value="0"
          id="2013"
          onClick={clickHandler}
          checked={radio == 0}
        />
        <IoIosBook className={classes.icon}/>
        <span className={classes.experience_checkmark}></span>
        <label for="2013" className={classes.year}>2013</label>
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
          id="2018"
          onClick={clickHandler}
          checked={radio == 1}
        />
        <SiWindicss className={classes.icon}/>
        <span className={classes.experience_checkmark}></span>
        <label for="2018" className={classes.year}>2018</label>
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
          id="present"
          onClick={clickHandler}
          checked={radio == 2}
        />
        <IoIosDesktop className={classes.icon}/>
        <label for="present" className={classes.year}>Present</label>
        <span className={classes.experience_checkmark}></span>
      </div>
      <div></div>
    </div>
  );
};

export default ExpereiceSelect;
