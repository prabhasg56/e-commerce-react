import React, { useReducer } from "react";
import CartContext from "./cart-context";
import productsArr from "./totalProducts";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

let updatedItems;
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    if (state.items.length === 0) {
      updatedItems = [...state.items, action.item];
    } else {
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.index === action.item.index;
      });

      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        let updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        // alert("Item already exists!");
      } else {
        updatedItems = [...state.items, action.item];
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
    } else {
      let updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "BUY") {
    if (action.item === true) {
      return {
        items: [],
        totalAmount: 0,
      };
    }
  }

  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const buyItemsHandler = (item) => {
    dispatchCartAction({ type: "BUY", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = React.createContext({
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalProducts: productsArr,
    addItem: addItemToCartHandler,
    buyItems: buyItemsHandler,
    removeItem: removeItemFromCartHandler,
  });
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
