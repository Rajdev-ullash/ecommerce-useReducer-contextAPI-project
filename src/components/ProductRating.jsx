import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
const ProductRating = ({ rating }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FaStar key={i} className=" text-yellow-500"></FaStar>);
    } else if (rating - i >= -0.5) {
      stars.push(<FaStarHalf key={i} className="text-yellow-500"></FaStarHalf>);
    } else {
      stars.push(<FaStar key={i} className=" text-gray-400"></FaStar>);
    }
  }
  return <div className="flex">{stars}</div>;
};

export default ProductRating;
