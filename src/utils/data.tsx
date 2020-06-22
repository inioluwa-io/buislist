import Storebanner from "../assets/barts-store-signage-1884573.jpg";
import tech from "../assets/silver-macbook-beside-black-sony-ps4-dualshock-4-silver-682933.jpg";
import carouselimg1 from "../assets/cooked-meat-on-plate-2313686.jpg";
import media from "../assets/headphones_camera_retro_122094_3840x2400.jpg";
import Productbanner from "../assets/brown-top-hanging-on-rack-1488464.jpg";
import Accessoriesbanner from "../assets/headphones_bw_headset_120277_3840x2400.jpg";
import photography from "../assets/woman-making-clay-pot-2166456.jpg";
import ab from "../assets/four-assorted-perfume-glass-bottles-965989.jpg";
import phone1 from "../assets/dhe-haivan-1474319-unsplash.jpg";
import phone2 from "../assets/george-beridze-1472234-unsplash.jpg";
import profileimg from "../assets/brooks-leibee-562087-unsplash.jpg";

export const productsData: any = [
  {
    id: 1,
    carouselImages: [{ src: media }],
    premium: true,
    url: "",
    location: { city: "ibadan", country: "Nigeria" },
    name: "Fairly used iPhone 11, 128gb, black",
    price: "120000",
    description: "lorem Ipsum",
    delivery: { price: 500, available: ["ibadan", "lagos", "abuja"] },
    store: {
      name: "ini stores",
      category: "Phones, pcs & Gadgets",
      img: profileimg,
      verified: true,
      email: "inoluwwa4.is@gmail.com",
    },
    specifications: [
      { name: "Condition", value: "New" },
      { name: "Brand", value: "Apple" },
      { name: "Model", value: "Iphone 11" },
      { name: "RAM", value: "2 GB" },
      { name: "Internmal Storage", value: "128 GB" },
      { name: "OS", value: "IOS 13" },
    ],
  },
  {
    id: 2,
    carouselImages: [
      { src: Storebanner },
      { src: media },
      { src: carouselimg1 },
      { src: photography },
    ],
    premium: false,
    location: { city: "ibadan", country: "Nigeria" },
    name: "Fairly used iPhone 11, 128gb, black",
    price: "8000",
    description: "lorem Ipsum",
    delivery: { price: 500, available: ["ibadan", "lagos", "abuja"] },
    store: {
      name: "ini stores",
      category: "Phones, pcs & Gadgets",
      img: profileimg,
      verified: true,
      email: "inoluwwa4.is@gmail.com",
    },
    specifications: [
      { name: "Condition", value: "New" },
      { name: "Brand", value: "Apple" },
      { name: "Model", value: "Iphone 11" },
      { name: "RAM", value: "2 GB" },
      { name: "Internmal Storage", value: "128 GB" },
      { name: "OS", value: "IOS 13" },
    ],
  },
  {
    id: 3,
    carouselImages: [
      { src: carouselimg1 },
      { src: Storebanner },
      { src: Productbanner },
      { src: tech },
      { src: Accessoriesbanner },
    ],
    premium: false,
    location: { city: "ibadan", country: "Nigeria" },
    name: "Fairly used iPhone 11, 128gb, black",
    price: "20000",
    description: "lorem Ipsum",
    delivery: { price: 500, available: ["ibadan", "lagos", "abuja"] },
    store: {
      name: "ini stores",
      category: "Phones, pcs & Gadgets",
      img: profileimg,
      verified: true,
      email: "inoluwwa4.is@gmail.com",
    },
    specifications: [
      { name: "Condition", value: "New" },
      { name: "Brand", value: "Apple" },
      { name: "Model", value: "Iphone 11" },
      { name: "RAM", value: "2 GB" },
      { name: "Intern   mal Storage", value: "128 GB" },
      { name: "OS", value: "IOS 13" },
    ],
  },
  {
    id: 4,
    carouselImages: [
      { src: phone1 },
      { src: phone2 },
      { src: tech },
      { src: ab },
      { src: photography },
    ],
    premium: true,
    location: { city: "ibadan", country: "Nigeria" },
    name: "Fairly used iPhone 11, 128gb, black",
    price: "6000",
    description: "lorem Ipsum",
    delivery: { price: 500, available: ["ibadan", "lagos", "abuja"] },
    store: {
      name: "Apple",
      category: "Phones, pcs & Gadgets",
      img: profileimg,
      verified: true,
      email: "inoluwwa4.is@gmail.com",
    },
    specifications: [
      { name: "Condition", value: "New" },
      { name: "Brand", value: "Apple" },
      { name: "Model", value: "Iphone 11" },
      { name: "RAM", value: "2 GB" },
      { name: "Internmal Storage", value: "128 GB" },
      { name: "OS", value: "IOS 13" },
    ],
  },
  {
    id: 5,
    carouselImages: [
      { src: tech },
      { src: Productbanner },
      { src: media },
      { src: carouselimg1 },
      { src: Accessoriesbanner },
    ],
    premium: true,
    location: { city: "ibadan", country: "Nigeria" },
    name: "Fairly used iPhone 11, 128gb, black",
    price: "30000",
    description: "lorem Ipsum",
    delivery: { price: 500, available: ["ibadan", "lagos", "abuja"] },
    store: {
      name: "ini stores",
      category: "Phones, pcs & Gadgets",
      img: profileimg,
      verified: true,
      email: "inoluwwa4.is@gmail.com",
    },
    specifications: [
      { name: "Condition", value: "New" },
      { name: "Brand", value: "Apple" },
      { name: "Model", value: "Iphone 11" },
      { name: "RAM", value: "2 GB" },
      { name: "Internmal Storage", value: "128 GB" },
      { name: "OS", value: "IOS 13" },
    ],
  },
  {
    id: 6,
    carouselImages: [
      { src: Storebanner },
      { src: media },
      { src: carouselimg1 },
      { src: photography },
      { src: tech },
    ],
    premium: false,
    location: { city: "ibadan", country: "Nigeria" },
    name: "Fairly used iPhone 11, 128gb, black",
    price: "1200",
    description: "lorem Ipsum",
    delivery: { price: 500, available: ["ibadan", "lagos", "abuja"] },
    store: {
      name: "ini stores",
      category: "Phones, pcs & Gadgets",
      img: profileimg,
      verified: true,
      email: "inoluwwa4.is@gmail.com",
    },
    specifications: [
      { name: "Condition", value: "New" },
      { name: "Brand", value: "Apple" },
      { name: "Model", value: "Iphone 11" },
      { name: "RAM", value: "2 GB" },
      { name: "Internmal Storage", value: "128 GB" },
      { name: "OS", value: "IOS 13" },
    ],
  },
  {
    id: 7,
    carouselImages: [
      { src: carouselimg1 },
      { src: Storebanner },
      { src: Productbanner },
      { src: tech },
      { src: Accessoriesbanner },
    ],
    premium: true,
    location: { city: "ibadan", country: "Nigeria" },
    name: "Fairly used iPhone 11, 128gb, black",
    price: "15000",
    description: "lorem Ipsum",
    delivery: { price: 500, available: ["ibadan", "lagos", "abuja"] },
    store: {
      name: "ini stores",
      category: "Phones, pcs & Gadgets",
      img: profileimg,
      verified: true,
      email: "inoluwwa4.is@gmail.com",
    },
    specifications: [
      { name: "Condition", value: "New" },
      { name: "Brand", value: "Apple" },
      { name: "Model", value: "Iphone 11" },
      { name: "RAM", value: "2 GB" },
      { name: "Internmal Storage", value: "128 GB" },
      { name: "OS", value: "IOS 13" },
    ],
  },
  {
    id: 8,
    carouselImages: [
      { src: Productbanner },
      { src: carouselimg1 },
      { src: tech },
      { src: ab },
      { src: photography },
    ],
    premium: false,
    location: { city: "ibadan", country: "Nigeria" },
    name: "Fairly used iPhone 11, 128gb, black",
    price: "10000",
    description: "lorem Ipsum",
    delivery: { price: 500, available: ["ibadan", "lagos", "abuja"] },
    store: {
      name: "ini stores",
      category: "Phones, pcs & Gadgets",
      img: profileimg,
      verified: true,
      email: "inoluwwa4.is@gmail.com",
    },
    specifications: [
      { name: "Condition", value: "New" },
      { name: "Brand", value: "Apple" },
      { name: "Model", value: "Iphone 11" },
      { name: "RAM", value: "2 GB" },
      { name: "Internmal Storage", value: "128 GB" },
      { name: "OS", value: "IOS 13" },
    ],
  },
  {
    id: 9,
    carouselImages: [
      { src: tech },
      { src: Productbanner },
      { src: media },
      { src: carouselimg1 },
      { src: Accessoriesbanner },
    ],
    premium: false,
    location: { city: "ibadan", country: "Nigeria" },
    name: "Fairly used iPhone 11, 128gb, black",
    price: "2300",
    description: "lorem Ipsum",
    delivery: { price: 500, available: ["ibadan", "lagos", "abuja"] },
    store: {
      name: "ini stores",
      category: "Phones, pcs & Gadgets",
      img: profileimg,
      verified: true,
      email: "inoluwwa4.is@gmail.com",
    },
    specifications: [
      { name: "Condition", value: "New" },
      { name: "Brand", value: "Apple" },
      { name: "Model", value: "Iphone 11" },
      { name: "RAM", value: "2 GB" },
      { name: "Internmal Storage", value: "128 GB" },
      { name: "OS", value: "IOS 13" },
    ],
  },
  {
    id: 10,
    carouselImages: [
      { src: carouselimg1 },
      { src: Storebanner },
      { src: Productbanner },
      { src: tech },
      { src: Accessoriesbanner },
    ],
    premium: true,
    location: { city: "ibadan", country: "Nigeria" },
    name: "Fairly used iPhone 11, 128gb, black",
    price: "20000",
    description: "lorem Ipsum",
    delivery: { price: 500, available: ["ibadan", "lagos", "abuja"] },
    store: {
      name: "ini stores",
      category: "Phones, pcs & Gadgets",
      img: profileimg,
      verified: true,
      email: "inoluwwa4.is@gmail.com",
    },
    specifications: [
      { name: "Condition", value: "New" },
      { name: "Brand", value: "Apple" },
      { name: "Model", value: "Iphone 11" },
      { name: "RAM", value: "2 GB" },
      { name: "Internmal Storage", value: "128 GB" },
      { name: "OS", value: "IOS 13" },
    ],
  },
  {
    id: 11,
    carouselImages: [
      { src: Productbanner },
      { src: carouselimg1 },
      { src: tech },
      { src: ab },
      { src: photography },
    ],
    premium: false,
    location: { city: "ibadan", country: "Nigeria" },
    name: "Fairly used iPhone 11, 128gb, black",
    price: "2500",
    description: "lorem Ipsum",
    delivery: { price: 500, available: ["ibadan", "lagos", "abuja"] },
    store: {
      name: "ini stores",
      category: "Phones, pcs & Gadgets",
      img: profileimg,
      verified: true,
      email: "inoluwwa4.is@gmail.com",
    },
    specifications: [
      { name: "Condition", value: "New" },
      { name: "Brand", value: "Apple" },
      { name: "Model", value: "Iphone 11" },
      { name: "RAM", value: "2 GB" },
      { name: "Internmal Storage", value: "128 GB" },
      { name: "OS", value: "IOS 13" },
    ],
  },
  {
    id: 12,
    carouselImages: [
      { src: tech },
      { src: Productbanner },
      { src: media },
      { src: carouselimg1 },
      { src: Accessoriesbanner },
    ],
    premium: false,
    location: { city: "ibadan", country: "Nigeria" },
    name: "Fairly used iPhone 11, 128gb, black",
    price: "1300",
    description: "lorem Ipsum",
    delivery: { price: 500, available: ["ibadan", "lagos", "abuja"] },
    store: {
      name: "ini stores",
      category: "Phones, pcs & Gadgets",
      img: profileimg,
      verified: true,
      email: "inoluwwa4.is@gmail.com",
    },
    specifications: [
      { name: "Condition", value: "New" },
      { name: "Brand", value: "Apple" },
      { name: "Model", value: "Iphone 11" },
      { name: "RAM", value: "2 GB" },
      { name: "Internmal Storage", value: "128 GB" },
      { name: "OS", value: "IOS 13" },
    ],
  },
];
