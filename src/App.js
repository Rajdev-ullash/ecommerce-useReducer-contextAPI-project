import React from "react";
import { RouterProvider } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";
import { router } from "./routes/root";

function App() {
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
}

export default App;
