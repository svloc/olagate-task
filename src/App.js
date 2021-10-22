import React from "react";
import { Route, Switch } from "react-router";
import Kitchen from "./components/Kitchen";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import "./style.css";

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={Login}/>
      <ProtectedRoute exact path ="/kitchen" component={Kitchen}/>
    </Switch>
  );
}
