import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Newsletter from "./components/Newsletter";

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
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
