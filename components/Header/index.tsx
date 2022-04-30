import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import image from "../../public/watermark.png";
import { Input } from "semantic-ui-react";
import logo from "./../../public/orrchi.png";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Header__wrapper}>
        <div className={styles.Header__wrapper__title}>
          <Image
            src={logo}
            alt="logo"
            className={styles.Header__wrapper__title__logo}
          />
        </div>
        <div className={styles.Header__wrapper__right}>
          <div className={styles.Header__wrapper__right__search}>
            <Input icon="search green" placeholder="Search ..." />
          </div>
          <div className={styles.Header__wrapper__right__profile}>
            <Image
              src={image}
              alt="profile"
              className={styles.Header__wrapper__right__profile_image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
