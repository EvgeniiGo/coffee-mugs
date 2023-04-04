import { Link } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <p className="intro__label">Best place to buy design</p>
      <h1 className="intro__title">Coffee Mugs</h1>
      <p className="intro__subtitle">
        The most versatile furniture system ever created. Designed to fit your
        life, made to move and grow.
      </p>
      <Link to="/products" className="intro__link">
        Explore our products
      </Link>
    </section>
  );
};

export default Intro;
