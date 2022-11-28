import Link from "next/link";
import React, { useState } from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <div className={styles.parent}>
      {/* ボタンを押すとtoggeleMenuが発火 */}
      <button
        className={styles.button}
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

      {/* ナビゲーション　isOpenMenuによってクラスが変わる */}
      <nav
        className={`${styles.hamburger__nav} ${
          isOpenMenu ? styles.hamburger__opened : ""
        }`}
      >
        <ul className={styles.opened__ul}>
          <li className={styles.opened__li__button}>
            <div
              className={styles.closeButton}
              onClick={() => {
                toggleMenu();
              }}
            >
              <span className={styles.closeButton__inner__line}></span>
              <span className={styles.closeButton__inner__line}></span>
            </div>
          </li>
          <li className={styles.opened__li}>
            <Link
              className={styles.opened__li__List}
              onClick={() => {
                toggleMenu();
              }}
              href="/"
            >
              top
            </Link>
          </li>
          <li className={styles.opened__li}>
            <Link
              className={styles.opened__li__List}
              onClick={() => {
                toggleMenu();
              }}
              href="/"
            >
              works
            </Link>
          </li>
          <li className={styles.opened__li}>
            <Link
              className={styles.opened__li__List}
              onClick={() => {
                toggleMenu();
              }}
              href="/"
            >
              store
            </Link>
          </li>
          <li className={styles.opened__li}>
            <Link
              className={styles.opened__li__List}
              onClick={() => {
                toggleMenu();
              }}
              href="/"
            >
              profile
            </Link>
          </li>
        </ul>
      </nav>

      <nav className={styles.headerNav__pc}>
        <ul className={styles.headerNav__ul__pc}>
          <li className={styles.headerNav__li__pc}>
            <Link className={styles.headerNav__li__List} href="/">
              top
            </Link>
          </li>
          <li className={styles.headerNav__li__pc}>
            <Link className={styles.headerNav__li__List} href="/">
              works
            </Link>
          </li>
          <li className={styles.headerNav__li__pc}>store</li>
          <li className={styles.headerNav__li__pc}>profile</li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
