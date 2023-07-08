import Header from "./components/Layout/Header";
import Products from "./components/Store/Products";
import ReactDOM  from "react-dom";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = (show) => {
      setOpenModal(show);
  }

  return (
    <CartProvider >
      {ReactDOM.createPortal(<Cart showModal = {openModal} showModalHandler = {openModalHandler}/>, document.getElementById("cart-modal"))}
    <Header showModalHandler = {openModalHandler}/>
    <Products/>
    </CartProvider>
  );
}

export default App;
