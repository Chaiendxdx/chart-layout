import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Progress, Row, Statistic } from "antd";

export default function Col4() {
  const config = {
    autoFit: true,
    percent: 78,
    barWidthRatio: 0.8,
    color: ["#F4664A", "#E8EDF3"],
  };
  return (
    <>
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
      <Row>8846</Row>
      <Progress {...config} />
      <Divider dashed style={{ margin: "10px 0" }} />
      <Row>Col-1 1,234</Row>
    </>
  );
}
