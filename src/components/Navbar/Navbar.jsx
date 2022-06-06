import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const { IsAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { Count } = useContext(CartContext);

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="">
        Logo
      </Link>
      <span data-cy="navbar-cart-items-count">
        {/* count here */} Cart: {Count.length}{" "}
      </span>
      <button
        data-cy="navbar-login-logout-button"
        onClick={() => {
          setIsAuth(false);
        }}
      >
        {IsAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
