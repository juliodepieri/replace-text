import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReplaceText from '../pages/ReplaceText';

const AllRoutes: React.FC = () => (
  <Routes>
    <Route path="/">
      <Route path="/" element={<ReplaceText />} />
    </Route>
  </Routes>
);

export default AllRoutes;
