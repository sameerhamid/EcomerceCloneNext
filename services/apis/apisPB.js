import {
  LOGIN,
  MASTERS_API,
  TERMINALS_BUS_API,
  TICKET_DETAILS,
  TICKET_DETAILS_AT,
  UI_SCHEDULES_BUS,
  UI_SCHEDULES_DETAILS_BUS,
  UNIQUE_CITIES_BUS,
  UNIQUE_CITIES_SANPEDRO,
  UNIQUE_CITIES_TRAIN,
  GOOGLE_PLACE_DETAILS,
  SIGN_UP,
  GENERATE_OTP,
  VALIDATE_OTP,
  RESET_PASSWORD,
  TICKET_BOOKING,
  PESSANGER_INFO,
} from "../constants/apiEndpointsPB";
import { DetailsApi, GetApi, PostApi } from "./crudApis";

export const Login = () => PostApi(LOGIN);
export const SignUp = () => PostApi(SIGN_UP);
export const GenerateOtp = () => PostApi(GENERATE_OTP);
export const ValidateOtp = () => PostApi(VALIDATE_OTP);
export const ResetPassword = () => PostApi(RESET_PASSWORD);
export const Masters = () => GetApi(MASTERS_API);
export const TerminalsBus = () => GetApi(TERMINALS_BUS_API);
export const UniqueCitiesBus = () => GetApi(UNIQUE_CITIES_BUS);
export const UniqueCitiesTrain = () => GetApi(UNIQUE_CITIES_TRAIN);
export const UniqueCitiesSanpedro = () => GetApi(UNIQUE_CITIES_SANPEDRO);
export const UiSchedulesBus = () => GetApi(UI_SCHEDULES_BUS);
export const UiScheduleDetailsBus = () => DetailsApi(UI_SCHEDULES_DETAILS_BUS);
export const TicketDetails = () => GetApi(TICKET_DETAILS);
export const TicketDetailsAT = () => GetApi(TICKET_DETAILS_AT);
export const TicketBooking = () => PostApi(TICKET_BOOKING);
export const PassengerInfo = () => GetApi(PESSANGER_INFO);
