import React from "react";
import "./App.css";
import UrlInput from "./components/UrlInput";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <UrlInput />
      <Footer />
    </div>
  );
};

export default App;
