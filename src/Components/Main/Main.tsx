import MainIntro from "../MainIntro/MainIntro";
import Story from "../Story/Story";
import "./Main.css";
import FeaturedMugs from "../FeaturedMugs/FeaturedMugs";
import MoreProducts from "../MoreProducts/MoreProducts";
import Offer from "../Offer/Offer";
import Stories from "../Stories/Stories";
import { Mug } from "../../data/Products";
import { Post } from "../../data/Posts";

type PropsType = {
  mugs: Mug[];
  posts: Post[];
};

const Main = ({ mugs, posts }: PropsType) => {
  return (
    <>
      <MainIntro />
      <div className="main__container">
        <Story />
        <FeaturedMugs
          mugs={mugs.filter((mug) => mug.categories.includes("featured"))}
        />
        <MoreProducts mugs={mugs.slice(0, 9)} />
        <Offer />
      </div>
      <section className="parallax" />
      <Stories posts={[posts[3], posts[2], posts[0]]} />
    </>
  );
};

export default Main;
