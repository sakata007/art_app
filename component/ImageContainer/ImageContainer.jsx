import Image from "next/image";
import Link from "next/link";
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
  // 画像の幅を定義
  const width = 800;

  return (
    <div ref={ref} className={styles.imageContainer}>
      <Link href="/detail">
        <Image
          className={`${styles.image} ${inView && styles.colorful}`}
          src={src}
          width={width}
          height={width * 0.75}
        />
      </Link>
    </div>
  );
};

export default ImageContainer;
