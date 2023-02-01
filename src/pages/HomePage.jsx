import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import { useProducts } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  console.log(products);

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

  if (!loading && !error && products.length === 0) {
    content = (
      <div class="p-6 bg-red-500 text-white text-center">
        <h1 class="text-2xl">No products found</h1>
        <p class="text-lg">
          We couldn't find any products matching your search. Please try again.
        </p>
      </div>
    );
  }

  if (products.length > 0 && !loading && !error) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
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

export default HomePage;
