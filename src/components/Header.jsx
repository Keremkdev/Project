import React from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import "../css/Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to={"/"}>İzlenecekler</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to={"/watched"}>İzlenenler</Link>
            </li>
            <li>
              <Link to={"/add"} className="btn">
                <CiSquarePlus style={{ fontSize: "50px", width: "50px" }} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
