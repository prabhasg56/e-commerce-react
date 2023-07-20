import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import CartModal from './Madal';
import CartContext from '../../store/cart-context';

const Cart = (props) => {

  const cartCtx = useContext(CartContext);

  return (
    <div>
      <CartModal cartElements={cartCtx._currentValue.items} showCartItems = {props.showModal} showModalHandler = {props.showModalHandler}/>
    </div>
  )
}

export default Cart
