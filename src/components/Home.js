import React,{useRef,useState} from 'react';
import '../css/home.css';
import NavBarbrownies from "./NavBarbrownies";
import BrawnisList from "./BrawnisList";
export const Home = () => {

 

  return (
    <div className='brawnie'>
      <NavBarbrownies />

      <h1  className="brownis" style={{ display: 'block', margin: '0 auto',paddingTop:'200px', paddingBottom:'10px'}}>
        Meet the famous chocolate <br />  
        <span>Brownies</span> in Calicut
      </h1>

      <button className="shop" style={{ display: 'block', margin: '0 auto' }}>Shop Now</button>
      
      <BrawnisList/>

    </div>
  );
};
