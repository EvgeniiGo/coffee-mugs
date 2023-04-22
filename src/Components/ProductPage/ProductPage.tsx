import "./ProductPage.css";
import Premium from "../Premium/Premium";
import { Mug } from "../../data/Products";
import { useParams } from "react-router-dom";
import { usd } from "../../utils/functions";

type PropsType = {
  mugs: Mug[];
};

const ProductPage = ({ mugs }: PropsType) => {
  const { id } = useParams();
  const mug = mugs.find((mug) => mug.id === id) as Mug;
  const img: string = new URL(
    `../../images/products/${mug.id}.jpg`,
    import.meta.url
  ).href;

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
                defaultValue={1}
                className="product-form__input"
              />
              <button className="product-form__button">Add to cart</button>
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
    </div>
  );
};

export default ProductPage;
