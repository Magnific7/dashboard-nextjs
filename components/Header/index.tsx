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
          {/* <h2>Hello, Mary</h2>
          <p>Welcome to the dashboard </p> */}
          <Image
            src={logo}
            alt="logo"
            className={styles.Header__wrapper__title__logo}
          />
        </div>
      </div>
      <div className={styles.Header__search}>
        <Input
          icon="search green"
          iconPosition="left"
          placeholder="Search users..."
        />
      </div>
      <div className={styles.Header__profile}>
        <Image
          src={image}
          alt="profile"
          className={styles.Header__profile_image}
        />
      </div>
    </div>
  );
};

export default Header;
