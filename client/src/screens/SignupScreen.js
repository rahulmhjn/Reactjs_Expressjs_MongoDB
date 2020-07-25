import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);
  return (
    <div>
      <h1>SignUp</h1>
      <AuthForm
        headerText="SignUp"
        errorMessage={state.errorMessage}
        bText="Sign Up"
        onSubmit={signup}
      />
      <p>
        <Link to="/login">Already have an account? Sign In</Link>
      </p>
    </div>
  );
};

export default SignupScreen;
