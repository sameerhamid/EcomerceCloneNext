import { atom } from "recoil";
export const productDetailState = atom({
  key: "productDetailState", // unique ID (with respect to other atoms/selectors)
  default: {
    Manufacturer: "SCHNEIDER ELECTRIC",
    TypeOfProtection: "RCD breaker",
    KindOfCircuitBreaker: "type a",
    CurrentRating: "40A",
    ResidualCurrent: "100mA",
    NumberOfPoles: "4",
    RatedVoltage: "400V AC",
    Mounting: "DIN",
    IPRating: "IP20",
    CrossSection: "1.2mm2",
    OperatingTemperature: "-25 - 60 C",
    MechanicalDurability: "20000 cycles",
    ElectricalLife: "15000 cycles",
    ManufacturerSeries: "iiD",
    ConformToNorm: "IEC/EN61008-1",
    TradeName: "ACTi-9, RCD",
  },
  // default value (aka initial value)
});

// export const productDetailState = atom(
//     key: "productDetailState", // unique ID (with respect to other atoms/selectors)
//     default: [
//       { Manufacturer: "" },
//       { "Type of Protection": "" },
//       { "Kind of circuit breaker": "" },
//       { "Current Rating": "" },
//       { "Residual Current": "" },
//       { "Number of poles": "" },
//       { "Rated voltage": "" },
//       { Mounting: "" },
//       { "IP rating": "" },
//       { "Cross Section of connecting wires": "" },
//       { "Operating temperature": "" },
//       { "Mechanical durability": "" },
//       { "Electrical life": "" },
//       { "Manufacturer series": "" },
//       { "Conform to the norm": "" },
//       { "Trade name": "" },
//     ], // default value (aka initial value)
//   });
