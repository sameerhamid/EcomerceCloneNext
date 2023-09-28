import { ADDRESSES, LOGIN, REGISTER } from "../constants/apiEndPointsAuth";
import { DeleteApi, GetApi, PostApi, PutApi } from "./crudApis";

export const RegisterUser = () => PostApi(REGISTER);
export const LoginUser = () => PostApi(LOGIN);
export const Addresses = () => GetApi(ADDRESSES);
export const AddAddress = () => PostApi(ADDRESSES);
export const UpdateAddress = (id) => PutApi(ADDRESSES + "/" + id);
export const DeleteAddress = () => DeleteApi(ADDRESSES);
