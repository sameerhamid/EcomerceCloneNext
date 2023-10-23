import * as currencyFormatter from "currency-formatter";
import * as sha1 from "js-sha1";

import { isEmpty, set, toInteger } from "lodash";

import { Base64 } from "js-base64";
import i18next from "i18next";

var CryptoJS = require("crypto-js");
var global = {};
if (typeof window !== "undefined") {
  // Client-side-only code
  global = window;
}

const seatIdentifiers = {
  ".GY": "Gangway",
  ".DR_IMG": "Driver Image",
  ".ST_IMG": "Strairs Image",
  ".WR_IMG": "Wash Room Image",
  ".BR": "Break",
  GY: "Gangway",
  DR_IMG: "Driver Image",
  ST_IMG: "Strairs Image",
  WR_IMG: "Wash Room Image",
  BR: "Break",
  SS: "Semi Sleeper",
  LB: "Lower Berth",
  UB: "Upper Berth",
  BS: "CLASICO",
  PB: "CLASICO",
  NPB: "CLASICO",
  SLB: "CLASICO",
  SUB: "CLASICO",
  SST: "CLASICO",
  NA: "CLASICO",
  ST: "CLASICO",
  DLB: "CLASICO",
  DUB: "CLASICO",
  WSS: "CLASICO",
  WST: "CLASICO",
  WLB: "CLASICO",
  WUB: "CLASICO",
  WSL: "CLASICO",
  WSU: "CLASICOr",
  BU: "CLASICO",
  EC: "Semi Cama",
  "SEMI CAMA": "SEMI CAMA",
  SEMI_CAMA: "SEMI CAMA",
  "SALON CAMA": "SALON CAMA",
  SALONCAMA: "SALON CAMA",
  SALON_CAMA: "SALON CAMA",
  CLASICO: "Clasico",
  EJECUTIVO: "Ejecutivo",
  PREMIUM: "Premium",
  Premium: "Premium",
  "CAMA PREMIUM": "CAMA PREMIUM",
  "Cama Premium": "CAMA PREMIUM",
  "cama premium": "CAMA PREMIUM",
  // PREMIUM: 'PREMIUM',
  // Premium: 'PREMIUM',
  PREFERENTE: "PREMIUM",
  Preferente: "PREFERENTE",
  preferente: "PREFERENTE",
  "CAMA SUITE": "CAMA SUITE",
  "Cama Suite": "CAMA SUITE",
  "cama suite": "CAMA SUITE",
  "PREMIUM PROMO": "PREMIUM PROMO",
  "Premium Promo": "PREMIUM PROMO",
  "premium promo": "PREMIUM PROMO",

  "CAMA VIP": "CAMA VIP",
  "Cama Vip": "CAMA VIP",
  "cama vip": "CAMA VIP",

  "SUITE CAMA": "SUITE CAMA",
  "Suite Cama": "SUITE CAMA",
  "suite cama": "SUITE CAMA",

  SC: "Semi Cama",
  CO: "CLASICO",
  EX: "SALON CAMA",
  SP: "CLASICO",
  SALON: "SALON CAMA",
  "SALON MIXTO": "SALON CAMA",
  SEMICAMA: "SEMI CAMA",
  "Semi Cama": "SEMI CAMA",
  CAMA: "SALON CAMA",
  COMUN: "CLASICO",
  "COMUN CON AIRE": "CLASICO",
  "Comun con Aire": "CLASICO",
  SCA: "CLASICO",

  Salon: "SALON CAMA",
  "Salon Sin Vent": "SALON SIN VENT",
  "Bio Bio Superior": "BIO BIO SUPERIOR",
};

const getSeatType = (type, seatIds) => {
  // console.log('------------------types', type);
  // console.log('------------------seatIds', seatIds);
  let types = seatIds;
  return types[type];
};

const getAmenityName = (rawAnemity) => {
  // console.log('Raw amenity ---------', rawAnemity);
  switch (rawAnemity) {
    case "mobile ticket":
      return "RESULTS_PAGE.MOBILE_TICKET";
      break;
    case "charging plug":
      return "RESULTS_PAGE.CHARGING_PLUG";
      break;
    case "wifi":
      return "RESULTS_PAGE.WIFI";
      break;
    case "movie":
      return "RESULTS_PAGE.ENTERTAINMENT";
      break;
    case "baggage":
      return "RESULTS_PAGE.BAGGAGE";
      break;
    case "restrooms":
      return "RESULTS_PAGE.RESTROOMS";
      break;
    case "air condtion":
      return "RESULTS_PAGE.AIR_CONDITIONER";
      break;
    case "snacks new":
      return "RESULTS_PAGE.SNACKS";
      break;
    case "coffee":
      return "RESULTS_PAGE.COFFEE";
      break;
    case "gaming":
      return "RESULTS_PAGE.GAMING";
      break;
    default:
      return rawAnemity;
      break;
  }
};

let token;

if (typeof window !== "undefined") {
  let localData = localStorage.getItem("loginData");
  if (localData) {
    localData = JSON.parse(Base64.decode(localData));
  }

  token = localData?.token;
  // console.log("token is", token);
}
// if (localData) return JSON.parse(Base64.decode(localData));

