import React from "react";
import classes from "./svg-home.module.less";

const SvgHome = (props) => {
  let icon;

  switch (props.name) {
    case "pin":
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <defs>
            <style></style>
          </defs>
          <title>Destination</title>
          <path
            id="Destination"
            style={{
              fill: props.type == "origin" ? "#fc8332" : "#ff5a5e",
            }}
            d="M256,.442C154.056.442,71.415,83.083,71.415,185.027c0,28,9.122,60.827,23.323,94.679,38.72,92.306,124.724,196.042,152.189,227.916a11.328,11.328,0,0,0,17.187-.022c27.518-32.095,114.024-136.8,152.757-228.155,14.431-34.036,23.715-66.853,23.715-94.418C440.585,83.083,357.944.442,256,.442ZM255.505,278.8a94.261,94.261,0,1,1,94.261-94.261A94.261,94.261,0,0,1,255.505,278.8Z"
          />
        </svg>
      );
      break;
    case "arrow-whight-left":
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>Left-Arrow</title>
          <polyline
            id="Left-Arrow"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "40px",
            }}
            points="369.706 27.66 141.366 256 370.634 484.34"
          />
        </svg>
      );
      break;
    case "arrow-whight-right":
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>Right-Arrow</title>
          <polyline
            id="Right-Arrow"
            className={classes.arrow_right_white_cls_1}
            points="142.294 27.66 370.634 256 141.366 484.34"
          />
        </svg>
      );
      break;
    case "back-arrow":
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 510.34 356"
        >
          <line
            className={classes.back_arrow_cls_1}
            x1="11.37"
            y1="178"
            x2="500.34"
            y2="178"
          />
          <polyline
            className={classes.back_arrow_cls_1}
            points="178 10 10 178 178.68 346"
          />
        </svg>
      );
      break;
    case "calendar":
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>Calendar</title>
          <g id="Calendar">
            <line
              className={classes.calendar_cls_1}
              x1="80.323"
              y1="14.976"
              x2="80.323"
              y2="82.976"
            />
            <line
              className={classes.calendar_cls_1}
              x1="336.323"
              y1="14.976"
              x2="336.323"
              y2="82.976"
            />
            <path
              className={classes.calendar_cls_1}
              d="M221.824,400.976H41.268a27.135,27.135,0,0,1-27.055-27.055V105.032A27.135,27.135,0,0,1,41.268,77.976h333a27.135,27.135,0,0,1,27.055,27.055V223.476"
            />
            <circle
              className={classes.calendar_cls_1}
              cx="385.217"
              cy="384.454"
              r="112.57"
            />
            <polyline
              className={classes.calendar_cls_1}
              points="367.323 336.976 367.323 400.976 435.323 400.976"
            />
            <rect
              className={classes.calendar_cls_2}
              x="68.323"
              y="194.976"
              width="57"
              height="57"
            />
            <rect
              className={classes.calendar_cls_2}
              x="68.323"
              y="291.976"
              width="57"
              height="57"
            />
            <rect
              className={classes.calendar_cls_2}
              x="164.823"
              y="194.976"
              width="57"
              height="57"
            />
            <rect
              className={classes.calendar_cls_2}
              x="164.823"
              y="291.976"
              width="57"
              height="57"
            />
            <rect
              className={classes.calendar_cls_2}
              x="261.323"
              y="194.976"
              width="57"
              height="57"
            />
            <rect
              className={classes.calendar_cls_2}
              x="18.323"
              y="77.976"
              width="375"
              height="81"
            />
          </g>
        </svg>
      );
      break;
    case "cancel-ticket":
      icon = (
        <svg
          id="Layer_2"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>Cancel-Ticket</title>
          <g id="Cancel-Ticket">
            <line
              className={classes.cancel_ticket_cls_1}
              x1="155.021"
              y1="245.559"
              x2="263.516"
              y2="245.559"
            />
            <line
              className={classes.cancel_ticket_cls_1}
              x1="155.021"
              y1="195.638"
              x2="365.987"
              y2="195.638"
            />
            <path
              className={classes.cancel_ticket_cls_1}
              d="M447.467,359h26.758a27.907,27.907,0,0,0,27.825-27.825v-70.2a38.94,38.94,0,0,1,0-77.872v-70.2a27.907,27.907,0,0,0-27.825-27.825H38.292a27.907,27.907,0,0,0-27.825,27.825V183.09a38.951,38.951,0,1,1,0,77.9v70.181A27.907,27.907,0,0,0,38.292,359h219.22"
            />
            <path
              className={classes.cancel_ticket_cls_1}
              d="M296.967,305.964H116.4a12.035,12.035,0,0,1-12-12V150.117a12.035,12.035,0,0,1,12-12H398.628a12.035,12.035,0,0,1,12,12V293.964a12.035,12.035,0,0,1-12,12"
            />
            <path
              className={classes.cancel_ticket_cls_2}
              d="M354.686,278.153A116.453,116.453,0,1,0,471.14,394.606,116.453,116.453,0,0,0,354.686,278.153Zm47.852,149.966A10,10,0,0,1,388.4,442.262l-33.473-33.473L321.45,442.262a10,10,0,0,1-14.143-14.143l33.473-33.473-33.473-33.473A10,10,0,0,1,321.45,347.03L354.923,380.5,388.4,347.03a10,10,0,1,1,14.143,14.143l-33.473,33.473Z"
            />
          </g>
        </svg>
      );
      break;
    case "print-ticket":
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>Print-Ticket</title>
          <g id="Print-Ticket">
            <path
              className={classes.print_ticket_cls_1}
              d="M481.5,127.7H30.5A30.591,30.591,0,0,0,0,158.2V353.213a30.616,30.616,0,0,0,23.815,29.749h96.876v-97.22a6.255,6.255,0,0,1,6.247-6.247H384.054c3.444,0,7.247,2.8,7.247,6.247v97.22h96.884A30.616,30.616,0,0,0,512,353.213V158.2A30.591,30.591,0,0,0,481.5,127.7Zm-33.427,89.5a26.038,26.038,0,1,1,26.038-26.038A26.039,26.039,0,0,1,448.071,217.2Z"
            />
            <path
              className={classes.print_ticket_cls_2}
              d="M111.257,101.842V30.875a20.484,20.484,0,0,1,20.424-20.424H380.319a20.484,20.484,0,0,1,20.424,20.424v70.967"
            />
            <path
              className={classes.print_ticket_cls_2}
              d="M111.257,264.451V481.418a20.484,20.484,0,0,0,20.424,20.424H380.319a20.484,20.484,0,0,0,20.424-20.424V264.451"
            />
            <line
              className={classes.print_ticket_cls_2}
              x1="170.5"
              y1="398.607"
              x2="341.5"
              y2="398.607"
            />
            <line
              className={classes.print_ticket_cls_2}
              x1="170.5"
              y1="335.71"
              x2="341.5"
              y2="335.71"
            />
          </g>
        </svg>
      );
      break;
    case "close":
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>Close-Window</title>
          <g id="Close-Window">
            <path
              className={classes.close_cls_1}
              d="M256,29a227.067,227.067,0,0,1,88.35,436.173A227.066,227.066,0,0,1,167.65,46.827,225.552,225.552,0,0,1,256,29m0-28C115.167,1,1,115.167,1,256S115.167,511,256,511,511,396.833,511,256,396.833,1,256,1Z"
            />
            <line
              className={classes.close_cls_2}
              x1="150.784"
              y1="360.614"
              x2="361.216"
              y2="151.386"
            />
            <line
              className={classes.close_cls_2}
              x1="361.216"
              y1="360.614"
              x2="150.784"
              y2="151.386"
            />
          </g>
        </svg>
      );
      break;
    case "facebook":
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 90"
        >
          <rect
            className={classes.facebook_cls_1}
            y="0.5"
            width="500"
            height="89"
            rx="12.917"
            ry="12.917"
          />
          <path
            className={classes.facebook_cls_2}
            d="M65.83,28.031H58.955a2.7,2.7,0,0,0-2.7,2.7v7.5H65.83l-1.5,9.613H56.259V72H46.228V47.842H38.161V38.229h8.067v-7.5A12.741,12.741,0,0,1,58.955,18H65.83Z"
          />
        </svg>
      );
      break;
    case "googleplus":
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 90"
        >
          <rect
            className={classes.googleplus_cls_1}
            y="0.5"
            width="500"
            height="89"
            rx="12.917"
            ry="12.917"
          />
          <path
            className={classes.googleplus_cls_2}
            d="M57.841,42c-.01.151-.021.267-.021.39,0,2.946.007,9.316.007,9.316h12.93a10.979,10.979,0,0,1-4.748,7.269,13.833,13.833,0,0,1-7.02,2.251,14.093,14.093,0,0,1-5.239-.607,14.549,14.549,0,0,1-9.955-12.551,13.853,13.853,0,0,1,.295-4.383A14.262,14.262,0,0,1,59.973,32.578,12.983,12.983,0,0,1,67.066,36c2.336-2.338,4.646-4.649,7.024-7.03a29.564,29.564,0,0,0-4.277-3.143A23.007,23.007,0,0,0,58.358,22.71c-.769-.01-1.542.035-2.307.07a18.62,18.62,0,0,0-3.982.618,24.2,24.2,0,0,0-18.3,22.06,22.729,22.729,0,0,0,.509,6.5,23.881,23.881,0,0,0,9.446,14.433,23.59,23.59,0,0,0,12.891,4.569,25.622,25.622,0,0,0,7.915-.787,21.034,21.034,0,0,0,11.88-7.81C80.787,56.549,81.843,49.09,80.555,42Z"
          />
          <polygon
            className={classes.googleplus_cls_2}
            points="109.758 42.323 101.579 42.323 101.579 34.141 101.579 33.899 101.337 33.899 95.226 33.899 94.984 33.899 94.984 34.141 94.984 42.323 86.798 42.323 86.563 42.323 86.563 42.559 86.563 48.672 86.563 48.914 86.798 48.914 94.984 48.914 94.984 57.097 94.984 57.335 95.226 57.335 101.337 57.335 101.579 57.335 101.579 57.097 101.579 48.914 109.758 48.914 110 48.914 110 48.672 110 42.559 110 42.323 109.758 42.323"
          />
        </svg>
      );
      break;
    case "plane":
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>Airport</title>
          <path
            style={{ fill: "#ff5a5e" }}
            d="M500.46,241.319c-.751-1.05-18.824-25.92-50.789-32.466-28.978-5.934-95.059-6.27-97.855-6.28a97.155,97.155,0,0,1-10.724-.608,71.972,71.972,0,0,1-8.372-8.553L203.054,33.236c-2.8-3.463-8.51-9.988-12.139-12.484-6.211-4.29-22.132-3.244-23.924-3.112l-3.527.262c-4.808.356-13.494,1.318-17.634,3.745-2.455,1.436-9.914,5.811-3.031,27.046,0,0,49.417,152.432,49.615,153.105-.736.042-71.086.068-71.086.068a100.116,100.116,0,0,1-10.911-.571,70.575,70.575,0,0,1-8.676-8.4l-45.731-53.8c-.326-.378-7.94-9.3-12.752-12.229-6.446-3.916-18.829-1.915-18.952-1.893a32.371,32.371,0,0,0-11.653,4.6c-5.678,4.087-6.644,13.04-2.86,26.608C20.065,193,34.717,247.583,35.8,255.938c-1.083,8.355-15.741,62.938-26.006,99.759-.8,2.877-3.362,12.667-2.572,17.753,1.621,10.452,16.455,13.344,17.085,13.461a45.372,45.372,0,0,0,11.957.529c7.731-.934,17.8-12.374,19.747-14.652l45.731-53.809a97.22,97.22,0,0,1,7.433-7.839,74.174,74.174,0,0,1,12.154-1.131s70.366.011,71.06.033c-.187.714-49.584,153.142-49.584,153.142-1.483,4.577-3.879,12.965-3.224,17.693,1.057,7.6,9.093,12,23.888,13.1l3.521.261c2.24.165,5.548.331,8.831.331a45.718,45.718,0,0,0,8.585-.619c7.373-1.59,17.522-13.909,18.653-15.308L332.726,318.467a99.415,99.415,0,0,1,7.186-7.988,71.287,71.287,0,0,1,11.9-1.173c2.8-.011,68.883-.347,97.861-6.28,31.965-6.552,50.037-31.416,50.789-32.473,5.95-8.333,5.95-20.9-.005-29.233Zm0,0"
          />
        </svg>
      );
      break;
    case "time":
      icon = (
        <svg
          id="Isolation_Mode"
          data-name="Isolation Mode"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>Departure-time</title>
          <g id="Clock_Departure-Time">
            <polyline
              className={classes.time_cls_1}
              points="346.22 350.553 254.711 258.972 254.711 161.998"
            />
            <path
              className={classes.time_cls_2}
              d="M256,39a217.067,217.067,0,0,1,84.455,416.963A217.066,217.066,0,0,1,171.545,56.037,215.606,215.606,0,0,1,256,39m0-38C115.167,1,1,115.167,1,256S115.167,511,256,511,511,396.833,511,256,396.833,1,256,1Z"
            />
            <circle
              className={classes.time_cls_2}
              cx="255.986"
              cy="79.824"
              r="18.7"
            />
            <circle
              className={classes.time_cls_2}
              cx="430.374"
              cy="256.495"
              r="18.7"
            />
            <circle
              className={classes.time_cls_2}
              cx="255.986"
              cy="427.933"
              r="18.7"
            />
            <circle
              className={classes.time_cls_2}
              cx="82.931"
              cy="256.495"
              r="18.7"
            />
          </g>
        </svg>
      );
      break;
    case "minus":
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>less</title>
          <path
            className={classes.minus_cls_1}
            d="M256,21a235.067,235.067,0,0,1,91.467,451.541A235.066,235.066,0,0,1,164.534,39.459,233.511,233.511,0,0,1,256,21m0-20C115.167,1,1,115.167,1,256S115.167,511,256,511,511,396.833,511,256,396.833,1,256,1Z"
          />
          <line
            className={classes.minus_cls_2}
            x1="146"
            y1="256"
            x2="366"
            y2="256"
          />
        </svg>
      );
      break;
    case "plus":
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <title>more</title>
          <path
            className={classes.plus_cls_1}
            d="M256,21a235.067,235.067,0,0,1,91.467,451.541A235.066,235.066,0,0,1,164.533,39.459,233.511,233.511,0,0,1,256,21m0-20C115.167,1,1,115.167,1,256S115.167,511,256,511,511,396.833,511,256,396.833,1,256,1Z"
          />
          <line
            className={classes.plus_cls_2}
            x1="146"
            y1="256"
            x2="366"
            y2="256"
          />
          <line
            className={classes.plus_cls_2}
            x1="256"
            y1="366"
            x2="256"
            y2="146"
          />
        </svg>
      );
      break;
    default:
      icon = <span></span>;
      break;
  }
  return (
    <span
      className={`${classes.common_svg_home} 
        svg-span
        inline-block  
        ${props.className}`}
    >
      {icon}
    </span>
  );
};

export default SvgHome;
