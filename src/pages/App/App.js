import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import GraceThings from '../GraceThings/GraceThings';
import AmazingThings from '../AmazingThings/AmazingThings';
import FunctionalThings from '../FunctionalThings/FunctionalThings'
import Home from '../Home/Home';


const App = () => {
const [gracesThings] = useState([
  {
    name: "zhongliiii",
    image: "https://avatarfiles.alphacoders.com/280/thumb-280958.png",  
    attributes: ["best boi", "osmanthus wine ;)", "REX LAPIS", "i WILL have order"],
  },
  {
    name: "ganyu cryo kween",
    image: "https://avatarfiles.alphacoders.com/280/280957.png",
    attributes: ["cRYO~~~", "wow much dps", "not a taco", "pew pew pew"], 
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
  {
    name: "Ningguang",
    image: "https://static.zerochan.net/Ningguang.full.3097820.jpg",
    attributes: ["geo", "a literal queen", "super cool barrier", "idk how i pulled her she just appeared"], 
  },
])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* All the <Route> components should live here */}
        <Route path='/the-grace-things' element={<GraceThings things={gracesThings} />} />
        <Route path='/the-amazing-things' element={<AmazingThings things={alexsThings} />} />
        <Route path='/the-best-things' element={<FunctionalThings things={johnsThings} />} />
      </Routes>
    </>
  );
}
 
export default App;
