import { addAffiliateCode } from '../utils/links';

export const products = [
  {
    title: "1. iRobot Roomba s9+",
    imageUrl: "https://m.media-amazon.com/images/I/718mLGnc2-L._AC_SL1500_.jpg",
    amazonUrl: addAffiliateCode("https://www.amazon.com/iRobot-Roomba-Emptying-Robot-Vacuum/dp/B07QXM2V6X"),
    description: "The iRobot Roomba s9+ stands out with its unique D-shaped design, which allows it to clean corners and edges more effectively than round robot vacuums. This premium robot vacuum combines powerful suction with smart mapping technology to deliver a thorough clean. Plus, its self-emptying base means you can forget about emptying the dustbin for weeks!",
    specs: [
      { feature: "Suction Power", specification: "40x the suction of previous Roomba models" },
      { feature: "Cleaning System", specification: "PerfectEdge Technology for corners and edges, Anti-Allergen System" },
      { feature: "Navigation", specification: "Smart Mapping for efficient navigation and customized cleaning" },
      { feature: "Self-Emptying", specification: "Yes, 30-bin capacity base" },
      { feature: "Battery Life", specification: "Up to 120 minutes" },
      { feature: "Warranty", specification: "1-year limited warranty" }
    ],
    pros: [
      "Exceptional cleaning performance on carpets and hard floors",
      "Smart navigation and mapping for efficient cleaning",
      "Self-emptying base minimizes maintenance"
    ],
    cons: [
      "High price point",
      "Can occasionally get stuck",
      "Some users find it noisy"
    ]
  },
  {
    title: "2. Eufy BoostIQ RoboVac 11S Max",
    imageUrl: "https://m.media-amazon.com/images/I/7162dbcZW3L._AC_SL1500_.jpg",
    amazonUrl: addAffiliateCode("https://www.amazon.com/eufy-Super-Thin-Super-Strong-Self-Charging-Medium-Pile/dp/B07R295MLS"),
    description: "For those on a budget, the Eufy BoostIQ RoboVac 11S Max is a fantastic option. This super-slim vacuum easily glides under furniture and delivers impressive suction power for its size. Plus, it operates quietly at just 55dB, making it ideal for noise-sensitive households.",
    specs: [
      { feature: "Suction Power", specification: "2000Pa" },
      { feature: "Cleaning System", specification: "BoostIQ Technology for automatic suction adjustment" },
      { feature: "Navigation", specification: "Random navigation with infrared sensors" },
      { feature: "Self-Emptying", specification: "No" },
      { feature: "Battery Life", specification: "Up to 100 minutes" },
      { feature: "Noise Level", specification: "55dB" }
    ],
    pros: [
      "Affordable price point",
      "Ultra-slim design for better reach",
      "Quiet operation",
      "Good battery life"
    ],
    cons: [
      "Basic navigation system",
      "No smart mapping features",
      "Manual bin emptying required"
    ]
  },
  {
    title: "3. iRobot Roomba Combo j7+",
    imageUrl: "https://m.media-amazon.com/images/I/71M6KSexe5L._AC_SL1500_.jpg",
    amazonUrl: addAffiliateCode("https://www.amazon.com/iRobot-Roomba-ComboTM-Self-Emptying-Vacuum/dp/B0BCH3J9RD"),
    description: "The iRobot Roomba Combo j7+ is a true multi-tasker, seamlessly transitioning from vacuuming to mopping. Its retractable mop pad intelligently lifts when it encounters carpet, ensuring your rugs stay dry. With advanced obstacle avoidance and the ability to learn your cleaning habits, this robot vacuum offers a personalized cleaning experience.",
    specs: [
      { feature: "Cleaning Modes", specification: "Vacuums and mops simultaneously" },
      { feature: "Mop Feature", specification: "Retractable mop pad for carpet protection" },
      { feature: "Navigation", specification: "PrecisionVision Navigation for obstacle avoidance" },
      { feature: "Self-Emptying", specification: "Yes" },
      { feature: "Smart Features", specification: "Personalized cleaning schedules, obstacle recognition" },
      { feature: "Warranty", specification: "1-year limited warranty" }
    ],
    pros: [
      "Advanced obstacle avoidance",
      "2-in-1 vacuum and mop functionality",
      "Smart mapping and scheduling",
      "Self-emptying capability"
    ],
    cons: [
      "Premium price point",
      "Base doesn't clean mop pad",
      "Mopping performance could be better"
    ]
  },
  {
    title: "4. Roborock Qrevo Pro",
    imageUrl: "https://m.media-amazon.com/images/I/6142wxbCeWL._AC_SL1500_.jpg",
    amazonUrl: addAffiliateCode("https://www.amazon.com/roborock-Qrevo-Pro-Intelligent-Detection/dp/B0CQ25DFTT"),
    description: "The Roborock Qrevo Pro is a top-of-the-line robot vacuum and mop packed with innovative features. Its FlexiArm design reaches deep into corners and edges, while the hot water mop washing system tackles stubborn dirt. The Qrevo Pro can even identify areas with higher dirt levels and rewash or re-mop them for a more thorough clean.",
    specs: [
      { feature: "Cleaning Modes", specification: "Vacuums and mops simultaneously" },
      { feature: "Mop Feature", specification: "FlexiArm Design, hot water mop washing" },
      { feature: "Navigation", specification: "PreciSense LiDAR Navigation" },
      { feature: "Self-Emptying", specification: "Yes, with auto tank refilling" },
      { feature: "Battery Life", specification: "Up to 180 minutes" },
      { feature: "Noise Level", specification: "63dB" }
    ],
    pros: [
      "Superior cleaning performance",
      "Advanced mopping with hot water",
      "Excellent navigation",
      "Long battery life"
    ],
    cons: [
      "High price tag",
      "Large dock size",
      "Complex initial setup"
    ]
  },
  {
    title: "5. Shark PowerDetect 2-in-1",
    imageUrl: "https://m.media-amazon.com/images/I/814c2z79i0L._AC_SL1500_.jpg",
    amazonUrl: addAffiliateCode("https://www.amazon.com/Shark-PowerDetect-Self-Emptying-Technologies-AV200ZE/dp/B0DCPX2MN"),
    description: "The Shark PowerDetect 2-in-1 is another excellent choice for those who want a robot vacuum that can both vacuum and mop. Its PowerDetect technology intelligently identifies and targets hidden debris and stubborn stains. The NeverTouch Pro base automatically empties the dustbin, refills the water tank, and washes and dries the mop pad, providing a truly hands-free cleaning experience.",
    specs: [
      { feature: "Cleaning Modes", specification: "Vacuums and mops simultaneously" },
      { feature: "Mop Feature", specification: "Self-washing mop pad with NeverTouch Pro base" },
      { feature: "Navigation", specification: "Row-by-Row navigation with sensors" },
      { feature: "Self-Emptying", specification: "Yes, 60-day capacity" },
      { feature: "Smart Features", specification: "PowerDetect technology, zone cleaning" },
      { feature: "Warranty", specification: "3-year warranty" }
    ],
    pros: [
      "Excellent self-maintenance features",
      "Strong suction power",
      "Long warranty period",
      "Great for pet hair"
    ],
    cons: [
      "Premium pricing",
      "Slightly noisy operation",
      "Large base station footprint"
    ]
  }
];