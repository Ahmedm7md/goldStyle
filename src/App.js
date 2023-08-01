import './App.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { Home } from './home';
import { About } from './about';
import { Contact } from './contact';
import logo from'./logo.jpg'
function App() {
  return (
    <div className="App">
      <Router>
        <div className='nav'>
          <img src={logo} alt='logo' width={60} id='logo'/>
          <Link to="/" className='navbar' id='home'>Home</Link>
          <Link to="/about" className='navbar'>About</Link>
          <Link to="/contact" className='navbar' id='contact'>browse</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='*' element={<h1>ERROR 404, Page not found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
