import { Fragment } from "react";
import Aboutme from "../components/aboutme/Aboutme";
import Contact from "../components/contact/contact";
import Experience from "../components/experience/Experience";
import Skills from "../components/skills/Skills";

export default function Home() {
  return (
    <Fragment>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Experience></Experience>
      <Contact></Contact>
    </Fragment>
  );
}
