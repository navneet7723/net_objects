import React from "react";
import { Link } from "react-router-dom";
import { Visible, Hidden } from "react-grid-system";
import { CloseOutlined, AlignRightOutlined } from "@ant-design/icons";
import Store from "../services/store";
import './styles.css';

const logo = require("../assets/logo.svg");
const person = require("../assets/profile.jpg");

const handleMenuPress = () => {
  Store.toggleSider();
};

const CustomHeader = ({ icon }) => (
  <div>
    <Hidden xs sm>
      <div
        style={{
          padding: "0px 50px",
          backgroundColor: '#351CA4',
          height: 86,
          display: "flex",
          alignItems: "center"
        }}
      >
        <img
          src={logo.default}
          alt="MedCreds"
          style={{ width: 97 }}
        />
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              display: "flex",
              width: 600,
              justifyContent: "space-around"
            }}
          >
            <Link
              className="subtitle-500 color-white"
              to="/"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
            <div style={{position: 'relative'}}>
              <Link
                to="/features"
                className="subtitle-500 color-white"
                style={{ textDecoration: "none" }}
              >
                Credentialing Organizations
              </Link>
              <div className="selectedLine">
              </div>
            </div>
            <Link
              to="/about-us"
              className="subtitle-500 color-white"
              style={{ textDecoration: "none" }}
            >
              Hospitals
            </Link>
            <Link
              to="/blog"
              className="subtitle-500 color-white"
              style={{ textDecoration: "none" }}
            >
              Reports
            </Link>
          </span>
        </div>
        <img
          src={person.default}
          alt="MedCreds"
          className="userImg"
        />
        <span
          className="subtitle-500 color-white m-l-10"
        >
          Omniman
        </span>
      </div>
    </Hidden>
    <Visible xs sm>
      <div
        style={{
          padding: "0px 30px",
          height: 86,
          backgroundColor: '#351CA4',
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <img
          src={logo.default}
          alt="The Classroom App"
          style={{ width: 80 }}
        />
        <div className="color-white title-700" onClick={handleMenuPress}>
          {icon === "close" ? <CloseOutlined /> : <AlignRightOutlined />}
        </div>
      </div>
    </Visible>
  </div>
);

export default CustomHeader;
