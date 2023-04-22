import "./Premium.css";

const Premium = () => {
  const premiumImg: string = new URL(
    `../../images/premium.jpg`,
    import.meta.url
  ).href;

  const diamondImg: string = new URL(
    `../../images/diamond-icon.png`,
    import.meta.url
  ).href;

  const bulbImg: string = new URL(`../../images/bulb-icon.png`, import.meta.url)
    .href;

  return (
    <section className="premium">
      <div className="premium__image-container"></div>
      <div className="premium__content">
        <div className="premium__headline">
          <h3 className="premium__title">
            Handmade by <span>CoffeeStyle.</span>
          </h3>
          <div className="premium__subtitle">
            The most versatile furniture system ever created. Designed to fit
            your life.
          </div>
        </div>
        <div className="premium__item">
          <div className="premium__icon-container">
            <img
              src={diamondImg}
              alt="icon of diamong"
              className="premium__item-icon"
              id="diamond"
            />
          </div>
          <div className="premium__item-text">
            <h4 className="premium__item-title">Premium Quality</h4>
            <p className="premium__item-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in.
            </p>
          </div>
        </div>
        <div className="premium__item">
          <div className="premium__icon-container">
            <img
              src={bulbImg}
              alt="icon of bulb"
              className="premium__item-icon"
              id="bulb"
            />
          </div>
          <div className="premium__item-text">
            <h4 className="premium__item-title">Gentle to the Environment</h4>
            <p className="premium__item-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;
