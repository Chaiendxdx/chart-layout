import { Col, Row, Space } from "antd";
import Col1 from "./Col1";
import Col2 from "./Col2";
import Col3 from "./Col3";
import Col4 from "./Col4";
const responsiveItem = {
  xl: {
    span: 6,
  },
  md: {
    span: 12,
  },
  sm: {
    span: 12,
  },
  xs: {
    span: 24,
  },
};
export default function Header() {
  return (
    <Row
      gutter={8}
      style={{ width: "auto", margin: " 0 16px 8px" }}
      justify="space-between"
      type="flex"
    >
      <Col
        {...responsiveItem}
        span={6}
        style={{
          backgroundColor: "white",
          margin: "8px 0",
          padding: "10px 20px",
          borderRadius: "2px",
        }}
      >
        <Col1 />
      </Col>
      <Col
        {...responsiveItem}
        span={6}
        style={{
          backgroundColor: "white",
          margin: "8px 0",
          padding: "10px 20px",
          borderRadius: "2px",
        }}
      >
        <Col2 />
      </Col>
      <Col
        {...responsiveItem}
        span={6}
        style={{
          backgroundColor: "white",
          margin: "8px 0",
          padding: "10px 20px",
          borderRadius: "2px",
        }}
      >
        <Col3 />
      </Col>
      <Col
        {...responsiveItem}
        span={6}
        style={{
          backgroundColor: "white",
          margin: "8px 0",
          padding: "10px 20px",
          borderRadius: "2px",
        }}
      >
        <Col4 />
      </Col>
    </Row>
  );
}
