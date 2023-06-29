import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './Pages/MainPage';
import AddNewRecipes from './Pages/AddRecipePage';
import SingleRecipePage from './Pages/SinglePage';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/recipes/list");
      
      // console.log("data:", data);

      setUsers(data.data);

    };

    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <div className="background-container">
        <Routes>
          <Route exact path="/" element={<MainPage/>}/>
          <Route path="/addrecipe" element={<AddNewRecipes/>}/>
          <Route path="/singlerecipepage/:id" element={<SingleRecipePage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//<Routes>
 //           
            
            
    //      </Routes> 
