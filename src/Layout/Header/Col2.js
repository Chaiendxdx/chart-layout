import { TinyArea } from "@ant-design/charts";
import { Col, Divider, Row, Space, Statistic } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
export default function Col2() {
  const data = [264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592];
  const config = {
    autoFit: true,
    data,
    smooth: true,
    areaStyle: {
      fill: "#d6e3fd",
    },
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
          <TinyArea {...config} />
        </Col>
      </Row>

      <Divider dashed style={{ margin: "10px 0" }} />
      <Row>Col-1 1,234</Row>
    </div>
  );
}
