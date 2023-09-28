import AppData from './appData';
import CommonService from './commonService';

const ApiUrls = {
  metaData: () => {
    return AppData.BASE_URL + 'api/masters.json?';
  },
  stageDetails: () => {
    return AppData.BASE_URL + 'api/stage_details';
  },
  uniqueCities: (type) => {
    return (
      AppData.BASE_URL +
      `api/${
        type == 'train' ? 'train_cities' : type == 'sanpedro' ? 'sanpedro_cities' : 'uniq_cities'
      }`
    );
  },
  serviceList: (originId, destId, journeyDate, isRoundTrip, isReturn, retryCount) => {
    return (
      AppData.BASE_URL +
      `api/${
        CommonService.isTrain() ? 'train_schedules' : 'ui_schedules'
      }.json?origin_id=${originId}&destination_id=${destId}&travel_date=${journeyDate}&show_only_available_services=false&show_injourney_services=true&is_round_trip=${
        isRoundTrip || false
      }&is_roundtrip_return=${isReturn || false}&retry_count=${retryCount}`
    );
  },
  serviceListV2: (originId, destId, journeyDate, journeyDateReturn, retryCount) => {
    return (
      AppData.BASE_URL +
      `api/v2/scheduled_services?origin_id=${originId}&destination_id=${destId}&travel_date=${journeyDate}&show_only_available_services=false&show_injourney_services=true&r_travel_date=${journeyDateReturn}&retry_count=${retryCount}`
    );
  },
  trainList: (originId, destId, journeyDate) => {
    return (
      AppData.BASE_URL +
      `/api/ui_schedules.json?origin_id=1841&destination_id=1986&travel_date=2020-04-10&show_only_available_services=false&show_injourney_services=true`
    );
  },

  //   trainList: (originId, destId, journeyDate) => {
  //     return (
  //       AppData.BASE_URL +
  //       `api/ui_schedules.json?origin_id=${originId}&destination_id=${destId}&travel_date=${journeyDate}&show_only_available_services=false&show_injourney_services=true`
  //     );
  //   },
  serviceDetails: (scheduleId, isRoundTrip, isReturn) => {
    return (
      AppData.BASE_URL +
      `api/ui_schedule.json?schedule_id=${scheduleId}&is_round_trip=${
        isRoundTrip || false
      }&is_roundtrip_return=${isReturn || false}`
    );
  },
  serviceDetailsV2: (scheduleId) => {
    return AppData.BASE_URL + `api/v2/scheduled_services/${scheduleId}`;
  },
  bookTicket: (isRoundTrip) => {
    return (
      AppData.BASE_URL +
      (!isRoundTrip
        ? 'api/tentative_booking.json?is_mobile_app=true'
        : 'api/round_trip.json?is_mobile_app=true')
    );
  },
  bookTicketV2: () => {
    return AppData.BASE_URL + 'api/v2/bus_bookings?is_mobile_app=true';
  },
  promoCode: () => {
    return AppData.BASE_URL + 'api/apply_promo_code.json?is_mobile_app=true';
  },
  applyCorporateDiscount: () => {
    return AppData.BASE_URL + 'api_corporate_discounts/apply_corporate_discount';
  },

  applyInstantDiscount: () => {
    return AppData.BASE_URL + 'api_instant_discounts/apply_instant_discount';
  },
  ticketDetails: (pnrNumber, path = null) => {
    return (
      AppData.BASE_URL +
      'api/ticket_details.json?is_mobile_app=true&pnr_number=' +
      pnrNumber +
      (path ? '&' + path : '')
    );
  },

  ticketDetailsAT: (path = null) => {
    return AppData.AT_URL + path;
  },

  ticketCancelDetailsAT: (path = null) => {
    return AppData.AT_URL + path;
  },

  kuposTicketDetails: (id, cat_type) => {
    return AppData.BASE_URL + `api/v1/ticketDetails/${cat_type}`;
  },

  airportTransferDiscount: () => {
    return AppData.BASE_URL + `api/at/api_at_discounts/apply_at_discount`;
  },

  kuposGoTicketDetails: (id, cat_type) => {
    return AppData.BASE_URL + `api/kupos_ticket_details?id=${id}&cat_type=${cat_type}`;
  },

  kuposTicketDetailsAt: (pnrNumber) => {
    return AppData.AT_URL + `api/v/ticketDetails/${pnrNumber}`;
  },

  kuposTicketDetailsAtV2: (pnrNumber) => {
    return AppData.AT_URL + `api/v2/ticketDetails/${pnrNumber}`;
  },
  kuposTicketDetailsAtV4: (pnrNumber) => {
    return AppData.AT_URL + `api/v4/ticketDetails/${pnrNumber}`;
  },
  cancelTicket: (path) => {
    return AppData.BASE_URL + 'api/cancel_ticket.json?' + path;
  },
  cancelTicketAt: (path) => {
    return AppData.AT_URL + 'api/v1/cancel';
  },
  cancelTicketAtV2: (path) => {
    return AppData.AT_URL + 'api/v2/cancel';
  },
  cancelTicketAtV4: (path) => {
    return AppData.AT_URL + 'api/v4/cancel';
  },
  login: () => {
    return AppData.BASE_URL + 'api/customer/login?';
  },
  register: () => {
    return AppData.BASE_URL + 'api/customer/register?';
  },
  accountConfirmation: (token) => {
    return AppData.BASE_URL + 'api/customer/confirm_account?confirmation_token=' + token;
  },
  resetPassword: () => {
    return AppData.BASE_URL + 'api/customer/request_password?';
  },
  resetNewPassword: () => {
    return AppData.BASE_URL + 'api/customer/change_password';
  },
  resetNewPasswordAgencyUser: () => {
    return AppData.BASE_URL + 'api/agency/change_password';
  },
  generateOtp: () => {
    return AppData.BASE_URL + 'api/generate_sms_code';
  },
  validateOtp: () => {
    return AppData.BASE_URL + 'api/validate_sms_code';
  },

  subscribe: () => {
    return AppData.BASE_URL + 'api/do_subscribe';
  },
  updateProfile: () => {
    return AppData.BASE_URL + 'api/customer/update_profile?';
  },
  updateProfileAdmin: () => {
    return AppData.BASE_URL + 'api/agency/update_profile?';
  },
  profile: () => {
    return AppData.BASE_URL + 'api/customer/profile?';
  },
  adminProfile: () => {
    return AppData.BASE_URL + '/api/agency/profile';
  },
  myTrips: () => {
    return AppData.BASE_URL + 'api/my_tickets?page=1&per=10';
  },
  poolTrips: () => {
    return AppData.CARPOOL_URL + 'api-customer/orders?noenc=true';
  },

  kuposGoTrips: () => {
    return AppData.BASE_URL + '/api/my_tickets?page=1&per=10&cat_type=kuposgo';
  },

  atTrips: (userId) => {
    return AppData.AT_URL + 'api/v1/myTrips/' + userId;
  },

  trainTrips: () => {
    return AppData.BASE_URL + '/api/my_tickets?page=1&per=10&cat_type=train';
  },

  myTransactions: (monthYear) => {
    return AppData.BASE_URL + 'api/customer/wallets/histories?month_str=' + monthYear;
  },
  myTransactionsAdmin: (monthYear) => {
    // return AppData.BASE_URL + 'api/agency/wallets/histories';
    return AppData.BASE_URL + 'api/agency/wallets/histories?month_str=' + monthYear;
  },
  myVirtualMoney: (monthYear) => {
    return (
      AppData.BASE_URL +
      'api/customer/wallets/vw_histories?' +
      (monthYear && '&month_str=' + monthYear)
    );
  },
  walletRecharge: () => {
    return AppData.BASE_URL + '/api/wallet_recharge_request';
  },
  rechargeLocations: (lat, lng) => {
    return AppData.BASE_URL + '/api/recharge_locations?latitude=' + lat + '&longitude=' + lng;
  },
  siteMap: () => {
    return AppData.BASE_URL + 'api/site_map';
  },
  customerInfo: (rut) => {
    return AppData.BASE_URL + '/api/customer_info?recipient_rut_no=' + rut;
  },
  favourites: () => {
    return AppData.BASE_URL + '/api/favourites';
  },
  transferMoney: () => {
    return AppData.BASE_URL + 'api/transfer_money';
  },
  qrImage: () => {
    return AppData.BASE_URL + 'api/qrcode/qr_image_data';
  },
  addBipCard: () => {
    return AppData.BIP_URL_V2 + 'api/v2/myCard';
  },
  airportTransferRoutes: ({ lat, lng, fromToAirport, utcTime, seats, currentUTC }) => {
    return (
      AppData.AT_URL +
      `api/v1/service_price_polygon/${lat}/${lng}/${fromToAirport}/${utcTime}/${seats}/${currentUTC}`
    );
  },
  airportTransferRoutesV2: ({
    originLat,
    originLng,
    utcTime,
    destLat,
    destLng,
    utcReturn,
    seats,
    currentUTC,
  }) => {
    return (
      AppData.BASE_URL_V2 +
      `service_inventory/${originLat}/${originLng}/${utcTime}/${destLat}/${destLng}/${utcReturn}/${seats}/${currentUTC}`
    );
  },
  airportTransferRoutesV3: ({
    originLat,
    originLng,
    originLocId,
    utcTime,
    destLat,
    destLng,
    destLocId,
    utcReturn,
    seats,
    currentUTC,
    trfrType,
  }) => {
    return (
      AppData.BASE_URL_V3 +
      `service_inventory/${originLat}/${originLng}/${originLocId}/${utcTime}/${destLat}/${destLng}/${destLocId}/${utcReturn}/${seats}/${currentUTC}/${trfrType}`
    );
  },

  airportTransferRoutesV4: ({
    originLat,
    originLng,
    originLocId,
    utcTime,
    utcTimeStg,
    destLat,
    destLng,
    destLocId,
    utcReturn,
    utcReturnStg,
    seats,
    currentUTC,
    trfrType,
  }) => {
    // console.log('Some data utcReturnStg---', utcReturnStg);
    return (
      // AppData.BASE_URL_V4 +
      AppData.AT_URL +
      // `service_inventory/-70.7057848/-33.4129695/${originLocId}/${utcTime}/${utcTimeStg}/-70.79347180000002/-33.397256/${destLocId}/${utcReturn}/${utcReturnStg}/${seats}/${currentUTC}/${trfrType}`
      // `service_inventory/-70.589340/-33.465107/${originLocId}/${utcTime}/${utcTimeStg}/-70.794402/-33.397226/${destLocId}/${utcReturn}/${utcReturnStg}/${seats}/${currentUTC}/${trfrType}`
      // `service_inventory/${originLng}/${originLat}/${originLocId}/${utcTime}/${utcTimeStg}/${destLng}/${destLat}/${destLocId}/${utcReturn}/${utcReturnStg}/${seats}/${currentUTC}/${trfrType}`
      // `api/v4/service_inventory/${originLat}/${originLng}/${originLocId}/${utcTime}/${utcTimeStg}/${destLat}/${destLng}/${destLocId}/${utcReturn}/${utcReturnStg}/${seats}/${currentUTC}/${trfrType}`
      `api/v4/service_inventory/${originLng}/${originLat}/${originLocId}/${utcTime}/${utcTimeStg}/${destLng}/${destLat}/${destLocId}/${utcReturn}/${utcReturnStg}/${seats}/${currentUTC}/${trfrType}`
    );
  },
  airportTransferBook: () => {
    return AppData.AT_URL + `api/v1/booking`;
  },
  airportTransferBookV2: () => {
    return AppData.AT_URL + `api/v2/booking`;
  },
  airportTransferBookV3: () => {
    return AppData.AT_URL + `api/v3/booking`;
  },
  airportTransferBookV4: () => {
    // return AppData.AT_URL + `api/v3/booking`;
    return AppData.AT_URL + `api/v4/booking`;
  },
  kuposGoPostTripDetails: () => {
    return AppData.BASE_URL + `api/special_trip_details`;
    // return `https://pbstage.kupas.cl/api/special_trip_details`;
  },
  googleLogout: (googleAccessToken) => {
    return 'https://accounts.google.com/o/oauth2/revoke?token=' + googleAccessToken;
  },
  getPassengerInfo: ({ cardType, idCardNumber }) => {
    return (
      AppData.BASE_URL +
      `api/passenger_info?id_card_type=${cardType}&id_card_number=${idCardNumber}`
    );
  },
};
export default ApiUrls;
