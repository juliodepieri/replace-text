import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReplaceWord from '../pages/ReplaceWord';

const AllRoutes: React.FC = () => (
  <Routes>
    <Route path="/">
      <Route path="/" element={<ReplaceWord />} />
    </Route>
  </Routes>
);

export default AllRoutes;
