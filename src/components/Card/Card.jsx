import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <>
    <h1 className='judul-content'>Kelebihan PerpusKu</h1>
    <div className="container">
      <div className="card">
        <img src="./public/images/poster1.png" width={300} alt="" />
        <div className="bottom">
          <h3 className="title-card">Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
      <div className="card">
        <img src="./public/images/poster1.png" width={300} alt="" />
        <div className="bottom">
          <h3 className="title-card">Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
      <div className="card">
        <img src="./public/images/poster1.png" width={300} alt="" />
        <div className="bottom">
          <h3 className="title-card">Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
      <div className="card">
        <img src="./public/images/poster1.png" width={300} alt="" />
        <div className="bottom">
          <h3 className="title-card">Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
      <div className="card">
        <img src="./public/images/poster1.png" width={300} alt="" />
        <div className="bottom">
          <h3 className="title-card">Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
