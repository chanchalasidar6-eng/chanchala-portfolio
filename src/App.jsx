import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Experience from "./pages/Experience";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Education from "./pages/Education";
// import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/experience" element={<Experience />} /> */}
        {/* <Route path="/skills" element={<Skills />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/education" element={<Education />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;