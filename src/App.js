import "./App.css";
import Footer from "./Footer";
import FourthPart from "./FourthPart";
import Navbar from "./Navbar";
import PartOne from "./PartOne";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <PartOne />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <Footer />
    </div>
  );
}

export default App;
