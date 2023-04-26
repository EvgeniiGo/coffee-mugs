import "./Contact.css";
import Intro from "../Intro/Intro";
import Offices from "../Offices/Offices";
import ContactForm from "../ContactForm/ContactForm";
import Directory from "../Directory/Directory";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Intro
        title="Let's Connect"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis."
        label="Our offices"
      />
      <div className="contact__container">
        <Offices />
        <ContactForm />
        <section className="map-container">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.482550199248!2d144.33122427669826!3d-38.128971052119816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4115a5ab0ac25%3A0xa6efd7f89f329565!2zNSBQcmlkZSBBdmUsIEhhbWx5biBIZWlnaHRzIFZJQyAzMjE1LCDQkNCy0YHRgtGA0LDQu9C40Y8!5e0!3m2!1sru!2sil!4v1681386115499!5m2!1sru!2sil"
            loading="lazy"
          ></iframe>
        </section>
        <Directory />
      </div>
    </>
  );
};

export default Contact;
