import "./Offer.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import bigImage from "../../images/big-image.jpg";
import smallImage1 from "../../images/small-image-1.jpg";
import smallImage2 from "../../images/small-image-2.jpg";

const Offer = () => {
  return (
    <section className="offer">
      <SectionTitle text="Buy 2 mugs and get a coffee magazine free" />
      <div className="offer__container">
        <div className="offer__images">
          <img src={bigImage} alt="book" className="offer__big-image" />
          <div className="offer__small-images">
            <img
              src={smallImage1}
              alt="cup in hands"
              className="offer__small-image"
            />
            <img
              src={smallImage2}
              alt="cup with coffee"
              className="offer__small-image"
            />
          </div>
        </div>
        <div className="offer__text">
          <p className="offer__label">Premium offer</p>
          <h2 className="offer__title">Get our Coffee Magazine</h2>
          <p className="offer__subtitle">
            The most versatile furniture system ever created. Designed to fit
            your life.
          </p>
          <Link className="offer__link" to="/products">
            Start shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Offer;
