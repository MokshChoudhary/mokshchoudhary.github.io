import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Resume from './pages/Resume';
import NavigationBar from './comp/NavigationBar';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';


function App() {

  return (
    <>
    <NavigationBar/>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contact" element={<ContactMe/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App
