import "./Story.css";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <section className="story">
      <h2 className="story__title">
        Even the all-powerful Pointing has no control about the blind texts.
      </h2>
      <p className="story__subtitle">
        It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control about the
        blind texts it is an almost unorthographic life One day however a small
        line of blind text by the name of Lorem Ipsum decided to leave for the
        far World of Grammar.
      </p>
      <Link to="/about" className="story__link">
        Read the full Story
      </Link>
    </section>
  );
};

export default Story;
