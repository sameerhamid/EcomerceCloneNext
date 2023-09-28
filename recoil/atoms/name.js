import { atom } from "recoil";

export const nameState = atom({
  key: "nameState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});