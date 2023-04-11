import "./About.css";
import Intro from "../Intro/Intro";
import Introductions from "../Introductions/Introductions";

const About = () => {
  return (
    <div className="about">
      <Intro
        title="About"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
      />
      <div className="about__container">
        <div className="about__image" />
        <Introductions />
      </div>
    </div>
  );
};

export default About;
