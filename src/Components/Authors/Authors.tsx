import "./Authors.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Person } from "../../data/People";

type PropsType = {
  authors: Person[];
};

const Authors = ({ authors }: PropsType) => {
  return (
    <section className="authors">
      <SectionTitle text="Our people" />
      <div className="authors__container">
        {authors.map((author) => (
          <Author
            id={author.id}
            name={author.name}
            job={author.job}
            key={author.id}
          />
        ))}
      </div>
    </section>
  );
};

const Author = ({ id, name, job }: Person) => {
  const img: string = new URL(`../../images/people/${id}.jpg`, import.meta.url)
    .href;

  return (
    <div className="author">
      <img src={img} alt={name} className="author__image" />
      <h4 className="author__name">{name}</h4>
      <p className="author__job">{job}</p>
    </div>
  );
};

export default Authors;
