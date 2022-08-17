import "./App.css";
import AboutUs from "./components/AboutUS/AboutUs";
import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import Mission from "./components/Mission/Mission";
import Responsibility from "./components/Responsibility/Responsibility";
import Vision from "./components/Vision/Vision";

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Vision />
      <Mission />
      <Responsibility />
      <Message />
    </>
  );
}

export default App;
