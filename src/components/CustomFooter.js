import React from "react";
import { Row, Col } from "react-grid-system";


const CustomFooter = () => (
  <div
    style={{
      height: "100%",
      flexDirection: "column",
      justifyContent: "space-between"
    }}
  >
    <Row align="end">
      <Col>
        <span>MedCREDS</span>
      </Col>
      <Col style={{ display: "flex", justifyContent: "flex-end" }}>
        <span>Copyright © MedCreds 2020</span>
      </Col>
    </Row>
  </div>
);

export default CustomFooter;
