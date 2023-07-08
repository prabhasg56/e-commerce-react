import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD': {
           const updatedTotalAmount = state.totalAmount + action.item.price*action.item.quantity;

           const existingItem = state.item[action.item.index];

           let updatedItems;

           if(existingItem) {
            const  updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity 
            }

            updatedItems = [...state.items];
            updatedItems[action.item.index] = updatedItem;
           } else {
            
           }

        }

        case 'REMOVE': {

        }

        default: return defaultCartState;
    }
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item, index) => {
    console.log(item);
    dispatchCartAction({type: 'ADD', item: item, index: index})
  };

  const removeItemFromCartHandler = (item) => {};

  const cartContext = React.createContext({
    items: [],
    totalAmount: 0,
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
