
import './App.css';
import { Header } from './Components/HeaderC/Header';
import SimpleBottomNavigation from './Components/Nav/Navbar';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
import { Container} from '@material-ui/core';
import Trending from './Components/Pages/Trending/Trending';
import Movies from './Components/Pages/Movie/Movies';
import Search from './Components/Pages/Search/search';
import Series from './Components/Pages/Series/Series';
function App() {
  return (
    <Router>
    <Header/>
  <div className="app">
    <Container>
      <Routes>
        <Route path='/' element={<Trending/>} exact/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/search' element={<Search/>}/>
        
      </Routes>
    </Container>
  
  </div>
  <SimpleBottomNavigation/>
    
  </Router>
  
  );
}

export default App;
