import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
  return (
        <BrowserRouter>
          <Routes>
            {/* starting interface page */}
            <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
  );
}
export default App;