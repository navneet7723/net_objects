import React from "react";
import { Link } from "react-router-dom";
import CustomHeader from "./CustomHeader";
import Store from "../services/store";
import './styles.css';
const CustomSideBar = ({ children }) => (
  <div>
    <CustomHeader icon="close" />
    <div
      className="sidebar"
    >
      <Link
        onClick={() => Store.toggleSider()}
        className="title-500 color-white"
        to="/"
        style={{ textDecoration: "none" }}
      >
        Home
      </Link>
      <br />
      <br />
      <Link
        onClick={() => Store.toggleSider()}
        to="/features"
        className="title-500 color-white"
        style={{ textDecoration: "none" }}
      >
        Credentialing Organizations
      </Link>
      <br />
      <br />
      <Link
        onClick={() => Store.toggleSider()}
        to="/about-us"
        className="title-500 color-white"
        style={{ textDecoration: "none" }}
      >
        Hospitals
      </Link>
      <br />
      <br />
      <Link
        onClick={() => Store.toggleSider()}
        to="/blog"
        className="title-500 color-white"
        style={{ textDecoration: "none" }}
      >
        Reports
      </Link>
    </div>
  </div>
);

export default CustomSideBar;
