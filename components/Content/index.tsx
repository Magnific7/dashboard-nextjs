import React, { FC } from "react";
import styles from "./index.module.scss";
import "chart.js/auto";
import BarComponent from "./../charts/BarComponent";
import DoughnutComponent from "./../charts/Doughnut";
import BarDescription from "./../BarDescription";
import ProgressBar from "./../ProgressBar";
import Header from "../Header";

export interface ContentProps {
  children?: JSX.Element | JSX.Element[];
}

const Content: FC<ContentProps> = (children, li) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data1 = {
    labels: ["Organic", "Social Media", "Websites", "sensation"],
    datasets: [
      {
        data: [500.0, 50.0, 100.0, 200.0],
        backgroundColor: [
          "rgba(75,192,192,0.4)",
          "rgba(75,192,192,1)",
          "rgba(220,220,220,1)",
          "rgb(20, 99, 89)",
        ],
        hoverBackgroundColor: [
          "rgba(75,192,192,0.4)",
          "rgba(75,192,192,1)",
          "rgba(220,220,220,1)",
          "rgb(20, 99, 89)",
        ],
      },
    ],
  };

  return (
    <div className={styles.Content}>
      <Header />

      <div className={styles.Content__wrapper}>
        <BarDescription />
      </div>

      <div className={styles.charts}>
        <BarComponent />
        <div className={styles.charts__sales}>
          <div className={styles.charts__sales__progressbar}>
            <ProgressBar />
          </div>
          <div className={styles.charts__sales__doughnut}>
            <DoughnutComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
