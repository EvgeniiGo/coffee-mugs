import { Link } from "react-router-dom";
import "./MainIntro.css";

const MainIntro = () => {
  return (
    <section className="main-intro">
      <p className="main-intro__label">Best place to buy design</p>
      <h1 className="main-intro__title">Coffee Mugs</h1>
      <p className="main-intro__subtitle">
        The most versatile furniture system ever created. Designed to fit your
        life, made to move and grow.
      </p>
      <Link to="/products" className="main-intro__link">
        Explore our products
      </Link>
    </section>
  );
};

export default MainIntro;
