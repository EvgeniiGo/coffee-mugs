import "./Intro.css";
import SectionTitle from "../SectionTitle/SectionTitle";

type PropsType = {
  title: string;
  subtitle: string;
  label?: string;
};

const Intro = ({ title, subtitle, label = undefined }: PropsType) => {
  return (
    <section className="intro">
      <h2 className="intro__title">{title}</h2>
      <p className="intro__subtitle">{subtitle}</p>
      {label !== undefined ? <SectionTitle text={label} /> : ""}
    </section>
  );
};

export default Intro;
