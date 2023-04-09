export type Mug = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  categories: string[];
};

export const products: Mug[] = [
  {
    id: "item001",
    name: "Red Love Cup",
    price: 25.0,
    oldPrice: 37.0,
    categories: ["coffee"],
  },
  {
    id: "item002",
    name: "Black Tea Cup",
    price: 15.0,
    oldPrice: 29.0,
    categories: ["tea"],
  },
  {
    id: "item003",
    name: "B&W Essentials Mug",
    price: 19.0,
    categories: ["others"],
  },
  {
    id: "item004",
    name: "Winter Style Mug",
    price: 25.0,
    categories: ["others"],
  },
  {
    id: "item005",
    name: "Ceramic Tea",
    price: 46.0,
    categories: ["tea"],
  },
  {
    id: "item006",
    name: "No Handle Bar Cup",
    price: 34.0,
    categories: ["others"],
  },
  {
    id: "item007",
    name: "Espresso Cup by Mugs.co",
    price: 25.0,
    categories: ["others"],
  },
  {
    id: "item008",
    name: "Pink Premium Ceramic",
    price: 99.0,
    categories: ["premium", "featured"],
  },
  {
    id: "item009",
    name: "Summer Designer Cup",
    price: 29.0,
    categories: ["others"],
  },
  {
    id: "item010",
    name: "Golden Designers Mug",
    price: 50.0,
    oldPrice: 69.0,
    categories: ["premium", "featured"],
  },
  {
    id: "item011",
    name: "White Mug Essential",
    price: 19.0,
    categories: ["others"],
  },
  {
    id: "item012",
    name: "White Ceramic",
    price: 29.0,
    categories: ["tea"],
  },
  {
    id: "item013",
    name: "Basic White Mug",
    price: 15.0,
    categories: ["coffee"],
  },
  {
    id: "item014",
    name: "Aroma Art Coffee Mug",
    price: 39.0,
    categories: ["coffee"],
  },
  {
    id: "item015",
    name: "Blue Premium Mug",
    price: 99.0,
    categories: ["premium"],
  },
];
