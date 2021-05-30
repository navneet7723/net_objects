import React from "react";
import {
  Row,
  Col,
  Container,
  Hidden,
  Visible
} from "react-grid-system";
import {
  Button,
  Input,
  Select,
} from 'antd';
import { observer } from "mobx-react";
import {

} from '@ant-design/icons';
import './styles.css';
import { CountryConverter, certificates, certtypres } from './countryConverter';

const { Option } = Select;
const reception = require("../../assets/reception.png");

const Home = () => (
  <div>
    <div className="topBack">
      <div className="homeHeader">
        Add Credentialing Organization
      </div>
      <div className="greenText">
        Onboard a new Credentialing Organization
      </div>
    </div>
    <div className="trapezium">
    </div>
    <Container style={{marginTop: -120}}>
      <Row className="formbox">
        <Col xs={12} sm={6} md={4} className="leftImage">
          <img
            src={reception.default}
            alt="The classNameroom App"
            style={{
              maxWidth: '80%',
              height: 'auto',
            }}
          />
        </Col>
        <Col xs={12} sm={6} md={8} className="m-t-20 m-b-20 c-jc">

          <Row>
            <Col xs={12} md={6} className="m-b-20">
              <div>
                Organization Name *
              </div>
              <Input/>
            </Col>
            <Col xs={12} md={6} className="m-b-20">
              <div>
                Country*
              </div>
              <Select className="selectors" defaultValue={CountryConverter[0].name} onChange={() => console.log()}>
                {
                  CountryConverter.map((data) => <Option value={data.code}>{data.name}</Option>)
                }
              </Select>
            </Col>
          </Row>

          <Row className="m-b-20">
            <Col>
              <div>
                Email Address*
              </div>
              <Input/>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6} className="m-b-20">
              <div>
                Certificate Catergory*
              </div>
              <Select className="selectors" defaultValue={certtypres[0]} onChange={() => console.log()}>
                {
                  certtypres.map((data) => <Option value={data}>{data}</Option>)
                }
              </Select>
            </Col>
            <Col xs={12} md={6} className="m-b-20">
              <div>
                Certificate*
              </div>
              <Select className="selectors" defaultValue={certificates[0].name} onChange={() => console.log()}>
                {
                  certificates.map((data) => <Option value={data.code}>{data.name}</Option>)
                }
              </Select>
            </Col>
          </Row>
          <Row className="m-b-20" style={{margin: 0}} justify="end">
            <Button type="primary" className="greenBtn">
              Add
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default observer(Home);
