import "./Contact.css";
import Intro from "../Intro/Intro";
import Offices from "../Offices/Offices";

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
      </div>
    </>
  );
};

export default Contact;
