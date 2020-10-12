import React from "react";
import { Header } from "./components/Header";

import { GlobalProvider } from "./context/GlobalState";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import MainScreen from "./screens/MainScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { Provider as AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route path="/home" component={MainScreen} />
            <Route path="/signup" component={SignupScreen} />
          </Switch>
        </Router>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