const CommonService = {
  toast: {},
  formatData: (jsonArr) => {
    if (jsonArr) {
      let keys = jsonArr[0];
      let currArr = [];
      for (let i = 1; i < jsonArr.length; i++) {
        let currentObj = {};
        for (let j = 0; j < keys.length; j++) {
          currentObj[keys[j]] = jsonArr[i][j];
        }
        currArr.push(currentObj);
      }
      return currArr;
    }
  },

  updateCartItem: (product, increase, cartList, setCartList) => {
    let newItemsArr = [...cartList];
    let qty = increase
      ? product?.quantity + 1
      : product?.quantity <= 1 ? product?.quantity - 0 : product?.quantity - 1;

    let tempProduct = {
      ...product,
      ["quantity"]: qty,
    };

    //to find where current item is present
    let productIndex = null;
    newItemsArr.map((item, i) => {
      if (item.id === product?.id) {
        productIndex = i;
      }
    });

    newItemsArr.splice(productIndex, 1, tempProduct);
    setCartList(newItemsArr);

  },
  getSeatName: (rawSeat) => {
    // console.log('Raw seat comoon service', rawSeat);
    switch (rawSeat) {
      case "SALON CAMA":
        return "Salón Cama";
        break;
      case "CLASICO":
        return "Clásico";
        break;
      case "Clasico":
        return "Clásico";
        break;
      case "clasico":
        return "Clásico";
        break;
      case "Salon Sin Vent":
        return "Salón Sin Vent";
        break;
      case "Salon Preferente":
        return "Salón Preferente";
        break;
      case "SALON SIN VENT":
        return "Salón Sin Vent";
        break;
      case "SALON PREFERENTE":
        return "Salón Preferente";
        break;
      case "SALON":
        return "Salón ";
        break;
      case "Salon":
        return "Salón ";
        break;
      default:
        return CommonService.capitalize(rawSeat);
        break;
    }
  },
  capitalize: (str) => {
    // console.log('String to capppppp', str);
    if (str) {
      let strArr = str.split(" ");
      for (let i = 0; i < strArr.length; i++) {
        strArr[i] =
          strArr[i][0] &&
          strArr[i][0].toUpperCase() + strArr[i].substr(1).toLowerCase();
      }
      return strArr.join(" ");
    }
    return "";
  },
  round: (number, digit) => {
    let p = Math.pow(10, digit);
    return Math.round(number * p) / p;
  },

  getTimezoneOffsetInHoursAndMinutes: () => {
    let offset = new Date().getTimezoneOffset();

    let hours = Math.abs(toInteger(offset / 60));
    let minutes = CommonService.preZero(Math.abs(offset % 60));

    return CommonService.preZero(hours) + ":" + minutes;
  },

  splitRutAndDv: (rut) => {
    let cValue = rut.replace(/[\.\-]/g, "");
    if (cValue.length == 0) return [null, null];
    if (cValue.length == 1) return [cValue, null];
    let cDv = cValue.charAt(cValue.length - 1);
    let cRut = cValue.substring(0, cValue.length - 1);
    return [cRut, cDv];
  },

  formatRut: (value) => {
    //removing . and - first
    console.log("value receeived i rut format", value);
    value = value.toString();
    value = value.replace(/[.-]/g, "");

    //limiting rut digits to
    if ((value + "").length > 9) {
      // value = (value + '').substr(0, 9);
      // REMOVED BY SALEEM
      value = value + "";
    }

    let rutAndDv = CommonService.splitRutAndDv(value);
    let cRut = rutAndDv[0];
    let cDv = rutAndDv[1];
    if (!(cRut && cDv)) return cRut || value;
    let rutF = "";
    while (cRut.length > 3) {
      rutF = "." + cRut.substr(cRut.length - 3) + rutF;
      cRut = cRut.substring(0, cRut.length - 3);
    }
    return cRut + rutF + "-" + cDv;
  },

  isRutValid: (rut) => {
    if (typeof rut !== "string") return false;
    let cRut = rut.replace(/[\.\-]/g, "");
    if (cRut.length < 2) return false;
    let cDv = cRut.charAt(cRut.length - 1).toUpperCase();
    let nRut = parseInt(cRut.substr(0, cRut.length - 1));
    if (nRut === NaN) return false;
    return CommonService.computeDv(nRut).toString().toUpperCase() === cDv;
  },

  isRut: (type, idCardTypes) => {
    if (idCardTypes) {
      let cardType = idCardTypes.filter((t) => {
        return t.id == type;
      });
      if (
        cardType &&
        cardType[0] &&
        cardType[0].name &&
        cardType[0].name.toLowerCase().indexOf("rut") > -1
      ) {
        return true;
      }
    }
    return false;
  },

  computeDv: (rut) => {
    let suma = 0;
    let mul = 2;
    if (typeof rut !== "number") return;
    rut = rut.toString();
    for (let i = rut.length - 1; i >= 0; i--) {
      suma = suma + rut.charAt(i) * mul;
      mul = (mul + 1) % 8 || 2;
    }
    switch (suma % 11) {
      case 1:
        return "k";
      case 0:
        return 0;
      default:
        return 11 - (suma % 11);
    }
  },

  copyObject: (ob) => {
    if (!ob) return {};
    return JSON.parse(JSON.stringify(ob));
  },

  isEMailValid: (email) => {
    if (email) {
      if (
        email.match(
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  storeLoginDetails: (loginData, setLoginData, fromHome = false) => {
    global.token = loginData ? loginData.auth_token : null;
    if (loginData) {
      if (loginData.carpool_customer) {
        global.xAccess = loginData.carpool_customer.access_token;
      }
      if (loginData.carpool_driver) {
        global.driverXAccess = loginData.carpool_driver.access_token;
      }
    } else {
      global.xAccess = null;
      global.driverXAccess = null;
    }
    setLoginData(loginData);
    if (!fromHome)
      loginData
        ? CommonService.setLocal("loginData", loginData)
        : CommonService.setLocal("loginData", {});
  },
  isLoggedIn: () => {
    if (!global.token) {
      return false;
    }
    return true;
  },
  logout: () => {
    global.token = null;
    CommonService.removeLocal("googleAccessToken");
    CommonService.removeLocal("loginData");
    localStorage.removeItem("selectedLanguage");
    // window.reload();
    window.location.reload();
  },

  getStatusName: (status) => {
    let s = {
      confirmed: "ConfirmadoII",
      booked: "Reservados",
      cancelled: "Anulado",
      pending: "Pending",
      partial_cancelled: "Canceledo Parcialmente",
    };
    return s[status];
  },

  phoneNumberFormat: (text, len = 9) => {
    if (text) {
      text = (text + "").replace(/[a-zA-Z]/g, "");
      if ((text + "").length > len) {
        text = (text + "").substr(0, len);
      }
    }
    return text;
  },

  onlyNumbers: (text) => {
    if (text) {
      text = (text + "").replace(/[^0-9]/g, "");
    }
    return text;
  },

  onlyChars: (text) => {
    if (text) {
      text = (text + "").replace(/[^a-zA-Z]/i, "");
    }
    return text;
  },

  onlyNumericValues: (text) => {
    if (text.match(/[^0-9]/g)) {
      return false;
    } else return true;
  },

  removeCommas: (text) => {
    let newText;
    text.map((val) => (val != "" ? (newText = val) : null));
    return newText;
    // if(text)
    //   return text.replace (/,/g, "")
  },

  isEqual: (value, other) => {
    // Get the value type
    var type = Object.prototype.toString.call(value);

    // If the two objects are not the same type, return false
    if (type !== Object.prototype.toString.call(other)) return false;

    // If items are not an object or array, return false
    if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

    // Compare the length of the length of the two items
    var valueLen =
      type === "[object Array]" ? value.length : Object.keys(value).length;
    var otherLen =
      type === "[object Array]" ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) return false;

    // Compare two items
    var compare = function (item1, item2) {
      // Get the object type
      var itemType = Object.prototype.toString.call(item1);

      // If an object or array, compare recursively
      if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
        if (!CommonService.isEqual(item1, item2)) return false;
      }

      // Otherwise, do a simple comparison
      else {
        // If the two items are not the same type, return false
        if (itemType !== Object.prototype.toString.call(item2)) return false;

        // Else if it's a function, convert to a string and compare
        // Otherwise, just compare
        if (itemType === "[object Function]") {
          if (item1.toString() !== item2.toString()) return false;
        } else {
          if (item1 !== item2) return false;
        }
      }
    };

    // Compare properties
    if (type === "[object Array]") {
      for (var i = 0; i < valueLen; i++) {
        if (compare(value[i], other[i]) === false) return false;
      }
    } else {
      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          if (compare(value[key], other[key]) === false) return false;
        }
      }
    }

    // If nothing failed, return true
    return true;
  },

  currency: (amount) => {
    let formattedAmount = currencyFormatter.format(amount, { code: "CLP" });
    return "$" + formattedAmount.replace("$", "").trim().split(",")[0];
  },

  generateXAccess: (key, token) => {
    let timeNow = Math.floor(new Date().getTime() / 1000);
    let t = [timeNow, sha1.hex([key, token, timeNow].join(""))].join(".");
    return t;
  },
  preZero: (n) => {
    if (n > 9) {
      return n;
    }
    return "0" + n;
  },
  distance: ({ lat1, lon1, lat2, lon2, unit }) => {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }
      if (unit == "N") {
        dist = dist * 0.8684;
      }
      if (unit == "MT") {
        dist = dist * 1.609344 * 1000;
      }
      return dist;
    }
  },
  //   prefIcons: {
  //       'ciga': {icon:require('../assets/carpool/cigerette-circle.png'),name:'Fumador'},
  //       'music': {icon:require('../assets/carpool/music-circle.png'),name:'Música'},
  //       'only_girl': {icon:require('../assets/carpool/girl-circle.png'),name:'Solo mujeres'},
  //       'ac': {icon:require('../assets/carpool/ac-circle.png'),name:'A / C'},
  //       'luggage': {icon:require('../assets/carpool/luggage-circle.png'),name:'Equipaje'},
  //       'conversation': {icon:require('../assets/carpool/chat-circle.png'),name:'Conversación'},
  //       'front_seat': {icon:require('../assets/carpool/seat-forward-circle.png'),name:'Asiento\ndelantero'},
  //       'baby_seat': {icon:require('../assets/carpool/seat-babies-circle.png'),name:'Fumador'},
  //       'pets': {icon:require('../assets/carpool/paw-circle.png'),name:'Pet\nfriendly'},
  //   },
  //   prefIconsGrey: {
  //       'ciga': {icon:require('../assets/carpool/cigerette-grey-circle.png'),name:'Fumador'},
  //       'music': {icon:require('../assets/carpool/music-grey-circle.png'),name:'Música'},
  //       'only_girl': {icon:require('../assets/carpool/girl-grey-circle.png'),name:'Solo mujeres'},
  //       'ac': {icon:require('../assets/carpool/ac-grey-circle.png'),name:'A / C'},
  //       'luggage': {icon:require('../assets/carpool/luggage-grey-circle.png'),name:'Equipaje'},
  //       'conversation': {icon:require('../assets/carpool/chat-grey-circle.png'),name:'Conversación'},
  //       'front_seat': {icon:require('../assets/carpool/seat-forward-grey-circle.png'),name:'Asiento\ndelantero'},
  //       'baby_seat': {icon:require('../assets/carpool/seat-babies-grey-circle.png'),name:'Fumador'},
  //       'pets': {icon:require('../assets/carpool/paw-grey-circle.png'),name:'Pet\nfriendly'},
  //   },
  show3AddressWords: (address) => {
    let retAdd = [];
    if (address) {
      let addArr = address.split(",");
      let i = 0;
      for (let a of addArr) {
        if (a && i < 3) retAdd.push(a);
        i++;
      }
    }
    return retAdd.join(",");
  },

  makeServiceDetailsApi: (serviceDetails) => {
    try {
      let floor = serviceDetails.bus_layout.floor;
      let floorArr = [];
      let lowerFloor = [];
      let upperFloor = [];
      let seat_details = [];

      let available = [];
      let availableFloor = [];
      let availableArr;
      let availableArrFloor = [];
      let availableSeats = 0;
      // if (!CommonService.isTrain()) {
      //   availableArr = serviceDetails.bus_layout.available.split(',');
      //   for (let i = 0; i < availableArr.length; i++) {
      //     let cell = availableArr[i].split('|');
      //     available.push({
      //       seatNumber: cell[0],
      //       seatFare: cell[1],
      //     });
      //     if (cell && cell[0]) {
      //       availableSeats++;
      //     }
      //   }
      // } else {
      availableArrFloor =
        serviceDetails.bus_layout.available &&
        serviceDetails.bus_layout.available.split(":");
      let j = 0;
      for (let floor of availableArrFloor) {
        let availableArr = floor.split(",");
        availableFloor[j] = [];
        for (let i = 0; i < availableArr.length; i++) {
          let cell = availableArr[i].split("|");
          availableFloor[j].push({
            seatNumber: cell[0],
            seatFare: cell[1],
          });
          if (cell && cell[0]) {
            availableSeats++;
          }
        }
        j++;
      }
      // }
      // console.log('availableArrFloor', availableArrFloor, availableFloor);
      let coach_details = [];
      // if (!CommonService.isTrain()) {
      //   let rowArr = serviceDetails.bus_layout.coach_details.split(',');
      //   for (let i = 0; i < rowArr.length; i++) {
      //     let colArr = rowArr[i].split('-');
      //     for (let j = 0; j < colArr.length; j++) {
      //       let cell = colArr[j].split('|');
      //       coach_details.push({
      //         seatNumber: cell[0],
      //         seatType: cell[1] ? cell[1] : '',
      //         rowId: i,
      //         colId: j,
      //       });
      //     }
      //   }
      // } else {
      let indexOfColon = serviceDetails.bus_layout.coach_details.indexOf(":");
      let coachFloors = serviceDetails.bus_layout.coach_details.split(":");
      let floorNo = 0;
      for (let floor of coachFloors) {
        let rowArr = floor.split(",");
        for (let i = 0; i < rowArr.length; i++) {
          let colArr = rowArr[i].split("-");
          for (let j = 0; j < colArr.length; j++) {
            let cell = colArr[j].split("|");
            coach_details.push({
              seatNumber: cell[0],
              seatType: cell[1] ? cell[1] : "",
              rowId: i,
              colId: j,
              floorNo: floorNo,
            });
          }
        }
        floorNo++;
      }
      // }
      // console.log('coach_details', coach_details);
      let floors = [];
      if (floor) {
        // if (!CommonService.isTrain()) {
        //   if (floor.indexOf('@') >= 0) {
        //     floorArr = floor.split('@');
        //     if (floorArr[1] && floorArr[1].indexOf(',') > -1) {
        //       lowerFloor = floorArr[1].split(',');
        //       upperFloor = floorArr[0].split(',');
        //     } else {
        //       floorArr = floor.split('@');
        //       lowerFloor = floorArr[0].split(',');
        //     }
        //   } else {
        //     lowerFloor = floor.split(',');
        //   }
        // } else {
        if (floor.indexOf("@") >= 0) {
          floorArr = floor.split("@");
          lowerFloor = floorArr[0] ? floorArr[0].split(",") : [];
          if (floorArr[1] && floorArr[1].indexOf(",") > -1) {
            upperFloor = floorArr[1].split(",");
          }
          let i = 0;
          for (let arr of floorArr) {
            let seatReverse = arr ? arr.split(":") : [];
            floors[i] = {};
            if (seatReverse[0] && seatReverse[0].indexOf(",") > -1) {
              floors[i].normal = seatReverse[0].split(",");
            }
            if (seatReverse[1] && seatReverse[1].indexOf(",") > -1) {
              floors[i].reverse = seatReverse[1].split(",");
            }
            i++;
          }
        } else {
          lowerFloor = floor.split(",");
        }

        // if (floor.indexOf('@') >= 0 && floor.split('@')[0]) {
        //   floorArr = floor.split('@');
        //   lowerFloor = floorArr[0].split(',');
        //   if (floorArr[1] && floorArr[1].indexOf(',') > -1) {
        //     upperFloor = floorArr[1].split(',');
        //   }
        //   let i = 0;
        //   for (let arr of floorArr) {
        //     let seatReverse = arr.split(':');
        //     floors[i] = {};
        //     if (seatReverse[0] && seatReverse[0].indexOf(',') > -1) {
        //       floors[i].normal = seatReverse[0].split(',');
        //     }
        //     if (seatReverse[1] && seatReverse[1].indexOf(',') > -1) {
        //       floors[i].reverse = seatReverse[1].split(',');
        //     }
        //     i++;
        //   }
        // } else {
        //   if (floor.indexOf('@')) {
        //     floorArr = floor.split('@');
        //     lowerFloor = floorArr[1].split(',')
        //   } else {
        //     lowerFloor = floor.split(',');
        //   }
        // }
      }
      // }
      // console.log('floors --------', floors);
      let seatAvailable;
      let noAvailableColon =
        serviceDetails.bus_layout.available.indexOf(":") < 0;
      let availableArrNoCol = serviceDetails.bus_layout.available.split(",");
      for (let i = 0; i < coach_details.length; i++) {
        let seatJson = {};
        let isSeat = false;
        let seatType = getSeatType(coach_details[i].seatType, seatIdentifiers);
        let isGangway =
          coach_details[i].seatType.indexOf("GY") >= 0 || !seatType
            ? true
            : false;
        let berthLower;
        let berthUpper;
        let berthType;
        let seatDirection;
        // if (!CommonService.isTrain()) {
        //   berthLower = lowerFloor.find(number => {
        //     if (number == coach_details[i].seatNumber) {
        //       return true;
        //     }
        //   });
        //   if (upperFloor) {
        //     berthUpper = upperFloor.find(number => {
        //       if (number == coach_details[i].seatNumber) {
        //         return true;
        //       }
        //     });
        //   }
        // } else {
        let floorno = 0;
        for (let floor of floors) {
          if (floorno === coach_details[i].floorNo) {
            let isSeatInFloorNoraml = null;
            let isSeatInFloorRev = null;
            seatDirection = null;
            isSeatInFloorNoraml =
              floor.normal &&
              floor.normal.find((number) => {
                if (number == coach_details[i].seatNumber) {
                  return true;
                }
              });
            if (floor.reverse) {
              isSeatInFloorRev = floor.reverse.find((number) => {
                if (number == coach_details[i].seatNumber) {
                  return true;
                }
              });
            }
            if (isSeatInFloorNoraml) {
              berthType = floorno;
              seatDirection = 1;
              break;
            }
            if (isSeatInFloorRev) {
              berthType = floorno;
              seatDirection = 2;
              break;
            }
          }
          floorno++;
        }
        // }
        let seatAvailable;
        if (
          !(CommonService.isTrain() || serviceDetails.travel_id == 272) &&
          noAvailableColon
        ) {
          let availableItem = availableArrNoCol.find((seat) => {
            return seat.split("|")[0] == coach_details[i].seatNumber;
          });
          if (availableItem) {
            seatAvailable = {
              seatNumber: availableItem.split("|")[0],
              seatFare: availableItem.split("|")[1],
            };
          }
        } else {
          if (availableFloor[coach_details[i].floorNo]) {
            seatAvailable = availableFloor[coach_details[i].floorNo].find(
              (seat) => {
                return seat.seatNumber == coach_details[i].seatNumber;
              }
            );
          }
        }
        if (indexOfColon < 0) {
          berthLower = lowerFloor.find((number) => {
            if (number == coach_details[i].seatNumber) {
              return true;
            }
          });
          if (upperFloor) {
            berthUpper = upperFloor.find((number) => {
              if (number == coach_details[i].seatNumber) {
                return true;
              }
            });
          }
        }
        let fare = seatAvailable ? seatAvailable.seatFare : null;
        seatJson["available"] = seatAvailable ? true : false;
        seatJson["fare"] = fare;
        seatJson["is_ladies_seat"] = false;
        seatJson["is_gents_seat"] = false;
        seatJson["type"] = seatType ? seatType : "SALON CAMA";
        seatJson["seat_direction"] = seatDirection;
        seatJson["floor_no"] =
          indexOfColon >= 0
            ? coach_details[i].floorNo
            : berthLower
              ? 0
              : berthUpper
                ? 1
                : floor
                  ? ""
                  : 0;
        seatJson["berthType"] = berthType;
        // seatJson['berthType'] = CommonService.isTrain()
        //   ? berthType
        //   : berthLower
        //   ? 'lower'
        //   : berthUpper
        //   ? 'upper'
        //   : '';
        seatJson["number"] = coach_details[i].seatNumber;
        seatJson["row_id"] = coach_details[i].rowId;
        seatJson["col_id"] = coach_details[i].colId;
        seatJson["is_seat"] = true;
        seatJson["is_gangway"] = isGangway;
        seatJson["is_horizontal"] = false;
        if (!isGangway) {
          seatJson["discount_amount"] = 0;
          seatJson["net_amount"] = fare - seatJson["discount_amount"];
        }
        seat_details.push(seatJson);
      }

      let stages = [];
      let coachDetails = {
        total_seats: coach_details.length,
        available_seats: available.length,
        driver_position: "left",
        seat_details: seat_details,
      };
      let obj = {
        origin: { id: +serviceDetails.origin_id },
        destination: { id: +serviceDetails.destination_id },
        available_seats: serviceDetails.available_seats,
        total_available_seats: availableSeats,
        dep_time: serviceDetails.dep_time,
        arr_time: serviceDetails.arr_time,
        duration: serviceDetails.duration,
        bus_type: serviceDetails.bus_type,
        no_of_wagons: floors.length,
        cost: serviceDetails.cost,
        coach_details: coachDetails,
        stage_details: stages,
        boarding_stages: serviceDetails.bus_layout.boarding_stages,
        dropoff_stages: serviceDetails.bus_layout.dropoff_stages,
        travel_id: serviceDetails.travel_id,
        res_details: serviceDetails.res_details,
        id: serviceDetails.id,
      };
      let retObj = JSON.parse(JSON.stringify(obj));
      obj = null;

      // console.log('seat_details', seat_details, obj);
      return retObj;
    } catch (e) {
      // console.log("coachlayot", e);
      return null;
    }
  },
  setSeatLayout: (serviceDetails, route) => {
    try {
      let coachLayoutJson = [];
      let upperAvalibility;
      let originStageDetails;
      let destinationStageDetails;

      let errorMessage;
      if (serviceDetails.code === 416) {
        errorMessage = serviceDetails.message;
      } else {
        let seatDetails = serviceDetails.coach_details.seat_details;
        for (let seat of seatDetails) {
          // console.log("SEAT IS SEAT IS SEAT IS---------", seat);
          if (!(CommonService.isTrain() || serviceDetails.travel_id == 272)) {
            if (typeof coachLayoutJson[seat.row_id] === "undefined") {
              coachLayoutJson[seat.row_id] = [];
            }
          } else {
            if (typeof coachLayoutJson[seat.floor_no] === "undefined") {
              coachLayoutJson[seat.floor_no] = [];
            }
            if (
              typeof coachLayoutJson[seat.floor_no][seat.row_id] === "undefined"
            ) {
              coachLayoutJson[seat.floor_no][seat.row_id] = [];
            }
          }
          let currentSeatJson = {};

          let berthTextPos = seat.type.indexOf("Berth");
          currentSeatJson.rowSpan = berthTextPos !== -1 ? 2 : 1;
          currentSeatJson.isBerth = berthTextPos !== -1 ? true : false;
          currentSeatJson.isReservable = seat.available;
          currentSeatJson.berthType = seat.berthType;
          currentSeatJson.isUpper = seat.floor_no ? seat.floor_no === 1 : false;
          if (currentSeatJson.isUpper) {
            upperAvalibility = currentSeatJson.isUpper;
          }
          currentSeatJson.isLower = !currentSeatJson.isUpper;
          currentSeatJson.object = seat;
          currentSeatJson.number = seat.number;
          currentSeatJson.isLadiesSeat = seat.is_ladies_seat;
          currentSeatJson.isGentsSeat = seat.is_gents_seat;
          currentSeatJson.type = seat.type;
          currentSeatJson.isGangWay = seat.type.indexOf("Gang") !== -1;
          currentSeatJson.isBreak = seat.type.indexOf("Break") !== -1;
          currentSeatJson.isSelected = false;
          if (!(CommonService.isTrain() || serviceDetails.travel_id == 272)) {
            coachLayoutJson[seat.row_id][seat.col_id] = currentSeatJson;
          } else {
            coachLayoutJson[seat.floor_no][seat.row_id][
              seat.col_id
            ] = currentSeatJson;
          }
        }
        originStageDetails = serviceDetails.boarding_stages;
        destinationStageDetails = serviceDetails.dropoff_stages;
        let boardingStage =
          originStageDetails.length == 1 ? originStageDetails[0] : null;
        let droppingStage =
          destinationStageDetails.length == 1
            ? destinationStageDetails[0]
            : null;

        return {
          coachLayoutJson: coachLayoutJson,
          originStageDetails: originStageDetails,
          destinationStageDetails: destinationStageDetails,
          boardingStage: boardingStage,
          droppingStage: droppingStage,
          upperAvalibility: upperAvalibility,
          route: route,
        };
      }
    } catch (e) {
      console.log(
        "Exception in seat-laout.ts --> defaultCall() --> apiFactory.getServiceDetails(path)",
        e
      );
    }
  },
  transpose: (matrix) => {
    return matrix.reduce(
      (prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])),
      []
    );
  },
  selectSeat: (
    seat,
    metaData,
    coachLayout,
    selectedSeatsToBook,
    selectedService
  ) => {
    console.log({ seat });

    if (!seat.object.available) {
      return "NO_AVAILABLE";
    }
    try {
      // CommonService.googleProductClick(
      //   CommonService.convertBusServiceToGoogleProduct(
      //     seat.object,
      //     selectedService,
      //     CommonService.isTrain() ? 'train' : 'bus',
      //   ),
      // );

      let bookingDetails = {};
      let currentSeat = seat;
      let selectedSeatsNumbers = "";
      selectedSeatsToBook = CommonService.copyObject(
        selectedSeatsToBook ? selectedSeatsToBook : []
      );
      let coachLayoutLocal = CommonService.copyObject(coachLayout);
      let currentSeatJson =
        coachLayoutLocal[currentSeat["object"].row_id][
        currentSeat["object"].col_id
        ];

      if (
        selectedSeatsToBook.length <
        (metaData &&
          metaData.max_seats_allowed_by_op[selectedService.travel_id]
          ? metaData.max_seats_allowed_by_op[selectedService.travel_id]
          : metaData.max_seats_allowed) ||
        currentSeatJson.isSelected
      ) {
        currentSeatJson.isSelected = !currentSeatJson.isSelected;
        if (currentSeatJson.isSelected) {
          selectedSeatsToBook.push(seat.object);
        } else {
          selectedSeatsToBook.splice(
            selectedSeatsToBook.findIndex((item) => {
              if (item.number === seat.object.number) {
                item.passengerName = "";
                item.age = "";
              }
              return item.number === seat.object.number;
            }),
            1
          );
        }
        let totalBookingAmount = 0;
        let selectedSeats = [];
        let selectedSeatTypes = {};
        for (var i = 0; i < selectedSeatsToBook.length; i++) {
          totalBookingAmount += +selectedSeatsToBook[i].fare;
          // selectedSeats.push( (CommonService.isTrain() ? ((selectedSeatsToBook[i].floor_no+1)+'_') : '') + selectedSeatsToBook[i].number);
          selectedSeats.push(
            selectedSeatsToBook[i].floor_no +
            1 +
            "_" +
            selectedSeatsToBook[i].number
          );
          if (!selectedSeatTypes[selectedSeatsToBook[i].type]) {
            selectedSeatTypes[selectedSeatsToBook[i].type] = [];
          }
          selectedSeatTypes[selectedSeatsToBook[i].type].push(
            CommonService.copyObject(selectedSeatsToBook[i])
          );
        }
        for (let key in selectedSeatTypes) {
          let seatNumbers = [];
          for (let type of selectedSeatTypes[key]) {
            seatNumbers.push(type.number);
          }
          selectedSeatTypes[key][0]["seatNumbers"] = seatNumbers.join(",");
        }
        selectedSeatsNumbers = selectedSeats.join(",");
        // discountAmount = this.commonService.calculateAmountByPercentage(totalBookingAmount,metaData.discountPercentage);

        let discountAmount = 0;
        let netBookingAmount = totalBookingAmount - discountAmount;

        // -------------------- Fare charges details --------------------
        bookingDetails.totalBookingAmount = totalBookingAmount;
        bookingDetails.netBookingAmount = netBookingAmount;
        bookingDetails.discountAmount = discountAmount;
        bookingDetails.selectedSeatsToBook = selectedSeatsToBook;
        bookingDetails.selectedSeatsNumbers = selectedSeatsNumbers;
        bookingDetails.selectedSeatTypes = selectedSeatTypes;
        bookingDetails.coachLayout = coachLayoutLocal;
        return bookingDetails;
      } else {
        return "MAX_SEATS_ERROR";
        // console.log('Maximum Number of Seat Selection is reached');
        // this.util.showToast(this.util.tranlateInstant("max_four_seats_allowed"));
      }
    } catch (e) {
      console.log("SelectseatsController_selectSeatFunction", e);
    }
  },

  setLocal: (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
  },

  getLocal: (key) => {
    let val = localStorage.getItem(key);
    if (val) return JSON.parse(val);
  },
  removeLocal: (key) => {
    let val = localStorage.removeItem(key);
  },
  getServiceFilters: (routes, metaData) => {
    let filters = {
      operators: {
        title: "BUS_COMAPNIES",
        type: "operator",
        options: [],
      },
      seatTypes: {
        title: "SEAT_TYPES",
        type: "seat_types",
        options: [],
      },
      amenities: {
        title: "AMENITIES",
        type: "amenities",
        // options: [
        //   { trText: 'CHARGING_PLUG', label: 'Charging Plug', value: 'charging_plug' },
        //   { trText: 'MOBILE_TICKET', label: 'Wifi', value: 'mobile_ticket' },
        //   { trText: 'WIFI', label: 'Snacks New', value: 'wifi' },
        //   { trText: 'SNACKS_NEW', label: 'Mobile Ticket', value: 'snacks_new' },
        // ],
        options: [],
      },
    };
    let seatTypes = [];
    let operators = [];
    let amenities = [];
    for (let r of routes) {
      let fareStr = r.fare_str.split(",");
      for (let f of fareStr) {
        let type = f.split(":")[0].replace(/ /g, "-").toLowerCase();
        let type2;
        if (type.toLowerCase().indexOf("semi") > -1) {
          type2 = "Semi Cama";
        } else if (type.toLowerCase().indexOf("vent") > -1) {
          type2 = "Salon Sin Vent";
        } else if (type.toLowerCase().indexOf("salon") > -1) {
          type2 = "Salon Cama";
        } else if (type.toLowerCase().indexOf("ejecutivo") > -1) {
          type2 = "Cama Ejecutivo";
        } else if (type.toLowerCase().indexOf("suite") > -1) {
          type2 = "Cama Suite";
        } else if (type.toLowerCase().indexOf("vip") > -1) {
          type2 = "Cama VIP";
        } else if (type.toLowerCase().indexOf("preferente") > -1) {
          type2 = "Preferente";
        } else if (type.toLowerCase() == "cama") {
          type2 = "Cama";
        } else if (type.toLowerCase() == "clasico") {
          type2 = "Clasico";
        }
        if (seatTypes.indexOf(type2) === -1) {
          seatTypes.push(type2);
        }
      }
      if (operators.indexOf(r.operator_service_name) === -1) {
        operators.push(r.operator_service_name);
      }
      if (metaData) {
        let amArr = r.operator_details[4];
        for (let a of amArr) {
          if (a) {
            let am = metaData.amenities[a].split(".")[0].toLowerCase();
            if (amenities.indexOf(am) === -1) {
              amenities.push(am);
            }
          }
        }
      }
    }
    for (let s of seatTypes) {
      if (s)
        filters.seatTypes.options.push({
          label: s.replace(/-/g, " "),
          value: s,
        });
    }
    for (let o of operators.sort()) {
      filters.operators.options.push({ label: o, value: o });
    }
    if (metaData) {
      for (let a of amenities) {
        if (a)
          filters.amenities.options.push({
            label: getAmenityName(a.split(".")[0].split("_").join(" ")),
            value: a,
          });
      }
    }

    return filters;
  },

  getAgencyHeaders: () => {
    const headers = {};
    // set(headers, 'Content-Type', 'text/plain');
    set(headers, "Accept", "*/*");
    set(headers, "Content-Type", "application/json");
    set(headers, "Accept-Encoding", "gzip, deflate, br");
    set(headers, "Connection", "keep-alive");

    return headers;
  },
  getHeaders: ({ isPassengerInfo, hasFile }) => {
    const headers = {};
    set(headers, "category_type", "1");
    set(headers, "Accept", "application/json");
    if (!hasFile)
      set(headers, "Content-Type", "application/json; charset=utf-8");
    else set(headers, "Content-Type", "multipart/form-data");
    set(headers, "language", i18next.language);

    if (token) set(headers, "Authorization", `Bearer ${token}`);

    // set(headers, "X-Api-Key", "QHH79qF2fsWEx98pvNeZpQ");
    // let key = CommonService.jwt_key;
    // if (!CommonService.jwt_key && typeof window !== "undefined") {
    //   key = CommonService.metaSecret(localStorage.getItem("jwt_key"), false);
    // }
    // set(headers, "x-jwt-token", key);

    try {
      // const state = store().getState();
      // let token = GlobalService.setGlobal('token');
      // console.log('global ----------------------------', global);
      // if (global.token) {
      //   set(headers, "Authorization", global.token);
      //   set(headers, "XACCESS", global.xAccess);
      // }
      // set(headers, "XKEY", global.xkey);
      // set(
      //   headers,
      //   "XTOKEN",
      //   CommonService.generateXAccess(global.xkey, global.xtoken)
      // );
      if (isPassengerInfo) {
        set(headers, "x-is-psi", "true");
      }
      return headers;
    } catch (e) {
      console.log("fffffff");
    }
  },
  getAtHeaders: () => {
    const headers = {};
    set(headers, "Accept", "application/json");
    set(headers, "Content-Type", "application/json; charset=utf-8");
    // set(
    //   headers,
    //   'Authorization',
    //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoX3V1aWQiOiJmMzk3N2RmZC1iYzFkLTQ4NTQtYTRlNi1hZWE3MDA4MmZmNTMiLCJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2MTAxMDk1Njh9.fdzzUOPhIPMT6OixIxym3t9YMwRunWGit8tSZ9en7c0',
    // );
    set(headers, "api_key", "012345678");
    return headers;
  },
  getStringWithoutAccent: (str) => {
    if (str) {
      return str
        .toLowerCase()
        .replace("ñ", "n")
        .replace("á", "a")
        .replace("é", "e")
        .replace("ó", "o")
        .replace("í", "i")
        .replace("ú", "u");
    }
  },
  getAddressWithoutAccent: (str) => {
    // console.log("String rec is----", str)
    if (str) {
      let newStr = str
        .split("----")
        .join(",")
        .toLowerCase()
        .replace("ñ", "n")
        .replace("á", "a")
        .replace("é", "e")
        .replace("ó", "o")
        .replace("í", "i")
        .replace("ú", "u");
      // console.log("Converted string is------", newStr)

      return newStr;
    }
  },
  removeClass: (element, className) => {
    if (element) {
      var classes = element.className.split(" ");
      var i = classes.indexOf(className);

      if (i >= 0) classes.splice(i, 1);
      element.className = classes.join(" ");
    }
  },
  add: (element, name) => {
    if (element) {
      var name, arr;
      arr = element.className.split(" ");
      if (arr.indexOf(name) == -1) {
        element.className += " " + name;
      }
    }
  },
  isElementInView: (el) => {
    if (el) {
      var rect = el.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /*or $(window).height() */ &&
        rect.right <=
        (window.innerWidth ||
          document.documentElement.clientWidth) /*or $(window).width() */
      );
    }
  },
  percentage: (number, per) => {
    return (per / 100) * number;
  },

  isTrain: () => {
    return (
      window.location.pathname.indexOf("/pasajes-tren") > -1 ||
      window.location.pathname.indexOf("/train-tickets") > -1 ||
      window.location.pathname.indexOf("/train") > -1
    );
  },
  isBookingScreen: () => {
    return window.location.pathname.indexOf("booking") > -1;
  },
  isATBookingScreen: () => {
    return (
      window.location.pathname.indexOf("transfer/payment") > -1 ||
      window.location.pathname.indexOf("transfer/payment") > -1
    );
  },
  isBusOrTrain: () => {
    return (
      window.location.pathname.indexOf("/pasajes-tren") > -1 ||
      window.location.pathname.indexOf("/train-tickets") > -1 ||
      window.location.pathname.indexOf("/pasajes-tren") > -1 ||
      window.location.pathname.indexOf("/train") > -1 ||
      window.location.pathname.indexOf("/pasajes-bus") > -1 ||
      window.location.pathname.indexOf("/bus-tickets") > -1 ||
      window.location.pathname.indexOf("/bus/") > -1
    );
  },
  isUniRed: (path) => {
    if (path)
      if (
        path == "/unired"
        // path == '/unired/es' ||
        // path == '/unired/es/pasajes-bus' ||
        // path == '/unired/es/pasajes-tren' ||
        // path == '/unired/es/traslados' ||
        // path == '/unired/en' ||
        // path == '/unired/en/bus-tickets' ||
        // path == '/unired/en/train-tickets' ||
        // path == '/unired/en/transfer'
      )
        return true;

    return false;
  },
  isSanpedronline: (path) => {
    let widget_src = sessionStorage.getItem("widget_source");
    if (path)
      if (
        path == "/sanpedronline" ||
        widget_src == "sanpedroline"
        // path == '/sanpedronline/es' ||
        // path == '/unired/es/pasajes-bus' ||
        // path == '/unired/es/pasajes-tren' ||
        // path == '/unired/es/traslados' ||
        // path == '/unired/en' ||
        // path == '/unired/en/bus-tickets' ||
        // path == '/unired/en/train-tickets' ||
        // path == '/unired/en/transfer'
      )
        return true;

    return false;
  },
  isSanpedronline: (path) => {
    let widget_src = sessionStorage.getItem("widget_source");
    if (path)
      if (
        path == "/sanpedronline" ||
        widget_src == "sanpedroline"
        // path == '/sanpedronline/es' ||
        // path == '/unired/es/pasajes-bus' ||
        // path == '/unired/es/pasajes-tren' ||
        // path == '/unired/es/traslados' ||
        // path == '/unired/en' ||
        // path == '/unired/en/bus-tickets' ||
        // path == '/unired/en/train-tickets' ||
        // path == '/unired/en/transfer'
      )
        return true;

    return false;
  },
  isBusesGomez: (path) => {
    if (path) if (path == "/buses-gomez") return true;
    return false;
  },
  isBusesTorres: (path) => {
    if (path) if (path == "/buses-torres") return true;
    return false;
  },
  isHome: (path) => {
    if (path) {
      if (
        path == "/es" ||
        path == "/es/pasajes-bus" ||
        path == "/es/pasajes-tren" ||
        path == "/es/traslados" ||
        path == "/es/carga-bip" ||
        path == "/es/kupos-pool" ||
        path == "/es/viajes-especiales" ||
        path == "/en" ||
        path == "/en/bus-tickets" ||
        path == "/en/train-tickets" ||
        path == "/en/transfer" ||
        path == "/en/bip-recharge" ||
        path == "/en/kupos-pool" ||
        path == "/en/private-transport" ||
        path == "/es/" ||
        path == "/es/pasajes-bus/" ||
        path == "/es/pasajes-tr/en/" ||
        path == "/es/traslados/" ||
        path == "/es/carga-bip/" ||
        path == "/es/kupos-pool/" ||
        path == "/es/viajes-especiales/" ||
        path == "/en/" ||
        path == "/en/bus-tickets/" ||
        path == "/en/train-tickets/" ||
        path == "/en/transfer/" ||
        path == "/en/bip-recharge/" ||
        path == "/en/kupos-pool/" ||
        path == "/en/private-transport/"
      )
        return true;
    }
    return false;
  },
  fillPassengerAutoData: () => {
    setTimeout(() => {
      let passengerDetailsOnward = CommonService.copyObject(
        this.props.pbPaymentDetails.passengerDetailsOnward
      );
      passengerDetailsOnward[0].name = this.props.common.loginData
        ? this.props.common.loginData.name
        : null;
      passengerDetailsOnward[0].last_name = this.props.common.loginData
        ? this.props.common.loginData.last_name
        : null;
      (passengerDetailsOnward[0].idCardType =
        this.props.common.loginData &&
          Object.keys(this.props.common.loginData).length
          ? this.idCardTypes.find(
            (it) => it.value == this.props.common.loginData.identity_type
          )
          : this.idCardTypes.find((it) => it.value == 7)),
        (passengerDetailsOnward[0].idCardNumber =
          this.props.common.loginData &&
            Object.keys(this.props.common.loginData).length
            ? this.props.common.loginData.identity_val
            : null);
      this.props.actions.setPassengerDetailsOnward(passengerDetailsOnward);

      let contactDetails = {
        countryCode:
          this.countrieCodes && this.countrieCodes[0]
            ? this.countrieCodes[0].name
            : "",
        mobile: this.props.common.loginData
          ? this.props.common.loginData.phone
          : null,
        email: this.props.common.loginData
          ? this.props.common.loginData.email
          : null,
        confirmEmail: this.props.common.loginData
          ? this.props.common.loginData.email
          : null,
      };
      this.props.actions.setContactDetails(contactDetails);
      CommonService.loginCallbackFunction = null;
    }, 300);
  },
  getParameterByName: (name, url) => {
    if (typeof window !== "undefined") {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return "";
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
  },
  objToQuery: (obj) => {
    var parts = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        parts.push(
          encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
        );
      }
    }
    return "?" + parts.join("&");
  },

  ceilNumber: (rnum, rlength = 0) => {
    var newnumber =
      Math.ceil(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
    return newnumber;
  },
  getPosition: (string, subString, index) => {
    return string ? string.split(subString, index).join(subString).length : -1;
  },
  normalizeAddress: (address) => {
    return address
      ? address.substr(0, CommonService.getPosition(address, ",", 2))
      : "";
  },
  removeExtraSpacesInString: (str) => {
    return str ? str.replace(/  +/g, " ") : "";
  },

  //analytics impressions added v2 by Raqib --- start

  pushProductImpression: (event, data) => {
    (window.dataLayer || []).push({
      event: event,
      ecommerce: {
        currencyCode: "CLP",
        impressions: data,
      },
    });

    // console.log('impression added');
  },

  googleProductClick: (productObj) => {
    (window.dataLayer || []).push({
      event: "productClick",
      ecommerce: {
        click: {
          actionField: { list: productObj.list, action: "click" }, // Optional list property.
          products: [productObj],
        },
      },
    });
  },

  pushSelectedSeats: (seatsSelected) => {
    console.log("seatsSelectedseatsSelected", seatsSelected);
    (window.dataLayer || []).push({
      event: "detail",
      ecommerce: {
        detail: {
          actionField: {
            list: seatsSelected[0].name.slice(4),
            action: "detail",
          }, // Optional list property.
          products: seatsSelected,
        },
      },
    });
  },

  pushSeatsAddedToCart: (productObj) => {
    (window.dataLayer || []).push({
      event: "addToCart",
      ecommerce: {
        currencyCode: "CLP",
        add: {
          products: [
            {
              // id: productObj.id,
              name: productObj.name, // Name or ID is required.
              price: productObj.price,
              brand: productObj.brand,
              category: productObj.category,
              variant: productObj.variant,
              quantity: productObj.quantity,
            },
          ],
        },
      },
    });
  },

  pushProductCheckout: (allSeats) => {
    (window.dataLayer || []).push({
      event: "checkout",
      ecommerce: {
        checkout: {
          actionField: { step: 1, option: "checkout", action: "checkout" },
          products: allSeats,
        },
      },
    });
  },

  pushProductPurchase: (allSeats, transactionId, revenue) => {
    (window.dataLayer || []).push({
      event: "purchase",
      ecommerce: {
        purchase: {
          actionField: {
            id: transactionId,
            affiliation: "kupos.cl",
            revenue: revenue,
            tax: "0",
          },
          products: allSeats,
        },
      },
    });
  },

  //analytics impressions added v2 by Raqib --- end

  // pushGoogleTagEvent: (event, data) => {
  //   (window.dataLayer || []).push({
  //     event: event,
  //     data,
  //   });
  // },

  // googleProductCheckout: (products, paymentOption, couponSelected, id) => {
  //   (window.dataLayer || []).push({
  //     event: 'checkout',
  //     ecommerce: {
  //       checkout: {
  //         actionField: { option: paymentOption, coupon: couponSelected, id: id },
  //         products: products,
  //       },
  //     },
  //   });
  // },

  // googleProductPurchase: (products, paymentOption, couponSelected, affiliation, id) => {
  //   (window.dataLayer || []).push({
  //     ecommerce: {
  //       purchase: {
  //         actionField: {
  //           option: paymentOption,
  //           coupon: couponSelected,
  //           affiliation: affiliation,
  //           id: id,
  //         },
  //         products: products,
  //       },
  //     },
  //   });
  // },
  // googleRefund: (id, products) => {
  //   (window.dataLayer || []).push({
  //     ecommerce: {
  //       refund: {
  //         actionField: { id: id },
  //         products: products,
  //       },
  //     },
  //   });
  // },

  // convertBusServiceToGoogleProduct: (seat, service, type) => {
  //   console.log('Seat received is----', seat);
  //   console.log('service received is----', service);
  //   console.log('type received is----', type);
  //   if (service) {
  //     return {
  //       name: service.bus_type, // Name or ID is required.
  //       id: service.id,
  //       price: seat.price,
  //       brand: service.operator_service_name,
  //       category: seat.type,
  //       quantity: 1,
  //     };
  //   }
  // },
  encodeUrlAddress: (string) => {
    return string
      .toLowerCase()
      .replace(/, /g, ",")
      .split(" - ")
      .join("_")
      .replace(/ /g, "-")
      .split("/")
      .join("")
      .replace(/_/g, "--");
  },
  decodeUrlAddress: (string) => {
    return string
      .split(",")
      .join(", ")
      .split("--")
      .join("_")
      .split("-")
      .join(" ")
      .split("_")
      .join(" - ")
      .toLowerCase();
  },
  decodeBase64: function (s) {
    var e = {},
      i,
      b = 0,
      c,
      x,
      l = 0,
      a,
      r = "",
      w = String.fromCharCode,
      L = s.length;
    var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0; i < 64; i++) {
      e[A.charAt(i)] = i;
    }
    for (x = 0; x < L; x++) {
      c = e[s.charAt(x)];
      b = (b << 6) + c;
      l += 6;
      while (l >= 8) {
        ((a = (b >>> (l -= 8)) & 0xff) || x < L - 2) && (r += w(a));
      }
    }
    return r;
  },
  aesEncode: (
    string,
    k = "somestringofexactthirtytwolength",
    i = "0000000000000000"
  ) => {
    var key = CryptoJS.enc.Utf8.parse(k);
    var iv = CryptoJS.enc.Utf8.parse(i);
    var encrypted = CryptoJS.AES.encrypt(string, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
    }).toString();
    return encrypted;
  },
  aesDecode: (
    string,
    k = "somestringofexactthirtytwolength",
    i = "0000000000000000"
  ) => {
    var key = CryptoJS.enc.Utf8.parse(k);
    var iv = CryptoJS.enc.Utf8.parse(i);
    var bytes = CryptoJS.AES.decrypt(string, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
    });
    var decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
  },
  metaSecret: (string, store = true) => {
    try {
      let decode64 = atob(string);
      let c = decode64.split("@kupos@");
      let s = CommonService.aesDecode((c[0] || "").split("\n").join(""), c[1]);
      if (store) CommonService.jwt_key = s;
      return s;
    } catch (e) {
      console.log("mscrpt");
    }
  },

  formatCities: (cities) => {
    let formattedCities = [];
    for (let city of cities) {
      formattedCities.push({
        value: city[1],
        label: city[0],
      });
    }
    return formattedCities;
  },

  formatCitiesNew: (cities) => {
    let formattedCities = [];
    Object.values(cities).forEach((city) => {
      formattedCities.push({
        value: city[1],
        label: city[0],
      });
    });
    return formattedCities;
  },

  encodeCity: (city) => {
    return (city || "")
      .replace(/-/g, "_")
      .replace(/ /g, "-")
      .replace(/_/g, "--")
      .toLowerCase();
  },
  decodeCity: (city) => {
    return (city || "")
      .split("--")
      .join("+")
      .split("-")
      .join(" ")
      .split("+")
      .join("-")
      .toLowerCase();
  },

  getOriginSelectedFilteredDestinations: (rawArray, itemToRemove) => {
    if (rawArray && itemToRemove) {
      return rawArray
        .map(function (obj) {
          if (obj.label == itemToRemove.label) {
          } else {
            return obj;
          }
        })
        .filter(function (obj) {
          return typeof obj !== "undefined";
        });
    } else if (!itemToRemove) {
      // return rawArray;
    }
  },

  setLocalEncryp: (key, value) => {
    localStorage.setItem(key, Base64.encode(JSON.stringify(value)));
  },
  getLocalEncryp: (key) => {
    try {
      let localData = localStorage.getItem(key);
      if (localData) return JSON.parse(Base64.decode(localData));
      return null;
    } catch (e) {
      return null;
    }
  },
  setSessionEncryp: (key, value) => {
    sessionStorage.setItem(key, Base64.encode(JSON.stringify(value)));
  },
  getSessionEncryp: (key) => {
    try {
      let localData = sessionStorage.getItem(key);
      if (localData) return JSON.parse(Base64.decode(localData));
      return null;
    } catch (e) {
      return null;
    }
  },
  jwt_key: "",
  newSearchFunction: null,
  clearSearchFunction: null,
  newSearchTranserFunction: null,
  loginCallbackFunction: null,
  passengerDetailsOnward: null,
  passengerDetailsReturn: null,
  passengerContactDetails: null,
};

export default CommonService;
