import { atom } from "recoil";
import DateService from "../../services/dateService";

export const transferDataState = atom({
  key: "transferDataState",
  default: {
    selectedService: null,
    selectedOrigin: null,
    selectedDestination: null,
    selectedGoingDate: DateService.getTodayString(),
    selectedGoingTime: "00:00",
    selectedKupos: 1,
    selectedKuposOfService: {},
    selectedAdultKupos: 1,
    selectedKidKupos: 0,
    selectedInfantKupos: 0,
    selectedServiceId: null,
    selectedId: null,
    selectedServiceReturn: null,
    selectedReturnDate: null,
    selectedReturnTime: null,
    selectedKuposReturn: 1,
    selectedKuposOfServiceReturn: {},
    selectedAdultKuposReturn: 1,
    selectedKidKuposReturn: 0,
    selectedInfantKuposReturn: 0,
    selectedServiceIdReturn: null,
    selectedIdReturn: null,
    steps: 1,
  },
});

export const atServicesState = atom({
  key: "atServicesState",
  default: {},
});

export const atGoingServiceToBookState = atom({
  key: "atGoingServiceToBookState",
  default: {},
});

export const atReturnServiceToBookState = atom({
  key: "atReturnServiceToBookState",
  default: {},
});

export const atBookingInputsState = atom({
  key: "atBookingInputsState",
  default: {
    idCardType: null,
    idCardNumber: null,
    idCardNumberError: null,
    name: null,
    nameError: null,
    lastName: null,
    lastNameError: null,
    idCardTypeReturn: null,
    idCardNumberReturn: null,
    idCardNumberReturnError: null,
    nameReturn: null,
    nameReturnError: null,
    lastNameReturn: null,
    lastNameReturnError: null,
    mobile: null,
    mobileError: null,
    email: null,
    emailError: null,
    confirmEmail: null,
    confirmEmailError: null,
    sharedServicePickupTimeError: null,
  },
});

export const transvipArrivalDateState = atom({
  key: "transvipArrivalDateState",
  default: null,
});

export const transvipArrivalTimeState = atom({
  key: "transvipArrivalTimeState",
  default: null,
});

export const sharedToleranceDataState = atom({
  key: "sharedToleranceDataState",
  default: null,
});

export const transvipPickupTimeResponseState = atom({
  key: "transvipPickupTimeResponseState",
  default: null,
});

export const originState = atom({
  key: "originState",
  default: null,
});

export const destinationState = atom({
  key: "destinationState",
  default: null,
});

export const goingDateState = atom({
  key: "goingDateState",
  default: null,
});

export const returnDateState = atom({
  key: "returnDateState",
  default: null,
});
