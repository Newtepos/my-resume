import classes from "./contact.module.css";
import { IoIosCall, IoIosMail } from "react-icons/io";

const Contact = (props) => {
  return (
    <section className={classes.main_container}>
        <div className={classes.sub_container}>
          <div className={classes.section_header}>
            <h3>Contact</h3>
          </div>
          <div className={classes.icons_container}>
            <IoIosCall className={classes.icons} />
            <span className={classes.contact_detail}>(+66) 63 020 0081</span>
            <IoIosMail className={classes.icons} />
            <span className={classes.contact_detail}>
              supakit.pnm@gmail.com
            </span>
          </div>
      </div>
    </section>
  );
};

export default Contact;
