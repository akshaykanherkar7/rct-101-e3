import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const { IsAuth } = useContext(AuthContext);
  const location = useLocation();

  if (IsAuth) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequiredAuth;
