import React, { FC } from "react";
import styles from "./index.module.scss";

const BarDescription = () => {
  return (
    <div className={styles.Content__wrapper__tabs}>
      <div className={styles.Content__wrapper__tabs__left}>
        <h2>chash flow</h2>
        <p>Past 12 months</p>
        <h1>$43,100</h1>
        <p>current cash balance</p>
      </div>
      <div className={styles.Content__wrapper__tabs__right}>
        <div className={styles.Content__wrapper__tabs__right__in}>
          <div className={styles.Content__wrapper__tabs__right__in__one}>
            <span>Money In/out</span>
          </div>
          <div className={styles.Content__wrapper__tabs__right__in__two}>
            <span>Bank Balance</span>
          </div>
        </div>
        <div className={styles.Content__wrapper__tabs__right__dot}>
          <div className={styles.Content__wrapper__tabs__right__dot__in}></div>
          <h3>Money In</h3>
          <div className={styles.Content__wrapper__tabs__right__dot__out}></div>
          <h3>Money Out</h3>
        </div>
      </div>
    </div>
  );
};

export default BarDescription;
