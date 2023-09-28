import { atom } from "recoil";
import DateService from "../../services/dateService";

export const loadingState = atom({
  key: "loadingState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export const metaDataState = atom({
  key: "metaDataState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export const uniqueBusCitiesState = atom({
  key: "uniqueBusCitiesState",
  default: null,
});

export const busTerminalsState = atom({
  key: "busTerminalsState",
  default: null,
});

export const seletcedServiceState = atom({
  key: "seletcedServiceState",
  default: 0,
});

export const kuposModalState = atom({
  key: "kuposModalState", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const kuposModalWithButtonsState = atom({
  key: "kuposModalWithButtonsState", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const kuposModalErrorSuccessState = atom({
  key: "kuposModalErrorSuccessState", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const kuposAppsState = atom({
  key: "kuposAppsState",
  default: [
    {
      name: "PasajeBus.com",
      icon: "bus_anim",
      icon_white: "bus_anim_white",
      selected: true,
    },
    {
      name: "EFE Trenes de Chile",
      icon: "train_anim",
      icon_white: "train_anim_white",
      selected: false,
    },
    {
      name: "HOME.AT_NAME",
      icon: "at_anim",
      icon_white: "at_anim_white",
      selected: false,
    },
    {
      name: "Recarga bip!",
      icon: "bip_anim",
      icon_white: "bip_anim_white",
      selected: false,
    },
    {
      name: "HOME.SPECIAL_SERVICE_COMBINED",
      icon: "go_anim",
      icon_white: "go_anim_white",
      selected: false,
    },
    {
      name: "KuposPool",
      icon: "pool_anim",
      icon_white: "pool_anim_white",
      selected: false,
    },
  ],
});

export const adminAppsState = atom({
  key: "adminAppsState",
  default: [
    {
      name: "PasajeBus.com",
      icon: "bus_anim",
      icon_white: "bus_anim_white",
      selected: true,
    },
    {
      name: "EFE Trenes de Chile",
      icon: "train_anim",
      icon_white: "train_anim_white",
      selected: false,
    },
    {
      name: "HOME.AT_NAME",
      icon: "at_anim",
      icon_white: "at_anim_white",
      selected: false,
    },
  ],
});

export const showLoginModalState = atom({
  key: "showLoginModalState",
  default: null,
});

export const loginDataState = atom({
  key: "loginDataState",
  default: null,
});

export const isLoggedInState = atom({
  key: "isLoggedInState",
  default: false,
});
export const myCardsState = atom({
  key: "myCardsState",
  default: null,
});

export const kuposgoDataState = atom({
  key: "kuposgoDataState",
  default: {
    selectedServiceType: null,
    selectedVehicleType: null,
    selectedOrigin: null,
    selectedDestination: null,
    selectedDate: DateService.getNextDayString(),
    observations: "",
    selectedTime: "00:00",
    selectedKupos: 7,
    viaPoints: [],
    name: null,
    lastName: null,
    email: null,
    mobile: null,
    selectedServiceTypeReturn: null,
    selectedVehicleTypeReturn: null,
    selectedOriginReturn: null,
    selectedDestinationReturn: null,
    selectedDateReturn: null,
    selectedTimeReturn: "00:00",
    selectedKuposReturn: 7,
    viaPointsReturn: [],
  },
});

export const ticketDetailsState = atom({
  key: "setTicketDetails", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export const loginLoading = atom({
  key: "loginLoading", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const signUpLoading = atom({
  key: "signUpLoading", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const generateOtpPending = atom({
  key: "generateOtpPending", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const validateOtpPendingState = atom({
  key: "validateOtpPendingState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const resetPasswordPendingState = atom({
  key: "resetPasswordPendingState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
