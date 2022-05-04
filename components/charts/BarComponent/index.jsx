import React from "react";
import styles from "./index.module.scss";
import "chart.js/auto";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  ResponsiveContainer,
} from "recharts";

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
const BarComponent = (children, li) => {
  // console.log("SCRN WIDRH", screen.width);
  return (
    <div className={styles.bar_container}>
      <div className={styles.bar_container}>
        <div className={styles.bar_container__graph}>
          {/* <ResponsiveContainer> */}
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
            <Bar dataKey="pv" fill="rgb(83, 182, 131)" />
            <Bar dataKey="uv" fill="rgb(202, 238, 240)" />
          </BarChart>
          {/* </ResponsiveContainer> */}
        </div>
      </div>
    </div>
  );
};
export default BarComponent;
