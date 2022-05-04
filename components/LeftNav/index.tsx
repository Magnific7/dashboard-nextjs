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
        <Icon className={styles.create__icon} name="add" />
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <a href="#">Dashboard</a>
            <Icon name="angle right" color="grey" />
          </li>
          <li>
            <a href="#">Transactions</a>
            <Icon name="angle right" color="grey" />
          </li>
          <li>
            <a href="#">Expenses</a>
            <Icon name="angle right" color="grey" />
          </li>

          <li>
            <a href="#">Reports</a>
            <Icon name="angle right" color="grey" />
          </li>
          <li>
            <a href="#">Help</a>
            <Icon name="angle right" color="grey" />
          </li>
          <li>
            <a href="#">Apps</a>
            <Icon name="angle right" color="grey" />
          </li>
        </ul>
      </div>
      <div className={styles.profile}>
        <div className={styles.profile__image}>
          <Image
            src={"/profileout.png"}
            width={100}
            height={100}
            alt="profile"
          />
        </div>
        <span>James Connor</span>
        <div>
          <Icon name="angle right" size="big" color="green" />
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
