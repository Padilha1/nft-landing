import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrolltoTop from "./components/ScrolltoTop";
import Free from "./components/Free";
import Clients from "./components/Clients";
import SuperRare from "./components/SuperRare";
import Release from "./components/Release";
import Like from "./components/Like";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import "./scss/index.scss";

function App() {
  return (
    <div className="app-container">
      <ScrolltoTop/>
      <Navbar/>
      <Home/>
      <Free/>
      <Clients/>
      <SuperRare/>
      <Release/>
      <Like/>
      <SignUp/>
      <Footer/>

    </div>
  );
}

export default App;
