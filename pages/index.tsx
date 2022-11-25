import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../component/Header/Header.jsx";
import TopMain from "../component/Main/TopMain.jsx";
import Footer from "../component/Footer/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>index pages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={styles.container__box}>
        <TopMain />
      </div>
      <Footer />
    </div>
  );
}
