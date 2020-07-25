import createDataContext from "./createDataContext";
import axios from "axios";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };

    // case 'signup':
    //     return { ...state, token: action.payload, errorMessage: '' }
    case "signin":
      return { token: action.payload, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password, name }) => {
    try {
      const response = await axios.post("/signup", { email, password, name });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    // make api request with that email and password
    try {
      const response = await axios.post("/signin", { email, password });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signin",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await localStorage.removeItem("token");
    dispatch({ type: "signout" });
    //    navigate('loginFlow');
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
