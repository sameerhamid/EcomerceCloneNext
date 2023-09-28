import { atom } from "recoil";
export const productState = atom({
  key: "productState",
  default: {
    desc:
      "The floral pattern is inspired by the abstract shapes that the steam creates when water is thrown on a sauna stove. They look like small flowers when you look at them against a dark sauna wall.This water bottle’s lid has a sturdy and grip-friendly wooden handle to make it even easier to carry when you’re on the go.This water bottle is made of stainless steel that withstands everyday wear.Designed to fit in places like the side pockets of your IKEA backpack or in a car’s cup holder.",
    price: "1299",
    designer: "Marimekko/IKEA of Sweden",
    country: "China",
    art_no: "637647",
    know: "Wash this product before using it for the first time.",
    body: "Stainless steel, Powder coating",
    lid: "Polypropylene plastic, Stainless steel, Powder coating",
    seal: "Silicone rubber",
    handle: "Layer-glued wood veneer, Birch veneer, Clear acrylic lacquer",
    rivet: "Stainless steel",
    care: "Handwash only.",
    height: ' 21 cm (8 ")',
    volume: "0.7 l (24 oz)",
    image: "camera.jpg",
    review: {
      rating: 4,
      value: 4,
      quality: 5,
    },
  },
});
export const reviewState = atom({
  key: "reviewState",
  default: {
    title: "Beautiful water bottle",
    content: "I love the design! Marimekko rocks.",
    date: "29-03-2023",
    place: "Lada, Australia",
  },
});
export const galleryState = atom({
  key: "galleryState",
  default: ["img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"],
});
