import React from 'react';
import Button from './Pages/Button';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    {/* <Button /> */}
    <Routes>
      <Route path="/" element={<Button />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
    </div>
  );
}

export default App;
