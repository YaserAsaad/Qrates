import "./App.css";
import Footer from "./Footer";
import FourthPart from "./FourthPart";
import Navbar from "./Navbar";
import PartOne from "./PartOne";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";
import React, { useState } from "react";

function App() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div data-theme="light" className="min-h-[100vh] overflow-hidden">
      <Navbar isOpen={isOpen} setisOpen={setisOpen} />
      {isOpen === false && (
        <>
          <PartOne />
          <SecondPart />
          <ThirdPart />
          <FourthPart />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
