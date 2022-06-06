import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [IsAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const handleOnclickLogin = (username, password) => {
    axios
      .post("https://reqres.in/api/login", { username, password })
      .then((res) => {
        setIsAuth(true);
        navigate("/products")
      });
    // .catch((err) => {
    //   setIsAuth(false);
    // });
  };

  console.log(IsAuth);
  return (
    <AuthContext.Provider value={{ handleOnclickLogin, IsAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
