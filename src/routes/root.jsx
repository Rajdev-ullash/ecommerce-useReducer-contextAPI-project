import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import TopRatedPage from "../pages/TopRatedPage";
import WishlistPage from "../pages/WishlistPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/top-rated",
    element: <TopRatedPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/wishlist",
    element: <WishlistPage />,
  },
]);
