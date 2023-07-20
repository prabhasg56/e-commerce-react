import React, { useEffect, useReducer, useState } from "react";
import CartContext from "./cart-context";
import productsArr from "./totalProducts";
import axios from "axios";

// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

// let updatedItems;
// const cartReducer = (state, action) => {
//   if (action.type === "ADD") {
//     let updatedTotalAmount =
//       state.totalAmount + action.item.price * action.item.quantity;

//     //for saving in state object
//     if (state.items.length === 0) {
//       updatedItems = [...state.items, action.item];
//     } else {
//       const existingCartItemIndex = state.items.findIndex((item) => {
//         return item.index === action.item.index;
//       });

//       const existingCartItem = state.items[existingCartItemIndex];

//       if (existingCartItem) {
//         let updatedItem = {
//           ...existingCartItem,
//           quantity: existingCartItem.quantity + 1,
//         };

//         updatedItems = [...state.items];
//         updatedItems[existingCartItemIndex] = updatedItem;
//         // alert("Item already exists!");
//       } else {
//         updatedItems = [...state.items, action.item];
//       }
//     }

//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }

//   if (action.type === "REMOVE") {
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.index === action.id
//     );

//     const existingCartItem = state.items[existingCartItemIndex];

//     const updatedTotalAmount = state.totalAmount - existingCartItem.price;

//     if (existingCartItem.quantity === 1) {
//       updatedItems = state.items.filter((item) => item.index !== action.id);
//     } else {
//       let updatedItem = {
//         ...existingCartItem,
//         quantity: existingCartItem.quantity - 1,
//       };

//       updatedItems = [...state.items];
//       updatedItems[existingCartItemIndex] = updatedItem;
//     }

//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }

//   if (action.type === "BUY") {
//     if (action.item === true) {
//       return {
//         items: [],
//         totalAmount: 0,
//       };
//     }
//   }

//   return state;
// };

