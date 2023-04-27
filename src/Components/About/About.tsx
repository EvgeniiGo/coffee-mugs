import "./About.css";
import Intro from "../Intro/Intro";
import Introductions from "../Introductions/Introductions";
import Authors from "../Authors/Authors";
import History from "../History/History";
import { Person } from "../../data/People";
import { useEffect } from "react";

type PropsType = {
  authors: Person[];
};

const About = ({ authors }: PropsType) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const introImg: string = new URL(
      `../../images/about/about-intro.jpg`,
      import.meta.url
    ).href;
    const aboutImageElement = document.querySelector(
      ".about__image"
    ) as HTMLElement;
    aboutImageElement.style.backgroundImage = `url(${introImg})`;

    const parallaxImg: string = new URL(
      `../../images/about/parallax.jpg`,
      import.meta.url
    ).href;
    const parallaxImageElement = document.querySelector(
      ".about__parallax"
    ) as HTMLElement;
    parallaxImageElement.style.backgroundImage = `url(${parallaxImg})`;
  }, []);

  return (
    <div className="about">
      <Intro
        title="About"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
      />
      <div className="about__container">
        <div className="about__image" />
        <Introductions />
        <Authors authors={authors} />
        <section className="about__parallax" />
        <History />
      </div>
    </div>
  );
};

export default About;
