import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

document.body.style.backgroundColor = "#fafafa";
document.getElementById("root").style.overflow = "hidden";

//https://www.w3schools.com/howto/howto_js_sticky_header.asp
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("headerFixed");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
