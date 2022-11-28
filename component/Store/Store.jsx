import React from "react";
import styles from "./Store.module.scss";
import ProductContainer from "../ProductContainer/ProductContainer.jsx";

const Store = () => {
  return (
    <div className={styles.store}>
      <div className={styles.storeContainer}>
        <ProductContainer
          src="/C6DFE34C-68D3-46A1-8B5D-B3F141BBA8B9.jpeg"
          title="product titleproduct "
          price={1000}
        />
        <ProductContainer
          src="/089E283B-8578-414E-9212-5FBF5C1E0A73.jpeg"
          title="product title"
          price={1000}
        />
        <ProductContainer
          src="/18DF1A8A-3A9C-4AAE-9AC1-D4136457F441.jpeg"
          title="product title"
          price={1000}
        />
        <ProductContainer
          src="/23B1D485-545B-427B-A94B-418ACDBDB2CF.jpeg"
          title="product title"
          price={1000}
        />
      </div>
    </div>
  );
};

export default Store;
