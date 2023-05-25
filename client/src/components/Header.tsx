import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1><Link to="/">서뷰</Link></h1>
      <nav>
        <ul>
          <li><Link to="/best">베스트셀러</Link></li>
          <li><Link to="/new">신간</Link></li>
          <li><Link to="/list">서적 목록</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;