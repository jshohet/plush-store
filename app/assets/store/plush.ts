import { nanoid } from "@reduxjs/toolkit";

export type Plush = {
  id?: string,
  name: string,
  sales:{
    prices: string[],
    sizes: string[]
  },
  image: string,
  qty?: number,
  imageAlt: string,
  show?: boolean
};

export const Plushies: Plush[] = [
  {
    id: nanoid(),
    name: "Fat Black Cat",
    sales: {
      prices: ["10.99", "15.99", "20.99"],
      sizes: ["sm", "md", "lg"],
    },
    image: "/img/catplush.png",
    imageAlt: "A picture of a fat black cat plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Fat Puppy",
    sales: {
      prices: ["10.99", "20.99"],
      sizes: ["sm", "lg"],
    },
    image: "/img/dogplush.png",
    imageAlt: "A picture of a fat puppy plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Stabby Duck",
    sales: {
      prices: ["15.99", "20.99"],
      sizes: ["md", "lg"],
    },
    image: "/img/duckknife.png",
    imageAlt: "A picture of a duck with a knife plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Soulless Duck",
    sales: {
      prices: ["20.99"],
      sizes: ["lg"],
    },
    image: "/img/duckplush.png",
    imageAlt: "A picture of a large soulless duck plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Gengar",
    sales: {
      prices: ["10.99", "15.99", "20.99"],
      sizes: ["sm", "md", "lg"],
    },
    image: "/img/gengar.png",
    imageAlt: "A picture of a Gengar plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Panda",
    sales: {
      prices: ["10.99", "15.99"],
      sizes: ["sm", "md"],
    },
    image: "/img/pandaplush.png",
    imageAlt: "A picture of a panda plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Pikachu",
    sales: {
      prices: ["10.99", "15.99", "20.99"],
      sizes: ["sm", "md", "lg"],
    },
    image: "/img/pikachuplush.png",
    imageAlt: "A picture of a pikachu plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Sleepy Red Panda",
    sales: {
      prices: ["15.99", "20.99"],
      sizes: ["md", "lg"],
    },
    image: "/img/redpandaplush.png",
    imageAlt: "A picture of a red panda sleeping plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Snorlax",
    sales: {
      prices: ["15.99", "20.99"],
      sizes: ["md", "lg"],
    },
    image: "/img/snorlax.png",
    imageAlt: "A picture of a Snorlax plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Innocent Octopus",
    sales: {
      prices: ["10.99", "15.99"],
      sizes: ["sm", "md"],
    },
    image: "/img/takoplush.png",
    imageAlt: "A picture of a purple octopus plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Chonky T-rex",
    sales: {
      prices: ["15.99", "20.99"],
      sizes: ["md", "lg"],
    },
    image: "/img/trexplush.png",
    imageAlt: "A picture of a large T-Rex plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Sea Turtle",
    sales: {
      prices: ["10.99", "20.99"],
      sizes: ["sm", "lg"],
    },
    image: "/img/turtleplush.png",
    imageAlt: "A picture of a sea turtle plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Burger Bunny",
    sales: {
      prices: ["10.99", "20.99"],
      sizes: ["sm", "lg"],
    },
    image: "/img/burgerbunnyplush.png",
    imageAlt: "A picture of a burger plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Emotional Support Fries",
    sales: {
      prices: ["10.99", "20.99"],
      sizes: ["sm", "lg"],
    },
    image: "/img/emotionalsupportplush.png",
    imageAlt: "A picture of the emotional support fries plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Emotional Support Dumplings",
    sales: {
      prices: ["10.99", "20.99"],
      sizes: ["sm", "lg"],
    },
    image: "/img/emotionaldumplings.png",
    imageAlt: "A picture of the emotional support dumplings plushie.",
    show: true,
  },
  {
    id: nanoid(),
    name: "Emotional Support Nuggets",
    sales: {
      prices: ["10.99", "20.99"],
      sizes: ["sm", "lg"],
    },
    image: "/img/emotionalnugs.png",
    imageAlt: "A picture of the emotional support nuggets plushie.",
    show: true,
  },
];