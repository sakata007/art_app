import React from "react";
import styles from "./DetailImageContainer.module.scss";
import ImageGallery from "react-image-gallery";

const DetailImageContainer = () => {
  // const { imgA, imgB, imgC } = props;

  const images = [
    // ここはmap処理でいけそう
    // {
    //   original: { imgA },
    //   thumbnail: { imgA },
    // },
    // {
    //   original: { imgB },
    //   thumbnail: { imgB },
    // },
    // {
    //   original: { imgC },
    //   thumbnail: { imgC },
    // },
    {
      original: "/08B65F5B-B105-4D6B-88A0-03D642D12AE6.jpeg",
      thumbnail: "/08B65F5B-B105-4D6B-88A0-03D642D12AE6.jpeg",
    },
    {
      original: "/84E28BF2-E18F-45A7-BDA5-FB5532D24CAB.jpeg",
      thumbnail: "/84E28BF2-E18F-45A7-BDA5-FB5532D24CAB.jpeg",
    },
    {
      original: "/F6A9D47B-2052-4786-BD47-C10810B612B0.jpeg",
      thumbnail: "/F6A9D47B-2052-4786-BD47-C10810B612B0.jpeg",
    },
    {
      original: "/877AF359-9F09-4289-915E-96655EFF8157.jpeg",
      thumbnail: "/877AF359-9F09-4289-915E-96655EFF8157.jpeg",
    },
  ];
  return (
    <div className={styles.detailImageContainer}>
      <ImageGallery items={images} />
    </div>
  );
};

export default DetailImageContainer;
