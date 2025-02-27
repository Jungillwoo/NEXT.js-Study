import { Container, Grid2 } from '@mui/material';
import './App.css';
import Content from './pages/Content';
import Header from './pages/Header';
import Nav from './pages/Nav';

function App() {
  return (
      <Container fixed className='container'>
        <Grid2 container>
          <Grid2 size={3} className='header'>
          <Header/>
          </Grid2>
          <Grid2 size={9} className='main'>
            <Nav/>
            <Content/>
          </Grid2>
        </Grid2>
      </Container>
      /*
        Grid와 Container 안의 레이아웃을 핸들링해주고 반응형으로 배치시켜야 하는 경우 매우 유용하다.
        fixed는 해당 사이즈보다 브라우저 크기가 작아지면
          xl -> lg -> md -> sm -> xs 순으로 줄어들게 된다.

          xl(Extra large) : 1200px이상
          lg(Large) : 992px이상 
          md(Medium) : 768px이상
          sm(Small) : 576px이상
          xs(Extra smaill) : 576px미만
      */
  );
}

export default App;
