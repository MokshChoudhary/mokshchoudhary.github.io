import './App.css'
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';


function App() {

  return (
    <>
      <HashRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<ContactMe />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App
