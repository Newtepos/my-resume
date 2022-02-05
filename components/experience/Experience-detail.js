import classes from "./Experience-detail.module.css";
import Image from "next/image";
import avatar from "../../image/small_avatar.png";

const ExperienceDetail = (props) => {
  return (
    <div className={classes.main_container}>
      <div className={classes.detail_container}>
        <p className={classes.header}>CAD-IT CONSULTANTS (ASIA) PTE. LTD. </p>
        <p className={classes.position}>
          Enterprise Solution Application Engineer
        </p>
        <div className={classes.duration}>
          Duration:<span>1 Nov 2018 - Current</span>
        </div>
        <ul className={classes.description}>
          <li>
            Design and implement effective user interface suit with customer
            need
          </li>
          <li>Support pre & post sales</li>
          <li>Manage team to let project success</li>
        </ul>
      </div>
      <Image
          className={classes.image}
          src={avatar}
          width="300rem"
          height="270rem"
          alt="avatar"
        ></Image>
    </div>
  );
};

export default ExperienceDetail;
