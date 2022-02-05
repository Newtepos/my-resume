import Head from "next/head";
import { Fragment } from "react";
import Aboutme from "../components/aboutme/Aboutme";
import Contact from "../components/contact/contact";
import Experience from "../components/experience/Experience";
import Skills from "../components/skills/Skills";
import "@fontsource/roboto"
import "@fontsource/roboto-slab"
import "@fontsource/libre-franklin"

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Supakit CV</title>
        <meta name="description" content="Browse Supakit's CV"/>
      </Head>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Experience></Experience>
      <Contact></Contact>
    </Fragment>
  );
}
