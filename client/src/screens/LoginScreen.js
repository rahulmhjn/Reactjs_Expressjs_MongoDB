import React, { useState, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useContext(AuthContext);

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signin({ email, password });
        }}
      >
        <div className="form-control">
          <label htmlFor="text">Eamil</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password..."
          />
        </div>
        <button className="btn">Login</button>
      </form>
      <p>
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginScreen;
