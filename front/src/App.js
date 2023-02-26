import './App.css';
import Nav from './components/layout/Nav';
import Footer from "./components/layout/Footer"

import Chiffres from "./components/home/Chiffres.js";
import Competences from "./components/home/Competences";
import Experience from "./components/home/Experience";
import Parcours from "./components/home/Parcours";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Parcours/>
      <Experience/>
      <Competences/>
      <Chiffres/>
      <Footer/>
    </div>
  );
}

export default App;
