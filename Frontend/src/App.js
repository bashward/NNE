import Navbar from "./Components/Navbar";
import {Route,Routes} from 'react-router-dom'
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollToTop"

function App() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<About/>}/>
      <Route path="/contactus" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
