import { Product } from '../types';

const addAffiliateCode = (url: string) => {
  return url.includes('?') ? `${url}&tag=epi89yhyhvgg7-20` : `${url}?tag=epi89yhyhvgg7-20`;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Eagle Creek Pack-It Reveal Cube Set",
    badge: "Best Overall",
    summary: "The Eagle Creek Pack-It Reveal Cube Set stands out as our top pick for its exceptional build quality, innovative compression system, and versatile size options. These packing cubes strike the perfect balance between durability and lightweight design.\n\nMade from high-quality, water-resistant materials, these cubes feature a unique compression zipper system that helps maximize space in your luggage while keeping clothes organized and wrinkle-free.",
    specs: [
      { feature: "Material", specification: "300-denier polyester with mesh panels" },
      { feature: "Sizes Included", specification: "XS (4.5\" x 7.5\" x 2.5\"), S (7.25\" x 10\" x 3.25\"), M (10\" x 14.25\" x 3.25\")" },
      { feature: "Weight", specification: "1.4 oz (XS), 2.1 oz (S), 3.2 oz (M)" },
      { feature: "Features", specification: "Compression system, mesh windows, YKK zippers, clamshell opening" },
      { feature: "Warranty", specification: "Lifetime guarantee" }
    ],
    pros: [
      "**Premium water-resistant materials** for long-lasting durability",
      "**Innovative compression system** saves up to 30% more space",
      "**Mesh panels** for easy content visibility",
      "**Multiple size options** for versatile packing",
      "**Lifetime warranty** demonstrates manufacturer confidence"
    ],
    cons: [
      "**Premium price point** may not suit all budgets",
      "**Slightly heavier** than basic packing cubes",
      "**Compression zippers** take time to master"
    ],
    verdict: "The Eagle Creek Pack-It Reveal Cube Set is the ultimate choice for travelers who prioritize quality and functionality. While the price point is higher than basic options, the durability, compression features, and lifetime warranty make these cubes a worthwhile investment for frequent travelers.",
    link: addAffiliateCode("https://www.amazon.com/Eagle-Creek-Pack-Reveal-Cube/dp/B08P5QZF6N"),
    image: "/images/reviews/packing-cubes/products/eagle-creek-reveal.jpg"
  },
  {
    id: 2,
    name: "Gonex Compression Packing Cubes",
    badge: "Best Value",
    summary: "Gonex Compression Packing Cubes offer an impressive balance of quality and affordability. These cubes feature a practical compression system and durable materials at a fraction of the cost of premium options.\n\nThe set includes various sizes to accommodate different packing needs, and the double-zipper design allows for easy compression to maximize luggage space.",
    specs: [
      { feature: "Material", specification: "Ripstop nylon with mesh panels" },
      { feature: "Sizes Included", specification: "S (11.5\" x 7.5\"), M (13.8\" x 9.8\"), L (17.3\" x 12.6\"), XL (20\" x 14\")" },
      { feature: "Weight", specification: "1.8 oz (S), 2.4 oz (M), 3.2 oz (L), 4.2 oz (XL)" },
      { feature: "Features", specification: "Double-zipper compression, mesh top panel, reinforced seams" },
      { feature: "Warranty", specification: "Limited lifetime warranty" }
    ],
    pros: [
      "**Excellent price-to-quality ratio**",
      "**Effective compression system** with double zippers",
      "**Variety of colors** for easy organization",
      "**Lightweight design** adds minimal weight to luggage",
      "**Rip-stop nylon** prevents tears and damage"
    ],
    cons: [
      "**Zippers** not as smooth as premium brands",
      "**Less structured** when not fully packed",
      "**Limited warranty** compared to premium options"
    ],
    verdict: "Gonex Compression Packing Cubes are perfect for budget-conscious travelers who don't want to compromise on essential features. While they may lack some premium touches, they offer remarkable value and functionality that will satisfy most travelers' needs.",
    link: addAffiliateCode("https://www.amazon.com/Gonex-Compression-Packing-Cubes-Set/dp/B07DWMJKP5"),
    image: "/images/reviews/packing-cubes/products/gonex-compression.jpg"
  },
  {
    id: 3,
    name: "Peak Design Packing Cubes",
    badge: "Premium Pick",
    summary: "Peak Design's Packing Cubes represent the pinnacle of travel organization, featuring innovative design elements and premium materials. These cubes showcase thoughtful details like tear-away zippers, weatherproof construction, and an expandable design.\n\nThe unique tear-away zipper system provides quick access to contents, while the weatherproof nylon protects your belongings in any conditions.",
    specs: [
      { feature: "Material", specification: "400D nylon canvas with weatherproof coating" },
      { feature: "Sizes Included", specification: "S (2.4L), M (4.8L)" },
      { feature: "Weight", specification: "4.2 oz (S), 5.0 oz (M)" },
      { feature: "Features", specification: "Tear-away zippers, dual compartments, weatherproof construction" },
      { feature: "Warranty", specification: "Lifetime warranty" }
    ],
    pros: [
      "**Innovative tear-away zipper** for quick access",
      "**Weatherproof nylon** construction",
      "**Expandable design** adapts to packing needs",
      "**Clean aesthetic** with premium materials",
      "**Excellent organization** features"
    ],
    cons: [
      "**Highest price point** in category",
      "**Limited size options** compared to sets",
      "**Heavier** than basic cubes"
    ],
    verdict: "Peak Design Packing Cubes are the ultimate choice for those who demand the best in both form and function. While they come at a premium price, the innovative features, premium materials, and thoughtful design make them worth the investment for discerning travelers.",
    link: addAffiliateCode("https://www.amazon.com/Peak-Design-Packing-Cube-Small/dp/B07GWKDLGT"),
    image: "/images/reviews/packing-cubes/products/peak-design.jpg"
  },
  {
    id: 4,
    name: "Thule Compression Cube Set",
    badge: "Most Durable",
    summary: "The Thule Compression Cube Set exemplifies Swedish engineering excellence with its robust construction and intelligent design. These cubes feature ultra-durable ripstop nylon and premium YKK zippers that withstand extensive use.\n\nOur testing revealed exceptional compression capabilities and outstanding durability, making these cubes perfect for adventurous travelers who demand reliability.",
    specs: [
      { feature: "Material", specification: "70D/200D nylon mix with reinforced corners" },
      { feature: "Sizes Included", specification: "S (7.5\" x 5.5\"), M (10\" x 7.5\"), L (14\" x 10\")" },
      { feature: "Weight", specification: "2.5 oz (S), 3.8 oz (M), 5.0 oz (L)" },
      { feature: "Features", specification: "Heavy-duty compression, reinforced corners, YKK zippers" },
      { feature: "Warranty", specification: "2-year warranty" }
    ],
    pros: [
      "**Military-grade ripstop nylon** for ultimate durability",
      "**Premium YKK zippers** ensure smooth operation",
      "**Excellent compression ratio** maximizes space",
      "**Water-resistant coating** protects contents",
      "**Reinforced seams** prevent wear and tear"
    ],
    cons: [
      "**Higher weight** due to robust materials",
      "**Premium pricing** reflects quality materials",
      "**Limited color options** available"
    ],
    verdict: "Thule Compression Cubes are the go-to choice for travelers who prioritize durability and reliable performance. While they command a premium price, their exceptional build quality and thoughtful design features make them a worthwhile investment for frequent travelers.",
    link: addAffiliateCode("https://www.amazon.com/dp/B09NL9BWK2"),
    image: "/images/reviews/packing-cubes/products/thule-compression.jpg"
  },
  {
    id: 5,
    name: "REI Co-op Expandable Packing Cube Set",
    badge: "Best for Overpackers",
    summary: "The REI Co-op Expandable Packing Cube Set revolutionizes packing with its innovative expansion system. These cubes can accommodate up to 30% more content when expanded, perfect for those who tend to pack more than planned.\n\nThe lightweight ripstop nylon construction maintains durability while keeping weight minimal, and the dual-zipper system allows for easy compression when needed.",
    specs: [
      { feature: "Material", specification: "Ripstop nylon with mesh panels" },
      { feature: "Sizes Included", specification: "S (8\" x 6\" x 3\"), M (12\" x 8\" x 3\"), L (14.5\" x 10.5\" x 3\")" },
      { feature: "Weight", specification: "2.0 oz (S), 2.8 oz (M), 3.5 oz (L)" },
      { feature: "Features", specification: "Expandable design, dual-zipper system, mesh top" },
      { feature: "Warranty", specification: "1-year satisfaction guarantee" }
    ],
    pros: [
      "**Expandable design** adds 30% more capacity",
      "**Dual-zipper system** for easy compression",
      "**Lightweight ripstop nylon** construction",
      "**Multiple size options** included",
      "**Excellent value** for feature set"
    ],
    cons: [
      "**Expanded shape** can be bulky",
      "**Limited color selection**",
      "**Compression zippers** require practice"
    ],
    verdict: "REI Co-op's Expandable Packing Cubes are perfect for travelers who need flexible packing solutions. The expandable design and quality construction offer excellent versatility at a reasonable price point.",
    link: addAffiliateCode("https://www.amazon.com/dp/B07BKXM5XS"),
    image: "/images/reviews/packing-cubes/products/rei-expandable.jpg"
  },
  {
    id: 6,
    name: "Tortuga Compression Cube Set",
    badge: "Best for Digital Nomads",
    summary: "The Tortuga Compression Cube Set is specifically designed for long-term travelers and digital nomads. These cubes feature a sophisticated compression system and color-coded zippers for easy organization.\n\nMade from 70-denier ripstop nylon, these cubes offer an excellent balance of durability and weight, perfect for those who live out of their luggage.",
    specs: [
      { feature: "Material", specification: "70D ripstop nylon" },
      { feature: "Sizes Included", specification: "S (4.5L), M (8L)" },
      { feature: "Weight", specification: "2.8 oz (S), 3.9 oz (M)" },
      { feature: "Features", specification: "Color-coded zippers, compression system, water-resistant" },
      { feature: "Warranty", specification: "Common Decency Guarantee" }
    ],
    pros: [
      "**Color-coded zippers** for easy identification",
      "**70D ripstop nylon** balances weight and durability",
      "**Excellent compression** system",
      "**Perfect size** for carry-on luggage",
      "**Water-resistant** construction"
    ],
    cons: [
      "**Limited size options** available",
      "**Only available** in black",
      "**Higher price point** than basic options"
    ],
    verdict: "Tortuga Compression Cubes are ideal for digital nomads and long-term travelers who need reliable organization solutions. The thoughtful design features and durable construction justify the investment for frequent travelers.",
    link: addAffiliateCode("https://www.amazon.com/dp/B09RZQP7G1"),
    image: "/images/reviews/packing-cubes/products/tortuga-compression.jpg"
  },
  {
    id: 7,
    name: "Eagle Creek Pack-It Isolate Cube Set",
    badge: "Best Eco-Friendly",
    summary: "The Eagle Creek Pack-It Isolate Cube Set represents the future of sustainable travel gear. Crafted from 100% recycled ocean-bound plastics, these cubes prove that eco-consciousness doesn't compromise performance.\n\nOur testing revealed excellent compression capabilities and surprising durability, all while maintaining an incredibly light weight profile.",
    specs: [
      { feature: "Material", specification: "100% recycled ocean-bound plastics" },
      { feature: "Sizes Included", specification: "XS (4.5\" x 7.5\"), S (7.5\" x 10.5\"), M (10\" x 14\")" },
      { feature: "Weight", specification: "0.6 oz (XS), 1.0 oz (S), 1.3 oz (M)" },
      { feature: "Features", specification: "PFC-free water-resistant coating, antimicrobial properties" },
      { feature: "Warranty", specification: "Lifetime warranty" }
    ],
    pros: [
      "**100% recycled materials** from ocean plastics",
      "**Ultra-lightweight** design",
      "**PFC-free** water-resistant coating",
      "**Excellent compression** system",
      "**Antimicrobial** properties"
    ],
    cons: [
      "**Thinner feel** than traditional materials",
      "**Limited color options**",
      "**Premium price** for eco-friendly materials"
    ],
    verdict: "Eagle Creek Pack-It Isolate Cubes are the perfect choice for environmentally conscious travelers who don't want to sacrifice performance. While they command a premium price, the combination of sustainability and functionality makes them a compelling choice.",
    link: addAffiliateCode("https://www.amazon.com/dp/B087HP7N4W"),
    image: "/images/reviews/packing-cubes/products/eagle-creek-isolate.jpg"
  }
];
