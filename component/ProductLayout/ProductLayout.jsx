import React from "react";
import DetialImageContainer from "../DetailImageContainer/DetailImageContainer.jsx";
import styles from "./ProductLayout.module.scss";

const ProductLayout = () => {
  return (
    <div>
      <div className={styles.productLayout}>
        <div className={styles.productLayout__imagesArea}>
          <DetialImageContainer />
        </div>
        <div className={styles.productLayout__textArea}>
          <section className={styles.product}>
            <h1 className={styles.product__title}>
              clown
              <br />
              sticker
            </h1>
            <div className={styles.product__summary}>
              <p className={styles.product__size}>size W86mm × H29mm</p>
              <p className={styles.product__price}>
                <span className={styles.product__price__border}>1P ¥500</span>
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.contact}>
        ご注文はInstagramのDMからお問い合わせください。
      </div>
    </div>
  );
};

export default ProductLayout;
