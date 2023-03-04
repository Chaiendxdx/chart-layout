import { Column } from "@ant-design/charts";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Row, Statistic } from "antd";

export default function Col3() {
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
    // height: 50,

    autoFit: true,
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
        alias: "类别",
      },
      sales: {
        alias: "销售额",
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };

  return (
    <div>
      <Row>
        <Col>
          <Statistic title="Col-1" value="8,846" />
        </Col>
        <Col
          style={{ display: "flex", justifyContent: "flex-end" }}
          flex="auto"
        >
          <InfoCircleOutlined />
        </Col>
      </Row>

      <Row style={{ height: "50px" }}>
        <Col span={24} style={{ height: "100%" }}>
          <Column {...config} />
        </Col>
      </Row>

      <Divider dashed style={{ margin: "10px 0" }} />
      <Row>Col-1 1,234</Row>
    </div>
  );
}
