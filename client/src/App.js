import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './Pages/MainPage';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/cookbook/list");
      console.log("🚀 ~ data:", data);
    }
    fetchData()
  })
  return (
    <BrowserRouter>
      <div className="background-container">
          <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
