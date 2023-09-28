import AppData from "./appData";
import CommonService from "./commonService";
import { GooglePlaceDetails } from "./apis/apisPB";
import MAINAPI from "./api";
import DateService from "./dateService";
import { SearchATServices } from "./apis/apisAT";
import { groupBy } from "lodash";

const ATServices = {
  searchATServices: SearchATServices(),
  originAddress: null,
  destinationAddress: null,
  goingDate: null,
  goingTime: null,
  returnDate: null,
  returnTime: null,
  searchService: (params, transferData, setTransferData, setAtServices) => {
    if (transferData.selectedOrigin && transferData.selectedDestination) {
      ATServices.getRoutes(
        transferData.selectedOrigin,
        transferData.selectedDestination,
        transferData.selectedGoingDate,
        transferData.selectedGoingTime,
        0,
        transferData.selectedReturnDate,
        transferData.selectedReturnTime,
        setAtServices
      );
    } else {
      if (AppData.AT_URL) {
        //   this.routesSearched = true;
        let decodedOrigin = CommonService.decodeUrlAddress(params.city_origin);

        let decodedDest = CommonService.decodeUrlAddress(
          params.city_destination
        );

        ATServices.getOriginDetails(
          decodedOrigin,
          decodedDest,
          transferData,
          setTransferData,
          setAtServices
        );
        // this.getPlaceDetails(decodedDest);
      }
    }
    ATServices.originAddress = params.city_origin;
    ATServices.destinationAddress = params.city_destination;
    ATServices.goingDate = params.going_date;
    ATServices.goingTime = params.going_time;
    ATServices.returnDate = params.return_date;
    ATServices.returnTime = params.return_time;
  },

  getOriginDetails: (
    origin,
    destination,
    transferData,
    setTransferData,
    setAtServices
  ) => {
    // const getGooglePlaceDetails = GooglePlaceDetails();
    let freshTransferData = transferData;

    // if (
    //   this.props.home.transferData &&
    //   this.props.home.transferData.selectedOrigin
    // ) {
    //   freshTransferData = this.props.home.transferData;
    // } else {
    //   freshTransferData = JSON.parse(sessionStorage.getItem("transferData"));
    // }

    let add;

    if (
      freshTransferData &&
      freshTransferData.selectedOrigin &&
      freshTransferData.selectedOrigin.latitude
    ) {
      let loc = {
        lat: freshTransferData.selectedOrigin.latitude,
        lng: freshTransferData.selectedOrigin.longitude,
      };
      add = {
        location: loc,
        address: origin,
        airport_loc_id: freshTransferData.selectedOrigin.airport_loc_id,
      };

      ATServices.originAddress = add;

      setTransferData({ ...transferData, selectedOrigin: add });

      ATServices.getPlace(
        destination,
        transferData,
        setTransferData,
        setAtServices
      );
    } else if (
      freshTransferData &&
      freshTransferData.selectedOrigin &&
      freshTransferData.selectedOrigin.location &&
      freshTransferData.selectedOrigin.airport_loc_id
    ) {
      let loc = {
        lat: freshTransferData.selectedOrigin.location.lat,
        lng: freshTransferData.selectedOrigin.location.lng,
      };
      add = {
        location: loc,
        address: origin,
        airport_loc_id: freshTransferData.selectedOrigin.airport_loc_id,
      };
      ATServices.originAddress = add;

      setTransferData({ ...transferData, selectedOrigin: add });

      ATServices.getPlace(
        destination,
        transferData,
        setTransferData,
        setAtServices
      );
    } else {
      let url =
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        origin +
        "&key=" +
        "AIzaSyC7p4MEDHEV9rBizH-m784L1QdQqURetd0";

      MAINAPI("GET", url, {}, false, true)
        .then((res) => {
          if (
            res &&
            (res.results || []).length > 0 &&
            res.results[0].geometry &&
            res.results[0].geometry.location
          ) {
            add = {
              location: res.results[0].geometry.location,
              address: origin,
            };
            ATServices.originAddress = add;
            setTransferData({ ...transferData, selectedOrigin: add });

            ATServices.getPlace(
              destination,
              transferData,
              setTransferData,
              setAtServices
            );
          } else {
            add = {
              location: {
                lat: freshTransferData.selectedOrigin.location.lat,
                lng: freshTransferData.selectedOrigin.location.lon,
              },
              address: origin,
            };

            ATServices.originAddress = add;

            setTransferData({ ...transferData, selectedOrigin: add });

            ATServices.getPlace(
              destination,
              transferData,
              setTransferData,
              setAtServices
            );
          }
        })
        .catch((err) => {
          console.log(err?.response);
          //   if (callback) callback(err?.response);
        });
    }
  },

  getPlace: (place, transferData, setTransferData, setAtServices) => {
    let freshTransferData = transferData;

    // if (
    //   this.props.home.transferData &&
    //   this.props.home.transferData.selectedOrigin
    // ) {
    //   freshTransferData = this.props.home.transferData;
    // } else {
    //   freshTransferData = JSON.parse(sessionStorage.getItem("transferData"));
    // }
    let add;

    if (
      freshTransferData &&
      freshTransferData.selectedDestination &&
      freshTransferData.selectedDestination.latitude
    ) {
      let loc = {
        lat: freshTransferData.selectedDestination.latitude,
        lng: freshTransferData.selectedDestination.longitude,
      };
      add = {
        location: loc,
        address: place,
        airport_loc_id: freshTransferData.selectedDestination.airport_loc_id,
      };

      setTransferData({
        ...transferData,
        selectedDestination: add,
        selectedOrigin: ATServices.originAddress,
        selectedStartDate: ATServices.goingDate,
        selectedStartTime: ATServices.goingTime,
        selectedEndDate: ATServices.returnDate,
        selectedEndTime: ATServices.returnTime,
      });

      ATServices.searchTheExactServicesForTheLocationsDeduced(
        transferData,
        setAtServices
      );
    } else if (
      freshTransferData &&
      freshTransferData.selectedDestination &&
      freshTransferData.selectedDestination.location &&
      freshTransferData.selectedDestination.airport_loc_id
    ) {
      let loc = {
        lat: freshTransferData.selectedDestination.location.lat,
        lng: freshTransferData.selectedDestination.location.lng,
      };
      add = {
        location: loc,
        address: place,
        airport_loc_id: freshTransferData.selectedDestination.airport_loc_id,
      };

      setTransferData({
        ...transferData,
        selectedDestination: add,
        selectedOrigin: ATServices.originAddress,
        selectedStartDate: ATServices.goingDate,
        selectedStartTime: ATServices.goingTime,
        selectedEndDate: ATServices.returnDate,
        selectedEndTime: ATServices.returnTime,
      });

      ATServices.searchTheExactServicesForTheLocationsDeduced(
        transferData,
        setAtServices
      );
    } else {
      let url =
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        place +
        "&key=" +
        "AIzaSyC7p4MEDHEV9rBizH-m784L1QdQqURetd0";

      MAINAPI("GET", url, {}, false, true).then((res) => {
        if (
          res &&
          (res.results || []).length > 0 &&
          res.results[0].geometry &&
          res.results[0].geometry.location
        ) {
          let add = {
            location: res.results[0].geometry.location,
            address: place,
          };

          let initData = {
            ...transferData,
            selectedDestination: add,
            selectedOrigin: ATServices.originAddress,
            selectedStartDate: ATServices.goingDate,
            selectedStartTime: ATServices.goingTime,
            selectedEndDate: ATServices.returnDate,
            selectedEndTime: ATServices.returnTime,
          };
          setTransferData(initData);

          ATServices.searchTheExactServicesForTheLocationsDeduced(
            initData,
            setAtServices
          );
        } else {
          add = {
            location: {
              lat: freshTransferData.selectedDestination.location.lat,
              lng:
                freshTransferData.selectedDestination.location.lon ||
                freshTransferData.selectedDestination.location.lng,
            },
            address: place,
          };

          setTransferData({
            ...transferData,
            selectedDestination: add,
            selectedOrigin: ATServices.originAddress,
            selectedStartDate: ATServices.goingDate,
            selectedStartTime: ATServices.goingTime,
            selectedEndDate: ATServices.returnDate,
            selectedEndTime: ATServices.returnTime,
          });
          ATServices.searchTheExactServicesForTheLocationsDeduced(
            transferData,
            setAtServices
          );
        }
      });
    }
  },

  searchTheExactServicesForTheLocationsDeduced: (
    transferData,
    setAtServices
  ) => {
    if (AppData.AT_URL && transferData) {
      //   this.routesSearched = true;
      ATServices.getRoutes(
        transferData.selectedOrigin,
        transferData.selectedDestination,
        DateService.changeDateFormat(
          transferData.selectedGoingDate,
          "dd-mm-yyyy",
          "yyyy-mm-dd"
        ),
        transferData.selectedGoingTime,
        0,
        DateService.changeDateFormat(
          transferData.selectedReturnDate,
          "dd-mm-yyyy",
          "yyyy-mm-dd"
        ),
        transferData.selectedReturnTime,
        setAtServices
      );
    }
  },

  getRoutes: (
    origin,
    destination,
    date,
    time,
    kupos = 0,
    returnDate,
    returnTime,
    setAtServices
  ) => {
    let formatedPickDate = DateService.changeDateFormat(
      date,
      "dd-mm-yyyy",
      "yyyy-mm-dd"
    );
    let utcStg = formatedPickDate + "T" + time + ":00Z";

    let utcReturnStg = "";
    let formatedReturnDate = "";

    if (returnDate && returnDate !== null && returnTime) {
      formatedReturnDate = DateService.changeDateFormat(
        returnDate,
        "dd-mm-yyyy",
        "yyyy-mm-dd"
      );
      utcReturnStg = formatedReturnDate + "T" + returnTime + ":00Z";
    }

    let trfrType = 0;

    if (origin && origin.airport_loc_id) {
      trfrType = 1;
    } else if (destination && destination.airport_loc_id) {
      trfrType = 2;
    }

    let urlParams = {
      pLong: origin?.longitude
        ? origin.longitude
        : origin.location?.lng || origin.location?.lon,
      pLat: origin?.latitude ? origin.latitude : origin.location?.lat,
      pLocId: origin.airport_loc_id ? origin.airport_loc_id : 0,
      pickDate: formatedPickDate,
      pickDateStg: utcStg,
      dLong: destination?.longitude
        ? destination.longitude
        : destination.location?.lng || destination.location?.lon,
      dLat: destination?.latitude
        ? destination.latitude
        : destination.location?.lat,
      dLocId: destination.airport_loc_id ? destination.airport_loc_id : 0,
      returnDate: formatedReturnDate,
      returnDateStg: utcReturnStg,
      noOfSeats: kupos,
      bookDateTime: DateService.getCurrentTimeUTC(),
      trfrType: trfrType,
    };

    ATServices.searchATServices({
      callback: (res) => {
        setAtServices(res.data);
        return;

        setAtServices({
          data: {
            onward_service_list: [
              {
                id: 0,
                client_code: "TRANSVIP",
                client_name: "Transvip",
                client_logo:
                  "https://live.staticflickr.com/65535/51344557899_8039370173_o.png ",
                client_type: 2,
                pickup_location_id: 0,
                pickup_location_name: "",
                pickup_location_type: "",
                pickup_location_area_id: 0,
                pickup_location_area_name: "",
                drop_location_id: 0,
                drop_location_name: "",
                drop_location_type: "",
                drop_location_area_id: 0,
                drop_location_area_name: "",
                service_id: 13,
                service_type: "Auto",
                price_type: "PER_VEHICLE",
                price: 19500,
                seat_capacity: 3,
                service_image_1:
                  "https://s3.amazonaws.com/transvip/LIVE/service_images/6ure1594336044713-taxi330.png",
                service_image_2: "",
                service_image_3: "",
                svc_additional_info:
                  "Una vez confirmada la reserva, se coordinará la hora de recogida a través de los medios de contacto señalados al momento de la compra.",
                svc_cancellation_info:
                  "15% retención en cancelaciones realizadas hasta 6 horas antes de la hora de salida del viaje. 100% retención en cancelaciones realizadas dentro de las últimas 6 horas antes de la hora del viaje.",
                svc_restriction_info:
                  "3 maletas (2 equipajes de bodega +  1 equipaje de mano).",
                is_authorized: 1,
                configured_rating: 0,
                user_rating: 4.8,
                transvip_meta_data: {
                  route_id: 2152277,
                  controlled_way_flag: 1,
                  via_controlled_price: 2750,
                  eta_in_seconds: 566,
                  route_type: 1,
                  unit_fare: 19500,
                  estimated_cost: 19500,
                  base_fare: 19500,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "0",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 10,
                  here_map_base_time: 663,
                  time_trip_shared_svc: 35,
                  tollcost_eta: 566,
                  tvltime_svc_pickup: 10,
                  trip_type: "Z",
                  branch_id: 1,
                },
              },
              {
                id: 0,
                client_code: "TRANSVIP",
                client_name: "Transvip",
                client_logo:
                  "https://live.staticflickr.com/65535/51344557899_8039370173_o.png ",
                client_type: 2,
                pickup_location_id: 0,
                pickup_location_name: "",
                pickup_location_type: "",
                pickup_location_area_id: 0,
                pickup_location_area_name: "",
                drop_location_id: 0,
                drop_location_name: "",
                drop_location_type: "",
                drop_location_area_id: 0,
                drop_location_area_name: "",
                service_id: 2,
                service_type: "Van",
                price_type: "PER_VEHICLE",
                price: 29000,
                seat_capacity: 7,
                service_image_1:
                  "https://s3.amazonaws.com/transvip/LIVE/service_images/yC2h1594335972454-minibus330.png",
                service_image_2: "",
                service_image_3: "",
                svc_additional_info:
                  "Una vez confirmada la reserva, se coordinará la hora de recogida a través de los medios de contacto señalados al momento de la compra.",
                svc_cancellation_info:
                  "15% retención en cancelaciones realizadas hasta 6 horas antes de la hora de salida del viaje. 100% retención en cancelaciones realizadas dentro de las últimas 6 horas antes de la hora del viaje.",
                svc_restriction_info: "7 maletas (equipaje de bodega)",
                is_authorized: 1,
                configured_rating: 0,
                user_rating: 4.8,
                transvip_meta_data: {
                  route_id: 2152392,
                  controlled_way_flag: 1,
                  via_controlled_price: 2930,
                  eta_in_seconds: 566,
                  route_type: 1,
                  unit_fare: 29000,
                  estimated_cost: 29000,
                  base_fare: 29000,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "0",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 10,
                  here_map_base_time: 663,
                  time_trip_shared_svc: 35,
                  tollcost_eta: 566,
                  tvltime_svc_pickup: 10,
                  trip_type: "Z",
                  branch_id: 1,
                },
              },
              {
                id: 0,
                client_code: "TRANSVIP",
                client_name: "Transvip",
                client_logo:
                  "https://live.staticflickr.com/65535/51344557899_8039370173_o.png ",
                client_type: 2,
                pickup_location_id: 0,
                pickup_location_name: "",
                pickup_location_type: "",
                pickup_location_area_id: 0,
                pickup_location_area_name: "",
                drop_location_id: 0,
                drop_location_name: "",
                drop_location_type: "",
                drop_location_area_id: 0,
                drop_location_area_name: "",
                service_id: 4,
                service_type: "Compartido",
                price_type: "PER_PERSON",
                price: 7600,
                seat_capacity: 7,
                service_image_1:
                  "https://s3.amazonaws.com/transvip/LIVE/service_images/Rdn11594335836562-compartido330.png",
                service_image_2: "",
                service_image_3: "",
                svc_additional_info:
                  "Una vez confirmada la reserva, se coordinará la hora de recogida a través de los medios de contacto señalados al momento de la compra.",
                svc_cancellation_info:
                  "15% retención en cancelaciones realizadas hasta 6 horas antes de la hora de salida del viaje. 100% retención en cancelaciones realizadas dentro de las últimas 6 horas antes de la hora del viaje.",
                svc_restriction_info:
                  "1 equipaje de bodega + 1 equipaje de mano. Se permite llevar extra equipaje por un cargo adicional.",
                is_authorized: 1,
                configured_rating: 0,
                user_rating: 4.8,
                transvip_meta_data: {
                  route_id: 2152540,
                  controlled_way_flag: 1,
                  via_controlled_price: 730,
                  eta_in_seconds: 2666,
                  route_type: 1,
                  unit_fare: 7600,
                  estimated_cost: 0,
                  base_fare: 7600,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "1",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 10,
                  here_map_base_time: 663,
                  time_trip_shared_svc: 35,
                  tollcost_eta: 566,
                  tvltime_svc_pickup: 10,
                  trip_type: "Z",
                  branch_id: 1,
                },
              },
              {
                id: 1975,
                client_code: "FASTOUR",
                client_name: "Funny Tour Chile",
                client_logo:
                  "https://live.staticflickr.com/65535/51360603802_455581cccc_o.png",
                client_type: 0,
                pickup_location_id: 367,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "",
                pickup_location_area_id: 363,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 357,
                drop_location_name: "Quinta Normal",
                drop_location_type: "",
                drop_location_area_id: 339,
                drop_location_area_name: "Quinta Normal",
                service_id: 51,
                service_type: "Exclusivo",
                price_type: "PER_VEHICLE",
                price: 24000,
                seat_capacity: 3,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1628196561-Suv 3.png",
                service_image_2:
                  "https://gt-service-images.s3.amazonaws.com/1628196567-Suv 2.png",
                service_image_3:
                  "https://gt-service-images.s3.amazonaws.com/1628196574-suv 1.png",
                svc_additional_info:
                  "Un ejecutivo se comunicará con usted para coordinar la hora exacta de retiro.",
                svc_cancellation_info:
                  "Cancelación 24 horas antes de la hora del viaje se devuelve el 100% del valor de pasaje. Cancelación 2 horas antes la hora del viaje no corresponde devolución de dinero.\n",
                svc_restriction_info:
                  "1 bolso de mano y 1 bolso de bodega por pasajero. En caso de llevar equipaje extra el pasajero debe notificar al ejecutivo para cotizar la tarifa extra correspondiente.  \n",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 4.5,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 1976,
                client_code: "FASTOUR",
                client_name: "Funny Tour Chile",
                client_logo:
                  "https://live.staticflickr.com/65535/51360603802_455581cccc_o.png",
                client_type: 0,
                pickup_location_id: 367,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "",
                pickup_location_area_id: 363,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 357,
                drop_location_name: "Quinta Normal",
                drop_location_type: "",
                drop_location_area_id: 339,
                drop_location_area_name: "Quinta Normal",
                service_id: 52,
                service_type: "Exclusivo  ",
                price_type: "PER_VEHICLE",
                price: 29000,
                seat_capacity: 4,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1628196893-Suv 3.png",
                service_image_2:
                  "https://gt-service-images.s3.amazonaws.com/1628196923-Suv 2.png",
                service_image_3:
                  "https://gt-service-images.s3.amazonaws.com/1628196929-suv 1.png",
                svc_additional_info:
                  "Un ejecutivo se comunicará con usted para coordinar la hora exacta de retiro.\n",
                svc_cancellation_info:
                  "Cancelación 24 horas antes de la hora del viaje se devuelve el 100% del valor de pasaje. Cancelación 2 horas antes la hora del viaje no corresponde devolución de dinero.\n",
                svc_restriction_info:
                  "1 bolso de mano y 1 bolso de bodega por pasajero. En caso de llevar equipaje extra el pasajero debe notificar al ejecutivo para cotizar la tarifa extra correspondiente. \n",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 4.5,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 1977,
                client_code: "FASTOUR",
                client_name: "Funny Tour Chile",
                client_logo:
                  "https://live.staticflickr.com/65535/51360603802_455581cccc_o.png",
                client_type: 0,
                pickup_location_id: 367,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "",
                pickup_location_area_id: 363,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 357,
                drop_location_name: "Quinta Normal",
                drop_location_type: "",
                drop_location_area_id: 339,
                drop_location_area_name: "Quinta Normal",
                service_id: 53,
                service_type: "Exclusivo   ",
                price_type: "PER_VEHICLE",
                price: 34000,
                seat_capacity: 7,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1628196939-Mercedes 2.png",
                service_image_2:
                  "https://gt-service-images.s3.amazonaws.com/1628541401-2021-08-09_163536.png",
                service_image_3:
                  "https://gt-service-images.s3.amazonaws.com/1628541406-2021-08-09_163314.png",
                svc_additional_info:
                  "Un ejecutivo se comunicará con usted para coordinar la hora exacta de retiro.",
                svc_cancellation_info:
                  "Cancelación 24 horas antes de la hora del viaje se devuelve el 100% del valor de pasaje. Cancelación 2 horas antes la hora del viaje no corresponde devolución de dinero.",
                svc_restriction_info:
                  "1 bolso de mano y 1 bolso de bodega por pasajero. En caso de llevar equipaje extra el pasajero debe notificar al ejecutivo para cotizar la tarifa extra correspondiente. ",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 4.5,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 2832,
                client_code: "TRANSPORTEYA",
                client_name: "Transporte YA",
                client_logo:
                  "https://live.staticflickr.com/65535/51918203374_31cdaf9e79_o.png",
                client_type: 0,
                pickup_location_id: 619,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "",
                pickup_location_area_id: 624,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 595,
                drop_location_name: "Quinta Normal",
                drop_location_type: "",
                drop_location_area_id: 600,
                drop_location_area_name: "Quinta Normal",
                service_id: 75,
                service_type: "Exclusivo",
                price_type: "PER_VEHICLE",
                price: 20800,
                seat_capacity: 3,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1646398256-20210930-HYUNDAI-STARIA-SUDAMERICA-CHILE-PRECIOS-CARACTERISTICAS-VERSIONES-01.jpeg",
                service_image_2:
                  "https://gt-service-images.s3.amazonaws.com/1646398427-ImagenPegada-1.png",
                service_image_3:
                  "https://gt-service-images.s3.amazonaws.com/1646398467-nueva-hyundai-h350-3.jpeg",
                svc_additional_info:
                  "Después de realizar su reserva un ejecutivo se comunicara con usted para coordinar la hora de retiro.",
                svc_cancellation_info:
                  "Cancelación 24 horas horas antes del viaje: Se devuelve el 100% del monto pagado.                             \nCancelación 6 horas antes de la hora del viaje: Se retiene el 15%. del monto pagado.\n\n",
                svc_restriction_info:
                  "El equipaje permitido está sujeto a la capacidad del portamaletas del vehículo asignado.",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 2.8125,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 2833,
                client_code: "TRANSPORTEYA",
                client_name: "Transporte YA",
                client_logo:
                  "https://live.staticflickr.com/65535/51918203374_31cdaf9e79_o.png",
                client_type: 0,
                pickup_location_id: 619,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "",
                pickup_location_area_id: 624,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 595,
                drop_location_name: "Quinta Normal",
                drop_location_type: "",
                drop_location_area_id: 600,
                drop_location_area_name: "Quinta Normal",
                service_id: 76,
                service_type: "Exclusivo ",
                price_type: "PER_VEHICLE",
                price: 31500,
                seat_capacity: 7,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1646398521-20210930-HYUNDAI-STARIA-SUDAMERICA-CHILE-PRECIOS-CARACTERISTICAS-VERSIONES-01.jpeg",
                service_image_2:
                  "https://gt-service-images.s3.amazonaws.com/1646398530-ImagenPegada-1.png",
                service_image_3:
                  "https://gt-service-images.s3.amazonaws.com/1646398537-nueva-hyundai-h350-3.jpeg",
                svc_additional_info:
                  "Después de realizar su reserva un ejecutivo se comunicara con usted para coordinar la hora de retiro.",
                svc_cancellation_info:
                  "Cancelación 24 horas horas antes del viaje: Se devuelve el 100% del monto pagado.                             \nCancelación 6 horas antes de la hora del viaje: Se retiene el 15%. del monto pagado.\n",
                svc_restriction_info:
                  "El equipaje permitido está sujeto a la capacidad del portamaletas del vehículo asignado.",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 2.8125,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 2834,
                client_code: "TRANSPORTEYA",
                client_name: "Transporte YA",
                client_logo:
                  "https://live.staticflickr.com/65535/51918203374_31cdaf9e79_o.png",
                client_type: 0,
                pickup_location_id: 619,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "",
                pickup_location_area_id: 624,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 595,
                drop_location_name: "Quinta Normal",
                drop_location_type: "",
                drop_location_area_id: 600,
                drop_location_area_name: "Quinta Normal",
                service_id: 77,
                service_type: "Exclusivo  ",
                price_type: "PER_VEHICLE",
                price: 41140,
                seat_capacity: 10,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1646398548-20210930-HYUNDAI-STARIA-SUDAMERICA-CHILE-PRECIOS-CARACTERISTICAS-VERSIONES-01.jpeg",
                service_image_2:
                  "https://gt-service-images.s3.amazonaws.com/1646398558-ImagenPegada-1.png",
                service_image_3:
                  "https://gt-service-images.s3.amazonaws.com/1646398565-nueva-hyundai-h350-3.jpeg",
                svc_additional_info:
                  "Después de realizar su reserva un ejecutivo se comunicara con usted para coordinar la hora de retiro.",
                svc_cancellation_info:
                  "Cancelación 24 horas horas antes del viaje: Se devuelve el 100% del monto pagado.                             \nCancelación 6 horas antes de la hora del viaje: Se retiene el 15%. del monto pagado.\n",
                svc_restriction_info:
                  "El equipaje permitido está sujeto a la capacidad del portamaletas del vehículo asignado.",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 2.8125,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 3551,
                client_code: "TRANSPORTESJM",
                client_name: "transportesjm",
                client_logo:
                  "https://live.staticflickr.com/65535/52087177664_be7511de16_o.png",
                client_type: 0,
                pickup_location_id: 732,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "",
                pickup_location_area_id: 743,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 708,
                drop_location_name: "Quinta Normal",
                drop_location_type: "",
                drop_location_area_id: 706,
                drop_location_area_name: "Quinta Normal",
                service_id: 96,
                service_type: "Van",
                price_type: "PER_VEHICLE",
                price: 23500,
                seat_capacity: 7,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1652730898-1.jpg",
                service_image_2:
                  "https://gt-service-images.s3.amazonaws.com/1652730916-3.jpg",
                service_image_3:
                  "https://gt-service-images.s3.amazonaws.com/1652730938-4.png",
                svc_additional_info:
                  "Después de realizar su reserva un ejecutivo se comunicara con usted para coordinar la hora de retiro.",
                svc_cancellation_info:
                  "Retención del 15% en la cancelación realizada hasta 3 horas antes de la salida del viaje.\n\n100% de la retención en cancelaciones realizadas dentro de las últimas 3 horas antes de la hora del viaje.\n",
                svc_restriction_info:
                  "El equipaje permitido está sujeto a la capacidad del portamaletas del vehículo asignado.\n",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 3.388888888888889,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 3705,
                client_code: "FRALIVANTUR",
                client_name: "Fralivantur",
                client_logo:
                  "https://live.staticflickr.com/65535/52385857720_410fb8f5f3_o.png",
                client_type: 0,
                pickup_location_id: 806,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "Airport Terminal",
                pickup_location_area_id: 808,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 782,
                drop_location_name: "Quinta Normal",
                drop_location_type: "Generic Location",
                drop_location_area_id: 784,
                drop_location_area_name: "Quinta Normal",
                service_id: 100,
                service_type: "Exclusivo ",
                price_type: "PER_VEHICLE",
                price: 22500,
                seat_capacity: 3,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1654871233-Citroen Spacetourer (1).jpg",
                service_image_2:
                  "https://gt-service-images.s3.amazonaws.com/1654871246-Hyundai H1 (1).jpg",
                service_image_3:
                  "https://gt-service-images.s3.amazonaws.com/1654871272-Peugeot Expert (1).jpg",
                svc_additional_info:
                  "1. Un ejecutivo se comunicará con el pasajero para confirmar su reserva. 2. La reserva es válida para la fecha y hora señalada para el cliente.",
                svc_cancellation_info:
                  "Mínimo 24 horas antes de la hora del traslado: Sin cargo de cancelación. Mínimo 5 horas antes de la hora del viaje: Se retiene el 20%. Si es inferior a 5 horas antes de la hora del viaje: Se retiene el 100% del valor del pasaje",
                svc_restriction_info:
                  "El equipaje permitido es de 1 bolso de mano y 1 maleta de bodega por pasajero, dependiendo de las condiciones del servicio contratado. El sector de asiento es exclusivo para pasajeros.El equipaje de mano es de entera responsabilidad de",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 5,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 3706,
                client_code: "FRALIVANTUR",
                client_name: "Fralivantur",
                client_logo:
                  "https://live.staticflickr.com/65535/52385857720_410fb8f5f3_o.png",
                client_type: 0,
                pickup_location_id: 806,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "Airport Terminal",
                pickup_location_area_id: 808,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 782,
                drop_location_name: "Quinta Normal",
                drop_location_type: "Generic Location",
                drop_location_area_id: 784,
                drop_location_area_name: "Quinta Normal",
                service_id: 99,
                service_type: "Exclusivo",
                price_type: "PER_VEHICLE",
                price: 25000,
                seat_capacity: 7,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1654871185-Citroen Spacetourer (2).jpg",
                service_image_2:
                  "https://gt-service-images.s3.amazonaws.com/1654871197-Hyundai H1 (1).jpg",
                service_image_3:
                  "https://gt-service-images.s3.amazonaws.com/1654871215-Peugeot Expert (1).jpg",
                svc_additional_info:
                  "1. Un ejecutivo se comunicará con el pasajero para confirmar su reserva. 2. La reserva es válida para la fecha y hora señalada para el cliente. ",
                svc_cancellation_info:
                  "Mínimo 24 horas antes de la hora del traslado: Sin cargo de cancelación. Mínimo 5 horas antes de la hora del viaje: Se retiene el 20%. Si es inferior a 5 horas antes de la hora del viaje: Se retiene el 100% del valor del pasaje",
                svc_restriction_info:
                  "Cada pasajero tendrá derecho a cierta cantidad de equipaje, dependiendo de las condiciones del servicio contratado. El sector de asiento es exclusivo para pasajeros.El equipaje de mano es de entera responsabilidad del pasajero ",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 5,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 4067,
                client_code: "TRANSPORTEBARRIOS",
                client_name: "Transporte Berrios",
                client_logo:
                  "https://live.staticflickr.com/65535/52213854716_8a7b78da62_o.png \thttps://live.staticflickr.com/65535/52213854716_8a7b78da62_o.png ",
                client_type: 0,
                pickup_location_id: 925,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "Airport Terminal",
                pickup_location_area_id: 914,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 901,
                drop_location_name: "Quinta Normal",
                drop_location_type: "Generic Location",
                drop_location_area_id: 890,
                drop_location_area_name: "Quinta Normal",
                service_id: 111,
                service_type: "Exclusivo",
                price_type: "PER_VEHICLE",
                price: 20000,
                seat_capacity: 4,
                service_image_1: "",
                service_image_2: "",
                service_image_3: "",
                svc_additional_info:
                  "Una vez confirmada la reserva, se coordinará la hora de recogida a través de los medios de contacto señalados al momento de la compra.",
                svc_cancellation_info:
                  "12 horas antes del viaje: Se devuelve el 100% del monto pagado.1 hora antes de la hora del viaje: Se retiene el 20%. del monto pagado. El plazo límite de cancelación es de Una (1) hora antes de la hora del servicio.",
                svc_restriction_info:
                  " 1 bolso de mano y 1 bolso de viaje. * Equipaje extra, el pasajero debe notificar al ejecutivo para cotizar la tarifa correspondiente.",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 1,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 4069,
                client_code: "TRANSPORTEBARRIOS",
                client_name: "Transporte Berrios",
                client_logo:
                  "https://live.staticflickr.com/65535/52213854716_8a7b78da62_o.png \thttps://live.staticflickr.com/65535/52213854716_8a7b78da62_o.png ",
                client_type: 0,
                pickup_location_id: 925,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "Airport Terminal",
                pickup_location_area_id: 914,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 901,
                drop_location_name: "Quinta Normal",
                drop_location_type: "Generic Location",
                drop_location_area_id: 890,
                drop_location_area_name: "Quinta Normal",
                service_id: 113,
                service_type: "Exclusivo ",
                price_type: "PER_VEHICLE",
                price: 25000,
                seat_capacity: 10,
                service_image_1: "",
                service_image_2: "",
                service_image_3: "",
                svc_additional_info:
                  "Una vez confirmada la reserva, se coordinará la hora de recogida a través de los medios de contacto señalados al momento de la compra.",
                svc_cancellation_info:
                  "12 horas antes del viaje: Se devuelve el 100% del monto pagado.1 hora antes de la hora del viaje: Se retiene el 20%. del monto pagado. El plazo límite de cancelación es de Una (1) hora antes de la hora del servicio.",
                svc_restriction_info:
                  " 1 bolso de mano y 1 bolso de viaje. * Equipaje extra, el pasajero debe notificar al ejecutivo para cotizar la tarifa correspondiente.",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 1,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 4250,
                client_code: "SERVICIOSAEROPUERTO",
                client_name: "Servicios Aeropuerto",
                client_logo:
                  "https://live.staticflickr.com/65535/52591859664_abe206d945_o.png",
                client_type: 0,
                pickup_location_id: 1004,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "Airport Terminal",
                pickup_location_area_id: 969,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 980,
                drop_location_name: "Quinta Normal",
                drop_location_type: "Generic Location",
                drop_location_area_id: 945,
                drop_location_area_name: "Quinta Normal",
                service_id: 118,
                service_type: "Exclusivo",
                price_type: "PER_VEHICLE",
                price: 22000,
                seat_capacity: 3,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1675179467-Corolla.jpg",
                service_image_2:
                  "https://gt-service-images.s3.amazonaws.com/1675179472-Celysee.jpg",
                service_image_3:
                  "https://gt-service-images.s3.amazonaws.com/1675179477-Versa.jpg",
                svc_additional_info:
                  "Después de realizar su reserva un ejecutivo se comunicara con usted para coordinar la hora de retiro.",
                svc_cancellation_info:
                  "Cancelación 24 horas horas antes del viaje: Se devuelve el 100% del monto pagado. Cancelación hasta 12 horas antes de la hora del viaje: Se retiene el 50% del monto pagado. Cancelación 6 horas antes de la hora del viaje: Se retiene el 100% del monto pagad",
                svc_restriction_info:
                  "El equipaje permitido está sujeto a la capacidad del portamaletas del vehículo asignado.",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 0,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 4101,
                client_code: "T\u0026TRANSITCHILE",
                client_name: "T\u0026Transit Chile",
                client_logo:
                  "https://live.staticflickr.com/65535/52624598241_6e85ba6992_o.png",
                client_type: 0,
                pickup_location_id: 1067,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "Airport Terminal",
                pickup_location_area_id: 1032,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 1043,
                drop_location_name: "Quinta Normal",
                drop_location_type: "Generic Location",
                drop_location_area_id: 1008,
                drop_location_area_name: "Quinta Normal",
                service_id: 117,
                service_type: "Exclusivo",
                price_type: "PER_VEHICLE",
                price: 27900,
                seat_capacity: 7,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1674505800-WhatsApp Image 2023-01-23 at 11.26.07 AM.jpeg",
                service_image_2: "",
                service_image_3: "",
                svc_additional_info:
                  "Después de realizar su reserva un ejecutivo se comunicará con usted para coordinar la hora de retiro.",
                svc_cancellation_info:
                  "Cancelación 24 horas antes del viaje, se devuelve el 100%; pasadas las 24 horas se puede reagendar para otra fecha. Cancelación 6 horas antes del viaje no corresponde devolución del dinero.\n",
                svc_restriction_info:
                  "1 maleta de 20 kg por pasajero y 1 bolso de mano. En caso de llevar equipaje extra debe notificar al ejecutivo para evaluar la tarifa.",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 0,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
            ],
            return_service_list: [
              {
                id: 1976,
                client_code: "FASTOUR",
                client_name: "Funny Tour Chile",
                client_logo:
                  "https://live.staticflickr.com/65535/51360603802_455581cccc_o.png",
                client_type: 0,
                pickup_location_id: 367,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "",
                pickup_location_area_id: 363,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 357,
                drop_location_name: "Quinta Normal",
                drop_location_type: "",
                drop_location_area_id: 339,
                drop_location_area_name: "Quinta Normal",
                service_id: 52,
                service_type: "Exclusivo  ",
                price_type: "PER_VEHICLE",
                price: 29000,
                seat_capacity: 4,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1628196893-Suv 3.png",
                service_image_2:
                  "https://gt-service-images.s3.amazonaws.com/1628196923-Suv 2.png",
                service_image_3:
                  "https://gt-service-images.s3.amazonaws.com/1628196929-suv 1.png",
                svc_additional_info:
                  "Un ejecutivo se comunicará con usted para coordinar la hora exacta de retiro.\n",
                svc_cancellation_info:
                  "Cancelación 24 horas antes de la hora del viaje se devuelve el 100% del valor de pasaje. Cancelación 2 horas antes la hora del viaje no corresponde devolución de dinero.\n",
                svc_restriction_info:
                  "1 bolso de mano y 1 bolso de bodega por pasajero. En caso de llevar equipaje extra el pasajero debe notificar al ejecutivo para cotizar la tarifa extra correspondiente. \n",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 4.5,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 1977,
                client_code: "FASTOUR",
                client_name: "Funny Tour Chile",
                client_logo:
                  "https://live.staticflickr.com/65535/51360603802_455581cccc_o.png",
                client_type: 0,
                pickup_location_id: 367,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "",
                pickup_location_area_id: 363,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 357,
                drop_location_name: "Quinta Normal",
                drop_location_type: "",
                drop_location_area_id: 339,
                drop_location_area_name: "Quinta Normal",
                service_id: 53,
                service_type: "Exclusivo   ",
                price_type: "PER_VEHICLE",
                price: 34000,
                seat_capacity: 7,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1628196939-Mercedes 2.png",
                service_image_2:
                  "https://gt-service-images.s3.amazonaws.com/1628541401-2021-08-09_163536.png",
                service_image_3:
                  "https://gt-service-images.s3.amazonaws.com/1628541406-2021-08-09_163314.png",
                svc_additional_info:
                  "Un ejecutivo se comunicará con usted para coordinar la hora exacta de retiro.",
                svc_cancellation_info:
                  "Cancelación 24 horas antes de la hora del viaje se devuelve el 100% del valor de pasaje. Cancelación 2 horas antes la hora del viaje no corresponde devolución de dinero.",
                svc_restriction_info:
                  "1 bolso de mano y 1 bolso de bodega por pasajero. En caso de llevar equipaje extra el pasajero debe notificar al ejecutivo para cotizar la tarifa extra correspondiente. ",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 4.5,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
              {
                id: 2832,
                client_code: "TRANSPORTEYA",
                client_name: "Transporte YA",
                client_logo:
                  "https://live.staticflickr.com/65535/51918203374_31cdaf9e79_o.png",
                client_type: 0,
                pickup_location_id: 619,
                pickup_location_name:
                  "SCL, Santiago, Chile - Aeropuerto Arturo Merino Benítez",
                pickup_location_type: "",
                pickup_location_area_id: 624,
                pickup_location_area_name: "Aeropuerto de Santiago",
                drop_location_id: 595,
                drop_location_name: "Quinta Normal",
                drop_location_type: "",
                drop_location_area_id: 600,
                drop_location_area_name: "Quinta Normal",
                service_id: 75,
                service_type: "Exclusivo",
                price_type: "PER_VEHICLE",
                price: 20800,
                seat_capacity: 3,
                service_image_1:
                  "https://gt-service-images.s3.amazonaws.com/1646398256-20210930-HYUNDAI-STARIA-SUDAMERICA-CHILE-PRECIOS-CARACTERISTICAS-VERSIONES-01.jpeg",
                service_image_2:
                  "https://gt-service-images.s3.amazonaws.com/1646398427-ImagenPegada-1.png",
                service_image_3:
                  "https://gt-service-images.s3.amazonaws.com/1646398467-nueva-hyundai-h350-3.jpeg",
                svc_additional_info:
                  "Después de realizar su reserva un ejecutivo se comunicara con usted para coordinar la hora de retiro.",
                svc_cancellation_info:
                  "Cancelación 24 horas horas antes del viaje: Se devuelve el 100% del monto pagado.                             \nCancelación 6 horas antes de la hora del viaje: Se retiene el 15%. del monto pagado.\n\n",
                svc_restriction_info:
                  "El equipaje permitido está sujeto a la capacidad del portamaletas del vehículo asignado.",
                is_authorized: 0,
                configured_rating: 4,
                user_rating: 2.8125,
                transvip_meta_data: {
                  route_id: 0,
                  controlled_way_flag: 0,
                  via_controlled_price: 0,
                  eta_in_seconds: 0,
                  route_type: 0,
                  unit_fare: 0,
                  estimated_cost: 0,
                  base_fare: 0,
                  per_km_charges: 0,
                  distance_in_mtrs: 0,
                  time_of_trip_price: 0,
                  toll_price: 0,
                  booking_type: "",
                  is_routing: 0,
                  is_presentation_time: 0,
                  travel_time_pickup: 0,
                  tolerance_time_pickup: 0,
                  here_map_base_time: 0,
                  time_trip_shared_svc: 0,
                  tollcost_eta: 0,
                  tvltime_svc_pickup: 0,
                  trip_type: "",
                  branch_id: 0,
                },
              },
            ],
          },
        });
      },
      urlParams,
      AT: true,
    });
  },

  getAuthorisedServices: (allServices, returnServices = false) => {
    let unfilteresedServices = returnServices
      ? allServices?.return_service_list
      : allServices?.onward_service_list;
    let authorisedServices = groupBy(
      [].concat
        .apply([], Object.values(unfilteresedServices || {}))
        .filter((val) => val.is_authorized == 1),
      "client_code"
    );

    return authorisedServices;
  },

  getUnauthorisedServices: (allServices, returnServices = false) => {
    let unfilteresedServices = returnServices
      ? allServices?.return_service_list
      : allServices?.onward_service_list;
    let unAuthorisedServices = groupBy(
      [].concat
        .apply([], Object.values(unfilteresedServices || {}))
        .filter((val) => val.is_authorized == 0),
      "client_code"
    );

    return unAuthorisedServices;
  },

  getgroupedRoutes: (allServices, returnServices = false) => {
    let unfilteresedServices = returnServices
      ? allServices?.return_service_list
      : allServices?.onward_service_list;
    let groupedData = groupBy(
      //   (unfilteresedServices || []).sort((a, b) => a.price - b.price),
      unfilteresedServices,
      "client_code"
    );

    return groupedData;
  },

  getSessionTransferData: () => {
    let sessionData = sessionStorage.getItem("transferData");

    if (sessionData) {
      return JSON.parse(sessionData);
    }
    return null;
  },

  setSessionTransferData: (data) => {
    sessionStorage.setItem("transferData", JSON.stringify(data));
    return true;
  },

  getUniqueElements: (arr) => {
    let uniqueArray = [arr[0]];

    arr.map((val) => {
      let enter = true;
      uniqueArray.map((innerVal) => {
        if (innerVal.label.trim() == val.label.trim()) {
          enter = false;
        }
      });

      if (enter) {
        uniqueArray.push({ value: val.value.trim(), label: val.label.trim() });
      }
    });
    return uniqueArray;
  },
  getLocalServiceName: (rawService) => {
    switch (rawService) {
      case "Pav Van Compartida":
        return this.props.t("AT_SERVICES.PAV_VAN_SHARED");
      case "Pav Exclusivo":
        return this.props.t("AT_SERVICES.PAV_ECLUSIVE");
      default:
        return rawService;
    }
  },
};

export default ATServices;
