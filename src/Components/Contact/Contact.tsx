import "./Contact.css";
import Intro from "../Intro/Intro";
import Offices from "../Offices/Offices";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <Intro
        title="Let's Connect"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis."
        label="OUR OFFICES"
      />
      <div className="contact__container">
        <Offices />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
