import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Column } from "@ant-design/charts";
import { Anchor, Col, Menu, Row, Statistic } from "antd";
import { useState } from "react";

export default function ChartCol() {
  const data = [
    {
      type: "1",
      sales: 26.4,
    },
    {
      type: "2",
      sales: 41.7,
    },
    {
      type: "3",
      sales: 43.8,
    },
    {
      type: "4",
      sales: 88.7,
    },
    {
      type: "5",
      sales: 30.9,
    },
    {
      type: "6",
      sales: 39.7,
    },
    {
      type: "7",
      sales: 55,
    },
    {
      type: "8",
      sales: 57.5,
    },
    {
      type: "9",
      sales: 56.3,
    },
    {
      type: "10",
      sales: 43,
    },
    {
      type: "11",
      sales: 52.5,
    },
    {
      type: "12",
      sales: 59.2,
    },
  ];
  const config = {
    // height: 250,
    // autoFit: false,
    data,
    xField: "type",
    yField: "sales",
    columnWidthRatio: 0.6,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },

    meta: {
      type: {
        alias: "",
      },
      sales: {
        alias: "",
      },
    },
  };
  return <Column {...config} style={{ padding: "8px 8px" }} />;
}
