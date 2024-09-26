import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu'
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Menu />
        <div className='content'>
          <Routes>
            <Route path='/inicio' element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
