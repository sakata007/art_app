import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <h1 className={styles.logo}>
        <a href="#">ロゴ画像</a>
      </h1>
    </div>
  );
};

export default Header;
