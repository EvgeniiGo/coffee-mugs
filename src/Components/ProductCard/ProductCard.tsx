import "./ProductCard.css";
import { Mug } from "../../data/Products";
import { usd } from "../../utils/functions";

type PropsType = Omit<Mug, "categories">;

const ProductCard = ({ id, name, price, oldPrice = undefined }: PropsType) => {
  const img: string = new URL(
    `../../images/products/${id}.jpg`,
    import.meta.url
  ).href;

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img src={img} alt={name} className="product-card__image" />
        <button className="product-card__button" type="button">
          Explore mug
        </button>
        {oldPrice !== undefined ? (
          <div className="product-card__on-sale">On Sale.</div>
        ) : (
          <></>
        )}
      </div>

      <h4 className="product-card__name">{name}</h4>
      <div className="product-card__price-container">
        {oldPrice === undefined ? (
          <p className="product-card__price">{usd(price)}</p>
        ) : (
          <>
            <p className="product-card__new-price">{usd(price)}</p>
            <p className="product-card__previous-price">{usd(oldPrice)}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
