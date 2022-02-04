import Image from "next/image";
import classes from "./Skill-tile.module.css";
import icons from "../../icons/noun-html-1132119.svg";

const Skilltile = (props) => {
  return (
    <div className={classes.main_container}>
      <div className={classes.tile_container}>
        <Image
          className={classes.image}
          src={icons}
          width="60px"
          height="60px"
          alt="Icons"
        ></Image>
        <p className={classes.skills_name}>{props.word}</p>
      </div>
    </div>
  );
};

export default Skilltile;
