import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Menu from './components/Menu'
import './App.css';
import Home from './pages/Home';
import SejaParceiro from './pages/SejaParceiro';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <BrowserRouter>
      <div className='container'>
        <Menu isChecked={isChecked} setIsChecked={setIsChecked} />
        {!isChecked && (
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/SejaParceiro" element={<SejaParceiro />} />
            </Routes>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
