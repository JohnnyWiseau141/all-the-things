import { Link } from 'react-router-dom'
import React from 'react'


const Home = (props) => {
  return (
    <>
      {/* All the <a> tags should live here */}
      <h1>All-The-Things</h1>
      <Link to="/the-functional-things">Grace's Things</Link><br/>
    </>
  );
}
 
export default Home;