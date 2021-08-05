import React from "react";
import { webpageConstants } from "../../constants/app-constants";
import "./header.scss";

const Header = () => {
  return <h1 className="title">{webpageConstants.webisteTitle}</h1>;
};

export default Header;
