import './App.css';
import './css/menu.css';
import { Link, Route, Routes } from 'react-router-dom';
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import Ex3 from './pages/Ex3';
import Ex4 from './pages/Ex4';
import Ex5 from './pages/Ex5';
import Ex6 from './pages/Ex6';

function App() {
  return (
    <div className="App">
      <nav>
        <br/>
        <Link to="/page1">Page 1</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/page2">Page 2</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/page3">Page 3</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/page4">Page 4</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/page5">Page 5</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/page6">Page 6</Link>
      </nav>
      <Routes>
        <Route path="/page1" element={<Ex1/>} />
        <Route path="/page2" element={<Ex2/>} />
        <Route path="/page3" element={<Ex3/>} />
        <Route path="/page4" element={<Ex4/>} />
        <Route path="/page5" element={<Ex5 year={2025} str='뉴진스입니다'/>} />
        <Route path="/page6" element={<Ex6/>} />
      </Routes>
    </div>
  );
}

export default App;
