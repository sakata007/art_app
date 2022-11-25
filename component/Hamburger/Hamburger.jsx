import React, { useState } from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    // alert("とぐる");
  };
  return (
    <div className={styles.parent}>
      <button
        className={`${styles.button} ${isOpenMenu ? "" : ""}`}
        onClick={() => {
          toggleMenu();
        }}
      >
        <div
          className={`${styles.button__inner} ${
            isOpenMenu ? styles.closeButton : ""
          }`}
        >
          <span className={styles.button__inner__line}></span>
          <span className={styles.button__inner__line}></span>
          <span className={styles.button__inner__line}></span>
        </div>
      </button>

      <nav
        className={`${styles.hamburger__nav} ${
          isOpenMenu ? styles.hamburger__opened : ""
        }`}
      >
        <ul className={styles.opened__ul}>
          <li className={styles.opened__li}>top</li>
          <li className={styles.opened__li}>works</li>
          <li className={styles.opened__li}>store</li>
          <li className={styles.opened__li}>profile</li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
