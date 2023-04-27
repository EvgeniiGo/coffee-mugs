import logo from "../../images/logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <img src={logo} alt="CoffeeStyle." className="footer__logo" />
        <p className="footer__text">
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </p>
        <p className="footer__copy">CoffeeStyle Inc. &copy; 2023</p>
      </div>
      <div className="footer__column">
        <h3 className="footer__column-title">Menu</h3>
        <nav className="footer__links">
          <Link className="footer__link" to="/">
            Home
          </Link>
          <Link className="footer__link" to="/products">
            Our products
          </Link>
          <Link className="footer__link" to="/blog">
            Blog
          </Link>
          <Link className="footer__link" to="/about">
            About
          </Link>
          <Link className="footer__link" to="/contact">
            Contact
          </Link>
        </nav>
      </div>
      <div className="footer__column">
        <h3 className="footer__column-title">Follow us</h3>
        <nav className="footer__links">
          <a className="footer__link" href="https://www.facebook.com/">
            Facebook
          </a>
          <a className="footer__link" href="https://www.instagram.com/">
            Instagram
          </a>
          <a className="footer__link" href="https://www.pinterest.com/">
            Pinterest
          </a>
          <a className="footer__link" href="https://twitter.com/">
            Twitter
          </a>
        </nav>
      </div>
      <div className="footer__column">
        <h3 className="footer__column-title">Contact us</h3>
        <p className="footer__text">We're Always Happy to Help</p>
        <a className="footer__email" href="mailto:us@coffeestyle.io">
          us@coffeestyle.io
        </a>
      </div>
    </footer>
  );
};

export default Footer;
