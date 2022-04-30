import React, { FC } from "react";
import styles from "./index.module.scss";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

export interface ContentProps {
  children?: JSX.Element | JSX.Element[];
}

const Content: FC<ContentProps> = (children, li) => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Sept",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Oct",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Nov",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Dec",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
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
      <div className={styles.Content__wrapper}>
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
              <div
                className={styles.Content__wrapper__tabs__right__dot__in}
              ></div>
              <h3>Money In</h3>
              <div
                className={styles.Content__wrapper__tabs__right__dot__out}
              ></div>
              <h3>Money Out</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.charts}>
        <div className={styles.charts__bar}>
          <div className={styles.charts__bar__graph}>
            <BarChart
              width={1000}
              height={250}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="rgb(143, 212, 175)" />
              <Bar dataKey="uv" fill="rgb(200, 243, 220)" />
            </BarChart>{" "}
          </div>
        </div>
        <div className={styles.charts__sales}>
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
              <div
                className={styles.charts__sales__expenses__progress__bar}
              ></div>
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
          <div className={styles.charts__sales__invoices}>
            <div className={styles.charts__sales__invoices__right}>
              <h3>Expenses</h3>
              <h1>$3,500.00</h1>
              <h4>last Month</h4>
              <h4></h4>
              <div className={styles.charts__sales__invoices__right__doughbut}>
                <Doughnut
                  data={data1}
                  width={300}
                  height={300}
                  options={options}
                />
              </div>
            </div>

            <div className={styles.charts__sales__invoices__leftside}>
              <div className={styles.charts__sales__invoices__leftside__data}>
                <div
                  className={
                    styles.charts__sales__invoices__leftside__data__dot
                  }
                  style={{
                    backgroundColor: `${data1.datasets[0].backgroundColor[0]}`,
                  }}
                ></div>
                <h2>${data1.datasets[0].data[0]}</h2>
                <p>{data1.labels[0]}</p>
              </div>
              <div className={styles.charts__sales__invoices__leftside__data}>
                <div
                  className={
                    styles.charts__sales__invoices__leftside__data__dot
                  }
                  style={{
                    backgroundColor: `${data1.datasets[0].backgroundColor[1]}`,
                  }}
                ></div>
                <h2>${data1.datasets[0].data[1]}</h2>
                <p>{data1.labels[1]}</p>
              </div>{" "}
              <div className={styles.charts__sales__invoices__leftside__data}>
                <div
                  className={
                    styles.charts__sales__invoices__leftside__data__dot
                  }
                  style={{
                    backgroundColor: `${data1.datasets[0].backgroundColor[2]}`,
                  }}
                ></div>
                <h2>${data1.datasets[0].data[2]}</h2>
                <p>{data1.labels[2]}</p>
              </div>{" "}
              <div className={styles.charts__sales__invoices__leftside__data}>
                <div
                  className={
                    styles.charts__sales__invoices__leftside__data__dot
                  }
                  style={{
                    backgroundColor: `${data1.datasets[0].backgroundColor[3]}`,
                  }}
                ></div>
                <h2>${data1.datasets[0].data[3]}</h2>
                <p>{data1.labels[3]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
