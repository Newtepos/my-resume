import classes from "./Experience-detail.module.css";
import Image from "next/image";
import avatar from "../../image/small_avatar.png";

const ExperienceDetail = (props) => {
  const studyDetail = {
    name: `King Mongkut's Institute of Technology Ladkrabang`,
    position: "Machatronics Engineer",
    duration: 'year 2013 - 2017'
  };

  const firstStudy = {
    name: `Mitsubishi Heavy Industries-Mahajak Air Conditioner Co.,LTD.`,
    position: "Service Engineer",
    duration: 'Aug 2018 - 2019'
  }

  const secondStudy = {
    name: `CAD-IT CONSULTANTS (ASIA) PTE. LTD.`,
    position: "Enterprise Solution Application Engineer",
    duration: '1 Nov 2019 -  Current '
  }

  const experienceList = [studyDetail, firstStudy, secondStudy];
  const {name, position, duration} = experienceList[props.experienceIndex];

  return (
    <div className={classes.main_container}>
      <div className={classes.detail_container}>
        <p className={classes.header}>
          {name}
        </p>
        <p className={classes.position}>
          {position}
        </p>
        <div className={classes.duration}>
          Duration:<span>{duration}</span>
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
