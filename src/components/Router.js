import React from 'react';
import Components from './components';
import Apparels from './Apparels/Apparels';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Components />} />

          <Route path="/Apperals" element={<Apparels />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
