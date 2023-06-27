import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import Project from './routes/Project';
import Contact from './routes/Contact.js';
import About from './routes/About';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