const CartProvider = (props) => {
  // const [cartState, dispatchCartAction] = useReducer(
  //   cartReducer,
  //   defaultCartState
  // );

  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const initialToken = localStorage.getItem("token");
  const [idToken, setIdToken] = useState(initialToken);
  const [dummy, setDummy] = useState(0);

  const email = localStorage.getItem('email');
  let removeSpecialCharFromEmail;
  if(email !== null){
    removeSpecialCharFromEmail = email.replace(/[@.]/g, '')
  }
  
  const baseUrl = `https://crudcrud.com/api/a64afd2599b345a7a164d292d59a4545/${removeSpecialCharFromEmail}`;


  const userIsLoggedIn = !!idToken;

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${baseUrl}`);

      if (response.status === 200) {
        setItems(response.data);
        let totalAmount = response.data.reduce((sumOfPrice, cur) => {
          sumOfPrice = sumOfPrice + Number(cur.price);
          return sumOfPrice;
        }, 0);

        setTotalAmount(totalAmount);

        return response;
      } else {
        throw new Error("Somthing went to wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [dummy]);

  const addItemToCartHandler = async (curItem) => {
    // dispatchCartAction({ type: "ADD", item: item });
    
    //fetcing data from crudcrud..
    try {
      const response = await fetchItems();

      //For empty cart
      if (response.data.length === 0) {
        try {
          const response = await axios.post(`${baseUrl}`, {
            id: curItem.id,
            title: curItem.title,
            imageUrl: curItem.imageUrl,
            price: curItem.price,
            quantity: curItem.quantity,
          });

          if (response.status === 201) {
            alert("Successfully added!");
          } else {
            throw new Error("Somthing went wrong!");
          }
        } catch (error) {
          alert(error);
        }
      } else {
        let existingCartItemId, updatedQuantity, updatedPrice;
        response.data.findIndex((item) => {
          if (curItem.id === item.id) {
            existingCartItemId = item._id;
            updatedQuantity = Number(item.quantity) + 1;
            updatedPrice = Number(item.price) + curItem.price;
          }
        });

        // for existing item
        if (existingCartItemId) {
          try {
            let responsePut = await axios.put(
              `${baseUrl}/${existingCartItemId}`,
              {
                id: curItem.id,
                title: curItem.title,
                imageUrl: curItem.imageUrl,
                price: updatedPrice,
                quantity: updatedQuantity,
              }
            );

            if (responsePut.status === 200) {
              alert("Successfully updated!");
            } else {
              throw new Error("Somthing went wrong!");
            }
          } catch (error) {
            alert(error);
          }
        } else {
          // this is for non-existing item
          try {
            let response = await axios.post(`${baseUrl}`, {
              id: curItem.id,
              title: curItem.title,
              imageUrl: curItem.imageUrl,
              price: curItem.price,
              quantity: curItem.quantity,
            });

            if (response.status === 201) {
              alert("Successfully added!");
            } else {
              throw new Error("Somthing went wrong!");
            }
          } catch (error) {
            alert(error);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }

    //This code for saving data in state without server
    // let updatedTotalAmount = totalAmount + item.price * item.quantity;

    // if (items.length === 0) {
    //   updatedItems = [...items, item];
    //   try {
    //     let response = await axios.post(`${baseUrl}prabhask1856gmailcom`, {
    //       item,
    //     });

    //     if (response.status === 201) {
    //       alert("item added successfully!");
    //     } else {
    //       throw new Error("Somthing went wrong!");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // } else {
    //   const existingCartItemIndex = items.findIndex((prevItem) => {
    //     return item.index === prevItem.index;
    //   });

    //   const existingCartItem = items[existingCartItemIndex];

    //   if (existingCartItem) {
    //     console.log('exist'+JSON.stringify(existingCartItem))
    //     let updatedItem = {
    //       ...existingCartItem,
    //       quantity: existingCartItem.quantity + 1,
    //     };

    //     updatedItems = [...items];
    //     updatedItems[existingCartItemIndex] = updatedItem;

    //     try {
    //       let response = await axios.put(
    //         `${baseUrl}prabhask1856gmailcom/${item.id}`,
    //         {
    //           updatedItems,
    //         }
    //       );

    //       if (response.status === 201) {
    //         alert("item added successfully!");
    //       } else {
    //         throw new Error("Somthing went wrong!");
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   } else {
    //     updatedItems = [...items, item];

    //     try {
    //       let response = await axios.post(`${baseUrl}prabhask1856gmailcom`, {
    //         item,
    //       });

    //       if (response.status === 201) {
    //         alert("item added successfully!");
    //       } else {
    //         throw new Error("Somthing went wrong!");
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // }

    // setItems(updatedItems);
    // setTotalAmount(updatedTotalAmount);
    setDummy(dummy+1);
  };

  const buyItemsHandler = (item) => {
    // dispatchCartAction({ type: "BUY", item: item });
    if (item === true) {
      return {
        items: [],
        totalAmount: 0,
      };
    }
  };

  const removeItemFromCartHandler = async (curItem) => {
    // dispatchCartAction({ type: "REMOVE", id: id });

    try {
      const response = await fetchItems();

      if (curItem.quantity === 1) {
        try {
          const response = await axios.delete(
            `${baseUrl}/${curItem._id}`
          );

          if (response.status === 200) {
            alert("Removed!");
          } else {
            throw new Error("Somthing went wrong!");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        let updatedQuantity, updatedPrice;
        response.data.findIndex((item) => {
          if (curItem._id === item._id) {
            const singleItemPrice = Number(item.price) / Number(item.quantity);
            updatedQuantity = Number(item.quantity) - 1;
            updatedPrice = Number(item.price) - singleItemPrice;
          }
        });

        try {
          let responsePut = await axios.put(
            `${baseUrl}/${curItem._id}`,
            {
              id: curItem.id,
              title: curItem.title,
              imageUrl: curItem.imageUrl,
              price: updatedPrice,
              quantity: updatedQuantity,
            }
          );

          if (responsePut.status === 200) {
            alert("Removed!");
          } else {
            throw new Error("Somthing went wrong!");
          }
        } catch (error) {
          alert(error);
        }
      }
    } catch (error) {
      console.log(error);
    }

    setDummy(dummy-1);
    //This code for updating data in state without server

    // const existingCartItemIndex = items.findIndex((item) => item.index === id);

    // const existingCartItem = items[existingCartItemIndex];

    // const updatedTotalAmount = totalAmount - existingCartItem.price;

    // if (existingCartItem.quantity === 1) {
    //   updatedItems = items.filter((item) => item.index !== id);
    // } else {
    //   let updatedItem = {
    //     ...existingCartItem,
    //     quantity: existingCartItem.quantity - 1,
    //   };

    //   updatedItems = [...items];
    //   updatedItems[existingCartItemIndex] = updatedItem;
    // }

    // setItems(updatedItems);
    // setTotalAmount(updatedTotalAmount);
  };

  const loginHandler = (token) => {
    setIdToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setIdToken(null);
    localStorage.removeItem("token");
  };

  const cartContext = React.createContext({
    items: items,
    totalAmount: totalAmount,
    totalProducts: productsArr,
    idToken: idToken,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
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
