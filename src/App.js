import "./App.css";
import AboutUs from "./components/AboutUS/AboutUs";
import Footer from "./components/Footer/Footer";
import GroupCompanies from "./components/GroupCompanies/GroupCompanies";
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
      <GroupCompanies />
      <Footer />
    </>
  );
}

export default App;
