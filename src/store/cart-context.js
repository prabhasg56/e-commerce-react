import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount: 0,
    totalProducts: [],
    addItem: (item) => {},
    buyItems: (item) => {},
    removeItem: (item) => {}
})

export default CartContext;