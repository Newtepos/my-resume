import classes from "./Experience-select.module.css";

const ExpereiceSelect = (props) => {
  const clickHandler = () => {
    console.log("Clicked");
  };

  return (
    <div className={classes.main_container}>
            <div className={classes.experience_container}>
          <input type='radio' name='experience'/>
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
          <input type='radio' name='experience'/>
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
          <input type='radio' name='experience'/>
          <span className={classes.experience_checkmark}></span>
      </div>
      <div></div>
    </div>
  );
};

export default ExpereiceSelect;
