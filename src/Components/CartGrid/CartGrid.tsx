import "./CartGrid.css";
import { Mug } from "../../data/Products";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductCard from "../ProductCard/ProductCard";

type PropsType = {
  mugs: Mug[];
};

const CartGrid = ({ mugs }: PropsType) => {
  return (
    <section className="cart-grid">
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
    </section>
  );
};

export default CartGrid;
