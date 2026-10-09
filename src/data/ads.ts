export type AdItem = {
  id: number;
  image: string;
  slug: string;
};


export const topAds: AdItem[] = [
  {
    id: 1,
    image: "/ads/top/warkop-pikop.jpg",
    slug: "warkop-pikop",
  },
  {
    id: 2,
    image: "/ads/top/asli-geprek.jpg",
    slug: "asli-geprek",
  },
];


export const rightAds: AdItem[] = [
  {
    id: 1,
    image: "/ads/right/soto-setiabudi.jpg",
    slug: "soto-ayam-setiabudi",
  },
];


export const leftAds: AdItem[] = [];


export const homeAds: AdItem[] = [];