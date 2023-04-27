import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const [productsInCart, setProductsInCart] = useState<CartType>({});

  function addProductToCart(productId: string, quantity: number): void {
    const newCart: CartType = { ...productsInCart };
    if (newCart[productId]) {
      newCart[productId] = newCart[productId] + quantity;
    } else {
      newCart[productId] = quantity;
    }
    setProductsInCart(newCart);
    openCart();
  }

  const changeProductInCartQuantity: CartFunctionType = (
    productId,
    newQuantity
  ) => {
    const newCart: CartType = { ...productsInCart };
    if (newQuantity === 0) {
      delete newCart[productId];
    } else {
      newCart[productId] = newQuantity;
    }
    setProductsInCart(newCart);
    openCart();
  };

  function handleOverlayClose(e: MouseEvent) {
    const cartElement = document.querySelector(".cart") as HTMLElement;
    if (e.target === cartElement) {
      closeCart();
    }
  }

  function openCart(): void {
    const cartElement = document.querySelector(".cart") as HTMLElement;
    cartElement.classList.add("cart_opened");
    document.addEventListener("click", handleOverlayClose);
  }

  function closeCart(): void {
    const cartElement = document.querySelector(".cart") as HTMLElement;
    console.log(cartElement);
    cartElement.classList.remove("cart_opened");
    document.removeEventListener("click", handleOverlayClose);

    const message = document.querySelector(
      ".cart__checkout-message"
    ) as HTMLParagraphElement;
    message.classList.remove("cart__checkout-message_visible");
  }

  return (
    <>
      <Header openCart={openCart} productsInCart={productsInCart} />
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
        onClose={closeCart}
      />
    </>
  );
}

export default App;
