import Image from "next/image";
import React from "react";
import styles from "./ImageContainer.module.scss";

const ImageContainer = (props) => {
  const src = props.src;
  console.log(props);
  return (
    <div className={styles.imageContainer}>
      <Image
        className={styles.image}
        src={src}
        width={500}
        height={500 * 0.75}
      />
    </div>
  );
};

export default ImageContainer;
