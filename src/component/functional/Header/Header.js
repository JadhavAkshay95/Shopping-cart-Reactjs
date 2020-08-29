import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ cartCount }) => {
  return (
    <>
      <div className="header-container">
        <NavLink className="header-line-item" to="/">
          Home{" "}
        </NavLink>
        <NavLink className="header-line-item" to="/cart">
          Cart {cartCount > 0 && cartCount}
        </NavLink>
      </div>
    </>
  );
};

Header.propTypes = {
  cartCount: PropTypes.number,
};

export default Header;
