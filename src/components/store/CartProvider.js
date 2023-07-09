import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

let updatedItems;
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedTotalAmount = 0;

    if (state.items.length === 0) {
      updatedItems = [...state.items, action.item];
      updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.quantity;
    } else {
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.index === action.item.index;
      });

      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        updatedTotalAmount = state.totalAmount;
        alert("Item already exists!");
      } else {
        updatedItems = [...state.items, action.item];
        updatedTotalAmount =
          state.totalAmount + action.item.price * action.item.quantity;
      }
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.index === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    if (existingCartItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.index !== action.id);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // console.log({ type: "ADD", item: item });
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = React.createContext({
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  });
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
