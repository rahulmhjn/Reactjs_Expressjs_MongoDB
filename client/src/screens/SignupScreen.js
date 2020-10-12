import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";
import Message from "../components/Message";

const SignupScreen = ({ history }) => {
  const { error, signup } = useContext(GlobalContext);

  const submitHandler = ({ email, password, name }) => {
    console.log(email, password, name);
    signup({ email, password, name });
    if (!error) {
      history.push("/home");
    }
  };
  return (
    <div>
      <h1>SignUp</h1>
      {error && <Message variant="danger">{error}</Message>}
      <AuthForm headerText="SignUp" bText="Sign Up" onSubmit={submitHandler} />
      <p>
        <Link to="/login">Already have an account? Sign In</Link>
      </p>
    </div>
  );
};

export default SignupScreen;
