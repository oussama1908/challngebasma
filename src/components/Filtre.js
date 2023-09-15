import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import "../css/FiltreStyle.css";
import AddCard from "./AddCard";

const Filtre = ({ HandleSearch, FiltreCake }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitleFilter(newTitle);
    HandleSearch({ title: newTitle, rating: ratingFilter });
  };

  const handleRatingChange = (newRating) => {
    setRatingFilter(newRating);
    HandleSearch({ title: titleFilter, rating: newRating });
  };

  return (
    <div>
      <div className="FiltreStyle">
        <h1>Search BY</h1>
        <div className="FiltreSearch">
          <div>
            <h2>Title</h2>
            <input
              type="text"
              placeholder="Write the name of your movies"
              onChange={handleTitleChange}
              value={titleFilter}
            />
          </div>

          <div>
            <h2>Stars</h2>
            <ReactStars
              value={ratingFilter}
              count={5}
              size={24}
              edit={true}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              onChange={handleRatingChange}
            />
          </div>
        </div>
        <AddCard />
      </div>
    </div>
  );
};

export default Filtre;
