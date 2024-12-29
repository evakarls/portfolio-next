import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Position } from "../components/card";

const employments: { id: number; position: Position }[] = [
  {
    id: 1,
    position: {
      title: "Framendaforritari",
      company: "RÚV",
      date: "2021 - núverandi",
      responsibilities: [
        { id: 1, value: "Þróun og viðhald á RÚV.is og vefspilara RÚV." },
        {
          id: 2,
          value:
            "Þróun kosningalausna fyrir Alþingis, forseta og sveitarstjórnarkosningar.",
        },
        { id: 3, value: "Þróun og viðhald á innri kerfum RÚV." },
        {
          id: 4,
          value: "Innleiðing auðkenningarþjónustu með rafrænum skilríkjum.",
        },
      ],
      skills: "React, Next.js, Tailwind, GraphQL, OAuth",
    },
  },
  {
    id: 2,
    position: {
      title: "Fullstack forritari",
      company: "Smovin",
      date: "2020 - 2021",
      responsibilities: [
        {
          id: 1,
          value:
            "Þróun og viðhald á vefþjónustum fyrir fasteignafélög, þar með talið eignayfirlit, útgáfa reikninga og samskipti við leigutaka.",
        },
      ],
      skills: "Vuejs, Tailwind, Ruby on Rails, postgreSQL",
    },
  },
];

const footerItems = [
  {
    id: 1,
    text: "Senda póst",
    href: "mailto:eva@evakarls.com",
    icon: faEnvelope,
  },
  {
    id: 2,
    text: "Github",
    href: "https://github.com/evakarls",
    icon: faGithub,
  },
  {
    id: 3,
    text: "LinkedIn",
    href: "https://linkedin.com/in/evakarlsdottir",
    icon: faLinkedin,
  },
];
export { employments, footerItems };
