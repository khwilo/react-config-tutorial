import React from "react";
import ReactDOM from "react-dom";
import "./style/main.less";

const Welcome = () => {
    return <h1>Hello from React boilerplate</h1>;
};

ReactDOM.render(<Welcome />, document.getElementById("root"));
