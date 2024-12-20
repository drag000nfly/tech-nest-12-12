import { Product } from '../types';

const addAffiliateCode = (url: string) => {
  return url.includes('?') ? `${url}&tag=epi89yhyhvgg7-20` : `${url}?tag=epi89yhyhvgg7-20`;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Veken Packing Cubes With Laundry and Shoe Bag",
    badge: "Best For Overall Organization",
    summary: "The Veken Packing Cubes offer a comprehensive set for travelers seeking optimal organization. With four packing cubes in various sizes, a dedicated shoe bag, and a laundry bag, you can neatly categorize your belongings and keep dirty clothes separate. Constructed from durable nylon and polyester, these cubes are built to last and feature a clear strip on top for easy identification of contents. Veken Packing Cubes are also helpful in reducing wrinkles.",
    specs: [
      { feature: "Material", specification: "Durable nylon and polyester" },
      { feature: "Sizes", specification: "Extra large, large, medium, and small" },
      { feature: "Features", specification: "Clear strip for content identification, shoe bag, laundry bag" }
    ],
    pros: [
      "**Durable construction**",
      "**Variety of sizes**",
      "**Includes shoe and laundry bags**",
      "**Keeps items organized**",
      "**Reduces wrinkles**"
    ],
    cons: [
      "**Slightly heavier than other packing cubes**",
      "**Requires hand washing and air drying**"
    ],
    verdict: "The Veken Packing Cubes With Laundry and Shoe Bag offer excellent organization capabilities with their comprehensive set of cubes and additional bags. While slightly heavier than some competitors, their durability and functionality make them a solid choice for most travelers.",
    link: addAffiliateCode("https://www.amazon.com/Veken-Accessories-Essentials-Organizer-Suitcases/dp/B0B7BFMHNF"),
    image: "https://m.media-amazon.com/images/I/81GaAJkuWXL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    name: "Shacke Pak 5 Set Packing Cubes",
    badge: "Best For Budget-Conscious Travelers",
    summary: "The Shacke Pak 5 Set Packing Cubes provide excellent value for budget-minded travelers. This set includes four different sizes of cubes and a laundry bag, all made from durable nylon material. The snag-free zippers ensure smooth operation, and the \"X\" design on the front prevents bulging when overpacked.",
    specs: [
      { feature: "Material", specification: "Durable water-resistant nylon" },
      { feature: "Sizes", specification: "Extra large, large, medium, and small" },
      { feature: "Features", specification: "Laundry bag, snag-free zippers, \"X\" design to prevent bulging" }
    ],
    pros: [
      "**Affordable**",
      "**Durable construction**",
      "**Various sizes for different needs**",
      "**Includes a laundry bag**"
    ],
    cons: [
      "**Mesh tops are not waterproof or water-resistant**"
    ],
    verdict: "The Shacke Pak 5 Set offers great value for budget-conscious travelers, providing essential features and durability at an affordable price point.",
    link: addAffiliateCode("https://www.amazon.com/Shacke-Pak-Packing-Organizers-Laundry/dp/B0CHN6F342"),
    image: "https://m.media-amazon.com/images/I/71nz382C3wL._AC_SL1500_.jpg"
  },
  {
    id: 3,
    name: "Peak Design Packing Cubes",
    badge: "Best For Durability and Sustainability",
    summary: "The Peak Design Packing Cubes are a top choice for eco-conscious travelers. Made from 100% recycled materials, these cubes are both durable and sustainable. They come in various sizes and feature an expandable design to accommodate more items when needed. The water-resistant material provides added protection for your belongings.",
    specs: [
      { feature: "Material", specification: "100% recycled, water-resistant nylon" },
      { feature: "Sizes", specification: "Small and medium" },
      { feature: "Features", specification: "Expandable design, durable construction, dual compartments" }
    ],
    pros: [
      "**Spacious and well-built**",
      "**Made with 100% recycled materials**",
      "**Water-resistant for added protection**",
      "**Fair Trade Certified and carbon neutral**"
    ],
    cons: [
      "**Easy-access zippers can be finicky**"
    ],
    verdict: "Peak Design Packing Cubes excel in sustainability and durability, making them perfect for environmentally conscious travelers who don't want to compromise on quality.",
    link: addAffiliateCode("https://www.amazon.com/Peak-Design-Packing-Small-Efficient/dp/B09RZR7T8K"),
    image: "https://m.media-amazon.com/images/I/81-qSdJdTmL._AC_SL1500_.jpg"
  },
  {
    id: 4,
    name: "Paravel Packing Cube Quad",
    badge: "Best For Personalized Style",
    summary: "The Paravel Packing Cube Quad offers a stylish and personalized packing solution. These cubes come in a set of four, with three different sizes to accommodate various items. The standout feature is the option to monogram the cubes with up to three letters, adding a unique touch to your travel gear.",
    specs: [
      { feature: "Material", specification: "Water-resistant Negative Nylon®" },
      { feature: "Sizes", specification: "Large, medium, and small" },
      { feature: "Features", specification: "4-sided cube design, monogramming option" }
    ],
    pros: [
      "**Can be personalized with monogramming**",
      "**Water-resistant for added protection**",
      "**Durable and spacious**"
    ],
    cons: [
      "**Large cube takes up significant space in a carry-on**"
    ],
    verdict: "The Paravel Packing Cube Quad is ideal for style-conscious travelers who want to add a personal touch to their travel organization.",
    link: addAffiliateCode("https://www.amazon.com/dp/B09MSP8HW8"),
    image: "https://www.calpaktravel.com/cdn/shop/products/PackingCubes-5PieceSet-Black_1800x1800.jpg?v=1669111473"
  },
  {
    id: 5,
    name: "Calpak Packing Cubes 5-Piece Set",
    badge: "Best For Fashionable Organization",
    summary: "The Calpak Packing Cubes 5-Piece Set combines functionality with fashion. With a variety of colors and patterns to choose from, these cubes add a touch of style to your luggage. The set includes different sizes and removable identification tags for easy organization. The durable polyester material is designed to withstand the wear and tear of travel.",
    specs: [
      { feature: "Material", specification: "Durable polyester" },
      { feature: "Sizes", specification: "Large, medium, and small" },
      { feature: "Features", specification: "Removable identification tags, water-resistant envelope for cosmetics" }
    ],
    pros: [
      "**Stylish and durable**",
      "**Includes a variety of sizes and a water-resistant pouch**"
    ],
    cons: [
      "**Better suited for checked luggage due to the number of cubes**"
    ],
    verdict: "Calpak Packing Cubes are perfect for fashion-conscious travelers who want their organization solutions to be as stylish as they are functional.",
    link: addAffiliateCode("https://www.calpaktravel.com/collections/packing-cubes"),
    image: "https://m.media-amazon.com/images/I/71C-I-hWgAL._AC_SL1500_.jpg"
  },
  {
    id: 6,
    name: "Bagsmart Compression Packing Cubes",
    badge: "Best For Maximizing Space",
    summary: "The Bagsmart Compression Packing Cubes are ideal for travelers with limited luggage space. These cubes feature compression technology to efficiently reduce the volume of your belongings. The set includes various sizes with mesh panels on top for ventilation and easy identification of contents.",
    specs: [
      { feature: "Material", specification: "Durable, water-resistant polyester" },
      { feature: "Sizes", specification: "Large, medium, and small" },
      { feature: "Features", specification: "Compression zippers, mesh panels for ventilation" }
    ],
    pros: [
      "**Efficient compression**",
      "**Durable construction**",
      "**Keeps items organized**",
      "**Ideal for beach vacations**"
    ],
    cons: [
      "**Can be bulky when expanded**"
    ],
    verdict: "Bagsmart Compression Packing Cubes are an excellent choice for travelers who need to maximize their luggage space without compromising on organization.",
    link: addAffiliateCode("https://www.amazon.com/Compression-BAGSMART-Organizers-Essentials-Lightweight/dp/B0CLN6FVL8"),
    image: "https://m.media-amazon.com/images/I/812eAHW9-XL._AC_SL1500_.jpg"
  },
  {
    id: 7,
    name: "Eagle Creek Specter Compression Cube",
    badge: "Best For Lightweight Compression",
    summary: "The Eagle Creek Specter Compression Cube is a top choice for travelers who prioritize lightweight packing. Made from durable ripstop fabric, this cube is both lightweight and water-resistant. The compression zipper allows you to efficiently compress bulky items, maximizing space in your luggage.",
    specs: [
      { feature: "Material", specification: "Durable, ultra-lightweight, water-resistant ripstop fabric" },
      { feature: "Sizes", specification: "Small and medium" },
      { feature: "Features", specification: "Compression zipper, translucent fabric" }
    ],
    pros: [
      "**Lightweight and durable**",
      "**Compresses well**",
      "**Water-resistant**",
      "**Maximizes luggage space**"
    ],
    cons: [
      "**Expensive**",
      "**Zipper can snag on the internal lining**"
    ],
    verdict: "The Eagle Creek Specter Compression Cube is perfect for travelers who prioritize lightweight packing without compromising on functionality. Its premium construction and effective compression system justify the higher price point.",
    link: addAffiliateCode("https://www.amazon.com/Eagle-Creek-Specter-Compression-Strobe/dp/B00BYFC4Z4"),
    image: "https://m.media-amazon.com/images/I/71oF-N-zMHL._AC_SL1500_.jpg"
  }
];
