import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
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
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
