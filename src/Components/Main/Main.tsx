import Intro from "../Intro/Intro";
import Story from "../Story/Story";
import "./Main.css";

const Main = () => {
  return (
    <>
      <Intro />
      <div className="main__container">
        <Story />
      </div>
    </>
  );
};

export default Main;
