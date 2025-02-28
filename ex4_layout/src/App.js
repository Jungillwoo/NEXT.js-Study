import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import Ex3 from './pages/Ex3';
import Ex4_Card from './pages/Ex4_Card';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/ex1">page1</Link>
        <Link to="/ex2">page2</Link>
        <Link to="/ex3">page3</Link>
        <Link to="/ex4">page4</Link>
      </nav>
      <Routes>
        <Route path="/ex1" element={<Ex1/>}/>
        <Route path="/ex2" element={<Ex2/>}/>
        <Route path="/ex3" element={<Ex3/>}/>
        <Route path="/ex4" element={<Ex4_Card/>}/>
      </Routes>
    </div>
  );
}
export default App;
