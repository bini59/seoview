import React from "react";
import { Link } from "react-router-dom";

import "../styles/header.css"

const Header = () => {
  return (
    <header>
      <h1><Link to="/">서뷰</Link></h1>
      <nav>
        <div><Link to="/best">베스트셀러</Link></div>
        <div><Link to="/new">신간</Link></div>
      </nav>
    </header>
  );
};

export default Header;