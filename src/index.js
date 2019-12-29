/*
 * @Date: 2019-12-29 09:38:02
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-29 23:01:21
 * @content: I
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
