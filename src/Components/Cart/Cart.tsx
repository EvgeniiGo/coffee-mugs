import "./Cart.css";
import { Mug } from "../../data/Products";
import { CartType, CartFunctionType } from "../../App";
import { usd } from "../../utils/functions";
import { ChangeEvent } from "react";

type PropsType = {
  products: Mug[];
  productsInCart: CartType;
  onChange: CartFunctionType;
  onClose: () => void;
};

const Cart = ({ products, productsInCart, onChange, onClose }: PropsType) => {
  const subtotal: number =
    Object.keys(productsInCart).length > 0
      ? Object.keys(productsInCart).reduce((total, key) => {
          const price: number = products.filter(
            (product) => product.id === key
          )[0].price;
          return total + productsInCart[key] * price;
        }, 0)
      : 0;

  const showCheckoutMessage = (): void => {
    const message = document.querySelector(
      ".cart__checkout-message"
    ) as HTMLParagraphElement;
    message.classList.add("cart__checkout-message_visible");
  };

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__header">
          <h4 className="cart__label">Your cart</h4>
          <button
            className="cart__close-button"
            type="button"
            onClick={onClose}
          ></button>
        </div>
        <div className="cart__products">
          {products
            .filter((product) =>
              Object.keys(productsInCart).includes(product.id)
            )
            .map((product) => {
              const img: string = new URL(
                `../../images/products/${product.id}.jpg`,
                import.meta.url
              ).href;

              function handleRemove(): void {
                onChange(product.id, 0);
              }

              function updateQuantity(e: ChangeEvent<HTMLInputElement>) {
                if (e.target.value !== "")
                  onChange(product.id, Number(e.target.value));
                console.log(productsInCart);
              }

              return (
                <div className="cart__product-cart" key={product.id}>
                  <img
                    src={img}
                    alt={product.name}
                    className="cart__product-image"
                  />
                  <div className="cart__product-text">
                    <h5 className="cart__product-name">{product.name}</h5>
                    <p className="cart__product-price">{usd(product.price)}</p>
                    <button
                      className="cart__product-button"
                      onClick={handleRemove}
                    >
                      Remove
                    </button>
                  </div>
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={productsInCart[product.id]}
                    onChange={updateQuantity}
                    className="cart__product-input"
                  />
                </div>
              );
            })}
        </div>
        <div className="cart__footer">
          <div className="cart__cost">
            <p className="cart__subtotal">Subtotal</p>
            <p className="cart__value">{usd(subtotal)}</p>
          </div>
          <button
            className="cart__checkout-button"
            type="button"
            onClick={showCheckoutMessage}
          >
            Continue to checkout
          </button>
          <p className="cart__checkout-message">
            Checkout is disabled on this site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
