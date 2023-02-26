import './App.css';
import Nav from './components/layout/Nav';
import Footer from "./components/layout/Footer"


function App() {
  return (
    <div className="App">
      <Nav/>
      <h2>A propos rapide</h2>
      <h2> Parcours / Experience</h2>
      <h2>Compétences</h2>
      <Footer/>
    </div>
  );
}

export default App;
