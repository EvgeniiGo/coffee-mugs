import "./Offer.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const Offer = () => {
  return (
    <section className="offer">
      <SectionTitle text="Buy 2 mugs and get a coffee magazine free" />
      <div className="offer__images">
        <img src="" alt="" className="offer__big-image" />
        <img src="" alt="" className="offer__small-image" />
        <img src="" alt="" className="offer__small-image" />
      </div>
      <div className="offer__text">
        <p className="offer__label">Premium offer</p>
        <h2 className="offer__title">Get our Coffee Magazine</h2>
        <p className="offer__subtitle">
          The most versatile furniture system ever created. Designed to fit your
          life.
        </p>
      </div>
    </section>
  );
};

export default Offer;
