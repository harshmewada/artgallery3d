import React from "react";

const key = "3f837f92cdd032c666109161d1ebf84e09c231916f8acd969dea5547e8b8ac9b";
const pexleskey = "563492ad6f91700001000001e8a404b02b9b4f709a4432abe7b42e74";

const probe = require("probe-image-size");

const de = [
  {
    id: 9533466,
    width: 4160,
    height: 6240,
    url: "https://www.pexels.com/photo/woman-in-green-and-black-tank-top-9533466/",
    photographer: "Mitya  Zotov",
    photographer_url: "https://www.pexels.com/@mitya-zotov-71755548",
    photographer_id: 71755548,
    avg_color: "#6D5B51",
    src: {
      original:
        "https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg",
      large2x:
        "https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9533466/pexels-photo-9533466.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9439929,
    width: 2586,
    height: 3673,
    url: "https://www.pexels.com/photo/grayscale-photo-of-water-fountain-9439929/",
    photographer: "Alex Kozlov",
    photographer_url: "https://www.pexels.com/@alex-kozlov-3442124",
    photographer_id: 3442124,
    avg_color: "#7B7B7B",
    src: {
      original:
        "https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg",
      large2x:
        "https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9439929/pexels-photo-9439929.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9497440,
    width: 3648,
    height: 5472,
    url: "https://www.pexels.com/photo/snow-wood-dawn-landscape-9497440/",
    photographer: "Isaac Garcia",
    photographer_url: "https://www.pexels.com/@basiciggy",
    photographer_id: 95846066,
    avg_color: "#764B42",
    src: {
      original:
        "https://images.pexels.com/photos/9497440/pexels-photo-9497440.png",
      large2x:
        "https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9497440/pexels-photo-9497440.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9507863,
    width: 3000,
    height: 4000,
    url: "https://www.pexels.com/photo/purple-leaves-on-white-background-9507863/",
    photographer: "Kulbir",
    photographer_url: "https://www.pexels.com/@plantsandgraphics",
    photographer_id: 22209501,
    avg_color: "#B7ADB6",
    src: {
      original:
        "https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg",
      large2x:
        "https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9507863/pexels-photo-9507863.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9480300,
    width: 3888,
    height: 5184,
    url: "https://www.pexels.com/photo/grayscale-photo-of-cars-parked-beside-building-9480300/",
    photographer: "Lisa",
    photographer_url: "https://www.pexels.com/@fotios-photos",
    photographer_id: 26735,
    avg_color: "#686868",
    src: {
      original:
        "https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg",
      large2x:
        "https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9480300/pexels-photo-9480300.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9443699,
    width: 4160,
    height: 6240,
    url: "https://www.pexels.com/photo/topless-man-in-water-9443699/",
    photographer: "Mitya  Zotov",
    photographer_url: "https://www.pexels.com/@mitya-zotov-71755548",
    photographer_id: 71755548,
    avg_color: "#7F8F8F",
    src: {
      original:
        "https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg",
      large2x:
        "https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9443699/pexels-photo-9443699.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9443587,
    width: 4160,
    height: 6240,
    url: "https://www.pexels.com/photo/grayscale-photo-of-girl-smiling-9443587/",
    photographer: "Mitya  Zotov",
    photographer_url: "https://www.pexels.com/@mitya-zotov-71755548",
    photographer_id: 71755548,
    avg_color: "#5F5F5F",
    src: {
      original:
        "https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg",
      large2x:
        "https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9443587/pexels-photo-9443587.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9439904,
    width: 2586,
    height: 3652,
    url: "https://www.pexels.com/photo/grayscale-photo-of-woman-in-black-jacket-and-pants-walking-on-stairs-9439904/",
    photographer: "Alex Kozlov",
    photographer_url: "https://www.pexels.com/@alex-kozlov-3442124",
    photographer_id: 3442124,
    avg_color: "#525252",
    src: {
      original:
        "https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg",
      large2x:
        "https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9439904/pexels-photo-9439904.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9439931,
    width: 2298,
    height: 3561,
    url: "https://www.pexels.com/photo/grayscale-photo-of-concrete-pillar-9439931/",
    photographer: "Alex Kozlov",
    photographer_url: "https://www.pexels.com/@alex-kozlov-3442124",
    photographer_id: 3442124,
    avg_color: "#333333",
    src: {
      original:
        "https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg",
      large2x:
        "https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9439931/pexels-photo-9439931.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9329355,
    width: 3244,
    height: 4866,
    url: "https://www.pexels.com/photo/woman-in-blue-one-piece-swimsuit-standing-on-beach-9329355/",
    photographer: "Lexa Nicole",
    photographer_url: "https://www.pexels.com/@lexa-nicole-88109157",
    photographer_id: 88109157,
    avg_color: "#B0BEC7",
    src: {
      original:
        "https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg",
      large2x:
        "https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9329355/pexels-photo-9329355.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9351592,
    width: 3917,
    height: 4896,
    url: "https://www.pexels.com/photo/woman-in-black-jacket-standing-near-glass-door-9351592/",
    photographer: "Henrique Morais",
    photographer_url: "https://www.pexels.com/@henrique-morais-1906596",
    photographer_id: 1906596,
    avg_color: "#434434",
    src: {
      original:
        "https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg",
      large2x:
        "https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9351592/pexels-photo-9351592.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9321606,
    width: 3535,
    height: 5302,
    url: "https://www.pexels.com/photo/man-in-orange-and-black-t-shirt-wearing-black-cap-9321606/",
    photographer: "Erik Mclean",
    photographer_url: "https://www.pexels.com/@introspectivedsgn",
    photographer_id: 2417028,
    avg_color: "#8E5B40",
    src: {
      original:
        "https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg",
      large2x:
        "https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9321606/pexels-photo-9321606.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9320371,
    width: 3456,
    height: 5184,
    url: "https://www.pexels.com/photo/woman-in-purple-shirt-standing-beside-green-plant-9320371/",
    photographer: "Yaroslav Chaadaev",
    photographer_url: "https://www.pexels.com/@soulofmurcidus",
    photographer_id: 82251264,
    avg_color: "#654C4F",
    src: {
      original:
        "https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg",
      large2x:
        "https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9320371/pexels-photo-9320371.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 7365263,
    width: 1680,
    height: 2592,
    url: "https://www.pexels.com/photo/white-clouds-and-blue-sky-during-night-time-7365263/",
    photographer: "Simon Gough",
    photographer_url: "https://www.pexels.com/@scgough",
    photographer_id: 1785348,
    avg_color: "#61779D",
    src: {
      original:
        "https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg",
      large2x:
        "https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/7365263/pexels-photo-7365263.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9320317,
    width: 3456,
    height: 5184,
    url: "https://www.pexels.com/photo/black-and-white-concrete-building-9320317/",
    photographer: "Yaroslav Chaadaev",
    photographer_url: "https://www.pexels.com/@soulofmurcidus",
    photographer_id: 82251264,
    avg_color: "#2F3A3E",
    src: {
      original:
        "https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg",
      large2x:
        "https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9320317/pexels-photo-9320317.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9320088,
    width: 3449,
    height: 4463,
    url: "https://www.pexels.com/photo/beach-woman-ocean-portrait-9320088/",
    photographer: "Lexa Nicole",
    photographer_url: "https://www.pexels.com/@lexa-nicole-88109157",
    photographer_id: 88109157,
    avg_color: "#B7B8B3",
    src: {
      original:
        "https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg",
      large2x:
        "https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9320088/pexels-photo-9320088.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9320447,
    width: 2667,
    height: 4000,
    url: "https://www.pexels.com/photo/white-and-brown-concrete-building-9320447/",
    photographer: "Juan Samudio",
    photographer_url: "https://www.pexels.com/@juan-samudio-98491913",
    photographer_id: 98491913,
    avg_color: "#7B9298",
    src: {
      original:
        "https://images.pexels.com/photos/9320447/pexels-photo-9320447.jpeg",
      large2x:
        "https://images.pexels.com/photos/9320447/pexels-photo-9320447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9320447/pexels-photo-9320447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9320447/pexels-photo-9320447.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9320447/pexels-photo-9320447.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9320447/pexels-photo-9320447.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9320447/pexels-photo-9320447.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9320447/pexels-photo-9320447.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 4331885,
    width: 4160,
    height: 6240,
    url: "https://www.pexels.com/photo/woman-in-red-tank-top-covering-her-face-4331885/",
    photographer: "Matilde Mendes",
    photographer_url: "https://www.pexels.com/@matilde-mendes-2790780",
    photographer_id: 2790780,
    avg_color: "#D26260",
    src: {
      original:
        "https://images.pexels.com/photos/4331885/pexels-photo-4331885.jpeg",
      large2x:
        "https://images.pexels.com/photos/4331885/pexels-photo-4331885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/4331885/pexels-photo-4331885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/4331885/pexels-photo-4331885.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/4331885/pexels-photo-4331885.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/4331885/pexels-photo-4331885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/4331885/pexels-photo-4331885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/4331885/pexels-photo-4331885.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9303791,
    width: 3456,
    height: 5184,
    url: "https://www.pexels.com/photo/woman-in-red-hijab-standing-on-green-grass-field-9303791/",
    photographer: "Yaroslav Chaadaev",
    photographer_url: "https://www.pexels.com/@soulofmurcidus",
    photographer_id: 82251264,
    avg_color: "#665E53",
    src: {
      original:
        "https://images.pexels.com/photos/9303791/pexels-photo-9303791.jpeg",
      large2x:
        "https://images.pexels.com/photos/9303791/pexels-photo-9303791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9303791/pexels-photo-9303791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9303791/pexels-photo-9303791.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9303791/pexels-photo-9303791.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9303791/pexels-photo-9303791.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9303791/pexels-photo-9303791.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9303791/pexels-photo-9303791.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
  {
    id: 9297975,
    width: 2880,
    height: 1920,
    url: "https://www.pexels.com/photo/silhouette-of-palm-trees-during-sunset-9297975/",
    photographer: "Isaac Garcia",
    photographer_url: "https://www.pexels.com/@basiciggy",
    photographer_id: 95846066,
    avg_color: "#8C6172",
    src: {
      original:
        "https://images.pexels.com/photos/9297975/pexels-photo-9297975.jpeg",
      large2x:
        "https://images.pexels.com/photos/9297975/pexels-photo-9297975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/9297975/pexels-photo-9297975.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/9297975/pexels-photo-9297975.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/9297975/pexels-photo-9297975.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/9297975/pexels-photo-9297975.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/9297975/pexels-photo-9297975.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/9297975/pexels-photo-9297975.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
  },
];
const useGetImages = () => {
  const [images, setImages] = React.useState([]);
  const handleGetImages = async () => {
    // const hehe = await fetch(
    //   `https://api.unsplash.com/photos/?client_id=${key}`
    // ).then((res) => res.json());
    // const size = await Promise.all(
    //   hehe.map(async (res) => {
    //     let result = await probe(res.urls.regular);
    //     return {
    //       ...res,
    //       sizeData: result,
    //     };
    //   })
    // );
    const hehe = await fetch(
      // `https://api.pexels.com/v1/curated?page=1&per_page=20`,
      `https://artcooly.com/getArtistArtworkDetails.php?artistNicename=fritz-bleichert`
      // {
      //   headers: {
      //     Authorization: pexleskey,
      //   },
      // }
    )
      .then((res) => res.json())
      .then((res) => res);
    // .then((res) => res.photos);

    const size = await Promise.all(
      hehe.map(async (res) => {
        // let result = await probe(res.src.large2x);
        let result = await probe(res.imageUrl);
        return {
          ...res,
          sizeData: result,
        };
      })
    );
    if (size) setImages(size);
  };

  React.useEffect(() => {
    handleGetImages();
  }, []);
  return images;
};
export default useGetImages;

// return useFrame((state) => {
//   if (clicked) {
//     state.camera.position.lerp(vec.set(-2 + state.mouse.x, 2, 4.5), 0.05)
//     state.camera.lookAt(0, 0, 0)
//   }
// })
