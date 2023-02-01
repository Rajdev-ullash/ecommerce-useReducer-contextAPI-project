import React, { Fragment, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// BiBookmark;
import { BiBookmark } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useProducts } from "../context/ProductProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [clicked, setClicked] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const {
    state: { cart, wishlist },
    dispatch,
  } = useProducts();

  /* cart.amount length check */
  const cartLength = cart.reduce((acc, item) => {
    return (acc += item.amount);
  }, 0);

  /* wishlist.length check */
  const wishlistLength = wishlist.length;

  /* cart total price */
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.amount;
  });

  return (
    <Fragment>
      <div className="mx-0 sm:mx-14 my-1 px-9 py-1 rounded-full bg-orange-400 text-white">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <div className="logo cursor-pointer">
              <h1 className="text-2xl font-bold">Solo Shop</h1>
            </div>
          </NavLink>

          <div className="flex items-center">
            <ul className="hidden sm:block">
              <NavLink to="/">
                <li className="inline-block mx-2 cursor-pointer">Home</li>
              </NavLink>
              <NavLink to="/top-rated">
                <li className="inline-block mx-2 cursor-pointer">Top Rated</li>
              </NavLink>
              <NavLink to="/about">
                <li className="inline-block mx-2 cursor-pointer">About</li>
              </NavLink>
            </ul>
          </div>

          <div className="flex items-center">
            <NavLink to="/wishlist">
              <div className="cursor-pointer">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <BiBookmark className="text-xl" />
                    <span
                      className="badge badge-sm bg-slate-500
                   indicator-item"
                    >
                      {wishlistLength}
                    </span>
                  </div>
                </label>
              </div>
            </NavLink>
            <div>
              <div className="dropdown dropdown-end mr-8 sm:mr-0">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span
                      className="badge badge-sm bg-slate-500
                   indicator-item"
                    >
                      {cartLength}
                    </span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-5 card card-compact dropdown-content w-52 bg-slate-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg text-slate-700">
                      {cartLength} Items
                    </span>
                    <span className="text-slate-700 font-semibold text-base">
                      Subtotal: $ {total.toFixed(2)}
                    </span>
                    <div className="card-actions">
                      <NavLink to="/cart" className="w-full">
                        <button
                          className="px-3 mx-1 bg-orange-400 w-full rounded-full text-white
                     py-2"
                        >
                          View Cart
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="absolute top-1 right-6 cursor-pointer mt-6">
                {isOpen ? (
                  <span
                    class="md:hidden navbar-toggle text-4xl text-slate-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                ) : (
                  <span
                    class="md:hidden navbar-toggle text-slate-100"
                    onClick={() => setIsOpen(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}

        {isOpen && (
          <div className="sm:hidden">
            <div
              className={`h-[102vh] w-[320px] bg-slate-100 absolute top-1 left-0 text-left shadow overflow-y-auto z-50 `}
              /* animation for mobile menu */
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-id="super-duper"
            >
              <div class="mobile-navbar-content px-6 py-4">
                {/* mobile menu logo */}
                <div className="flex justify-between items-center">
                  <NavLink to="/">
                    <div className="logo cursor-pointer">
                      <h1 className="text-xl text-orange-400 font-bold">
                        Solo Shop
                      </h1>
                    </div>
                  </NavLink>
                  {/* close button */}
                  <div class="absolute top-1 right-6 cursor-pointer mt-6">
                    <span
                      class="md:hidden navbar-toggle text-4xl text-orange-400"
                      //onClick state false & call animation function to close menu
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* mobile menu links */}
                <div className="mt-12">
                  <ul className="block text-orange-400">
                    <NavLink to="/">
                      <li className="inline-block mx-2 cursor-pointer">Home</li>
                    </NavLink>
                    <NavLink to="/top-rated">
                      <li className="inline-block mx-2 cursor-pointer">
                        Top Rated
                      </li>
                    </NavLink>
                    <NavLink to="/about">
                      <li className="inline-block mx-2 cursor-pointer">
                        About
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
