import React from "react";
import "./Header.css";

//External CSS Styling
const Header = function (props) {
  return <div className="header">{props.heading}</div>;
};

//Inline CSS Styling
// const Header = function () {
//   const headerStyle = {
//     textAlign: "center",
//     padding: 20,
//     background: "#000",
//     color: "#fff",
//     textTransform: "uppercase",
//   };

//   return <div style={headerStyle}>Phone Directory</div>;
// };

export default Header;
