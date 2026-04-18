import { ProductItems } from "@/shared";
import { StaticImageData } from "next/image";

export interface IcartItemsProps {
    readonly id: number;
    imgBef: StaticImageData;
    imgAf: StaticImageData;
    discountRate: string;
    img_array: img_array[];
    readonly slug: string;
    description: string;
    price: string;
    QtyProduct: size_selector[];
    Qty?: number

};


export type img_array = {
    id: number
    img: StaticImageData
}

export interface size_selector {
    id: number
    size: string
    qty: number
};

export type propsQty = { ///QtyCart
    qty: ProductItems[]
    id: number
    size: string
};

export interface Rootid {
    id: number
};


export interface RootProps {///بعد از اینکه وارد یک صفحه داینامیک میشی از این طریق id رو میگیری و اطلاعات محصول رو بالا میاری
    params: Promise<{ slug: string }>
    searchParams: Promise<{}>
};


export type propsSize = {
    size_selector: size_selector[]
    id: number

}

export type propsRootSize = {
    size_selector: size_selector[]
    id: number
    size: string
    qty: number
}