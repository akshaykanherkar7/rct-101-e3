import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { handleOnclickLogin } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        data-cy="login-email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        data-cy="login-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        data-cy="login-submit"
        onClick={() => handleOnclickLogin(username, password)}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
