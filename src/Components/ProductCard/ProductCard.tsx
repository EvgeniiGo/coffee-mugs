import "./ProductCard.css";
import { Mug } from "../../data/Products";
import { usd } from "../../utils/functions";
import { useNavigate } from "react-router-dom";

type PropsType = Omit<
  Mug,
  "categories" | "description" | "dimensions" | "details"
>;

const ProductCard = ({ id, name, price, oldPrice = undefined }: PropsType) => {
  const img: string = new URL(
    `../../images/products/${id}.jpg`,
    import.meta.url
  ).href;

  const navigate = useNavigate();
  const handleNavigation = (): void => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img
          src={img}
          alt={name}
          className="product-card__image"
          onClick={handleNavigation}
        />
        <a href={`/product/${id}`} className="product-card__link">
          Explore mug
        </a>
        {oldPrice !== undefined ? (
          <div className="product-card__on-sale">On Sale.</div>
        ) : (
          <></>
        )}
      </div>

      <h4 className="product-card__name" onClick={handleNavigation}>
        {name}
      </h4>
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
