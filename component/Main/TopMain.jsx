import React from "react";
import styles from "./TopMain.module.scss";
import ImageContainer from "../ImageContainer/ImageContainer.jsx";

const TopMain = () => {
  return (
    <div className={styles.topMain}>
      {/* <h1 className={styles.h1}>メインです</h1> */}
      <ImageContainer src="/08B65F5B-B105-4D6B-88A0-03D642D12AE6.jpeg" />
      <ImageContainer src="/97D94130-B8A4-49D5-860F-C56CBABA7471.jpeg" />
      <ImageContainer src="/9A94A1B6-A141-4A40-A129-FC58F912E931.jpeg" />
      <ImageContainer src="/E4BA6DF9-DE43-4271-9E1D-BFB271D266B0.jpeg" />
    </div>
  );
};

export default TopMain;
