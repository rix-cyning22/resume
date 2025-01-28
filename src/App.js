import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import sections from "./assets/section-lookup.json";

const App = () => {
  return (
    <div>
      <Header sections={sections} />
      <Main sections={sections} />
    </div>
  );
};

export default App;
