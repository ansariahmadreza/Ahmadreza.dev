import bef1 from "./assets/bef1.avif";
import af1 from "./assets/af1.avif";
import bef2 from "./assets/bef2.avif";
import af2 from "./assets/af2.avif";
import bef3 from "./assets/bef3.avif";
import af3 from "./assets/af3.avif";
import bef4 from "./assets/bef4.avif";
import af4 from "./assets/af4.avif";
import bef5 from "./assets/bef5.avif";
import af5 from "./assets/af5.avif";
import bef6 from "./assets/bef6.avif";
import af6 from "./assets/af6.avif";
import bef7 from "./assets/bef7.avif";
import af7 from "./assets/af7.avif";
import bef8 from "./assets/bef8.avif";
import af8 from "./assets/af8.avif";
import img6_1 from "./assets/6 (1).avif";
import img6_2 from "./assets/6 (2).avif";
import img6_3 from "./assets/6 (3).avif";
import img5_1 from "./assets/5 (1).avif";
import img5_2 from "./assets/5 (2).avif";
import img5_3 from "./assets/5 (3).avif";
import img7_1 from "./assets/img7_1.avif";
import img7_2 from "./assets/img7_2.avif";
import img7_3 from "./assets/img7_3.avif";
import img8_1 from "./assets/img8_1.avif";
import img8_2 from "./assets/img8_2.avif";
import img8_3 from "./assets/img8_3.avif";
import img2_1 from "./assets/img2_1.avif";
import img2_2 from "./assets/img2_2.avif";
import img2_3 from "./assets/img2_3.avif";
import img1_1 from "./assets/img1_1.avif";
import img1_2 from "./assets/img1_2.avif";
import img1_3 from "./assets/img1_3.avif";
import img3_1 from "./assets/img3_1.avif";
import img3_2 from "./assets/img3_2.avif";
import img3_3 from "./assets/img3_3.avif";
import img4_1 from "./assets/img4_1.avif";
import img4_2 from "./assets/img4_2.avif";


const img1_array = [
    { id: 101, img: img1_1 }, { id: 102, img: img1_2 }, { id: 103, img: img1_3 }, { id: 104, img: bef1 }, { id: 105, img: af1 }
];

const img2_array = [
    { id: 106, img: img2_1 }, { id: 107, img: img2_2 }, { id: 108, img: img2_3 }, { id: 109, img: bef2 }, { id: 110, img: af2 }
]

const img3_array = [
    { id: 111, img: img3_1 }, { id: 112, img: img3_2 }, { id: 113, img: img3_3 }, { id: 114, img: bef3 }, { id: 115, img: af3 }
];

const img4_array = [
    { id: 116, img: img4_1 }, { id: 117, img: img4_2 }, { id: 118, img: af4 }, { id: 119, img: bef4 }
];

const img5_array = [
    { id: 120, img: img5_1 }, { id: 121, img: img5_2 }, { id: 122, img: img5_3 }, { id: 123, img: af5 }, { id: 124, img: bef5 }
];

const img6_array = [
    { id: 125, img: af6 }, { id: 126, img: bef6 }, { id: 127, img: img6_1 }, { id: 128, img: img6_2 }, { id: 129, img: img6_3 }
];

const img7_array = [
    { id: 130, img: img7_1 }, { id: 131, img: img7_2 }, { id: 132, img: img7_3 }, { id: 133, img: bef7 }, { id: 134, img: af7 }
];

const img8_array = [
    { id: 135, img: img8_1 }, { id: 136, img: img8_2 }, { id: 137, img: img8_3 }, { id: 138, img: bef8 }, { id: 139, img: af8 }
];


const QtyProduct_1 = [
    { id: 1, qty: 1, size: "XS Out of Stock" },
    { id: 2, qty: 2, size: "S" },
    { id: 3, qty: 3, size: "L" },
    { id: 4, qty: 4, size: "L Out of Stock" },
    { id: 5, qty: 5, size: "XL Out of Stock" },
    { id: 6, qty: 6, size: "2XL" },
    { id: 7, qty: 7, size: "3XL" },
    { id: 8, qty: 8, size: "XL" },

]


const QtyProduct_2 = [
    { id: 1, qty: 1, size: "S 34 - 36" },
    { id: 2, qty: 2, size: "M 38 - 40" },
    { id: 3, qty: 3, size: "L 42 - 44" },
    { id: 4, qty: 4, size: "XL 46 - 48" },
    { id: 5, qty: 5, size: "2XL 50 - 52" },
    { id: 6, qty: 6, size: "3XL 54 - 56" },
    { id: 7, qty: 7, size: "4XL 58 - 60" },
    { id: 8, qty: 8, size: "5XL 62 - 64" },

]


const QtyProduct_3 = [
    { id: 1, qty: 1, size: "S W34 - 36" },
    { id: 2, qty: 2, size: "M W38 - 40" },
    { id: 3, qty: 3, size: "L W42 - 44" },
    { id: 4, qty: 4, size: "XL W46 - 48" },
    { id: 5, qty: 5, size: "XL W50 - 52" },
    { id: 6, qty: 6, size: "2XL W54 - 56" },
    { id: 7, qty: 7, size: "3XL W58 - 60" },
    { id: 8, qty: 8, size: "4XL W62 - 64" },
]

