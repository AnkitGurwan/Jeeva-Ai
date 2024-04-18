import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import FormState from './Context/FormState';

const App = () => {
  return (
      <FormState>
          <BrowserRouter>
            <Routes>
              {/* starting interface page */}
              <Route path='/' element={<Home />} />
              </Routes>
          </BrowserRouter>
      </FormState>
  );
}
export default App;