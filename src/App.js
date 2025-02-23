import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import Middle from "./Components/Middle/Middle";
import { Aboutus } from "./Components/AboutUs/AboutUs";
function App() {
  return (
    <div className="App  flex flex-col gap-20  ">
      <Header />

      <Middle />
      <div className="relative -top-[30em] md:-top-[40em] xl:-top-[50em]  xxl:-top-[55em] xxxl:-top-[70em]">
        <Aboutus />
      </div>
    </div>
  );
}

export default App;
