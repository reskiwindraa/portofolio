import pillarsImage from "../assets/project-pillars.png";
import sapaImage from "../assets/project-sapa.png";
import designSystemImage from "../assets/project-design-system.png";

export const projects = [
  {
    id: "pillars",
    title: "Pilllars Web Design",
    description: "Creating experiences that make sense.",
    image: pillarsImage,

    theme: {
      light: {
        background: "#B7A9FF",
        accent: "#6548F5",
      },

      dark: {
        background: "#29234A",
        accent: "#B8AAFF",
      },
    },

    items: [
      "Customer rating flow",
      "CS / Teller / Security assessment",
      "Branch management",
      "Staff schedule integration",
      "Feedback & suggestions",
      "Analytics dashboard",
    ],

    href: "#",
  },

  {
    id: "bsb-sapa",
    title: "BSB SAPA",
    description:
      "A digital customer satisfaction platform designed to collect and manage feedback across branch services.",
    image: sapaImage,

    theme: {
      light: {
        background: "#FFF08B",
        accent: "#A89400",
      },

      dark: {
        background: "#454019",
        accent: "#F5DF65",
      },
    },

    items: [
      "Customer rating flow",
      "CS / Teller / Security assessment",
      "Branch management",
      "Staff schedule integration",
      "Feedback & suggestions",
      "Analytics dashboard",
    ],

    href: "#",
  },

  {
    id: "design-system",
    title: "Design System Bank Sumsel Babel",
    description: "Creating experiences that make sense.",
    image: designSystemImage,

    theme: {
      light: {
        background: "#FFD1DB",
        accent: "#F35C7D",
      },

      dark: {
        background: "#482630",
        accent: "#FF91AA",
      },
    },

    items: [
      "Color tokens",
      "Typography",
      "Buttons & components",
      "Input states",
      "Spacing system",
      "Design guidelines",
    ],

    href: "#",
  },
];