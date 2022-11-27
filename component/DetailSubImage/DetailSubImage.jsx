import React from "react";
import Image from "next/image";
import styles from "./DetailSubImage.module.scss";

const DetailSubImage = (props) => {
  const src = props.src;
  const subWidth = 100;

  return (
    <div className={styles.subImageContainer}>
      <Image
        className={styles.childrenImage}
        src={src}
        width={subWidth}
        height={subWidth * 0.75}
        objectFit="contain"
      />
    </div>
  );
};

export default DetailSubImage;
