import CommonService from "./commonService";
import axios from "axios";
import baseUrls from "./constants/baseUrls";

const MAINAPI = (method, url, payload, hasFile, fullUrl, AT) => {
  return API(
    method,
    url,
    payload,
    AT ? baseUrls.baseUrAT : baseUrls.baseUrl,
    hasFile,
    fullUrl,
    AT
  );
};

export default MAINAPI;

const API = (method, url, payload, server, hasFile, fullUrl, AT) => {
  try {
    // const token = localStorage.getItem("@kupostoken");

    // console.log(token);
    var options = {};

    if (hasFile) {
      options = {
        headers: AT
          ? CommonService.getAtHeaders()
          : CommonService.getHeaders({ hasFile }),
        method,
        url: fullUrl ? url : `${server}/${url}`,
      };
    } else {
      options = {
        headers: fullUrl
          ? null
          : AT
          ? CommonService.getAtHeaders()
          : CommonService.getHeaders({ hasFile }),
        method,
        url: fullUrl ? url : `${server}/${url}`,
      };
    }

    // if (token) {
    //   options.headers.Authorization = `${token}`;
    // }

    if (
      method === "POST" ||
      method === "PATCH" ||
      method === "PUT" ||
      method === "DELETE"
    ) {
      options.data = payload;
    }

    return new Promise((resolve, reject) => {
      axios(options)
        .then((res) => {
          return { data: res.data, headers: res.headers };
        })
        .then((respJson) => {
          resolve({ ...respJson?.data, headers: respJson?.headers });
        })
        .catch((err) => {
          reject(err);
        });
    });
  } catch (e) {
    console.log(e);
  }
};
