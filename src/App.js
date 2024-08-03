import { Route, Routes } from 'react-router-dom';
import './App.css'
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Home from './pages/Home';
import The404Page from './pages/The404Page';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
            <li><Link to={'/'}>🏠</Link></li>
            <li><Link to={'/page1'}>Page1</Link></li>
            <li><Link to={'/page2'}>Page2</Link></li>
            <li><Link to={'/page3'}>Page3</Link></li> 
        </ul> 
       <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/page1' element={<Page1 />} /> 
        <Route path='/page2' element={<Page2 />} /> 
        <Route path='/page3' element={<Page3 />} /> 
        <Route path='*' element={<The404Page />} /> 
       </Routes>
       </header>
    </div>
  );
}

export default App;
