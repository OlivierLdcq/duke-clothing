import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Navigation.scss";
const Navigation = () => {
  return (
    <>
      <div className="Navigation">
        <Link className="logoCtn" to="/">
          {" "}
          <CrownLogo className="logo" />{" "}
        </Link>
        <div className="linksCtn">
          <Link className="navLinks" to="/signin">
            SIGNIN{" "}
          </Link>
          <Link className="navLinks" to="/shop">
            SHOP{" "}
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
