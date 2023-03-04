import { Col, Row } from "antd";
import ChartCol from "./ChartCol";
import ChartInfo from "./ChartInfo";
import MenuChart from "./MenuChart";
import { DatePicker, Space } from "antd";
import MenuSearch from "./MenuSearch";
const { RangePicker } = DatePicker;
const responsiveCol = {
  xl: {
    span: 16,
  },
  md: {
    span: 16,
  },
  sm: {
    span: 24,
  },
  xs: {
    span: 24,
  },
};
const responsiveInfo = {
  xl: {
    span: 8,
  },
  md: {
    span: 8,
  },
  sm: {
    span: 24,
  },
  xs: {
    span: 24,
  },
};

export default function Body() {
  return (
    <Row
      style={{
        // width: "auto",
        backgroundColor: "white",
        margin: "8px 16px",
        padding: "8px 16px",
      }}
    >
      <Col {...responsiveCol} span={16}>
        <Row>
          <Col span={12}>
            <MenuChart />
          </Col>
          <Col
            span={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <MenuSearch />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ChartCol />
          </Col>
        </Row>
      </Col>
      <Col {...responsiveInfo} span={8}>
        <Row>
          <Col span={12}>
            <MenuChart />
          </Col>
          <Col style={{ display: "flex", alignItems: "center" }} span={12}>
            <RangePicker showTime format="YYYY/MM/DD" />
          </Col>
        </Row>
        <Row>
          <Col>
            <ChartInfo />
          </Col>
        </Row>
      </Col>
      {/* <Row style={{ width: "100%" }}>
        <Col span={16}>
          <MenuChart />
        </Col>
        <Col span={4}>
          <MenuChart />
        </Col>
        <Col style={{ display: "flex", alignItems: "center" }} span={4}>
          <RangePicker showTime format="YYYY/MM/DD" />
        </Col>
      </Row>
      <Row style={{ width: "100vw" }}>
        <Col {...responsiveCol} span={16} >
          <ChartCol />
        </Col>
        <Col {...responsiveInfo} span={8}>
          <ChartInfo />
        </Col>
      </Row> */}
    </Row>
  );
}
