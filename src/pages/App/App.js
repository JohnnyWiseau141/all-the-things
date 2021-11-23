import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import FunctionalThings from '../FunctionalThings/FunctionalThings'
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

const [alexsThings] = useState([
  {
    name: "my mom",
    image: "https://www.telegraph.co.uk/content/dam/beauty/2016/06/22/Grace-Timothy-xlarge_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg",  
    attributes: ["yes", "yes", "not a taco", "amazing"],
  },
  {
    name: "Muscle Man",
    image: "https://wallpapercave.com/wp/wp3600371.jpg",
    attributes: ["Screaming", "Green", "not a taco", "is mom"], 
  },
])

const [johnsThings] = useState([
  {
    name: "Amber",
    image: "https://preview.redd.it/qiyv4eawsor51.png?auto=webp&s=ee0d712a91932ecfadd960480627ac385a6c7190",  
    attributes: ["pyro", "yes", "baron bunny", "best grill"],
  },
  {
    name: "Mona Megistus",
    image: "https://preview.redd.it/n9f3ttpv1jp51.jpg?auto=webp&s=e33a4f789fe61ce5d308e34c9d23d22176b0fa9c",
    attributes: ["hydro", "broke af", "second best grill"], 
  },
])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* All the <Route> components should live here */}
        <Route path='/the-functional-things' element={<FunctionalThings things={gracesThings} />} />
        <Route path='/the-amazing-things' element={<FunctionalThings things={alexsThings} />} />
        <Route path='/the-best-things' element={<FunctionalThings things={johnsThings} />} />
      </Routes>
    </>
  );
}
 
export default App;
