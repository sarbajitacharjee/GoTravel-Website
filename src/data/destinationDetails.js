
const destinationDetails = {
  bali: {
    tagline: "Island of the Gods",
    introduction:
      "Discover Bali's tropical beaches, ancient temples, lush rice terraces and vibrant local culture. From peaceful Ubud to the beautiful coastline of Uluwatu, Bali offers something for every kind of traveller.",

    bestTime: "April – October",
    duration: "5–7 days",
    travelStyle: "Beaches, Culture & Adventure",

    highlights: [
      {
        name: "Ubud Rice Terraces",
        description:
          "Explore beautiful green rice fields and traditional Balinese landscapes.",
      },
      {
        name: "Uluwatu Temple",
        description:
          "Visit a spectacular clifftop temple overlooking the Indian Ocean.",
      },
      {
        name: "Mount Batur",
        description:
          "Experience an unforgettable sunrise trek on an active volcano.",
      },
      {
        name: "Nusa Penida",
        description:
          "Discover dramatic coastal cliffs and turquoise ocean views.",
      },
    ],

    activities: [
      "Beach exploration",
      "Temple visits",
      "Sunrise trekking",
      "Snorkelling",
      "Balinese cultural experiences",
    ],

    travelTips: [
      "Carry some Indonesian Rupiah for local purchases.",
      "Dress modestly when visiting temples.",
      "Book popular activities in advance during peak season.",
      "Consider renting a scooter only if you are properly licensed and experienced.",
    ],
  },

  "swiss-alps": {
    tagline: "Where mountains meet the sky",
    introduction:
      "Experience the breathtaking Swiss Alps, with snow-covered peaks, picturesque villages, alpine lakes and scenic mountain railways. It is an ideal destination for nature lovers and outdoor enthusiasts.",

    bestTime: "June – September for hiking; December – March for snow",
    duration: "6–8 days",
    travelStyle: "Mountains, Nature & Adventure",

    highlights: [
      {
        name: "Zermatt",
        description:
          "Explore a beautiful alpine village with views of the Matterhorn.",
      },
      {
        name: "Jungfraujoch",
        description:
          "Experience spectacular high-altitude mountain scenery.",
      },
      {
        name: "Lauterbrunnen",
        description:
          "Discover a picturesque valley surrounded by waterfalls and mountains.",
      },
      {
        name: "Lake Lucerne",
        description:
          "Enjoy beautiful lake scenery and mountain surroundings.",
      },
    ],

    activities: [
      "Mountain hiking",
      "Scenic train journeys",
      "Photography",
      "Skiing and snow activities",
      "Lake cruises",
    ],

    travelTips: [
      "Book mountain railways in advance during busy periods.",
      "Carry layered clothing even during summer.",
      "Check weather conditions before mountain excursions.",
      "Compare Swiss travel passes before planning transport.",
    ],
  },

  kyoto: {
    tagline: "A journey through timeless Japan",
    introduction:
      "Kyoto brings together traditional Japanese architecture, peaceful gardens, historic temples and beautiful cultural traditions. It is a wonderful destination for travellers who enjoy history, photography and slow exploration.",

    bestTime: "March – May and October – November",
    duration: "4–5 days",
    travelStyle: "Culture, History & Photography",

    highlights: [
      {
        name: "Fushimi Inari Shrine",
        description:
          "Walk through the famous pathways of thousands of red torii gates.",
      },
      {
        name: "Arashiyama Bamboo Grove",
        description:
          "Experience the atmosphere of Kyoto's iconic bamboo forest.",
      },
      {
        name: "Kiyomizu-dera",
        description:
          "Visit a historic temple with beautiful city and hillside views.",
      },
      {
        name: "Gion District",
        description:
          "Explore traditional streets, wooden buildings and Japanese culture.",
      },
    ],

    activities: [
      "Temple exploration",
      "Traditional tea ceremonies",
      "Street photography",
      "Japanese food experiences",
      "Garden visits",
    ],

    travelTips: [
      "Visit popular attractions early in the morning.",
      "Respect local customs and photography restrictions.",
      "Use public transport for convenient city exploration.",
      "Carry cash for smaller local establishments.",
    ],
  },

  santorini: {
    tagline: "Where the Aegean meets the sky",
    introduction:
      "Santorini is famous for its whitewashed villages, blue-domed churches, dramatic volcanic cliffs and beautiful sunsets. It is an unforgettable destination for coastal exploration and photography.",

    bestTime: "April – June and September – October",
    duration: "3–5 days",
    travelStyle: "Coastal, Relaxation & Photography",

    highlights: [
      {
        name: "Oia",
        description:
          "Explore the iconic village famous for its architecture and sunsets.",
      },
      {
        name: "Fira",
        description:
          "Discover beautiful cliffside streets, restaurants and sea views.",
      },
      {
        name: "Red Beach",
        description:
          "Experience the island's distinctive volcanic coastal landscape.",
      },
      {
        name: "Akrotiri",
        description:
          "Explore an important archaeological site from the ancient Minoan period.",
      },
    ],

    activities: [
      "Sunset photography",
      "Coastal exploration",
      "Boat excursions",
      "Village walks",
      "Local Greek food experiences",
    ],

    travelTips: [
      "Reserve accommodation well in advance during peak season.",
      "Wear comfortable shoes for steep and uneven streets.",
      "Plan sunset visits early to avoid crowds.",
      "Check ferry schedules when travelling between islands.",
    ],
  },

  meghalaya: {
    tagline: "The abode of clouds",
    introduction:
      "Meghalaya is a paradise of misty mountains, living root bridges, crystal-clear rivers and spectacular waterfalls. From the lively streets of Shillong to the peaceful landscapes of Dawki and Cherrapunji, it offers incredible natural experiences.",

    bestTime: "October – April for clearer weather",
    duration: "5–7 days",
    travelStyle: "Nature, Adventure & Photography",

    highlights: [
      {
        name: "Dawki",
        description:
          "Experience the beautiful clear waters of the Umngot River.",
      },
      {
        name: "Double Decker Living Root Bridge",
        description:
          "Explore the remarkable living root bridge in Nongriat village.",
      },
      {
        name: "Cherrapunji",
        description:
          "Discover dramatic waterfalls, caves and green mountain scenery.",
      },
      {
        name: "Shillong",
        description:
          "Explore the scenic hill city, viewpoints and local culture.",
      },
    ],

    activities: [
      "Waterfall exploration",
      "Trekking",
      "River boating",
      "Landscape photography",
      "Cave exploration",
    ],

    travelTips: [
      "Carry comfortable trekking shoes.",
      "Check local weather before planning outdoor activities.",
      "Keep sufficient time for road journeys between destinations.",
      "Respect local communities and natural environments.",
    ],
  },

  iceland: {
    tagline: "Land of fire and ice",
    introduction:
      "Iceland is a spectacular destination featuring glaciers, volcanoes, waterfalls, black sand beaches and extraordinary natural landscapes. It is perfect for travellers seeking adventure and unique photography opportunities.",

    bestTime: "June – August for road trips; September – March for northern lights opportunities",
    duration: "7–10 days",
    travelStyle: "Adventure, Nature & Photography",

    highlights: [
      {
        name: "Golden Circle",
        description:
          "Explore famous natural attractions including geysers and waterfalls.",
      },
      {
        name: "Jökulsárlón Glacier Lagoon",
        description:
          "Witness floating icebergs in a spectacular glacial lagoon.",
      },
      {
        name: "Skógafoss",
        description:
          "Visit one of Iceland's most impressive waterfalls.",
      },
      {
        name: "Reynisfjara",
        description:
          "Discover the dramatic black sand beach and volcanic rock formations.",
      },
    ],

    activities: [
      "Northern lights viewing",
      "Glacier excursions",
      "Waterfall exploration",
      "Landscape photography",
      "Scenic road trips",
    ],

    travelTips: [
      "Check road and weather conditions before travelling.",
      "Pack waterproof and windproof clothing.",
      "Never approach unpredictable ocean waves on black sand beaches.",
      "Book accommodation early during popular travel seasons.",
    ],
  },
};

export default destinationDetails;
