import React from "react";
import styles from "./index.module.scss";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

const Content = () => {
  return (
    <div className={styles.Content}>
      <div className={styles.Content__wrapper}>
        <div className={styles.Content__wrapper__tabs}>
          <div className={styles.Content__wrapper__tabs__categories}>
            <h2>Companies</h2>
          </div>
        </div>
        <div className={styles.Content__wrapper__tabs}>
          <div className={styles.Content__wrapper__tabs__categories}>
            <h2>Customers</h2>
          </div>
        </div>{" "}
        <div className={styles.Content__wrapper__tabs}>
          <div className={styles.Content__wrapper__tabs__categories}>
            <h2>Users</h2>
          </div>
        </div>{" "}
        <div className={styles.Content__wrapper__tabs}>
          <div className={styles.Content__wrapper__tabs__categories}>
            <h2>Project</h2>
          </div>
        </div>
      </div>

      <div className={styles.charts}>
        <div className={styles.charts__bar}>
          <h2>Sales</h2>
        </div>
        <div className={styles.charts__circle}>
          <h2>Customers arrived </h2>
        </div>
      </div>
    </div>
  );
};

export default Content;
