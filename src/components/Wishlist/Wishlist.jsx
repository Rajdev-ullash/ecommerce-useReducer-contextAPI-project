import React, { Fragment } from "react";
import { useProducts } from "../../context/ProductProvider";
import Navbar from "../Navbar";
import WishlistDetails from "./WishlistDetails";

const Wishlist = () => {
  const {
    state: { wishlist, loading, error },
  } = useProducts();

  console.log(wishlist);

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

  if (!loading && !error && wishlist.length === 0) {
    content = (
      <div class="p-6 bg-red-500 text-white text-center">
        <h1 class="text-2xl">No wishlist found</h1>
        <p class="text-lg">
          We couldn't find any wishlist matching your search. Please try again.
        </p>
      </div>
    );
  }

  if (wishlist.length > 0 && !loading && !error) {
    let total = 0;
    wishlist.forEach((item) => {
      total += item.price * item.amount;
    });

    content = (
      <div className="px-5 mt-5">
        <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
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

              <th className="text-sm font-medium p-2 bg-gray-200">
                Product Price
              </th>
              <th className="text-sm font-medium p-2 bg-gray-200"></th>
              <th className="text-sm font-medium p-2 bg-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((product, index) => (
              <WishlistDetails
                item={product}
                key={product.id}
                loop={index + 1}
              />
            ))}
          </tbody>
        </table>
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

export default Wishlist;
