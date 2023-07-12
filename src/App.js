import { useState } from "react";
import { Route, Routes} from 'react-router-dom';
import ReactDOM  from "react-dom";

import Header from "./components/Layout/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/pages/Store/Products";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import ContactUs from "./components/pages/Contact/ContactUs";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = (show) => {
      setOpenModal(show);
  }

  return (

    <CartProvider >
      {ReactDOM.createPortal(<Cart showModal = {openModal} showModalHandler = {openModalHandler}/>, document.getElementById("cart-modal"))}
    <Header showModalHandler = {openModalHandler}/>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Products/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </CartProvider>
  );
}

export default App;
