import * as React from "react";
import "./Layout.css";
import ShoePriceContainer from "./shoes/ShoePriceContainer";

export default function Layout() {
  return (
    <div className="container">
      <div className="content">
        <div className="header">Shoe Price Calculator</div>
        <ShoePriceContainer />
      </div>
    </div>
  );
}
