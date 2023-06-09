import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";
import cart from "../../images/cart-icon.png";
import menu from "../../images/menu-icon.png";
import { CartType } from "../../App";

type PropsType = {
  openCart: () => void;
  productsInCart: CartType;
};

const Header = ({ openCart, productsInCart }: PropsType) => {
  function buttonClickHandler() {
    const nav = document.querySelector(".nav") as HTMLElement;
    if (!nav.classList.contains("nav_opened")) {
      nav.classList.add("nav_opened");
      console.log("added");

      setTimeout(() => {
        document.addEventListener("click", closeMenu);
      }, 0);
    } else {
      document.removeEventListener("click", closeMenu);
    }

    function closeMenu() {
      nav.classList.remove("nav_opened");
      document.removeEventListener("click", closeMenu);
      console.log("closed");
    }

    console.log(nav);
  }

  const quantity: number =
    Object.keys(productsInCart).length > 0
      ? Object.keys(productsInCart).reduce((total, key) => {
          return total + productsInCart[key];
        }, 0)
      : 0;
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
      <div className="header__cart" onClick={openCart}>
        <img src={cart} alt="bag" className="header__cart-icon" />
        <p className="header__cart-text">Cart</p>
        <div className="header__cart-counter">{quantity}</div>
      </div>
      <div className="header__button" onClick={buttonClickHandler}>
        <img src={menu} alt="menu" className="header_button-image" />
      </div>
    </header>
  );
};

export default Header;
