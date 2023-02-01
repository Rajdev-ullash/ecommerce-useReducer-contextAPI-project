import React, { Fragment } from "react";
import { useProducts } from "../../context/ProductProvider";
import Navbar from "../Navbar";
import ProductCard from "../ProductCard";
import CartDetails from "./CartDetails";

const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useProducts();

  console.log(cart);

  let content;
  if (loading) {
    content = (
      <div className="flex justify-center">
        <div className="w-6 h-6 border-2 border-t-2 border-gray-200 rounded-full animation-spin"></div>
      </div>
    );
  }

  if (error) {
    content = (
      <div class="p-6 bg-red-500 text-white text-center">
        <h1 class="text-2xl">Oops! An error has occurred</h1>
        <p class="text-lg">
          Something went wrong and we couldn't complete your request. Please try
          again later.
        </p>
      </div>
    );
  }

  if (!loading && !error && cart.length === 0) {
    content = (
      <div class="p-6 bg-red-500 text-white text-center">
        <h1 class="text-2xl">No cart found</h1>
        <p class="text-lg">
          We couldn't find any cart matching your search. Please try again.
        </p>
      </div>
    );
  }

  if (cart.length > 0 && !loading && !error) {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.amount;
    });

    content = (
      <div className="px-5 mt-5">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        <table className="w-full text-left table-collapse">
          <thead>
            <tr>
              <th className="text-sm font-medium p-2 bg-gray-200">Sl No</th>
              <th className="text-sm font-medium p-2 bg-gray-200">
                Product Image
              </th>
              <th className="text-sm font-medium p-2 bg-gray-200">
                Product Name
              </th>
              <th className="text-sm font-medium p-2 bg-gray-200">Quantity</th>
              <th className="text-sm font-medium p-2 bg-gray-200">Price</th>
              <th className="text-sm font-medium p-2 bg-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <CartDetails item={product} key={product.id} loop={index + 1} />
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-xl font-medium">
          Total: <span className="text-green-500">{total.toFixed(2)}</span>
        </p>
      </div>
    );
  }
  return (
    <Fragment>
      <Navbar />
      <div className="sm:mx-14">{content}</div>
    </Fragment>
  );
};

export default Cart;
