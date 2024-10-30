import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Gift from "./components/Gift";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Newsletter />
            </>
          }
        />
        <Route path="/shop/*" element={<Products />} />
        <Route path="/gift/" element={<Gift />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
