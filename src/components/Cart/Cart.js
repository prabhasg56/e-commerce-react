import React, { useContext } from 'react';
import CartModal from './Madal';
import CartContext from '../store/cart-context';

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div>
      <CartModal cartElements={cartCtx._currentValue.items} showCartItems = {props.showModal} showModalHandler = {props.showModalHandler}/>
    </div>
  )
}

export default Cart
