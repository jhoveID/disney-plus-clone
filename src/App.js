import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { 
        BrowserRouter as Router,
        Switch,
        Routes, 
        Route,
        Link } from "react-router-dom";
import './App.css';
import Detail from './components/Detail';
import { RouteSharp } from '@mui/icons-material';

function App() {
  return (
    <div className='App'>
        <Router>
            <Header />
             <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
        </Router>
    
      
    </div>
  );
}

export default App;


