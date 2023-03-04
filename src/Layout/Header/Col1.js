import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Row, Statistic, Typography } from "antd";

export default function Col1() {
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

      <Row style={{ height: "50px", display: "flex", alignItems: "center" }}>
        <Typography>Col-1 1,234</Typography>
      </Row>
      <Divider dashed style={{ margin: "10px 0" }} />
      <Row>Col-1 1,234</Row>
    </div>
  );
}
