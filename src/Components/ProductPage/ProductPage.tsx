import "./ProductPage.css";
import Premium from "../Premium/Premium";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Mug } from "../../data/Products";
import { useParams } from "react-router-dom";
import { usd } from "../../utils/functions";
import ProductCard from "../ProductCard/ProductCard";
import { CartFunctionType } from "../../App";
import { ChangeEvent, SyntheticEvent, useState } from "react";

type PropsType = {
  mugs: Mug[];
  onAdd: CartFunctionType;
};

const ProductPage = ({ mugs, onAdd }: PropsType) => {
  const { id } = useParams();
  const mug = mugs.find((mug) => mug.id === id) as Mug;
  const img: string = new URL(
    `../../images/products/${mug.id}.jpg`,
    import.meta.url
  ).href;

  const additionalMugs: Mug[] = mugs.filter((mug) => mug.id !== id).slice(0, 3);

  const [quantity, setQuantity] = useState<number>(1);
  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleButtonClick = (e: SyntheticEvent) => {
    e.preventDefault();
    onAdd(mug.id, quantity);
  };

  return (
    <div className="product-page">
      <section className="product-page__product-container">
        <div className="product-page__head-section">
          <div className="product-page__image-container">
            <img
              src={img}
              alt="mug image"
              className="product-page__product-img"
            />
            {mug.oldPrice !== undefined ? (
              <div className="product-page__on-sale">On Sale.</div>
            ) : (
              <></>
            )}
          </div>
          <div className="product-page__main-details">
            <h1 className="product-page__product-name">{mug.name}</h1>
            <p className="product-page__product-description">
              {mug.description}
            </p>
            <div className="product-page__price-container">
              {mug.oldPrice === undefined ? (
                <p className="product-page__product-price">{usd(mug.price)}</p>
              ) : (
                <>
                  <p className="product-page__new-price">{usd(mug.price)}</p>
                  <p className="product-page__previous-price">
                    {usd(mug.oldPrice)}
                  </p>
                </>
              )}
            </div>
            <form className="product-form">
              <label htmlFor="" className="product-form__label">
                Quantity
              </label>
              <input
                type="number"
                min={1}
                max={50}
                value={quantity || 1}
                onChange={handleQuantityChange}
                className="product-form__input"
              />
              <button
                className="product-form__button"
                onClick={handleButtonClick}
              >
                Add to cart
              </button>
            </form>
          </div>
        </div>
        <div className="product-page__details-section">
          <div className="product-page__product-details">
            <p className="product-page__product-label">Details</p>
            <p className="product-page__product-text">{mug.details}</p>
          </div>
          <div className="product-page__product-dimensions">
            <p className="product-page__product-label">Dimensions</p>
            <ul className="product-page__dimensions-list">
              <li className="product-page__product-dimension">
                <span className="product-page__dimension-text">
                  Length (in):
                </span>
                <span className="product-page__dimension-value">
                  {mug.dimensions.length}
                </span>
              </li>
              <li className="product-page__product-dimension">
                <span className="product-page__dimension-text">
                  Height (in):
                </span>
                <span className="product-page__dimension-value">
                  {mug.dimensions.height}
                </span>
              </li>
              <li className="product-page__product-dimension">
                <span className="product-page__dimension-text">
                  Width (in):
                </span>
                <span className="product-page__dimension-value">
                  {mug.dimensions.width}
                </span>
              </li>
              <li className="product-page__product-dimension">
                <span className="product-page__dimension-text">
                  Weight (oz):
                </span>
                <span className="product-page__dimension-value">
                  {mug.dimensions.weight}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Premium />
      <section className="more-products">
        <SectionTitle text="You might also like these" />
        <div className="more-products__container">
          {additionalMugs.map((mug) => (
            <ProductCard
              key={mug.id}
              id={mug.id}
              name={mug.name}
              price={mug.price}
              oldPrice={mug.oldPrice}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
