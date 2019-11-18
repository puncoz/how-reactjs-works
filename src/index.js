import CReact from "./lib/CReact";

// import React from "react"
// import ReactDom from "react-dom"

// const App = <h1 title="Welcome text">Hello World from React!</h1>

// ReactDom.render(App, document.getElementById("app"))

const App = CReact.createElement("h1", { title: "Welcome text" }, "Hello World from CReact!")

CReact.render(App, document.getElementById("app"))