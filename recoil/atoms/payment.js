import { atom } from "recoil";

export const paymentErrorState = atom({
    key: "paymentErrorState",
    default: {
        paymentError: false,
        tncError: false,
        amountError: false,
        sharedServiceError: false,
        walletMoneyError: false,
        virtualMoneyError: false,
        bookingError: ""
    },
});


export const payBookingLoadingState = atom({
    key: "payBookingLoadingState",
    default: false,
});

export const oneClickTypeCheckedState = atom({
    key: "oneClickTypeCheckedState",
    default: null,
});
export const oneclickCardCheckedState = atom({
    key: "oneclickCardCheckedState",
    default: false,
});
export const oneclickSelectedCardState = atom({
    key: "oneclickSelectedCardState",
    default: null,
});
export const selectedPaymentGatewayState = atom({
    key: "selectedPaymentGatewayState",
    default: null,
});
export const walletCheckedState = atom({
    key: "walletCheckedState",
    default: false,
});
export const virtualCheckedState = atom({
    key: "virtualCheckedState",
    default: false,
});
export const promoCodeCheckedState = atom({
    key: "promoCodeCheckedState",
    default: false,
});
export const corporateDiscountState = atom({
    key: "corporateDiscountState",
    default: false,
});
export const instantDiscountState = atom({
    key: "instantDiscountState",
    default: false,
});
export const promoCodeState = atom({
    key: "promoCodeState",
    default: {
        promoCode: '',
        promoCouponAmount: null,
        promoType: null,
        promoCodeApplied: false,
        discountText: null,
    },
});