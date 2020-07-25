import React, { useState } from "react";

const AuthForm = ({ headerText, errorMessage, onSubmit, bText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ email, password, name });
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
      <div className="form-control">
        <label htmlFor="text">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name..."
        />
      </div>
      <button className="btn">Register</button>
    </form>
  );
};

export default AuthForm;
