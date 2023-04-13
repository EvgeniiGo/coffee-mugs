import "./Directory.css";
import { directors } from "../../data/Directors";
import SectionTitle from "../SectionTitle/SectionTitle";

const Directory = () => {
  return (
    <section className="directory">
      <SectionTitle text="Directory" />
      <div className="directors">
        {directors.map((director) => {
          return (
            <div className="director">
              <p className="director__label">{director.department}</p>
              <h4 className="director__name">{director.name}</h4>
              <p className="director__contacts">
                {director.mobile}
                <br />
                {director.email}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Directory;
