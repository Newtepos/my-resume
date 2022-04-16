import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Supakit CV</title>
        <meta name="description" content="Browse Supakit's CV" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
