import React from "react";
import styles from "./HeaderLogo.module.scss";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div className={styles.headerLogo}>
      <h1 className={styles.logo__h1}>
        <a className={styles.logo__a} href="#">
          <div className={styles.imageFlame}>
            <Image
              className={styles.imageFlame__image}
              src="/IMG_6264re.png"
              width={50}
              height={50}
            />
          </div>
        </a>
      </h1>
    </div>
  );
};

export default HeaderLogo;
