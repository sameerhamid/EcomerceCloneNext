import CommonService from "../commonService";
import MAINAPI from "../api";
import commonService from "../commonService";

export const GetApi = (endPoint) => {
  return ({ callback, urlParams, AT = false }) => {
    let url = endPoint;
    MAINAPI(
      "GET",
      url + (urlParams ? CommonService.objToQuery(urlParams) : ""),
      null,
      null,
      null,
      AT
    )
      .then((res) => {
        if (res) {
          if (callback) callback(res);
        }
      })
      .catch((err) => {
        // console.log(err?.response);
        if (callback) callback(err?.response);
      });
  };
};

export const GetApi2 = (endPoint) => {
  return ({ callback, urlParams }) => {
    let url = endPoint;
    MAINAPI("GET", url + (urlParams ? CommonService.objToQuery(urlParams) : ""))
      .then((res) => {
        if (res) {
          if (callback) callback(res);
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (callback) callback(err.response);
      });
  };
};

export const GetApi3 = (endPoint) => {
  return ({ callback, urlParams }) => {
    let url = endPoint;
    MAINAPI("GET", url + (urlParams ? CommonService.objToQuery(urlParams) : ""))
      .then((res) => {
        if (res) {
          if (callback) callback(res);
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (callback) callback(err.response);
      });
  };
};

export const DetailsApi = (endPoint) => {
  return ({ id, callback, apiEndPoint = "" }) => {
    let url = `${endPoint + apiEndPoint}/${id}`;
    MAINAPI("GET", url)
      .then((res) => {
        if (res) {
          if (callback) callback(res);
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (callback) callback(err.response);
      });
  };
};

export const PostApi = (endPoint) => {
  return ({ data, callback, urlParams, apiEndPoint = "" }) => {
    let url = `${endPoint + apiEndPoint}${commonService.objToQuery(urlParams)}`;
    MAINAPI("POST", url, data)
      .then((res) => {
        if (res) {
          if (callback) callback(res);
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (callback) callback(err.response);
      });
  };
};

export const PutApi = (endPoint) => {
  return ({ data, callback, urlParams }) => {
    MAINAPI("PUT", endPoint + commonService.objToQuery(urlParams), data)
      .then((res) => {
        if (res) {
          if (callback) callback(res);
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (callback) callback(err.response);
      });
  };
};

export const PutWithPath = (endPoint) => {
  return ({ data, callback, path = "", urlParams }) => {
    let url = `${endPoint + path}${commonService.objToQuery(urlParams)}`;
    MAINAPI("PUT", url, data)
      .then((res) => {
        if (res) {
          if (callback) callback(res);
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (callback) callback(err.response);
      });
  };
};

export const DeleteApi = (endPoint) => {
  return ({ id, callback, data }) => {
    let url;
    if (id) url = `${endPoint}/${id}`;
    else url = endPoint;
    MAINAPI("DELETE", url, data)
      .then((res) => {
        if (res) {
          if (callback) callback(res);
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (callback) callback(err.response);
      });
  };
};
