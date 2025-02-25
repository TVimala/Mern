import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contacts/Contacts";
import Nav from "./components/Nav/Nav"; 

function App() {
  return (
    <Router> 
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
