import React, { useState, useContext } from "react";
// import { Context as AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Message from "../components/Message";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signin } = useContext(GlobalContext);

  return (
    <div>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signin({ email, password });
          if (!error) {
            history.push("/home");
          }
        }}
      >
        <div className="form-control">
          <label htmlFor="text">Email</label>
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
        <Link to="/signup">
          Don't have an account? <b>Sign Up</b>
        </Link>
      </p>
    </div>
  );
};

export default LoginScreen;
