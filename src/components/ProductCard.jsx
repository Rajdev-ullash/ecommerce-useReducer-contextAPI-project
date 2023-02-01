import React from "react";
import { BiBookmark } from "react-icons/bi";
import { useProducts } from "../context/ProductProvider";
import { actionTypes } from "../state/ProductState/actionTypes";
import ProductRating from "./ProductRating";

const ProductCard = ({ product }) => {
  const { dispatch } = useProducts();
  return (
    <div
      key={product.id}
      className="bg-white rounded-lg shadow-lg mx-5 sm:mx-0 sm:w-72 mt-4 h-auto"
    >
      <div className="">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg p-7 bg-gray-100"
        />
        <div className="px-3 py-3">
          <div>
            <ProductRating rating={product.rating.rate} />
          </div>
          <div className="h-32">
            <h1 className="text-normal font-bold text-gray-700 mt-2">
              {product.title}
            </h1>
            <span className="text-gray-500 font-semibold">
              {product.category}
            </span>
            <h1 className="text-xl font-bold text-gray-700">
              ${product.price}
            </h1>
          </div>
          <div className="flex justify-evenly items-center mt-7">
            <button
              className="bg-gray-800 text-white px-3 py-1 rounded-lg"
              onClick={() =>
                dispatch({ type: actionTypes.ADD_TO_CART, payload: product })
              }
            >
              Add to Cart
            </button>
            {/* wishlist button */}
            <button
              className="bg-gray-800 text-white px-3 py-1 rounded-lg"
              onClick={() =>
                dispatch({
                  type: actionTypes.ADD_TO_WISHLIST,
                  payload: product,
                })
              }
            >
              <BiBookmark className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
