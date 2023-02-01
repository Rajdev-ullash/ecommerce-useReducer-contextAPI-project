import React, { Fragment } from "react";
import { useProducts } from "../../context/ProductProvider";

const CartDetails = ({ item, loop }) => {
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
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2"
            onClick={() =>
              dispatch({ type: "DECREASE_QUANTITY", payload: item.id })
            }
          >
            -
          </button>
          {item.amount > 0 && item.amount}
          <button
            className="bg-green-500 text-white px-3 py-1 ml-2 rounded hover:bg-green-600"
            onClick={() =>
              dispatch({ type: "INCREASE_QUANTITY", payload: item.id })
            }
          >
            +
          </button>
        </td>
        <td className="p-2 border-t border-gray-200">
          ${(item.amount * item.price).toFixed(2)}
        </td>
        <td className="p-2 border-t border-gray-200">
          <button
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
            }
          >
            Remove
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default CartDetails;
