import Header from "../components/landingPage/Header";
import Footer from "../components/landingPage/Footer";
import Head from "next/head";
import TermService from "../components/landingPage/TermService";

function serviceTerms() {
  return (
    <div>
      <Head>
        <title>midlman || Privacy-Policy </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/MM_Logo.png" />
      </Head>
      <Header />
      <TermService />
      <Footer />
    </div>
  );
}

export default serviceTerms;
