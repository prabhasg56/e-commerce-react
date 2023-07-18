import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount: 0,
    totalProducts: [],
    idToken : '',
    isLoggedIn : false,
    login: (idToken, refreshToken) => {},
    logout: () => {},
    addItem: (item) => {},
    buyItems: (item) => {},
    removeItem: (item) => {}
})

export default CartContext;