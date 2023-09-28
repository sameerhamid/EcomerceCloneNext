import {
  CATEGORIES,
  ORDER,
  ORDER_DETAILS,
  ORDER_LIST,
  WISHLIST,
} from "../constants/apiEndPointsCart";
import { DeleteApi, GetApi, PostApi } from "./crudApis";

export const AddWishList = () => PostApi(WISHLIST);
export const RemoveFromWishList = () => DeleteApi(WISHLIST);
export const GetWishList = () => GetApi(WISHLIST);
export const GetCategories = () => GetApi(CATEGORIES);

export const PlaceOrder = () => PostApi(ORDER);
export const OrderList = () => GetApi(ORDER_LIST);
export const OrderDetails = () => GetApi(ORDER_DETAILS);
