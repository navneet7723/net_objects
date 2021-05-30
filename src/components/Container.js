import React from "react";

const Container = ({ children }) => (
  <div
    style={{
      width: "100vw !important",
      height: "100%"
    }}
  >
    {children}
  </div>
);

export default Container;
