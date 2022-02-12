import classes from "./Aboutme.module.css";
import Image from "next/image";
import avatar from "../../image/persernal-image.jpeg";
import { IoMdDownload } from "react-icons/io";

const Aboutme = (props) => {
  return (
    <div className={classes.section_container}>
      <section className={classes.main_container}>
        <div className={classes.text_container}>
          <p className={classes.header}>Hi! I Am </p>
          <p className={classes.name}>Supakit Pavaputanon Na Mahasarakam</p>
          <p className={classes.description}>
            looking for challenging opportunity to develop my skills and grow
            your business together.
          </p>
          <a
            href="/files/resume-2022.pdf"
            download
            className={classes.download}
          >
            <IoMdDownload />
            Download
          </a>
        </div>
        <Image
          className={classes.image}
          src={avatar}
          width="439rem"
          height="439rem"
          alt="avatar"
        ></Image>
      </section>
    </div>
  );
};

export default Aboutme;
