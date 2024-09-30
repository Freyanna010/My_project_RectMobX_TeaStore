import { v1 } from "uuid";
import { CollectionSupplements, Supplement, Tea } from "../../models";

export const initialTeaState: Tea[] = [
  {
    id: v1(),
    name: "black tea",
    img: "./../public/indig/black_tea.jpg",
    isEnough: false,
    description: "This tea is black",
    price: 10,
  },
  {
    id: v1(),
    name: "green tea",
    img: "./../public/indig/green_tea.jpg",
    isEnough: false,
    description: "This tea is green",
    price: 10,
  },
  {
    id: v1(),
    name: "white tea",
    img: "./../public/indig/white_tea.jpg",
    isEnough: false,
    description: "This tea is white",
    price: 15,
  },
];

const collectionId1 = v1();
const collectionId2 = v1();
const collectionId3 = v1();

export const initialCollectionSupplementsState: CollectionSupplements[] = [
  {
    id: collectionId1,
    name: "fruit supplements",
    isEnough: false,
    idScroll: "fruit",
  },
  {
    id: collectionId2,
    name: "herbal supplements",
    isEnough: false,
    idScroll: "herbal",
  },
  {
    id: collectionId3,
    name: "spice supplements",
    isEnough: false,
    idScroll: "spice",
  },
];

export const initialSupplementsState: Record<string, Supplement[]> = {
  [collectionId1]: [
    {
      id: v1(),
      name: "orange",
      img: "./../public/indig/orange.jpg",
      isAdd: false,
      price: 5,
    },
    {
      id: v1(),
      name: "cherry",
      img: "./../public/indig/cherry.jpg",
      isAdd: false,
      price: 7,
    },
    {
      id: v1(),
      name: "buckthorn",
      img: "./../public/indig/sea-buckthorn.jpg",
      isAdd: false,
      price: 6,
    },
    {
      id: v1(),
      name: "strawberry",
      img: "./../public/indig/strawberry.jpg",
      isAdd: false,
      price: 7,
    },
    {
      id: v1(),
      name: "apple",
      img: "./../public/indig/apple.jpg",
      isAdd: false,
      price: 4,
    },
  ],
  [collectionId2]: [
    {
      id: v1(),
      name: "mint",
      img: "./../public/мята.jpg",
      isAdd: false,
      price: 4,
    },
    {
      id: v1(),
      name: "rose",
      img: "./../public/indig/green_tea.jpg",
      isAdd: false,
      price: 7,
    },
    {
      id: v1(),
      name: "jasmine",
      img: "./../public/indig/white_tea.jpg",
      isAdd: false,
      price: 7,
    },
    {
      id: v1(),
      name: "sakura",
      img: "./../public/indig/white_tea.jpg",
      isAdd: false,
      price: 8,
    },
  ],
  [collectionId3]: [
    {
      id: v1(),
      name: "cinnamon",
      img: "./../public/indig/black_tea.jpg",
      isAdd: false,
      price: 4,
    },
    {
      id: v1(),
      name: "badian",
      img: "./../public/indig/green_tea.jpg",
      isAdd: false,
      price: 7,
    },
    {
      id: v1(),
      name: "ginger",
      img: "./../public/indig/white_tea.jpg",
      isAdd: false,
      price: 5,
    },
  ],
};