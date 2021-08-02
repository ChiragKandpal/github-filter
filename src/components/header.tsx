import React from "react";
import { webpageConstants } from "../app-constants";
import "../style/header.scss";

const Header: React.FC = () => {
  return <h1 className="title">{webpageConstants.webisteTitle}</h1>;
};

export default Header;
