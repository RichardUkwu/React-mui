import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import SearchAppBar from "./components/AppBar";

function App() {
  return (
    <>
    <SearchAppBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
