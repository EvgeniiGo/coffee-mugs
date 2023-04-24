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
import BlogPost from "./Components/BlogPost/BlogPost";
import ProductPage from "./Components/ProductPage/ProductPage";
import Cart from "./Components/Cart/Cart";
import { products, Mug } from "./data/Products";
import { posts } from "./data/Posts";
import { people } from "./data/People";

export type CartType = {
  [id: string]: number;
};

export type CartFunctionType = (productId: string, quantity: number) => void;

function App() {
  const [viewCart, setViewCart] = useState([]);
  const [productsInCart, setProductsInCart] = useState<CartType>({});

  function addProductToCart(productId: string, quantity: number): void {
    console.log(productId);
    const newCart: CartType = { ...productsInCart };
    if (newCart[productId]) {
      newCart[productId] = newCart[productId] + quantity;
    } else {
      newCart[productId] = quantity;
    }
    setProductsInCart(newCart);
    // Object.keys(productsInCart).includes(productId)
    //   ? setProductsInCart({
    //       ...productsInCart,
    //       productId: productsInCart[productId] + quantity,
    //     })
    //   : setProductsInCart({ ...productsInCart, productId: quantity});
    // console.log(productsInCart);
  }

  const changeProductInCartQuantity: CartFunctionType = (
    productId,
    newQuantity
  ) => {
    if (newQuantity === 0) {
      const newCart: CartType = { ...productsInCart };
      delete newCart[productId];
      setProductsInCart(newCart);
    } else {
      setProductsInCart({ ...productsInCart, productId: newQuantity });
    }
  };

  return (
    <>
      {/* <Header viewCart={viewCart} setViewCart={setViewCart} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Main mugs={products} posts={posts} />} />
      </Routes>
      <Routes>
        <Route path="/products" element={<Products mugs={products} />} />
      </Routes>
      <Routes>
        <Route path="/blog" element={<Blog posts={posts} />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About authors={people} />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route
          path="/posts/:id"
          element={<BlogPost posts={posts} people={people} />}
        />
      </Routes>
      <Routes>
        <Route
          path="/product/:id"
          element={<ProductPage mugs={products} onAdd={addProductToCart} />}
        />
      </Routes>
      <Subscription />
      <Footer />
      <Cart
        products={products}
        productsInCart={productsInCart}
        onChange={changeProductInCartQuantity}
      />
    </>
  );
}

export default App;
