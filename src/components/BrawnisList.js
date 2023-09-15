import React, { useState } from "react";
import "../css/brownislist.css";
import Brownies from "../Brownies";
import Card from "./Card";
import Filtre from './Filtre';

const BrawnisList = () => {
  const [brownie, setBrownie] = useState(Brownies); 
  const [FiltreCake, setFiltreCake] = useState(Brownies); 

  const HandleSearch = ({ title, rating }) => {
    const filteredCakes = brownie.filter((cake) => {
      return (
        cake.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === 0 || cake.rating === rating)
      );
    });
    setFiltreCake(filteredCakes);
  };
  return (
    <div className="brownis-section">
      <div className="brownis-list">
        <Filtre HandleSearch={HandleSearch} FiltreCake={FiltreCake} />
        <br />
        <br />

        <div className="cardlist">
          {FiltreCake.map((brownie) => ( 
            <Card
              key={brownie.id}
              id={brownie.id}
              title={brownie.title}
              rating={brownie.rating}
              overview={brownie.description}
              imageUrl={brownie.posterURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrawnisList;
