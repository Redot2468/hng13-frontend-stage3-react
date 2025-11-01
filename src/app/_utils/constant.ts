import earphoneImage from "@/public/assets/menu/earphone.svg";
import headphoneImage from "@/public/assets/menu/headphone.svg";
import speakerImage from "@/public/assets/menu/speaker.svg";

import facebook from "@/public/assets/shared/desktop/icon-facebook.svg";
import linkedin from "@/public/assets/shared/desktop/icon-instagram.svg";
import twitter from "@/public/assets/shared/desktop/icon-twitter.svg";

export const DEFAULT_PAGE = 1;
export const ORDER_PER_PAGE = 10;

export const ICONS = [facebook, twitter, linkedin];

export const DESKTOP_MENU_LINKS = [
  { name: "home", link: "/" },
  { name: "headphones", link: "/category/headphones" },
  { name: "speakers", link: "/category/speakers" },
  { name: "earphones", link: "/category/earphones" },
];
export const MENU_LINKS = [
  {
    src: headphoneImage,
    alt: "headphones",
    name: "headphones",
    link: "/category/headphones",
  },
  {
    src: speakerImage,
    alt: "speakers",
    name: "speakers",
    link: "/category/speakers",
  },
  {
    src: earphoneImage,
    alt: "earphones",
    name: "earphones",
    link: "/category/earphones",
  },
];
