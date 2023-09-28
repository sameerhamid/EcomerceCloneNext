import { AIRPORT_SEARCH, AIRPORT_LOCATIONS } from "../constants/apiEndPointsAT";
import { GetApi } from "./crudApis";

export const AirportLocations = () => GetApi(AIRPORT_LOCATIONS);
export const SearchATServices = () => GetApi(AIRPORT_SEARCH);
