import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./ImageContainer.module.scss";

const ImageContainer = (props) => {
  const src = props.src;
  console.log(props);

  const { ref, inView } = useInView({
    rootMargin: "-10%",
    threshold: [0.3],
  });

  console.log(`これはinView→${inView}`);
  return (
    <div ref={ref} className={styles.imageContainer}>
      <Image
        className={`${styles.image} ${inView && styles.colorful}`}
        src={src}
        width={500}
        height={500 * 0.75}
      />
    </div>
  );
};

export default ImageContainer;
