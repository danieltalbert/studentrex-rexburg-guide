export const activities = [
    {
        name: "Cress Creek Nature Trail",
        category: "hiking",
        description: "A one-mile, self-guided BLM trail through sagebrush, juniper slopes, and a perennial creek, with an accessible first mile and wide Snake River views.",
        difficulty: "Easy",
        cost: "Free",
        image: "assets/hiking.svg",
        alt: "Illustrated creek trail through green hills",
        url: "https://www.blm.gov/visit/cress-creek-nature-trail"
    },
    {
        name: "Grand Teton National Park",
        category: "adventure",
        description: "A full-day trip for mountain scenery, lakes, wildlife, and trail options. Conditions and seasonal access vary, so check the National Park Service before leaving.",
        difficulty: "Varies",
        cost: "Park fee",
        image: "assets/adventure.svg",
        alt: "Illustrated mountain range reflected in a lake",
        url: "https://www.nps.gov/grte/index.htm"
    },
    {
        name: "Fizz Rizz",
        category: "nightlife",
        description: "A local mocktail and arcade hangout on College Avenue with games, billiards, karaoke events, and alcohol-free drinks.",
        difficulty: "Easy",
        cost: "$–$$",
        image: "assets/nightlife.svg",
        alt: "Illustrated neon arcade controls",
        url: "https://fizzrizz.com/"
    },
    {
        name: "Fire & Fizz",
        category: "chill",
        description: "A pottery-painting studio and custom soda bar designed for creative dates, friend groups, and relaxed afternoons.",
        difficulty: "Easy",
        cost: "$–$$",
        image: "assets/chill.svg",
        alt: "Illustrated painted pottery and sparkling drink",
        url: "https://www.fireandfizz.co/"
    },
    {
        name: "Porter Park",
        category: "chill",
        description: "A central Rexburg park with open lawns, courts, a playground, seasonal splash-pad access, and the historic Idaho Centennial Carousel.",
        difficulty: "Easy",
        cost: "Mostly free",
        image: "assets/chill.svg",
        alt: "Illustrated sunny park with trees",
        url: "https://www.rexburgid.gov/"
    },
    {
        name: "Mesa Falls",
        category: "hiking",
        description: "A scenic day trip centered on Upper and Lower Mesa Falls, with established viewpoints and nearby trails. Check seasonal road and site conditions first.",
        difficulty: "Easy–moderate",
        cost: "Site fee may apply",
        image: "assets/hiking.svg",
        alt: "Illustrated waterfall and forest",
        url: "https://parksandrecreation.idaho.gov/parks/mesa-falls/"
    },
    {
        name: "Yellowstone National Park",
        category: "adventure",
        description: "A long day trip for geysers, hot springs, canyons, and wildlife. Weather, roads, and entrance access can change quickly.",
        difficulty: "Varies",
        cost: "Park fee",
        image: "assets/adventure.svg",
        alt: "Illustrated geyser beneath mountain skies",
        url: "https://www.nps.gov/yell/index.htm"
    },
    {
        name: "Rexburg Rapids",
        category: "chill",
        description: "The city's seasonal outdoor water park offers slides, a lazy river, lap lanes, and splash areas. Confirm the current season schedule before visiting.",
        difficulty: "Easy",
        cost: "$",
        image: "assets/chill.svg",
        alt: "Illustrated water slides and pool",
        url: "https://www.rexburg.org/o/rapids"
    }
];

export function filterActivities(category) {
    return category === "all"
        ? activities
        : activities.filter(activity => activity.category === category);
}
