import { StaticImageData } from "next/image";

export type Product = {
    id: number;
    title: string;
    image?: string | StaticImageData | undefined | any;
    slug: string;
    price: number;
    discount?: any;
    category: string;
    description: string;
    size: string[];
    color: string[];
    qty: number;
    
};
export type Cart = {
    id: number;
    title: string;
    image?: string | StaticImageData | undefined | any;
    slug: string;
    price: number;
    discount?: any;
    category: string;
    size: string;
    qty: number;
    uuid: number | string | undefined;
    color: string;
};