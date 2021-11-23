import React from "react";
import ThingCard from "../../components/ThingCard/ThingCard";
import { Link } from "react-router-dom";
import './AmazingThings.css'

const AmazingThings = (props) => {
  return ( 
    <>
      <Link to="/"> Home </Link>
        {props.things.map((thing, idx) => 
          <div> 
            <ThingCard key={idx} thing={thing}/>
          </div>
        )}
    </>
  );
}
 
export default AmazingThings;