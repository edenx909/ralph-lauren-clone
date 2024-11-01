import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { CartProvider } from "./contexts/Cart";
import { WishlistProvider } from "./contexts/Wishlist";

import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Gift from "./components/Gift";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import ProductPage from "./components/ProductPage";
import About from "./components/About";
import Account from "./components/Account";
import Sidebar from "./components/Sidebar";

function App() {
  // for sidebar
  const [open, setOpen] = useState(false);
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomanProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseMen = await fetch("/data/men.json");
        const men = await responseMen.json();
        setMenProducts(men);
        const responseWomen = await fetch("/data/women.json");
        const women = await responseWomen.json();
        setWomanProducts(women);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);
  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <Sidebar open={open} setOpen={setOpen} />
          <Nav open={open} setOpen={setOpen} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Intro />
                  <Products
                    menProducts={menProducts.slice(0, 2)}
                    womenProducts={womenProducts.slice(0, 2)}
                  />
                  <Newsletter />
                </>
              }
            />
            <Route
              path="/shop/*"
              element={
                <Products
                  menProducts={menProducts}
                  womenProducts={womenProducts}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductPage
                  menProducts={menProducts}
                  womenProducts={womenProducts}
                />
              }
            />
            <Route
              path="/gift/"
              element={
                <>
                  <Gift />
                  <Newsletter />
                </>
              }
            />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/wishlist/" element={<Wishlist />} />
            <Route
              path="/about/"
              element={
                <>
                  <About />
                  <Newsletter />
                </>
              }
            />
            <Route path="/account/" element={<Account />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
