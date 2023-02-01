import { actionTypes } from "./actionTypes";

export const initialState = {
  products: [],
  loading: false,
  error: false,
  cart: [],
  wishlist: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case actionTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        //check if item is already in cart
        cart: state.cart.find((item) => item.id === action.payload.id)
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, amount: item.amount + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, amount: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case actionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };
    case actionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, amount: item.amount - 1 }
              : item
          )
          .filter((item) => item.amount !== 0),
      };
    case actionTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.find((item) => item.id === action.payload.id)
          ? state.wishlist
          : [...state.wishlist, action.payload],
      };
    case actionTypes.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
