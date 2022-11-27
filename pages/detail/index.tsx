import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Header from "../../component/Header/Header.jsx";
import Footer from "../../component/Footer/Footer.jsx";
import DetailImageContainer from "../../component/DetailImageContainer/DetailImageContainer.jsx";

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>index pages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={styles.container__box}>
        <main>
          <DetailImageContainer />
        </main>
      </div>
      <Footer />
    </div>
  );
}
