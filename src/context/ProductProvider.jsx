import React, { createContext, useContext, useEffect, useReducer } from "react";
import { actionTypes } from "../state/ProductState/actionTypes";
import {
  initialState,
  productReducer,
} from "../state/ProductState/productReducer";

const Product_Context = createContext();

const ProductProvider = ({ children }) => {
  // const [data, setData] = useState([]);

  const [state, dispatch] = useReducer(productReducer, initialState);
  console.log(state);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
      )
      .catch(() => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
      });
  }, []);

  const value = {
    // data,
    state,
    dispatch,
  };

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <Product_Context.Provider value={value}>
      {children}
    </Product_Context.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(Product_Context);
  return context;
};

export default ProductProvider;
