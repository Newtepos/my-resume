import classes from "./Experience-detail.module.css";
import Image from "next/image";
import avatar from "../../image/small_avatar.png";
import kmitl from "../../image/kmitl-image.png";
import mitsu from "../../image/mitsu-image.png";
import cadit from "../../image/cadit-image.png";

const ExperienceDetail = (props) => {
  const studyDetail = {
    name: `King Mongkut's Institute of Technology Ladkrabang`,
    position: "Machatronics Engineer",
    duration: "June 2013 - 2017",
    description: [
      "Mechanics + Electronics",
      "Automation Control and PLC",
      "GPA 2.91",
    ],
    imageAddress: kmitl,
  };

  const firstStudy = {
    name: `Mitsubishi Heavy Industries-Mahajak Air Conditioner Co.,LTD.`,
    position: "Service Engineer",
    duration: "August 2018 - 2019",
    description: [
      "Distribute technical knowledge to our distributor in both domestic and international",
      "Follow up claimed part for finding root cause of problem from each distributor",
      "Meeting with distributor to recognize thier trouble and provide suggestion",
      "Responsible in publish monthly report for monitoring current issue",
    ],
    imageAddress: mitsu,
  };

  const secondStudy = {
    name: `CAD-IT CONSULTANTS (ASIA) PTE. LTD.`,
    position: "Enterprise Solution Application Engineer",
    duration: "November 2019 -  Present ",
    description: [
      "Design and implement effective user interface suit with customer need",
      "Support pre & post sales",
      "Manage team to let project success",
    ],
    imageAddress: cadit,
  };

  const experienceList = [studyDetail, firstStudy, secondStudy];
  const { name, position, duration, description, imageAddress } =
    experienceList[props.experienceIndex];

  const descriptionArray = description.map((description) => (
    <li key={description}>{description}</li>
  ));

  return (
    <div className={classes.main_container}>
      <div className={classes.detail_container}>
        <p className={classes.header}>{name}</p>
        <p className={classes.position}>{position}</p>
        <div className={classes.duration}>
          Duration:<span>{duration}</span>
        </div>
        <ul className={classes.description}>{descriptionArray}</ul>
      </div>
      <Image
        className={classes.image}
        src={imageAddress}
        width="300rem"
        height="270rem"
        alt="avatar"
      ></Image>
    </div>
  );
};

export default ExperienceDetail;
