import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Header from "../../../component/Header/Header.jsx";
import Footer from "../../../component/Footer/Footer.jsx";
// import Store from "../../../component/Store/Store.jsx";
import ProductLayout from "../../../component/ProductLayout/ProductLayout.jsx";
export default function Home() {
  return (
    <div className={styles.art}>
      <Head>
        <title>index pages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/xfh7fer.css"
        ></link>
      </Head>

      <Header />
      <div className={styles.container__box}>
        <main>
          <ProductLayout />
        </main>
      </div>
      <Footer />
    </div>
  );
}
