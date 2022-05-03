import React, { FC } from "react";
import styles from "./index.module.scss";

const ProgressBar = () => {
  return (
    <div className={styles.charts__sales__expenses}>
      <h3>Invoces</h3>
      <p>
        <b>$3,500.00 Unpaid</b> Last 365 Days
      </p>
      <div className={styles.charts__sales__expenses__amount}>
        <div className={styles.charts__sales__expenses__amount__left}>
          <h1>$3,500.00</h1>
          <h4>Overdue</h4>
        </div>
        <div className={styles.charts__sales__expenses__amount__right}>
          <h1>$3,500.00</h1>
          <h4>Overdue</h4>
        </div>
      </div>
      <div className={styles.charts__sales__expenses__progress}>
        <div className={styles.charts__sales__expenses__progress__bar}></div>
      </div>
      <p>
        <b>$3,500.00 Unpaid</b> Last 365 Days
      </p>
      <div className={styles.charts__sales__expenses__amount}>
        <div className={styles.charts__sales__expenses__amount__left}>
          <h1>$3,500.00</h1>
          <h4>Overdue</h4>
        </div>
        <div className={styles.charts__sales__expenses__amount__right}>
          <h1>$3,500.00</h1>
          <h4>Overdue</h4>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
