import React from "react";
import Routes from "./routes";

import { Provider } from "react-redux";

import Header from "./components/Header";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes />
    </Provider>
  );
}

export default App;
