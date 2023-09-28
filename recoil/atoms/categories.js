import { atom } from "recoil";

export const subCategoryState = atom({
  key: "",
  default: {
    electronic: [
      { category: "Router", image: "camera.jpg", route: "router" },
      { category: "Repeater", image: "devices.jpg", route: "repeater" },
      { category: "Amplifier", image: "electronic.jpg", route: "amplifier" },
      { category: "Switch", image: "laptop.jpg", route: "switch" },
      { category: "Hub", image: "multimedia.jpg", route: "hub" },
    ],
    camera: [
      { category: "DSLR", image: "camera.jpg", route: "dslr" },
      { category: "SLR", image: "devices.jpg", route: "slr" },
      { category: "Traditional", image: "laptop.jpg", route: "traditional" },
      { category: "Infrared", image: "multimedia.jpg", route: "infrared" },
    ],
    peripheral: [
      { category: "Mouse", image: "camera.jpg", route: "mouse" },
      { category: "Keyboard", image: "devices.jpg", route: "keyboard" },
      { category: "Desktop", image: "electronic.jpg", route: "desktop" },
      { category: "Stylus", image: "laptop.jpg", route: "stylus" },
    ],
    gadget: [
      { category: "Drone", image: "camera.jpg", route: "drone" },
      { category: "Drill", image: "devices.jpg", route: "drill" },
      { category: "Watch", image: "electronic.jpg", route: "watch" },
    ],
    laptop: [
        { category: "Asus", image: "camera.jpg", route: "asus" },
        { category: "HP", image: "devices.jpg", route: "hp" },
        { category: "Dell", image: "electronic.jpg", route: "dell" },
        { category: "Acer", image: "multimedia.jpg", route: "acer" },
        { category: "Mac", image: "smartphone.jpg", route: "mac" },
        { category: "Vio", image: "tv.jpg", route: "vio" },
      ],
      multimedia: [
        { category: "X Box", image: "camera.jpg", route: "x-box" },
        { category: "Video Game", image: "devices.jpg", route: "video-game" },
        { category: "DVD Player", image: "electronic.jpg", route: "dvd-player" },
        { category: "Radio", image: "laptop.jpg", route: "radio" },
      ],
      gadget: [
        { category: "Watch", image: "camera.jpg", route: "watch" },
        { category: "Smart Pen", image: "devices.jpg", route: "smart-pen" },
      ],
      television: [
        { category: "Samsung", image: "camera.jpg", route: "samsung" },
        { category: "Phillips", image: "devices.jpg", route: "phillips" },
        { category: "Sony", image: "electronic.jpg", route: "sony" },
      ],
      
      smartphone: [
        { category: "Samsung", image: "camera.jpg", route: "samsung" },
        { category: "Xiomi", image: "devices.jpg", route: "xiomi" },
        { category: "Realme", image: "electronic.jpg", route: "realme" },
        { category: "Vivo", image: "laptop.jpg", route: "vivo" },
        { category: "Sony", image: "smartphone.jpg", route: "sony" },
        { category: "Micromax", image: "tv.jpg", route: "micromax" },
      ],
  },
});
