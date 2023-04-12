import { FormEvent } from "react";
import "./ContactForm.css";
import messageIcon from "../../images/contact-message-icon.png";

const ContactForm = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = document.querySelector(".contact-form") as HTMLInputElement;

    const button = document.querySelector(
      ".subscription__button"
    ) as HTMLButtonElement;

    const message = document.querySelector(
      ".form-section__success-message"
    ) as HTMLParagraphElement;

    button.textContent = "Please wait...";

    setTimeout(() => {
      form.style.display = "none";
      message.style.display = "flex";
    }, 1000);
  };

  return (
    <section className="form-section">
      <div className="form-section__form-column">
        <h4 className="form-section__label">Contact form</h4>
        <p className="form-section__message">
          Drop us your message and I'll get back to you as soon as possible.
        </p>
        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="" className="contact-form__label">
            Name
          </label>
          <input
            type="text"
            className="contact-form__input"
            placeholder="James Coffee"
            required
          />
          <label htmlFor="" className="contact-form__label">
            Email address
          </label>
          <input
            type="email"
            className="contact-form__input"
            placeholder="customer@coffeestyle.io"
            required
          />
          <label htmlFor="" className="contact-form__label">
            Your message
          </label>
          <textarea
            className="contact-form__input"
            name="message"
            id="message"
            placeholder="Hi! I would like to ask something about mugs."
            required
          />
          <button className="contact-form__button" type="submit">
            Send message
          </button>
        </form>
        <div className="form-section__success-message">
          <img
            src={messageIcon}
            alt="confirmation"
            className="form-section__message-icon"
          />
          Thank you! Your submission has been received!
        </div>
      </div>
      <div className="form-section__contact-column">
        <div className="form-section__info">
          <h4 className="form-section__label">Contact form</h4>
          <p className="form-section__headline">CoffeeStyle. Inc</p>
          <p className="form-section__address">
            Pride Ave,
            <br />
            Hamlyn Heights
            <br />
            VIC 3215
            <br />
            Australia
          </p>
        </div>
        <div className="form-section__info">
          <h4 className="form-section__label">Call us</h4>
          <a href="tel:+14155551212" className="form-section__link">
            {"+1 (415) 555-1212"}
          </a>
        </div>
        <div className="form-section__info">
          <h4 className="form-section__label">Email us</h4>
          <a href="mailto:us@coffeestyle.io" className="form-section__link">
            us@coffeestyle.io
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