const QtyProduct_4 = [
    { id: 1, qty: 1, size: "S 36" },
    { id: 2, qty: 2, size: "M 38 Out of Stock" },
    { id: 3, qty: 3, size: "L 40 Out of Stock" },
    { id: 4, qty: 4, size: "XL 42 Out of Stock" },
    { id: 5, qty: 5, size: "XL 44" },
    { id: 6, qty: 6, size: "2XL 44" },
    { id: 7, qty: 7, size: "3XL 46" },
    { id: 8, qty: 8, size: "4XL 48" },
]

const QtyProduct_5 = [
    { id: 1, qty: 1, size: "S 34 - 36" },
    { id: 2, qty: 2, size: "M 38 - 40" },
    { id: 3, qty: 3, size: "L 42 - 44" },
    { id: 4, qty: 4, size: "XL 46 - 48" },
    { id: 5, qty: 5, size: "2XL 50 - 52" },
    { id: 6, qty: 6, size: "3XL 54 - 56" },
    { id: 7, qty: 7, size: "4XL 58 - 60" },
    { id: 8, qty: 8, size: "5XL 62 - 64" },
]

const QtyProduct_6 = [
    { id: 1, qty: 1, size: "W28 L30" },
    { id: 2, qty: 2, size: "W30 L30" },
    { id: 3, qty: 3, size: "W30 L32" },
    { id: 4, qty: 4, size: "W30 L34" },
    { id: 5, qty: 5, size: "W32 L30" },
    { id: 6, qty: 6, size: "W32 L32" },
    { id: 7, qty: 7, size: "W32 L34" },
    { id: 8, qty: 8, size: "W36 L30" },
]


const QtyProduct_7 = [
    { id: 1, qty: 1, size: "S 34 L 40" },
    { id: 2, qty: 2, size: "M 35 D 41" },
    { id: 3, qty: 3, size: "L 36 S 42" },
    { id: 4, qty: 4, size: "XL 37 T 43" },
    { id: 5, qty: 5, size: "2XL 38 I 44" },
    { id: 6, qty: 6, size: "3XL 46 I 52" },
    { id: 7, qty: 7, size: "4XL 54 I 60" },
    { id: 8, qty: 8, size: "5XL 62 I 68" },
]

const QtyProduct_8 = [
    { id: 1, qty: 1, size: "XS Out of Stock" },
    { id: 2, qty: 2, size: "LS" },
    { id: 3, qty: 3, size: "L Out of Stock" },
    { id: 4, qty: 4, size: "XL Out of Stock" },
    { id: 5, qty: 5, size: "2XL" },
    { id: 6, qty: 6, size: "3XL" },
    { id: 7, qty: 7, size: "4XL" },
    { id: 8, qty: 8, size: "5XL" },
]


export const allImg = [
    {
        id: 1, imgBef: bef1, imgAf: af1, discountRate: "-64", img_array: img1_array,
        slug: "jack-and-jones-eddie-loose-worker-jean-in-washed-brown", QtyProduct: QtyProduct_1,
        description: "Jack & Jones Eddie loose worker jean in washed brown ", price: "£34.00"
    },

    {
        id: 2, imgBef: bef2, imgAf: af2, discountRate: "-15", img_array: img2_array,
        slug: "asos-design-oversized-heavyweight-400gsm-hoodie-with-woven-badge-in-yellow", QtyProduct: QtyProduct_2,
        description: "ASOS DESIGN oversized heavyweight 400gsm hoodie with woven badge in yellow", price: "£28.00"
    },

    {
        id: 3, imgBef: bef3, imgAf: af3, discountRate: "-45", img_array: img3_array,
        slug: "jack-and-jones-loose-fit-jogger-in-grey-marl-in-scuba-style-fabric", QtyProduct: QtyProduct_3,
        description: "Jack & Jones loose fit jogger in grey marl in Scuba-Style Fabric", price: "£45.00"
    },

    {
        id: 4, imgBef: bef4, imgAf: af4, discountRate: "-30", img_array: img4_array,
        slug: "asos-design-cotton-twill-oversized-shirt-with-badge-in-brown", QtyProduct: QtyProduct_4,
        description: "ASOS DESIGN cotton twill oversized shirt with badge in brown", price: "£38.00"
    },

    {
        id: 5, imgBef: bef5, imgAf: af5, discountRate: "-20", slug: "carhartt-wip-clover-baseball-cap-in-white-and-brown", img_array: img5_array,
        description: "Carhartt WIP clover baseball cap in white and brown", price: "£26.00", QtyProduct: QtyProduct_5
    },

    {
        id: 6, imgBef: bef6, imgAf: af6, img_array: img6_array, discountRate: "-28",
        slug: "carhartt-wip-adair-canvas-baseball-cap-in-black", QtyProduct: QtyProduct_6,
        description: "carhartt wip adair canvas baseball cap in black", price: "£32.00"
    },

    {
        id: 7, imgBef: bef7, imgAf: af7, img_array: img7_array
        , discountRate: "-8", slug: "asos-design-penny-loafers-in-black-with-weave-detail", QtyProduct: QtyProduct_7,
        description: "ASOS DESIGN penny loafers in black with weave detail", price: "£22.00"
    },

    {
        id: 8, imgBef: bef8, imgAf: af8, img_array: img8_array,
        discountRate: "-12", slug: "asos-design-wool-look-harrington-jacket-in-beige", QtyProduct: QtyProduct_8,
        description: "ASOS DESIGN wool look harrington jacket in-beige", price: "£30.00"
    },
];