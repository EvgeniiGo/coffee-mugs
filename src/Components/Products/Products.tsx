import "./Products.css";
import CartGrid from "../CartGrid/CartGrid";
import { Mug } from "../../data/Products";
import {
  MouseEvent,
  ReactEventHandler,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";

type PropsType = {
  mugs: Mug[];
};

const Products = ({ mugs }: PropsType) => {
  const [mugsToShow, setMugsToShow] = useState<Mug[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  function filterMugs(filter: string): Mug[] {
    return mugs.filter((mug) => mug.categories.includes(filter));
  }

  function changeActiveClass(
    activeFilter: string,
    newActiveFilter: string
  ): void {
    console.log(activeFilter, newActiveFilter);
    const currentActiveElement = document.getElementById(
      activeFilter
    ) as HTMLButtonElement;
    const newActiveElement = document.getElementById(
      newActiveFilter
    ) as HTMLButtonElement;

    currentActiveElement.classList.remove("products__filter_active");
    newActiveElement.classList.add("products__filter_active");
    setActiveFilter(newActiveFilter);
  }

  function handleFilterClick(e: SyntheticEvent<HTMLButtonElement>): void {
    const target = e.target as HTMLButtonElement;
    changeActiveClass(activeFilter, target.id);
  }

  useEffect(() => {
    if (activeFilter === "all") {
      setMugsToShow(mugs);
    } else {
      setMugsToShow(filterMugs(activeFilter));
    }
  }, [activeFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="products">
      <div className="products__heading">
        <h2 className="products__title">Our Products</h2>
        <p className="products__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="products__menu">
        <div className="products__line" />
        <div className="products__filters">
          <button
            className="products__filter products__filter_active"
            id="all"
            onClick={handleFilterClick}
          >
            All products
          </button>
          <button
            className="products__filter"
            id="coffee"
            onClick={handleFilterClick}
          >
            Coffee mugs
          </button>
          <button
            className="products__filter"
            id="others"
            onClick={handleFilterClick}
          >
            Others
          </button>
          <button
            className="products__filter"
            id="premium"
            onClick={handleFilterClick}
          >
            Premium
          </button>
          <button
            className="products__filter"
            id="tea"
            onClick={handleFilterClick}
          >
            Tea Mugs
          </button>
        </div>
        <div className="products__line" />
      </div>
      <section className="products__grid">
        <CartGrid mugs={mugsToShow} />
      </section>
    </section>
  );
};

export default Products;
