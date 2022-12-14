import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//pages
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Error from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
       <Navbar />
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/blogs' element={ <Blogs/> } />
      <Route path='/contact' element={ <Contact/> } />
      <Route path='*' element={ <Error/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
