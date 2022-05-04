import React, { FC } from "react";
import styles from "./index.module.scss";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutComponent = (children, li) => {
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
    <div className={styles.doughnut_container}>
      <div className={styles.doughnut_container__right}>
        <h3 className={styles.sub_title}>Expenses</h3>
        <h1 className={styles.amount}>$3,500.00</h1>
        <h4 className={styles.last_month}>last Month</h4>
        <div className={styles.doughnut_container__right__doughbut}>
          <Doughnut data={data1} width={200} height={200} options={options} />
        </div>
      </div>
      <div className={styles.doughnut_container__leftside}>
        <div className={styles.doughnut_container__leftside__data}>
          <div
            className={styles.doughnut_container__leftside__data__dot}
            style={{
              backgroundColor: `${data1.datasets[0].backgroundColor[0]}`,
            }}
          ></div>
          <h2>${data1.datasets[0].data[0]}</h2>
          <p>{data1.labels[0]}</p>
        </div>
        <div className={styles.doughnut_container__leftside__data}>
          <div
            className={styles.doughnut_container__leftside__data__dot}
            style={{
              backgroundColor: `${data1.datasets[0].backgroundColor[1]}`,
            }}
          ></div>
          <h2>${data1.datasets[0].data[1]}</h2>
          <p>{data1.labels[1]}</p>
        </div>
        <div className={styles.doughnut_container__leftside__data}>
          <div
            className={styles.doughnut_container__leftside__data__dot}
            style={{
              backgroundColor: `${data1.datasets[0].backgroundColor[2]}`,
            }}
          ></div>
          <h2>${data1.datasets[0].data[2]}</h2>
          <p>{data1.labels[2]}</p>
        </div>
        <div className={styles.doughnut_container__leftside__data}>
          <div
            className={styles.doughnut_container__leftside__data__dot}
            style={{
              backgroundColor: `${data1.datasets[0].backgroundColor[3]}`,
            }}
          ></div>
          <h2>${data1.datasets[0].data[3]}</h2>
          <p>{data1.labels[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default DoughnutComponent;
