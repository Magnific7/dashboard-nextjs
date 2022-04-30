import React from "react";
import styles from "./index.module.scss";
import { Icon } from "semantic-ui-react";
import logo from "./../../public/quick.png";
import Image from "next/image";
import profile from "./../../public/profileout.png";
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

            <a href="#">Transactions</a>
          </li>{" "}
          <li>
            <Icon name="book" />

            <a href="#">Expenses</a>
          </li>{" "}
          <li>
            <Icon name="favorite" />

            <a href="#">Sales</a>
          </li>{" "}
          <li>
            <Icon name="setting" />

            <a href="#">Reports</a>
          </li>
          <li>
            <Icon name="log out" />

            <a href="#">Help</a>
          </li>
          <li>
            <Icon name="log out" />

            <a href="#">Apps</a>
          </li>
        </ul>
      </div>
      <div className={styles.profile}>
        <div className={styles.profile__image}>
          <Image src={profile} alt="profile" />
        </div>
        <span>James Connor</span>
      </div>
    </div>
  );
};

export default LeftNav;
