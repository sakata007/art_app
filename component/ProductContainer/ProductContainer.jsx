import React from "react";
import Image from "next/image";
import styles from "./ProductContainer.module.scss";

const ProductContainer = (props) => {
  const { src, title, price } = props;
  const width = 500;

  return (
    <div className={styles.productContainer}>
      <Image
        className={styles.image}
        src={src}
        width={width}
        height={width * 0.75}
        layout={"fixed"}
      />
      <div className={styles.productText}>
        <p className={styles.productText__title}>{title}</p>
        <p className={styles.productText__price}>{`¥${price} -`}</p>
      </div>
    </div>
  );
};

export default ProductContainer;
