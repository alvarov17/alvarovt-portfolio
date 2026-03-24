import "./index.css"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Contact from "./Contact"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "@/components/orb.css"

function App() {
return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </div>
)
}
export default App;
