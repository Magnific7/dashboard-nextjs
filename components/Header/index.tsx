import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { Icon, Input } from "semantic-ui-react";
import logo from "./../../public/logohere.png";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Header__wrapper}>
        <div className={styles.Header__wrapper__title}>
          <Image
            src={"/logohere.png"}
            width={200}
            height={50}
            alt="logo"
            className={styles.Header__wrapper__title__logo}
          />
        </div>
        <div className={styles.Header__wrapper__right}>
          <div className={styles.Header__wrapper__right__search}>
            <Input icon="search green" placeholder="Search ..." />
          </div>
          <div className={styles.Header__wrapper__right__profile}>
            <Icon
              name="alarm"
              alt="notifications"
              size="large"
              className={styles.Header__wrapper__right__profile_image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
