import "./Subscription.css";
import messageIcon from "../../images/message-icon.png";
import { ChangeEvent, FormEvent, useState } from "react";

const Subscription = () => {
  const [email, setEmail] = useState<string>("");

  function onEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    console.log(email);
  }

  function onSubmit(e: FormEvent): void {
    e.preventDefault();
    if (email !== "") {
      const input = document.querySelector(
        ".subscription__input"
      ) as HTMLInputElement;
      const button = document.querySelector(
        ".subscription__button"
      ) as HTMLButtonElement;
      const message = document.querySelector(
        ".subscription__success-message"
      ) as HTMLParagraphElement;
      button.textContent = "Please wait...";
      setTimeout(() => {
        input.style.display = "none";
        button.style.display = "none";
        message.style.display = "flex";
      }, 1000);
    }
  }

  return (
    <section className="subscription">
      <div className="subscription__label-container">
        <div className="subscription__label-line" />
        <p className="subscription__label">Sign up and get free coffee bags</p>
        <div className="subscription__label-line" />
      </div>
      <h2 className="subscription__title">Coffee Updates</h2>
      <form action="" className="subscription__form" onSubmit={onSubmit}>
        <input
          type="text"
          className="subscription__input"
          placeholder="customer@coffeestyle.io"
          value={email}
          onChange={onEmailChange}
        />
        <button className="subscription__button" type="submit">
          Subscribe
        </button>
        <p className="subscription__success-message">
          <img
            src={messageIcon}
            alt="confirmation"
            className="subscription__message-icon"
          />
          Thank you! Your submission has been received!
        </p>
        {/* <p className="subscription__error-message">
          Oops! Something went wrong while submitting the form.
        </p> */}
      </form>
    </section>
  );
};

export default Subscription;
