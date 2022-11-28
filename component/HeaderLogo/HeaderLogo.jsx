import React from "react";
import styles from "./HeaderLogo.module.scss";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <div className={styles.headerLogo}>
      <h1 className={styles.logo__h1}>
        <Link className={styles.logo__a} href="/">
          <div className={styles.imageFlame}>
            <Image
              className={styles.imageFlame__image}
              src="/IMG_6264re.png"
              width={50}
              height={50}
            />
          </div>
        </Link>
      </h1>
    </div>
  );
};

export default HeaderLogo;
