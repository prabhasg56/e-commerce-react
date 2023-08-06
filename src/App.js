import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Layout/Header";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Store/Products";
import Cart from "./components/Cart/Cart";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contact/ContactUs";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import HeroSection from "./components/Layout/HeroSection";
import AuthPage from "./pages/AuthPage";
import CartContext from "./store/cart-context";
import AutoLogout from "./components/AutoLogout/AutoLogOut";
import ForgotModal from "./components/Auth/ForgotModal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [showForgotModal, setShowForgotMoadal] = useState(false);
  const [showHeroSection, setShowHeroSection] = useState(true);

  const cartCtx = useContext(CartContext);

  const openModalHandler = (show) => {
    setOpenModal(show);
  };

  const showForgotModalHandler = (show) => {
    setShowForgotMoadal(show);
  }

  const heroSectionHandler = (show) => {
    setShowHeroSection(show);
  };

  return (
    <>
      {cartCtx._currentValue.isLoggedIn &&
        ReactDOM.createPortal(
          <Cart showModal={openModal} showModalHandler={openModalHandler} />,
          document.getElementById("cart-modal")
        )}

      {!cartCtx._currentValue.isLoggedIn &&
        ReactDOM.createPortal(
          <ForgotModal
            showModal={showForgotModal}
            showModalHandler={showForgotModalHandler}
          />,
          document.getElementById("forgot-password-modal")
        )}

      <Header showModalHandler={openModalHandler} />
      <HeroSection />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!cartCtx._currentValue.isLoggedIn ? <AuthPage showModalHandler={showForgotModalHandler}/> : <Home />}
        />
        <Route
          path="/store"
          element={
            cartCtx._currentValue.isLoggedIn ? (
              <Products showHeroSection={heroSectionHandler} />
            ) : (
              <Home />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route
          path="/product-details/:productId"
          element={
            cartCtx._currentValue.isLoggedIn ? <ProductDetails /> : <Home />
          }
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      {cartCtx._currentValue.isLoggedIn && <AutoLogout />}
      <Footer />
    </>
  );
}

export default App;
