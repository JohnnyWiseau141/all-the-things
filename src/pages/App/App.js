import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import FunctionalThings from '../FunctionalThings/FunctionalThings'
import StyledThings from '../StyledThings/StyledThings'
import Home from '../Home/Home';


const App = () => {
const [gracesThings] = useState([
  {
    name: "functional programming",
    image: "https://imgs.xkcd.com/comics/functional.png",  
    attributes: ["efficient", "reusability", "not a taco", "beautiful"],
  },
  {
    name: "React hooks",
    image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    attributes: ["useEffect", "useState", "not a taco", "state's best friend"], 
  },
])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* All the <Route> components should live here */}
        <Route path='/the-functional-things' element={<FunctionalThings things={gracesThings} />} />
      </Routes>
    </>
  );
}
 
export default App;
