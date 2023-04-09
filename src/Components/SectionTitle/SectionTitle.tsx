import "./SectionTitle.css";

type PropsType = { text: string };

const SectionTitle = ({ text }: PropsType) => {
  return (
    <div className="section-title">
      <div className="section-title__line" />
      <h2 className="section-title__text">{text}</h2>
      <div className="section-title__line" />
    </div>
  );
};

export default SectionTitle;
