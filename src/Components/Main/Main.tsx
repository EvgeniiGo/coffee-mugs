import Intro from "../Intro/Intro";
import Story from "../Story/Story";
import "./Main.css";
import FeaturedMugs from "../FeaturedMugs/FeaturedMugs";
import MoreProducts from "../MoreProducts/MoreProducts";
import Offer from "../Offer/Offer";
import { Mug } from "../../data/Products";

type PropsType = {
  mugs: Mug[];
};

const Main = ({ mugs }: PropsType) => {
  return (
    <>
      <Intro />
      <div className="main__container">
        <Story />
        <FeaturedMugs
          mugs={mugs.filter((mug) => mug.categories.includes("featured"))}
        />
        <MoreProducts mugs={mugs.slice(0, 9)} />
        <Offer />
      </div>
    </>
  );
};

export default Main;
