export type Mug = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  categories: string[];
  dimensions: {
    length: number;
    height: number;
    width: number;
    weight: number;
  };
  description: string;
  details: string;
};

export const products: Mug[] = [
  {
    id: "item001",
    name: "Red Love Cup",
    price: 25.0,
    oldPrice: 37.0,
    categories: ["coffee"],
    dimensions: {
      length: 56,
      height: 30,
      width: 12,
      weight: 12,
    },
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",
    details:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
  },
  {
    id: "item002",
    name: "Black Tea Cup",
    price: 15.0,
    oldPrice: 29.0,
    categories: ["tea"],
    dimensions: {
      length: 20,
      height: 40,
      width: 30,
      weight: 500,
    },
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
    details:
      "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
  },
  {
    id: "item003",
    name: "B&W Essentials Mug",
    price: 19.0,
    categories: ["others"],
    dimensions: {
      length: 300,
      height: 200,
      width: 200,
      weight: 40,
    },
    description:
      "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates.",
    details:
      "Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
  },
  {
    id: "item004",
    name: "Winter Style Mug",
    price: 25.0,
    categories: ["others"],
    dimensions: {
      length: 10,
      height: 10,
      width: 10,
      weight: 5,
    },
    description: "Ducimus est ut neque sunt eum iusto. Consequatur quia.",
    details:
      "Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
  },
  {
    id: "item005",
    name: "Ceramic Tea",
    price: 46.0,
    categories: ["tea"],
    dimensions: {
      length: 20,
      height: 30,
      width: 25,
      weight: 10,
    },
    description:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates.",
    details:
      "Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
  },
  {
    id: "item006",
    name: "No Handle Bar Cup",
    price: 34.0,
    categories: ["others"],
    dimensions: {
      length: 12,
      height: 13,
      width: 25,
      weight: 100,
    },
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
    details:
      "Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
  },
  {
    id: "item007",
    name: "Espresso Cup by Mugs.co",
    price: 25.0,
    categories: ["others"],
    dimensions: {
      length: 10,
      height: 10,
      width: 10,
      weight: 3,
    },
    description: "A et quia qui quia. Sunt tempore est sit facilis.",
    details:
      "Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
  },
  {
    id: "item008",
    name: "Pink Premium Ceramic",
    price: 99.0,
    categories: ["premium", "featured"],
    dimensions: {
      length: 45,
      height: 98,
      width: 56,
      weight: 200,
    },
    description:
      "A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    details:
      "Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
  },
  {
    id: "item009",
    name: "Summer Designer Cup",
    price: 29.0,
    categories: ["others"],
    dimensions: {
      length: 8,
      height: 6,
      width: 5,
      weight: 2,
    },
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
    details:
      "A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
  },
  {
    id: "item010",
    name: "Golden Designers Mug",
    price: 50.0,
    oldPrice: 69.0,
    categories: ["premium", "featured"],
    dimensions: {
      length: 12,
      height: 10,
      width: 20,
      weight: 23,
    },
    description:
      "The most versatile furniture system ever created. Designed to fit your life. The most versatile furniture system ever created. Designed to fit your life.",
    details:
      "Y'all ready for this? Get your 30oz powder coated tumblers laser etched with our limited edition designs! Stainless Steel Tumblers retain Heat & Cold - not like those junk plastic ones you see elsewhere. The tumbler is double wall vacuum insulated with a 24 hour retention ratingHolds a MASSIVE 30 ounces of hot or cold liquids! Tumbler and Lid are BPA Free - Drink in good health!",
  },
  {
    id: "item011",
    name: "White Mug Essential",
    price: 19.0,
    categories: ["others"],
    dimensions: {
      length: 14,
      height: 13,
      width: 20,
      weight: 26,
    },
    description:
      "Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    details:
      "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
  },
  {
    id: "item012",
    name: "White Ceramic",
    price: 29.0,
    categories: ["tea"],
    dimensions: {
      length: 7,
      height: 8,
      width: 9,
      weight: 25,
    },
    description:
      "Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
    details:
      "Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
  },
  {
    id: "item013",
    name: "Basic White Mug",
    price: 15.0,
    categories: ["coffee"],
    dimensions: {
      length: 30,
      height: 30,
      width: 30,
      weight: 24,
    },
    description:
      "Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto.",
    details:
      "Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
  },
  {
    id: "item014",
    name: "Aroma Art Coffee Mug",
    price: 39.0,
    categories: ["coffee"],
    dimensions: {
      length: 15,
      height: 13,
      width: 12,
      weight: 8,
    },
    description:
      'Three local "Czech" style brews available - a lager, a dark and a red (which is a mixture of the other two). The red was my pick of the three.',
    details:
      'Three local "Czech" style brews available - a lager, a dark and a red (which is a mixture of the other two). The red was my pick of the three. The Golden Mug is a bit of a barn on a reasonably busy street in Dighomi, but has views over the river ... and what looks like a beer garden for warmer weather. The food was standard Georgian fare - okay, but nothing too adventerous - and too much of it fried for my taste. However, the beer makes the trip worthwhile.',
  },
  {
    id: "item015",
    name: "Blue Premium Mug",
    price: 99.0,
    categories: ["premium"],
    dimensions: {
      length: 99,
      height: 88,
      width: 90,
      weight: 523,
    },
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
    details:
      "Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
  },
];
