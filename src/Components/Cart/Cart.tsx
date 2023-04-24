import "./Cart.css";
import { Mug } from "../../data/Products";
import { CartType, CartFunctionType } from "../../App";

type PropsType = {
  products: Mug[];
  productsInCart: CartType;
  onChange: CartFunctionType;
};

const Cart = ({ products, productsInCart, onChange }: PropsType) => {
  const subtotal: number =
    Object.keys(productsInCart).length > 0
      ? Object.keys(productsInCart).reduce((total, key) => {
          return total + productsInCart[key];
        }, 0)
      : 0;
  const subtotalString: string = "$ " + subtotal + ".00 USD";

  return (
    <div className="cart">
      <div className="cart__header">
        <h4 className="cart__label">Your cart</h4>
        <button className="cart__close-button" type="button"></button>
      </div>
      <div className="cart__products">
        {products
          .filter((product) => Object.keys(productsInCart).includes(product.id))
          .map((product) => {
            const img: string = new URL(
              `../../images/products/${product.id}.jpg`,
              import.meta.url
            ).href;

            function handleRemove(): void {
              onChange(product.id, 0);
            }

            return (
              <div className="cart__product-cart">
                <img
                  src={img}
                  alt={product.name}
                  className="cart__product-image"
                />
                <div className="cart__product-text">
                  <h5 className="cart__product-name">{product.name}</h5>
                  <p className="cart__product-price">{product.price}</p>
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
                  className="cart__product-input"
                />
              </div>
            );
          })}
      </div>
      <div className="cart__footer">
        <div className="cart__cost">
          <p className="cart__subtotal">Subtotal</p>
          <p className="cart__value">{subtotalString}</p>
        </div>
        <button className="cart__checkout-button" type="button">
          Continue to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
