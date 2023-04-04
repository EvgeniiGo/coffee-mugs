import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Products from "./Components/Products/Products";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Subscription from "./Components/Subscription/Subscription";
import Footer from "./Components/Footer/Footer";

function App() {
  const [viewCart, setViewCart] = useState([]);

  return (
    <>
      {/* <Header viewCart={viewCart} setViewCart={setViewCart} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
