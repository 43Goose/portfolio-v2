import { StaticImageData } from "next/image";

export interface ProjectType {
    title: string;
    description: string;
    link: string;
    image: StaticImageData;
    frameworks: BrandType[]
}

export interface BrandType {
    name: string;
    icon: React.ReactNode;
    color: string;
}