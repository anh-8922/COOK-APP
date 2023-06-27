import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './Pages/MainPage';
//import AddNewRecipes from './Components/AddRecipe';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/recipes/list");
      console.log("🚀 ~ data:", data);
       
      setUsers(data.data);
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

//<Routes>
 //           
            
            
    //      </Routes> 
