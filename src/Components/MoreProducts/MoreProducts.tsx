import "./MoreProducts.css";
import { Mug } from "../../data/Products";
import SectionTitle from "../SectionTitle/SectionTitle";
import CartGrid from "../CartGrid/CartGrid";

type PropsType = {
  mugs: Mug[];
};

const MoreProducts = ({ mugs }: PropsType) => {
  return (
    <section className="more">
      <SectionTitle text="More products" />
      <CartGrid mugs={mugs} />
    </section>
  );
};

export default MoreProducts;
