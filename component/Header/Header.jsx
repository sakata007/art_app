import React from "react";
import styles from "./Header.module.scss";
import Hamburger from "../Hamburger/Hamburger.jsx";
import HeaderLogo from "../HeaderLogo/HeaderLogo.jsx";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <HeaderLogo />
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
