import Link from "next/link";
import React from "react";
import styles from "./BackButton.module.scss";

const BackButton = () => {
  return (
    <div className={styles.backButtonArea}>
      <button className={styles.backButton}>
        <Link href="/">
          <span className={styles.backButton__arrow}></span>
          back to works
        </Link>
      </button>
    </div>
  );
};

export default BackButton;
