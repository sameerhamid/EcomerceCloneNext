import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const cartListState = atom({
  key: "cartListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const totalCartValueState = atom({
  key: "totalCartValueState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const deliveryAddressState = atom({
  key: "deliveryAddressState",
  default: [
    {
      fullName: "",
      phoneNo: "",
      pincode: "",
      address1: "",
      address2: "",
      landmark: "",
      town: "",
      state: "",
    },
  ],
});
// {
//   id: 11,
//   title:
//     "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//   price: 109,
//   description:
//     "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//   category: "electronics",
//   image: "camera.jpg",
//   rating: {
//     rate: 4.8,
//     count: 319,
//   },
// },

export const choosenAddressState = atom({
  key: "choosenAddressState",
  default: null,
});

export const choosenPaymentTypeState = atom({
  key: "choosenPaymentType",
  default: null,
});

export const paymentTypesState = atom({
  key: "paymentTypesState",
  default: [
    { id: 0, name: "Bank", value: "online", selected: false },
    { id: 1, name: "Cards", value: "card", selected: false },
    { id: 2, name: "EMI", value: "emi", selected: false },
    { id: 3, name: "COD", value: "cash_on_delivery", selected: false },
    { id: 4, name: "Line of Credit", value: "line_of_credit", selected: false },
  ],
});
