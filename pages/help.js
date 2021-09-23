import Header from "../components/landingPage/Header";
import Footer from "../components/landingPage/Footer";
import Head from "next/head";
import HelpHead from "../components/helpPage/HelpHead";
import Questions from "../components/helpPage/Questions";

function help() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>midlman || help </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/MM_Logo.png" />
      </Head>
      <Header />
      <HelpHead />
      <Questions />
      <Footer />
    </div>
  );
}

export default help;
