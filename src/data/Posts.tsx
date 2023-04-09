type Date = {
  day: number;
  month: string;
  year: number;
};

export type Post = {
  id: string;
  title: string;
  subtitle: string;
  date: Date;
  author: string;
  categories: string[];
};

export const posts = [
  {
    id: "post001",
    title:
      "Recent research suggests that heavy coffee drinkers may reap health benefits.",
    subtitle:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    date: {
      day: 5,
      month: "October",
      year: 2022,
    },
    categories: ["lifestyle"],
    author: "Fred Gleason",
  },
  {
    id: "post002",
    title: "More coffee, lower death risk?",
    subtitle:
      "Eveniet itaque aperiam qui officia in ducimus. Voluptas culpa ut eligendi in. Minima est dolores dolore aut et et alias p",
    date: {
      day: 9,
      month: "October",
      year: 2022,
    },
    categories: ["mugs"],
    author: "Fred Gleason",
  },

  {
    id: "post003",
    title: "How long does a cup of coffee keep you awake?",
    subtitle:
      "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
    date: {
      day: 8,
      month: "October",
      year: 2022,
    },
    categories: ["coffee"],
    author: "Maurice Herman",
  },

  {
    id: "post004",
    title:
      "Health Check: why do I get a headache when I haven't had my coffee?",
    subtitle:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    date: {
      day: 7,
      month: "October",
      year: 2022,
    },
    categories: ["barista"],
    author: "Isabel Hamill",
  },

  {
    id: "post005",
    title: "Will drinking coffee prolong your life?",
    subtitle:
      "Aliquid aperiam accusantium quam ipsam. Velit rerum veniam optio illo dolor delectus et recusandae. Impedit aut cupiditate. Illum eveniet officiis ullam ipsam sed iste eius. Nam at quae ducimus dicta delectus",
    date: {
      day: 6,
      month: "October",
      year: 2022,
    },
    categories: ["coffee"],
    author: "Isabel Hamill",
  },
];
