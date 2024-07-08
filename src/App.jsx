import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Viabilidade from './pages/Viabilidade';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/viabilidade" element={<Viabilidade />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
