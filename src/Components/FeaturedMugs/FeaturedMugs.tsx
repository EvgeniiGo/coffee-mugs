import "./FeaturedMugs.css";
import { Mug } from "../../data/Products";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/ProductCard";

type PropsType = {
  mugs: Mug[];
};

const FeaturedMugs = ({ mugs }: PropsType) => {
  return (
    <section className="featured">
      <SectionTitle text="Featured Mugs" />
      <div className="featured__cards">
        {mugs.map((mug) => {
          return (
            <ProductCard
              id={mug.id}
              name={mug.name}
              price={mug.price}
              oldPrice={mug.oldPrice}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedMugs;
