import "./History.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const History = () => {
  return (
    <section className="history">
      <SectionTitle text="History timeline" />
      <div className="history__container">
        <div className="history__post">
          <div className="history__number">04</div>
          <p className="history__label">October 2018</p>
          <h5 className="history__title">One day however a small line</h5>
          <p className="history__subtitle">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum.
          </p>
          <div className="history__hLine" />
          <div className="history__vLine" />
        </div>
        <div className="history__post">
          <div className="history__number">03</div>
          <p className="history__label">August 2018</p>
          <h5 className="history__title">Overlaid the jeepers uselessly</h5>
          <p className="history__subtitle">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum.
          </p>
        </div>
        <div className="history__post">
          <div className="history__number">02</div>
          <p className="history__label">June 2018</p>
          <h5 className="history__title">Pointing has no control about</h5>
          <p className="history__subtitle">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum.
          </p>
        </div>
        <div className="history__post">
          <div className="history__number">01</div>
          <p className="history__label">November 2017</p>
          <h5 className="history__title">We've started CoffeeStyle.</h5>
        </div>
      </div>
    </section>
  );
};

export default History;
