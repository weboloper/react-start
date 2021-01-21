import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import "./assets/scss/main.scss";
import LayoutBase from "./layouts/LayoutBase";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <LayoutBase>
        <Route exact path="/" component={Home} />
      </LayoutBase>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
