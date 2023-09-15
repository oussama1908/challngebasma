import React from "react";
import ReactStars from "react-rating-stars-component";
import "../css/browniscard.css";

const Card = ({ title, imageUrl, rating }) => {
  return (
    <div className="CardStyle">
      <img
        src={imageUrl}
        alt="Affiche "
        style={{ height: "200px", width: "100%" }}
      />
      <div >
        <div className="box">
          <h1 style={{ fontSize: "15px", color: 'white', paddingTop: '10px' }}>{title}</h1>
          <div className="star">
            <ReactStars
              key={rating}
              value={rating}
              count={5}
              size={24}
              edit={false}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
           
          </div>
          <div className="update-movie">
            <button className="update-button">see more</button>
            <button className="update-button">
              Update
            </button>
            <button> Delete</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
