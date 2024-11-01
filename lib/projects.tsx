import { ProjectType } from "./types";

// project images
import hlnhl from "@/public/images/projects/higherlowernhl.png";
import beavers from "@/public/images/projects/howfarinbeavers.png";
import dealership from "@/public/images/projects/cardealership.png";
import budgetgoose from "@/public/images/projects/budgetgoose.png";
import isoroom from "@/public/images/projects/isoroom.png";

// project brand icons
import { TbBrandFramerMotion, TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
import { FaAngular, FaReact, FaSass } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiOutlineOpenAI } from "react-icons/ai";

export const projects: ProjectType[] = [
    {
        title: 'Higher or Lower NHL',
        description: 'Clone of the popular higher or lower game using NHL player stats',
        link: 'https://higherlowernhl.com',
        image: hlnhl,
        frameworks: [{ name: 'NextJS', icon: <TbBrandNextjs />, color: 'blue' }, { name: 'React', icon: <FaReact />, color: 'blue' }, { name: 'Tailwind', icon: <BiLogoTailwindCss />, color: 'blue' }]
    },
    {
        title: 'How Far In Beavers',
        description: 'A tool to measure distances by any measurement using AI',
        link: 'https://how-far-in-beavers.vercel.app/',
        image: beavers,
        frameworks: [{ name: 'Angular', icon: <FaAngular />, color: 'red' }, { name: 'ChatGPT', icon: <AiOutlineOpenAI />, color: 'green' }, { name: 'SASS', icon: <FaSass />, color: 'red' }]
    },
    {
        title: 'Mock Car Dealership',
        description: 'A fake e-commerce store for cars',
        link: 'https://car-dealership-olive.vercel.app/',
        image: dealership,
        frameworks: [{ name: 'NextJS', icon: <TbBrandNextjs />, color: 'blue' }, { name: 'React', icon: <FaReact />, color: 'blue' }, { name: 'Tailwind', icon: <BiLogoTailwindCss />, color: 'blue' }]
    },
    {
        title: 'Budget Goose',
        description: 'An app for creating shopping lists',
        link: 'https://budget-app-ruby-nu.vercel.app/',
        image: budgetgoose,
        frameworks: [{ name: 'NextJS', icon: <TbBrandNextjs />, color: 'blue' }, { name: 'React', icon: <FaReact />, color: 'blue' }, { name: 'Framer', icon: <TbBrandFramerMotion />, color: 'pink' }]
    },
    {
        title: 'Isometric Room',
        description: 'A 3d view of an isometric room using threejs',
        link: 'https://isometric-room-eight.vercel.app/',
        image: isoroom,
        frameworks: [{ name: 'NextJS', icon: <TbBrandNextjs />, color: 'blue' }, { name: 'React', icon: <FaReact />, color: 'blue' }, { name: 'ThreeJs', icon: <TbBrandThreejs />, color: 'blue' }]
    },
]