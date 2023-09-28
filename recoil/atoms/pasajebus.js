import { atom } from "recoil";


export const cityOriginState = atom({
    key: "cityOriginState", // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});

export const cityDestinationState = atom({
    key: "cityDestinationState", // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});

export const dateOnwardState = atom({
    key: "dateOnwardState", // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});
export const dateReturnState = atom({
    key: "dateReturnState", // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});

export const serviceListOnwardState = atom({
    key: "serviceListOnwardState", // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});
export const serviceListReturnState = atom({
    key: "serviceListReturnState", // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});

export const serviceOnwardState = atom({
    key: "serviceOnwardState", // unique ID (with respect to other atoms/selectors)
    default: {
        coachLayoutJson: null,
        originStageDetails: null,
        destinationStageDetails: null,
        boardingStage: null,
        droppingStage: null,
        route: null,
    }, // default value (aka initial value)
});
export const serviceReturnState = atom({
    key: "serviceReturnState", // unique ID (with respect to other atoms/selectors)
    default: {
        coachLayoutJson: null,
        originStageDetails: null,
        destinationStageDetails: null,
        boardingStage: null,
        droppingStage: null,
        route: null,
    }, // default value (aka initial value)
});


export const selectedServiceState = atom({
    key: "selectedServiceState", // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});

export const selectedSeatOnwardState = atom({
    key: "selectedSeatOnwardState", // unique ID (with respect to other atoms/selectors)
    default: {
        totalBookingAmount: 0,
        netBookingAmount: 0,
        discountAmount: 0,
        selectedSeatsToBook: null,
        selectedSeatsNumbers: null,
        selectedSeatTypes: null,
    }, // default value (aka initial value)
});
export const selectedSeatReturnState = atom({
    key: "selectedSeatReturnState", // unique ID (with respect to other atoms/selectors)
    default: {
        totalBookingAmount: 0,
        netBookingAmount: 0,
        discountAmount: 0,
        selectedSeatsToBook: null,
        selectedSeatsNumbers: null,
        selectedSeatTypes: null,
    }, // default value (aka initial value)
});

export const pbPassengerDetailsOnwardState = atom({
    key: "pbPassengerDetailsOnwardState", // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});
export const pbPassengerDetailsReturnState = atom({
    key: "pbPassengerDetailsReturnState", // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});

export const pbPassengerDetailsErrorsOnwardState = atom({
    key: "pbPassengerDetailsErrorsOnwardState", // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
});

export const pbPassengerDetailsErrorsReturnState = atom({
    key: "pbPassengerDetailsErrorsReturnState", // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
});

export const pbContactDetailsState = atom({
    key: "pbContactDetailsState",
    default: {
        mobile: '', email: '', confirmEmail: '', adminComments: ''
    },
});

export const pbContactDetailsErrorState = atom({
    key: "pbContactDetailsErrorState",
    default: {
        emailError: null,
        confirmEmailError: null,
        mobileError: null,
    },
});