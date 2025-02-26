import logo from './logo.svg';
import './App.css';
import './css/menu.css';
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import Ex3 from './pages/Ex3';
import Ex4 from './pages/Ex4';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let subject = "Apple Store";
  let myFont = { fontSize: "30px", color: "#fff" };
  return (
    <div className="App">
      {/*<div id="header">
        <ul id="nav">
            <li><a href="" id="apple">&nbsp;</a></li>
            <li><a href="">Store</a></li>
            <li><a href="">Mac</a></li>
            <li><a href="">iPad</a></li>
            <li><a href="">iPhone</a></li>
            <li><a href="">Watch</a></li>
            <li><a href="">Vision</a></li>
            <li><a href="">AirPods</a></li>
            <li><a href="">TV & Home</a></li>
            <li><a href="">Entertainment</a></li>
            <li><a href="">Accessories</a></li>
            <li><a href="">Support</a></li>
        </ul>
      </div>
      <br/>
      <h2 style={myFont}>{subject}</h2> */}
      {/* 두번째 예제 시도 
      <br/>
      <Ex1/>
      */}

      <nav>
        <Link to = "/ex1">메뉴1</Link> &nbsp;&nbsp;&nbsp;
        <Link to = "/ex2">메뉴2</Link> &nbsp;&nbsp;&nbsp;
        <Link to = "/ex3">메뉴3</Link> &nbsp;&nbsp;&nbsp;
        <Link to = "/ex4">메뉴4</Link> 
      </nav>
      <Routes>
        <Route path="/ex1" element={<Ex1/>}/>
        <Route path="/ex2" element={<Ex2/>}/>
        <Route path="/ex3" element={<Ex3/>}/>
        <Route path="/ex4" element={<Ex4/>}/>
      </Routes>
    </div> 
  );
}

export default App;
/*
  라우터란?
    리엑트에서 라우터는 웹 브라우저에서 URL이 변경될 때마다 해당
    URL페이지를 해석하고 보여주는 역할을 한다.

    [종류]
    1. BrowserRouter: HTML5의 History API를 사용하여 UI를 업데이트
    2. HashRouter: URL의 Hash를 사용하여 UI를 업데이트
    3. MemoryRouter: 메모리에 URL을 저장하고 UI를 업데이트
    4. NativeRouter: React Native 전용 라우터
    5. StaticRouter: 정적인 페이지를 서버사이드 렌더링할 때 사용
    6. Router: 직접 라우터를 구현할 때 사용

    [라우터 설치] - NextJS에서는 이미 설치되어 있음
      npm install react-router-dom@6

*/
