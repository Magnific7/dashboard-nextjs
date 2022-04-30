import React from "react";
import styles from "./index.module.scss";
import { Icon } from "semantic-ui-react";
import logo from "./../../public/quick.png";
import Image from "next/image";
const LeftNav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" className={styles.logo__image} />
      </div>
      <div className={styles.create}>
        <span>+ create new</span>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <Icon name="setting" />
            <a href="#">Dashboard</a>
          </li>
          <li>
            <Icon name="world" />

            <a href="#">Explore</a>
          </li>{" "}
          <li>
            <Icon name="book" />

            <a href="#">Library</a>
          </li>{" "}
          <li>
            <Icon name="favorite" />

            <a href="#">Favourites</a>
          </li>{" "}
          <li>
            <Icon name="setting" />

            <a href="#">Settings</a>
          </li>
          <li>
            <Icon name="log out" />

            <a href="#">Log out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNav;
