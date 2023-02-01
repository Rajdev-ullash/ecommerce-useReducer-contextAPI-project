import React, { Fragment } from "react";
import { useProducts } from "../../context/ProductProvider";

const WishlistDetails = ({ item, loop }) => {
  const { dispatch } = useProducts();
  return (
    <Fragment>
      <tr key={item.id}>
        <td className="p-2 border-t border-gray-200">{loop}</td>
        <td className="p-2 border-t border-gray-200 w-8">
          <img
            className="w-10 h-10 rounded object-cover"
            src={item.image}
            alt={item.title}
          />
        </td>
        <td className="p-2 border-t border-gray-200">{item.title}</td>

        <td className="p-2 border-t border-gray-200">
          ${item.price.toFixed(2)}
        </td>
        <td className="p-2 border-t border-gray-200">
          <button
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
          >
            Add to Cart
          </button>
        </td>
        <td className="p-2 border-t border-gray-200">
          <button
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id })
            }
          >
            Remove
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default WishlistDetails;
