import { useState } from "react";
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

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [showHeroSection, setShowHeroSection] = useState(true);

  const openModalHandler = (show) => {
    setOpenModal(show);
  };

  const heroSectionHandler = (show) => {
    setShowHeroSection(show);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Cart showModal={openModal} showModalHandler={openModalHandler} />,
        document.getElementById("cart-modal")
      )}
      <Header showModalHandler={openModalHandler} />
      <HeroSection />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/store"
          element={<Products showHeroSection={heroSectionHandler} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
