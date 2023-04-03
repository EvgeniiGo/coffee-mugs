import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";
import cart from "../../images/cart-icon.png";
import menu from "../../images/menu-icon.png";

const Header = () => {
  function buttonClickHandler() {
    const nav = document.querySelector(".nav") as HTMLElement;
    nav.classList.add("nav_opened");

    function closeMenu() {
      nav.classList.remove("nav_opened");
      document.removeEventListener("click", closeMenu);
    }

    setTimeout(() => {
      document.addEventListener("click", closeMenu);
    }, 0);
  }
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="CoffeeStyle." className="header__logo-image" />
      </div>
      <nav className="nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }
          to="/products"
        >
          Our products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
      <div className="header__cart">
        <img src={cart} alt="bag" className="header__cart-icon" />
        <p className="header__cart-text">Cart</p>
        <div className="header__cart-counter">3</div>
      </div>
      <div className="header__button" onClick={buttonClickHandler}>
        <img src={menu} alt="menu" className="header_button-image" />
      </div>
    </header>
  );
};

export default Header;
