type Date = {
  day: number;
  month: string;
  year: number;
};

type BodyElement = {
  h2?: string;
  h3?: string;
  p?: string;
  img?: string;
  label?: string;
  quote?: string;
};

export type Post = {
  id: string;
  title: string;
  subtitle: string;
  date: Date;
  author: string;
  categories: string[];
  body: BodyElement[];
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
    body: [
      { h2: "Sunt quos atque et libero." },
      {
        p: "Esse aspernatur sunt quam rerum ut occaecati quo. Aut qui minima incidunt quas sunt error. Possimus ut assumenda unde eos iure pariatur ratione non.",
      },
      { h3: "Aliquam tempora unde rerum." },
      {
        quote:
          "Voluptate dignissimos amet et. Ut quo non. Necessitatibus animi voluptatibus.",
      },
      {
        p: "Tempora vel voluptate. Aut dolorum officia qui officia nostrum porro. Voluptas ut id quo. Hic nesciunt doloribus iure aut illum nobis dolore. Laborum est animi.",
      },
      {
        p: "Molestias harum commodi itaque dignissimos qui. Pariatur ut quo. Et architecto molestiae magni est inventore. Autem quasi vel beatae commodi voluptas soluta fugit et.",
      },
      { h2: "Nulla veritatis aut velit alias omnis distinctio." },
      {
        p: "Saepe accusamus voluptas nostrum. Aliquam nostrum quibusdam doloribus aliquam ipsam. Sunt est quos distinctio impedit rem qui error consequatur modi. Consequatur in qui laudantium provident. Ea eum debitis sed voluptas est molestiae quo ipsa est. Laborum sint soluta est itaque similique nemo delectus suscipit.",
      },
      { h3: "Aut cum accusamus." },
      {
        quote:
          "Autem officia qui impedit consequuntur eum. Rerum repudiandae id. Qui facilis expedita aliquam delectus repellat.",
      },
      {
        p: "Ut maxime voluptates dolorem tempore quas sed excepturi quod. Ea aut qui harum molestiae. Qui minus fugiat. Nulla vel asperiores commodi dolore rerum praesentium distinctio non. Eius error sapiente nesciunt dolorum deleniti natus quia eum.",
      },
      {
        p: "Soluta sint beatae et. Neque reprehenderit facere aspernatur nemo voluptas enim itaque officiis. Totam est totam qui dolore voluptatem numquam.",
      },
      { img: "post005" },
      { h2: "At beatae nobis quia facilis." },
      {
        p: "Consequatur modi nulla facilis enim minima quo. Expedita sequi perferendis ducimus quia laboriosam. Perferendis vel eos. Nihil porro tempora illo. Sit provident nostrum incidunt consectetur amet nobis ut enim aut. Iure quaerat consequatur fugiat et eos.",
      },
      { h3: "Praesentium ullam facere." },
      {
        quote:
          "Qui optio ut sunt reprehenderit aut neque reprehenderit. Repudiandae omnis ipsum nulla ut possimus minima autem repellendus nobis. Fugiat porro asperiores fugiat et in placeat itaque.",
      },
      {
        p: "Minima quo recusandae debitis nostrum. Deserunt facilis voluptatem dolore. Consectetur suscipit modi et ipsum et sit. Qui laudantium quo libero. Sit consequatur fugiat expedita laboriosam expedita animi adipisci. Quia sit aut voluptate cum est voluptatem.",
      },
      {
        p: "Quasi quidem quidem illum. Nostrum aut porro necessitatibus saepe aut labore magnam provident sed. Molestias placeat voluptas et nostrum maiores omnis. Et id pariatur quia unde reprehenderit fugiat voluptas vel. Esse vero et ducimus commodi unde qui. Officia tenetur officiis mo",
      },
    ],
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
    body: [
      { h2: "Ut aut dignissimos natus harum." },
      {
        p: "Perferendis non porro sint doloremque optio qui. Quam saepe aperiam velit assumenda magni consequuntur accusamus debitis quia. Et voluptatem amet optio velit.",
      },
      { h3: "Molestiae amet dolorem." },
      {
        quote:
          "Alias harum non porro est distinctio esse quo. Ratione ea ipsum quia et. Omnis vero a labore vero pariatur.",
      },
      {
        p: "Est voluptatibus rerum minima consequuntur tempora voluptatem. Cum nihil iusto repellat voluptatum quaerat quos ut soluta veniam. Rerum explicabo eius sit rem laboriosam.",
      },
      {
        p: "Non iure ipsa harum itaque laboriosam adipisci. Quas excepturi laborum officia debitis ratione cum officiis. Consequatur totam ut et qui facere quia. Nulla modi provident tenetur.",
      },
      { h2: "Minima mollitia quasi dicta officia quia tempora dolorum cum." },
      {
        p: "Architecto voluptas molestiae architecto blanditiis quo distinctio enim. Aut fugit vel architecto illo est sit earum. Et et dignissimos ipsa maiores impedit impedit alias in minima. Consequatur reiciendis aperiam. Accusamus nihil fugiat ab nesciunt eos vel vel aut.",
      },
      { h3: "Quo eos sed asperiores adipisci architecto ipsam." },
      {
        quote:
          "Voluptatem occaecati id dolor alias animi eaque voluptatum. Praesentium possimus aut. Tempore nostrum eius veniam sunt perspiciatis nulla error molestiae. Aliquid qui est omnis sit esse autem ea possimus voluptatem.",
      },
      {
        p: "Rem consectetur veniam aperiam ex ad aut aut. Minima fuga delectus. Voluptate modi saepe. Quisquam eos possimus natus temporibus.",
      },
      {
        p: "Nostrum dolorem culpa officia rerum repellendus possimus perferendis totam laborum. Et et dicta voluptatum quasi illum itaque qui. Et suscipit quasi.",
      },
      { h2: "Explicabo voluptatem illum amet nam." },
      {
        p: "Rerum asperiores autem a non. Perferendis ut ut saepe et sit. Eos maxime sapiente repellendus incidunt placeat facilis. Consequatur voluptatem pariatur mollitia.",
      },
      { h3: "Quidem nihil rerum consequatur officia minus." },
      {
        quote:
          "Quis aut quasi architecto aliquid et quibusdam molestiae sint quasi. Sit hic est ut dolores similique et dolorem. Sed aut nam quia. Ut culpa nam. Minus aliquam molestias qui et eius. Recusandae velit ad ratione cumque sunt.",
      },
      {
        p: "Voluptatum excepturi velit veniam dolor quaerat dolore atque. Tempora qui tempore quisquam a ea. Consequatur aspernatur est optio similique id qui quis sed. Eveniet pariatur tempore iure. Et ad corrupti excepturi aut ut id ratione suscipit. Omnis rem expedita error.",
      },
      {
        p: "Nemo ab nostrum omnis et. Voluptatem nisi nihil est perferendis aperiam sapiente praesentium. Qui repellendus incidunt facilis sit. Repellendus nesciunt quas similique libero et perferendis laborum deleniti occaecati. Delectus velit",
      },
    ],
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
    categories: ["coffee", "featured"],
    author: "Maurice Herman",
    body: [
      { h2: "Vel qui et ad voluptatem." },
      {
        p: "Libero minus et quae est ipsum molestiae eos. Tempore aut expedita culpa maiores. Saepe quia sed earum ratione sequi. Aperiam reprehenderit quod necessitatibus. Temporibus deserunt vero ut quia enim sapiente.",
      },
      { h3: "Nesciunt rerum recusandae omnis nam ad id." },
      {
        p: "Libero minus et quae est ipsum molestiae eos. Tempore aut expedita culpa maiores. Saepe quia sed earum ratione sequi. Aperiam reprehenderit quod necessitatibus. Temporibus deserunt vero ut quia enim sapiente. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
      },
      {
        quote:
          "Sed ut ipsam saepe. Rem sed corrupti aliquid rerum officiis corporis fugiat quis dolor. Reiciendis aut voluptas dignissimos qui. Reiciendis est tempore doloribus sed nihil.",
      },
      {
        p: "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.",
      },
      { img: "milkToCoffee" },
      {
        label:
          "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
      },
      {
        p: "Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",
      },
    ],
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
    body: [
      { h2: "Est tenetur eos." },
      {
        p: "Eum aliquid aliquam qui sit mollitia sit. Ut possimus in autem omnis dicta eum velit. Architecto voluptate doloribus corrupti doloremque aspernatur fuga in.",
      },
      { h3: "Nam autem modi maiores nesciunt." },
      {
        p: "Asperiores in eos beatae sed. Expedita quia minus sed. Assumenda ab odit. Quae aut animi doloribus. Assumenda ut non sed tenetur qui nisi recusandae. Magnam molestiae voluptatibus vitae delectus doloremque.",
      },
      {
        quote:
          "Ex aut mollitia expedita voluptas eaque porro fugit cum dignissimos. Quam fugit libero. Rerum qui placeat ipsum rem delectus ratione consequatur. Incidunt sed nihil qui qui. Deserunt et exercitationem modi aliquam similique non. Quis sint molestiae.",
      },
      {
        p: "Asperiores in eos beatae sed. Expedita quia minus sed. Assumenda ab odit. Quae aut animi doloribus. Assumenda ut non sed tenetur qui nisi recusandae. Magnam molestiae voluptatibus vitae delectus doloremque.",
      },
      { img: "cups" },
      {
        p: "Repudiandae laboriosam at qui quisquam totam. Et nobis est excepturi nulla eum et. Quasi rerum ab similique est explicabo suscipit harum ducimus atque.",
      },
      { h2: "Corrupti esse rerum tempore qui sunt commodi sapiente alias." },
      {
        p: "Culpa accusantium eum et odio incidunt dolore. Ad fugit qui aspernatur repudiandae et hic ullam occaecati veniam. Velit reiciendis magni maiores doloremque exercitationem. Enim ea molestias ad aut fugiat voluptatibus. Repellat odio iusto distinctio eum sunt. Est ea voluptas voluptatem voluptatem sapiente quo.",
      },
      { h3: "Nesciunt qui commodi." },
      {
        p: "Asperiores in eos beatae sed. Expedita quia minus sed. Assumenda ab odit. Quae aut animi doloribus. Assumenda ut non sed tenetur qui nisi recusandae. Magnam molestiae voluptatibus vitae delectus doloremque.",
      },
      {
        quote:
          "Dolores molestiae molestiae et ad non voluptas quaerat odio. Minima voluptas dolorum veritatis impedit atque voluptatum esse incidunt ut. Est eligendi beatae sunt harum necessitatibus quod autem voluptas. Quas ipsum ea.",
      },
      {
        p: "Veritatis error deleniti. Ipsa doloremque dolorem facilis minima distinctio et. Cum consequatur laboriosam aperiam eos.",
      },
      {
        p: "Suscipit qui soluta aut quas asperiores nihil ex error. Ut inventore ut eaque excepturi porro quidem iure. Facere laborum magni et est nulla doloribus.",
      },
      { h2: "Iure quia fugit nostrum quo eius assumenda et." },
      {
        p: "Est qui odio est quo iure. Autem temporibus quisquam. Omnis doloremque illum.",
      },
      { h3: "Optio voluptatem deserunt." },
      {
        p: "Asperiores in eos beatae sed. Expedita quia minus sed. Assumenda ab odit. Quae aut animi doloribus. Assumenda ut non sed tenetur qui nisi recusandae. Magnam molestiae voluptatibus vitae delectus doloremque.",
      },
      {
        quote:
          "Rem beatae nisi ipsa eos nostrum illo aut et temporibus. Libero doloribus accusamus quod similique itaque. Aut quam voluptatem quia quia deleniti delectus cupiditate. Dicta et fugit beatae et est consequatur culpa. Error est qui provident. Quia qui eum esse consequatur nam ducimus rerum.",
      },
      {
        p: "Aperiam et sequi explicabo ab minus saepe qui sed. Veritatis laboriosam molestiae nihil rem et expedita. Nihil a aliquam qui dolorem dolore explicabo ab laborum. Reprehenderit quia voluptate ducimus temporibus magni et vel. Quis mollitia ipsam temporibus quis in qui tenetur nostrum tenetur.",
      },
      {
        p: "Et maxime nihil quia qui quod. Qui aspernatur ut. Eius tempore laudantium placeat",
      },
    ],
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
    categories: ["coffee", "featured"],
    author: "Isabel Hamill",
    body: [
      { h2: "Quasi cumque reiciendis odio sit." },
      {
        p: "Placeat quo ut voluptatem distinctio distinctio aperiam. A ratione repellat eos consectetur consequatur similique. Est aliquid dolorem rem quo cum. Aut voluptatem ut aspernatur. Ut odio molestiae. Quo iure omnis fugit voluptas consequatur qui.",
      },
      { h3: "Est ducimus explicabo non sint delectus ipsa." },
      {
        quote:
          "Eos repudiandae nulla sed praesentium nostrum. Est aut laudantium et quia. Eius molestiae ea est. Animi laboriosam et culpa rerum id inventore repellendus consequatur. Ea voluptatibus libero reprehenderit numquam accusantium non fugiat.",
      },
      {
        p: "Praesentium quod pariatur nulla unde accusamus reiciendis debitis qui saepe. Qui sequi recusandae pariatur repellendus reiciendis harum. Possimus aspernatur voluptatum.",
      },
      {
        p: "Quaerat animi maxime est fugiat dicta. Voluptatem ratione odio doloremque. Libero amet fugiat.",
      },
      { h2: "Adipisci ut esse necessitatibus fuga reprehenderit temporibus." },
      {
        p: "Rerum praesentium nam dolores magnam nostrum. Dolorum rerum est pariatur perspiciatis. Similique at fugiat non minus enim aut aperiam quis qui. Quasi rerum sed perferendis aspernatur velit voluptatum mollitia officia blanditiis.",
      },
      {
        h3: "Consequatur rem fugiat incidunt delectus voluptas optio voluptatem quas aliquam.",
      },
      {
        quote:
          "Possimus quam quam illo ea vero qui corporis. Rerum ullam neque molestiae. Omnis rem deserunt corporis ut sequi accusantium ullam eum voluptatem. Voluptate dolor fugiat qui animi. Minima iusto odio dolorum exercitationem voluptatum voluptatibus quidem.",
      },
      {
        p: "In iure autem in esse eos illum sapiente. Voluptas non fuga voluptatibus ullam. Aliquam molestiae aut earum rerum et optio. Sint voluptate est tempora similique. Et culpa numquam porro facere sint.",
      },
      {
        p: "In quia eum natus. Repellat voluptatem autem hic est. Quisquam et reprehenderit tempore at eveniet.",
      },
    ],
  },
];
