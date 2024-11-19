import { FaApple, FaPlaystation } from "react-icons/fa6";
import { SiXiaomi } from "react-icons/si";
import { TiVendorMicrosoft } from "react-icons/ti";


// باید to هارو درست کنم
export const hotSaleSlides = [
    { id: 1, img: "src/assets/img/mega-sale.avif", to: "/" },
    { id: 2, img: "src/assets/img/mega-sale2.avif", to: "/" },
    { id: 3, img: "src/assets/img/hotsale.jpg", to: "/" },
    { id: 5, img: "src/assets/img/black-friday2-min.jpg", to: "/" },
];

export const hotSeleProducts = [23, 35, 25, 45];

export const HotSelers = [
    {
        id: 1,
        Icon: FaApple,
        brand: "Apple",
        popularity: 97,
        bgColor: "black",
    },
    {
        id: 2,
        Icon: FaPlaystation,
        brand: "Sony",
        popularity: 93,
        bgColor: "#2563eb",
    },
    {
        id: 3,
        Icon: SiXiaomi,
        brand: "Xiaomi",
        popularity: 90,
        bgColor: "#f57921",
    },
    {
        id: 4,
        Icon: TiVendorMicrosoft,
        brand: "Microsoft",
        popularity: 89,
        bgColor: "#2921AD",
    },
];

