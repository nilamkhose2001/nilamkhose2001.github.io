import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import {Navbar} from "./component/Navbar";
import { Home } from './component/Home';
import { About } from './component/About';
import { Contact } from './component/Contact';
import { Project } from './component/Project';
import { Skills } from './component/skills';
import GithubCalender from './component/GithubCalender';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      
      <Contact />
      <GithubCalender />
    </div>
  );
}

export default App;
