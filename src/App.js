import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Nav from './components/Nav'; 
import NotFound from './components/NotFound'; 
import Home from './components/Home'; 
import About from './components/About'; 
import Math from './components/Math';
import Digimon from './components/Digimon';  

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          {/* make wildcard here the first one... so it's always registered */}
          <Route path="*" element ={<NotFound />} /> 
          <Route path="/" element ={<Home />} />
          <Route path="/about" element ={<About />} /> 
          <Route path="/math/:a/:b" element={<Math />} />
          <Route path="/digimons/:name" element={<Digimon />} />
        </Routes>
      </div>
    </BrowserRouter>

  );

}

export default App;
