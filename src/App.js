import logo from './logo.svg';
import './App.css';
import About from './Pages/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Experience from './Pages/Experience';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path='/about-me' element={<About/>}>About Us</Route>
      <Route path='/home' element={<Home/>}>Home</Route>
      <Route path='/portfolio' element={<Portfolio/>}>Portfolio</Route>
      <Route path='/experience' element={<Experience/>}>Experience</Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
