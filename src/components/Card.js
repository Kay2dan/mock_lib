import React from "react";

const Card = ({ cardData }) => {
  return (
    <div className="">
      {/* <Image src={cardData.imgSrc} className="card-img-top" alt="placeholder" height="240px" width="100%" objectFit="cover" /> */}
      {/* <img src={cardData.imgSrc} className="card-img-top" alt="placeholder" style={{ height: "240px", objectFit: "cover" }} /> */}
      <div className="">
        <h5 className="">{cardData.title}</h5>
        <p className="">{cardData.text}</p>
        <a href="#" className="">
          link
        </a>
      </div>
    </div>
  );
};

export default Card;
