import React from "react";
import Image from "next/image";
import styles from "./DetailMainImage.module.scss";
import Link from "next/link";

const DetailMainImage = (props) => {
  const src = props.src;
  const mainWidth = 500;

  return (
    <div className={styles.mainImageContainer}>
      <Image
        className={styles.image}
        src={src}
        width={mainWidth}
        height={mainWidth * 0.75}
        objectFit="contain"
      />
    </div>
  );
};

export default DetailMainImage;
