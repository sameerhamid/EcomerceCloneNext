import React from "react";
import classes from "./svg-circular-icons.module.less";

const SvgCircularIcons = (props) => {
  let icon;
  let cls1;
  switch (props.name) {
    case "user-orange":
      icon = (
        <svg
          id="Icons-Home"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <defs>
            <radialGradient
              id="radial-gradient"
              cx="1526.596"
              cy="-458.277"
              r="8.817"
              gradientTransform="translate(-1384.728 550.044)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#f7931e" />
              <stop offset="1" stopColor="#f15a24" />
            </radialGradient>
            <radialGradient
              id="radial-gradient-2"
              cx="-80.397"
              cy="1585.102"
              r="12.33"
              gradientTransform="translate(2025.07 314.085) rotate(90)"
              href="#radial-gradient"
            />
            <radialGradient
              id="radial-gradient-3"
              cx="-183.236"
              cy="1931.859"
              r="8.817"
              gradientTransform="translate(2053.765 588.887) rotate(90)"
              href="#radial-gradient"
            />
            <linearGradient
              id="linear-gradient"
              x1="256"
              y1="143.265"
              x2="256"
              y2="393.613"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ffa736" />
              <stop offset="0.582" stopColor="#ff8f45" />
              <stop offset="0.984" stopColor="#ff8f45" />
            </linearGradient>
          </defs>
          {/* <title>User-Profile</title> */}
          <g id="User-Profile">
            <circle
              id="Background-Orange"
              className={classes.user_orange_cls_1}
              cx="256"
              cy="256"
              r="256"
            />
            <g id="User-Profile-2" data-name="User-Profile">
              <circle
                className={classes.user_orange_cls_2}
                cx="141.675"
                cy="93.508"
                r="3.87"
                transform="translate(-24.624 127.567) rotate(-45)"
              />
              <circle
                className={classes.user_orange_cls_3}
                cx="437.532"
                cy="233.418"
                r="5.412"
                transform="translate(-36.901 377.749) rotate(-45)"
              />
              <circle
                className={classes.user_orange_cls_4}
                cx="120.165"
                cy="405.457"
                r="3.87"
                transform="translate(-251.506 203.725) rotate(-45)"
              />
              <circle
                className={classes.user_orange_cls_5}
                cx="256"
                cy="256"
                r="132.392"
              />
              <path
                className={classes.user_orange_cls_6}
                d="M256,393.892c-76.033,0-137.892-61.858-137.892-137.892S179.967,118.108,256,118.108,393.892,179.967,393.892,256,332.033,393.892,256,393.892Zm0-264.783A126.892,126.892,0,1,0,382.892,256,127.035,127.035,0,0,0,256,129.108Z"
              />
              <circle
                className={classes.user_orange_cls_6}
                cx="258.184"
                cy="243.664"
                r="38.934"
              />
              <path
                className={classes.user_orange_cls_6}
                d="M318.724,345.75c0,27.745-28.874,39.642-61.475,39.642s-63.973-8.169-63.973-35.914S224.648,285.5,257.249,285.5,318.724,318,318.724,345.75Z"
              />
            </g>
          </g>
        </svg>
      );
      break;
    case "forgot-password":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="108.281"
              y1="267.204"
              x2="401.572"
              y2="267.204"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ffa736" />
              <stop offset="0.487" stop-color="#ff8f45" />
              <stop offset="0.984" stop-color="#ff8f45" />
            </linearGradient>
            <radialGradient
              id="radial-gradient"
              cx="321.899"
              cy="82.991"
              r="64.436"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.137" stop-color="#ffa736" />
              <stop offset="0.769" stop-color="#ff8f45" />
              <stop offset="0.984" stop-color="#ff8f45" />
            </radialGradient>
            <radialGradient
              id="radial-gradient-2"
              cx="398.477"
              cy="321.427"
              r="121.54"
              href="#linear-gradient"
            />
            <radialGradient
              id="radial-gradient-3"
              cx="-2710.744"
              cy="1837.568"
              r="8.817"
              gradientTransform="translate(2852.613 -1745.801)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#f7931e" />
              <stop offset="1" stop-color="#f15a24" />
            </radialGradient>
            <radialGradient
              id="radial-gradient-4"
              cx="1292.448"
              cy="-3034.557"
              r="12.33"
              gradientTransform="translate(-2594.59 -1058.76) rotate(90)"
              href="#radial-gradient-3"
            />
            <radialGradient
              id="radial-gradient-5"
              cx="1189.608"
              cy="-2687.8"
              r="8.817"
              gradientTransform="translate(-2565.894 -783.958) rotate(90)"
              href="#radial-gradient-3"
            />
          </defs>
          {/* <title>Restore-Password</title> */}
          <g className={classes.forgot_password_cls_1}>
            <g id="Layer_1" data-name="Layer 1">
              <circle
                className={classes.forgot_password_cls_2}
                cx="256"
                cy="256"
                r="256"
              />
              <path
                className={classes.forgot_password_cls_3}
                d="M136.809,157.073H373.045A28.528,28.528,0,0,1,401.572,185.6V377.335a0,0,0,0,1,0,0H108.281a0,0,0,0,1,0,0V185.6A28.528,28.528,0,0,1,136.809,157.073Z"
              />
              <path
                className={classes.forgot_password_cls_4}
                d="M108.281,377.335V177.48a20.467,20.467,0,0,1,20.407-20.407H343.367Z"
              />
              <path
                className={classes.forgot_password_cls_5}
                d="M408.726,384.488h-307.6V177.481a27.592,27.592,0,0,1,27.56-27.561H381.166a27.592,27.592,0,0,1,27.56,27.561ZM115.435,370.181H394.419v-192.7a13.269,13.269,0,0,0-13.253-13.254H128.688a13.269,13.269,0,0,0-13.253,13.254Z"
              />
              <path
                className={classes.forgot_password_cls_5}
                d="M420.945,347.222H291.052v6.024a10.328,10.328,0,0,1-10.3,10.3H231.246a10.328,10.328,0,0,1-10.3-10.3v-6.024H91.056A4.067,4.067,0,0,0,87,351.277v15.4a20.238,20.238,0,0,0,20.179,20.179H404.821A20.238,20.238,0,0,0,425,366.679v-15.4A4.067,4.067,0,0,0,420.945,347.222Z"
              />
              <path
                className={classes.forgot_password_cls_5}
                d="M288,246.322h-3.315v-6.9a28.686,28.686,0,1,0-57.373,0v6.9H224a6.016,6.016,0,0,0-6,6v36.8a6.016,6.016,0,0,0,6,6h64a6.016,6.016,0,0,0,6-6v-36.8A6.016,6.016,0,0,0,288,246.322Zm-50.256-6.9a18.255,18.255,0,1,1,36.51,0v6.9h-36.51ZM259,275.722v6.554h-6v-6.554a9,9,0,1,1,6,0Z"
              />
              <circle
                className={classes.forgot_password_cls_6}
                cx="336.565"
                cy="99.657"
                r="35.76"
              />
              <path
                className={classes.forgot_password_cls_7}
                d="M147.2,273.264a38.45,38.45,0,0,1-44.86,10.875c-.409-.176-1.219-.551-1.219-.551l.005-69.524s1.05-.48,1.581-.7a38.438,38.438,0,0,1,44.492,59.9Z"
              />
              <path
                className={classes.forgot_password_cls_7}
                d="M364.921,361.264a38.45,38.45,0,0,0,44.86,10.875c.409-.176,1.219-.551,1.219-.551l-.005-69.524s-1.05-.48-1.581-.7a38.438,38.438,0,0,0-44.492,59.9Z"
              />
              <circle
                className={classes.forgot_password_cls_8}
                cx="409.145"
                cy="337.459"
                r="35.76"
              />
              <circle
                className={classes.forgot_password_cls_9}
                cx="104.901"
                cy="243.59"
                r="35.76"
                transform="translate(-149.808 169.675) rotate(-50.519)"
              />
              <circle
                className={classes.forgot_password_cls_10}
                cx="141.675"
                cy="93.508"
                r="3.87"
                transform="translate(-24.624 127.567) rotate(-45)"
              />
              <circle
                className={classes.forgot_password_cls_11}
                cx="437.532"
                cy="233.418"
                r="5.412"
                transform="translate(-36.901 377.749) rotate(-45)"
              />
              <circle
                className={classes.forgot_password_cls_12}
                cx="120.165"
                cy="405.457"
                r="3.87"
                transform="translate(-251.506 203.725) rotate(-45)"
              />
              <text
                className={classes.forgot_password_cls_13}
                transform="translate(324.805 111.535)"
              >
                2
              </text>
              <text
                className={classes.forgot_password_cls_13}
                transform="translate(92.685 256.912)"
              >
                6
              </text>
              <text
                className={classes.forgot_password_cls_13}
                transform="translate(397.914 351.576)"
              >
                8
              </text>
            </g>
          </g>
        </svg>
      );
      break;
    case "pasajebus":
      cls1 =
        props.color == "white"
          ? "pasajebus-white-cls-1"
          : "pasajebus-orange-cls-1";
      icon = (
        <svg
          id="Icons-Home"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="251.928"
              y1="177.445"
              x2="250.959"
              y2="375.095"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ffa736" />
              <stop offset="0.487" stop-color="#ff8f45" />
              <stop offset="0.984" stop-color="#ff8f45" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="256.088"
              y1="319.333"
              x2="255.894"
              y2="77.328"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.032" stop-color="#ffaf41" />
              <stop offset="0.181" stop-color="#ffa736" />
              <stop offset="0.662" stop-color="#ff8f45" />
              <stop offset="0.984" stop-color="#ff8f45" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-3"
              x1="293.939"
              y1="103.574"
              x2="392.415"
              y2="103.574"
              href="#linear-gradient"
            />
            <linearGradient
              id="linear-gradient-4"
              x1="310.948"
              y1="132.455"
              x2="378.107"
              y2="132.455"
              href="#linear-gradient"
            />
            <linearGradient
              id="linear-gradient-5"
              x1="324.876"
              y1="157.568"
              x2="362.517"
              y2="157.568"
              href="#linear-gradient"
            />
          </defs>
          {/* <title>Intercity-buses_Orange</title> */}
          <g id="Intercity-buses_Orange">
            <circle
              id="Background-Orange"
              className={cls1}
              cx="256"
              cy="256"
              r="256"
            />
            <g id="Intercity-buses">
              <rect
                className="pasajebus-cls-2"
                x="140.747"
                y="390"
                width="230"
                height="38"
                rx="19"
                ry="19"
              />
              <path
                className="pasajebus-cls-3"
                d="M382.144,163.955c-2.986-.01-5.971,0-8.99,0-.306-1.022-1.751,2.457-3.2,3.858a17.373,17.373,0,0,1-3.742,2.993,17.018,17.018,0,0,1-5.048,1.367c-.077,0-.153-.01-.229-.011,0,.067.007.11.01.149-7.463,2.23-11.2-.012-17.182-3-3.6-1.8-5.986,2.245-11.973,2.245-5.292,0-8.98-2.245-11.973-5.986-3.305-4.132-1.5-15.715-1.5-15.715-8.231,1.5-13.47-8.231-13.47-8.231h0a10.115,10.115,0,0,1-1.5-3.741c-.727-2.845.2-5.689,1.525-8.214-46.3-.049-79.124-.055-125.42.01a39.773,39.773,0,0,0-38.5,30.919c-.232,1-.446,2.006-.745,3.359-2.885,0-5.852,0-8.819,0-9.473.013-15.146,4.209-18.016,13.305a2.632,2.632,0,0,1-.468.655v60.614a42.612,42.612,0,0,0,1.989,5.179c3.3,6.157,8.579,9.145,15.512,9.26,3.059.051,6.119.009,9.486.009v3.565c0,28.22.231,56.442-.074,84.659-.234,21.637,14.012,36.352,29.193,40.3.287.075.862.212.862.212h7.215v20.413A5.892,5.892,0,0,0,182.963,408h29.25a5.892,5.892,0,0,0,5.875-5.875V381.712h77v20.413A5.892,5.892,0,0,0,300.963,408h29.25a5.892,5.892,0,0,0,5.875-5.875V381.712h7.521l.3-.088c15.474-4.667,25-15,28.525-30.781a44.219,44.219,0,0,0,.805-9.473q.088-42.372.034-84.745v-3.646c3.118,0,5.986.022,8.854,0C393.622,252.867,393.74,163.992,382.144,163.955Zm-132.5,122.057H166.883l30.064-29.362a6.5,6.5,0,0,0-9.084-9.3l-35.5,34.672V194.291h97.284Zm111.143.053H296.781l32.166-31.415a6.5,6.5,0,0,0-9.084-9.3l-40,39.065a6.493,6.493,0,0,0-1.221,1.65H262.261v-91.82h98.529Z"
              />
              <rect
                className="pasajebus-cls-4"
                x="151.747"
                y="194"
                width="101.559"
                height="92"
              />
              <rect
                className="pasajebus-cls-4"
                x="258.188"
                y="194"
                width="101.559"
                height="92"
              />
              <path
                className="pasajebus-cls-5"
                d="M381.485,163.955c-2.986-.01-5.971,0-8.99,0-.306-1.022-1.751,2.457-3.2,3.858a17.373,17.373,0,0,1-3.742,2.993,17.018,17.018,0,0,1-5.048,1.367c-.077,0-.153-.01-.229-.011,0,.067.007.11.01.149-7.463,2.23-11.2-.012-17.182-3-3.6-1.8-5.986,2.245-11.973,2.245-5.292,0-8.98-2.245-11.973-5.986-3.305-4.132-1.5-15.715-1.5-15.715-8.231,1.5-13.47-8.231-13.47-8.231h0a10.115,10.115,0,0,1-1.5-3.741c-.727-2.845.2-5.689,1.525-8.214-46.3-.049-79.124-.055-125.42.01a39.773,39.773,0,0,0-38.5,30.919c-.232,1-.446,2.006-.745,3.359-2.885,0-5.852,0-8.819,0-9.473.013-17.984,4.047-18.484,13.96v60.614c.5,12.473,10.569,14.324,17.5,14.439,3.059.051,6.119.009,9.486.009v3.565c0,28.22-.074,84.659-.074,84.659H220.2c-.02-.2-.031-.409-.031-.618v-9.333a6.483,6.483,0,0,1,6.483-6.483h58.609a6.483,6.483,0,0,1,6.483,6.483v9.333c0,.209-.012.415-.031.618h80.861s.034-56.326.034-84.574v-3.646c3.118,0,5.986.022,8.854,0,11.5-.107,18.282-5.974,18.075-19.811,0-.264.2-51.819.207-52.163C399.989,168.756,393.082,163.992,381.485,163.955ZM253.306,286h-4.318v.012H166.225l.012-.012h-4.514l37.788-36.108a4,4,0,0,0-5.527-5.783l-42.236,40.359v-2.488l-.043.042V194.291h.043V194H253.306Zm106.825.065H296.123l.066-.065h-4.467l37.788-36.108a4,4,0,0,0-5.527-5.783L280.143,286h-2.119c-.012.022-.029.042-.04.065H261.6V286h-3.414V194H359.747v.245h.384Z"
              />
              <path
                className="pasajebus-cls-6"
                d="M130.89,245.441c-1.828,0-3.33-.034-4.728-.107-4.007-.209-6.511-3.1-6.532-7.534-.032-6.516-.027-13.032-.021-19.548l0-7.6,0-8.648q0-11.1.01-22.2c.013-5.953,2.481-8.277,8.8-8.288h9.733a1.5,1.5,0,0,1,1.5,1.5v70.877a1.5,1.5,0,0,1-1.5,1.5c-1.242,0-2.468.015-3.683.029S132.075,245.441,130.89,245.441Z"
              />
              <path
                className="pasajebus-cls-6"
                d="M132.031,173l6.124,0v70.877c-2.474,0-4.886.057-7.268.057-1.558,0-3.1-.024-4.646-.105-3.279-.172-5.093-2.441-5.111-6.044-.044-9.048-.017-18.1-.017-27.146,0-10.283-.016-20.565.007-30.848.011-5.127,1.821-6.781,7.3-6.791,1.2,0,2.4,0,3.607,0m0-3c-1.213,0-2.413,0-3.612,0-7.108.012-10.285,3.03-10.3,9.784q-.024,11.106-.01,22.212l0,8.642q0,3.785,0,7.569c-.005,6.42-.011,13.058.021,19.591.026,5.231,3.148,8.773,7.954,9.025,1.424.075,2.95.109,4.8.109,1.192,0,2.391-.014,3.6-.028s2.431-.029,3.667-.029a3,3,0,0,0,3-3V173.006a3,3,0,0,0-3-3h-6.124Z"
              />
              <path
                className="pasajebus-cls-6"
                d="M373.65,245.438a1.5,1.5,0,0,1-1.5-1.5V173.05a1.5,1.5,0,0,1,1.5-1.5c1.247,0,2.482-.013,3.71-.025s2.437-.025,3.646-.025c1.887,0,3.437.031,4.879.1,3.719.171,6.257,3.008,6.314,7.059.059,4.18.049,8.426.041,12.531q-.005,2.382-.007,4.763l0,10q0,15.513-.008,31.027c-.008,6.151-2.453,8.444-9.02,8.459l-3.549,0Z"
              />
              <path
                className="pasajebus-cls-6"
                d="M381,173c1.611,0,3.213.022,4.813.1,2.974.136,4.837,2.357,4.883,5.581.081,5.757.033,11.516.034,17.274q0,20.513-.006,41.026c-.007,5.288-1.829,6.947-7.523,6.961-1.157,0-2.313,0-3.491,0l-6.063,0V173.05c2.486,0,4.93-.05,7.354-.05m0-3c-1.214,0-2.433.012-3.66.025s-2.453.025-3.694.025a3,3,0,0,0-3,3v70.889a3,3,0,0,0,3,3h6.063c1.18,0,2.339,0,3.5,0,7.361-.018,10.506-3,10.515-9.957q.021-15.626.008-31.252l0-9.778q0-2.369.007-4.739c.009-4.118.019-8.377-.041-12.577-.068-4.819-3.253-8.329-7.745-8.535-1.466-.067-3.039-.1-4.95-.1Z"
              />
              <path
                className="pasajebus-cls-4"
                d="M205.961,319.965c-.035,6.211-4.938,11.372-10.8,11.369S184.434,326.2,184.4,319.949c-.038-6.36,4.936-11.6,10.92-11.5C201.195,308.545,206,313.739,205.961,319.965Z"
              />
              <path
                className="pasajebus-cls-4"
                d="M305.885,319.769c.054-6.221,4.966-11.354,10.837-11.321,5.9.032,10.71,5.157,10.722,11.418.012,6.363-5,11.6-10.959,11.468C310.6,331.2,305.83,326,305.885,319.769Z"
              />
              <path
                className="pasajebus-cls-7"
                d="M360.131,194.245H261.6v91.82h98.529Z"
              />
              <path
                className="pasajebus-cls-7"
                d="M248.988,194.291H151.7v91.721h97.284Z"
              />
              <path
                className="pasajebus-cls-8"
                d="M385.448,123.146a7.245,7.245,0,0,1-6.965-4.681c-.329-.829-10.509-21.474-38.277-19.893-19.625,1.105-28.019,9.656-32.531,15.147a8.365,8.365,0,0,1-9.159,2.56h0a6.817,6.817,0,0,1-3.263-10.463c5.978-8.241,17.46-20.205,44.138-21.707,30.476-1.736,48.071,17.789,52.457,28.76a7.479,7.479,0,0,1-3.351,9.514A7.253,7.253,0,0,1,385.448,123.146Z"
              />
              <path
                className="pasajebus-cls-9"
                d="M371.163,147.5a7.238,7.238,0,0,1-6.241-3.095c-.078-.109-9.374-13-21.651-12.508-.182.007-.362.017-.545.031-10.337.75-16.324,5.036-19.362,8.148a7.144,7.144,0,0,1-7.36,1.732h0a7.373,7.373,0,0,1-3.071-12.027c4.964-5.326,13.757-11.215,28.745-12.3,20.8-1.489,34.553,17.816,35.127,18.639a7.244,7.244,0,0,1-5.642,11.381Z"
              />
              <path
                className="pasajebus-cls-10"
                d="M356.718,167.534a7.239,7.239,0,0,1-6.653-2.066c-1.084-1.082-5-4.088-8.339-3.413l-.145.032a13.312,13.312,0,0,0-5.564,2.523,6.1,6.1,0,0,1-4.879,1.381h0a7.456,7.456,0,0,1-3.242-13.349,27.871,27.871,0,0,1,10.357-4.655c11.937-2.8,21.208,6.359,22.229,7.415a7.244,7.244,0,0,1-3.765,12.132Z"
              />
            </g>
          </g>
        </svg>
      );
      break;
    case "carpool":
      cls1 =
        props.color == "white"
          ? classes.carpool_white_cls_2
          : classes.carpool_orange_cls_2;
      icon = (
        <svg
          id="Icons-Home"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="106.319"
              y1="224.133"
              x2="420.224"
              y2="224.133"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ffa736" />
              <stop offset="0.487" stop-color="#ff8f45" />
              <stop offset="0.984" stop-color="#ff8f45" />
            </linearGradient>
            <clipPath id="clip-path">
              <path
                className={classes.carpool_cls_1}
                d="M362.5,138.389a43.438,43.438,0,0,0-31.381-21.095c-29.64-3.931-120.8-3.9-150.228,0a43.438,43.438,0,0,0-31.381,21.095,402.812,402.812,0,0,0-22.043,45.157q-2.18,5.13-4.329,10.459h.015l0,.01a1693.535,1693.535,0,0,0,265.6,0C380.1,172.365,371.28,153.46,362.5,138.389Z"
              />
            </clipPath>
          </defs>
          {/* <title>Carpool_Orange</title> */}
          <g id="Carpool_Orange">
            <circle
              id="Background-Orange"
              className={cls1}
              cx="256"
              cy="256"
              r="256"
            />
            <g id="Carpool">
              <path
                className={classes.carpool_cls_3}
                d="M422.121,255.73A50.06,50.06,0,0,0,411.654,227.8c-13.971-18.19-16.694-32.63-16.694-32.63-10.969-28.743-20.721-47.894-27.888-60.049a48.158,48.158,0,0,0-35.29-23.253c-29.576-3.824-122.009-3.824-151.585,0a48.218,48.218,0,0,0-35.279,23.253c-7.167,12.155-16.908,31.306-27.888,60.049,0,0-2.724,14.441-16.694,32.63A50.048,50.048,0,0,0,89.878,255.73C88.821,277.744,95.2,282.582,100.9,332.4a7.747,7.747,0,0,0,7.712,6.868H403.4a7.756,7.756,0,0,0,7.712-6.868c1.6-13.971,6.355-42.307,6.355-42.307C421.63,276,422.538,264.521,422.121,255.73Z"
              />
              <path
                className={classes.carpool_cls_4}
                d="M376.2,219.052a48.789,48.789,0,0,0-9.143,4.016,112.373,112.373,0,0,1-14.825,7.1c-8.5,3.226-9.944,8.043-9.944,8.043-.256.331-.5.662-.737,1-6.451,9.581,2.019,22.334,13.458,20.71a164.17,164.17,0,0,0,37.1-9.912,13.3,13.3,0,0,0,8.075-9.057c.1-.4.182-.79.256-1.175C402.981,226.069,389.523,214.9,376.2,219.052Z"
              />
              <path
                className={classes.carpool_cls_5}
                d="M393.881,295.816h-18.4a3.111,3.111,0,0,0-2.2,5.308l18.4,18.4a3.112,3.112,0,0,0,5.308-2.2v-18.4A3.1,3.1,0,0,0,393.881,295.816Z"
              />
              <path
                className={classes.carpool_cls_5}
                d="M411.109,332.377a7.767,7.767,0,0,1-7.722,6.889H367.979v20.55A13.181,13.181,0,0,0,381.16,373H403.4a13.181,13.181,0,0,0,13.18-13.18V295.485C415.115,304.393,412.273,322.2,411.109,332.377Z"
              />
              <path
                className={classes.carpool_cls_5}
                d="M426.639,179.628a10.614,10.614,0,0,0-10.467-8.032h-8.887A10.307,10.307,0,0,0,396.978,181.9v6.334h-4.71l2.7,6.419h10.361a37.321,37.321,0,0,0,15.541-3.386A10.3,10.3,0,0,0,426.639,179.628Z"
              />
              <circle
                className={classes.carpool_cls_6}
                cx="382.036"
                cy="235.65"
                r="12.956"
              />
              <circle
                className={classes.carpool_cls_6}
                cx="355.974"
                cy="245.872"
                r="9.517"
              />
              <polygon
                className={classes.carpool_cls_5}
                points="331.311 245.882 316.433 271.795 195.567 271.795 180.688 245.882 331.311 245.882"
              />
              <polygon
                className={classes.carpool_cls_7}
                points="331.311 245.882 316.433 271.795 195.567 271.795 180.688 245.882 331.311 245.882"
              />
              <path
                className={classes.carpool_cls_4}
                d="M170.434,239.217c-.224-.342-.47-.673-.737-1,0,0-1.442-4.817-9.944-8.043a113.02,113.02,0,0,1-14.825-7.1,49.1,49.1,0,0,0-9.143-4.016c-13.309-4.166-26.777,7.017-24.246,20.732.075.4.16.78.246,1.175a13.3,13.3,0,0,0,8.075,9.057,164.131,164.131,0,0,0,37.106,9.912C168.415,261.551,176.885,248.8,170.434,239.217Z"
              />
              <path
                className={classes.carpool_cls_5}
                d="M136.522,295.816h-18.4a3.1,3.1,0,0,0-3.108,3.108v18.4a3.112,3.112,0,0,0,5.308,2.2l18.4-18.4A3.112,3.112,0,0,0,136.522,295.816Z"
              />
              <path
                className={classes.carpool_cls_5}
                d="M378.532,327.934c-19.162-33.154-41.2-32.118-41.2-32.118H174.653s-22.024-1.036-41.2,32.118H100.335l.406,4.272a7.768,7.768,0,0,0,7.744,7.06H403.515a7.768,7.768,0,0,0,7.744-7.06l.406-4.272H378.532Z"
              />
              <path
                className={classes.carpool_cls_7}
                d="M378.532,327.934c-19.162-33.154-41.2-32.118-41.2-32.118H174.653s-22.024-1.036-41.2,32.118H100.335l.406,4.272a7.768,7.768,0,0,0,7.744,7.06H403.515a7.768,7.768,0,0,0,7.744-7.06l.406-4.272H378.532Z"
              />
              <path
                className={classes.carpool_cls_5}
                d="M108.612,339.277a7.776,7.776,0,0,1-7.722-6.889c-1.164-10.179-4.016-27.995-5.469-36.892v64.332a13.181,13.181,0,0,0,13.18,13.18H130.84a13.181,13.181,0,0,0,13.18-13.18v-20.55Z"
              />
              <path
                className={classes.carpool_cls_5}
                d="M115.01,188.237V181.9a10.3,10.3,0,0,0-10.3-10.307H95.827a10.614,10.614,0,0,0-10.467,8.032,10.3,10.3,0,0,0,5.768,11.632,37.358,37.358,0,0,0,15.541,3.386h10.361l2.7-6.419H115.01Z"
              />
              <circle
                className={classes.carpool_cls_6}
                cx="129.953"
                cy="235.65"
                r="12.956"
              />
              <circle
                className={classes.carpool_cls_6}
                cx="156.036"
                cy="245.872"
                r="9.517"
              />
              <g className={classes.carpool_cls_8}>
                <path
                  className={classes.carpool_cls_9}
                  d="M324.881,304.884H187.118a3.9,3.9,0,0,0,0,7.8H324.871a3.9,3.9,0,0,0,.011-7.8Z"
                />
                <path
                  className={classes.carpool_cls_9}
                  d="M324.881,320.447H187.118a3.9,3.9,0,0,0,0,7.8H324.871a3.9,3.9,0,0,0,.011-7.8Z"
                />
              </g>
              <path
                className={classes.carpool_cls_4}
                d="M362.5,138.389a43.438,43.438,0,0,0-31.381-21.095c-29.64-3.931-120.8-3.9-150.228,0a43.438,43.438,0,0,0-31.381,21.095,402.812,402.812,0,0,0-22.043,45.157q-2.18,5.13-4.329,10.459h.015l0,.01a1693.535,1693.535,0,0,0,265.6,0C380.1,172.365,371.28,153.46,362.5,138.389Z"
              />
              <path
                className="carpool-orange-cls-2"
                d="M362.5,138.389a43.438,43.438,0,0,0-31.381-21.095c-29.64-3.931-120.8-3.9-150.228,0a43.438,43.438,0,0,0-31.381,21.095,402.812,402.812,0,0,0-22.043,45.157q-2.18,5.13-4.329,10.459h.015l0,.01a1693.535,1693.535,0,0,0,265.6,0C380.1,172.365,371.28,153.46,362.5,138.389Z"
              />
              <path
                className="carpool-orange-cls-2"
                d="M362.5,138.389a43.438,43.438,0,0,0-31.381-21.095c-29.64-3.931-120.8-3.9-150.228,0a43.438,43.438,0,0,0-31.381,21.095,402.812,402.812,0,0,0-22.043,45.157q-2.18,5.13-4.329,10.459h.015l0,.01a1693.535,1693.535,0,0,0,265.6,0C380.1,172.365,371.28,153.46,362.5,138.389Z"
              />
              <g className={classes.carpool_cls_10}>
                <path
                  className={classes.carpool_cls_11}
                  d="M255.791,166.657h0A33.941,33.941,0,0,1,289.732,200.6v.254a6.622,6.622,0,0,1-6.622,6.622H228.217a6.622,6.622,0,0,1-6.622-6.622v0A34.2,34.2,0,0,1,255.791,166.657Z"
                />
                <circle
                  className={classes.carpool_cls_11}
                  cx="253.978"
                  cy="145.157"
                  r="19.797"
                />
                <path
                  className={classes.carpool_cls_4}
                  d="M318.14,173.5h0a37.317,37.317,0,0,1,37.317,37.317v.28a7.28,7.28,0,0,1-7.28,7.28H287.823a7.28,7.28,0,0,1-7.28-7.28v0a37.6,37.6,0,0,1,37.6-37.6Z"
                />
                <circle
                  className={classes.carpool_cls_4}
                  cx="316.146"
                  cy="149.866"
                  r="21.766"
                />
                <path
                  className={classes.carpool_cls_4}
                  d="M192.847,173.5h0a37.317,37.317,0,0,1,37.317,37.317v.28a7.28,7.28,0,0,1-7.28,7.28H162.53a7.28,7.28,0,0,1-7.28-7.28v0A37.6,37.6,0,0,1,192.847,173.5Z"
                />
                <circle
                  className={classes.carpool_cls_4}
                  cx="190.853"
                  cy="149.866"
                  r="21.766"
                />
              </g>
              <rect
                className={classes.carpool_cls_12}
                x="80.75"
                y="368"
                width="350.5"
                height="18"
                rx="9"
                ry="9"
              />
            </g>
          </g>
        </svg>
      );
      break;
    case "transfer":
      cls1 =
        props.color == "white"
          ? classes.transfer_white_cls_4
          : classes.transfer_orange_cls_4;
      icon = (
        <svg
          id="Icons-Home"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                className={classes.transfer_cls_1}
                width="512"
                height="512"
              />
            </clipPath>
            <linearGradient
              id="linear-gradient"
              x1="-1542.995"
              y1="284.005"
              x2="-1135.96"
              y2="284.005"
              gradientTransform="matrix(-1, 0, 0, 1, -1082, 0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.169" stop-color="#ffa736" />
              <stop offset="0.721" stop-color="#ff8f45" />
              <stop offset="1" stop-color="#ff8f45" />
            </linearGradient>
            <radialGradient
              id="radial-gradient"
              cx="310.061"
              cy="109.254"
              r="107.005"
              gradientTransform="translate(-53.08 -6.764) rotate(-1.213)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ffa736" />
              <stop offset="0.487" stop-color="#ff8f45" />
              <stop offset="0.984" stop-color="#ff8f45" />
            </radialGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="250.25"
              y1="113.691"
              x2="377.681"
              y2="113.691"
              gradientTransform="translate(-53.08 -6.764) rotate(-1.213)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.016" stop-color="#ff8f45" />
              <stop offset="0.338" stop-color="#ff8f45" />
              <stop offset="0.819" stop-color="#ffa736" />
              <stop offset="0.968" stop-color="#ffaf41" />
            </linearGradient>
          </defs>
          {/* <title>Van+Plane_Orange</title> */}
          <g id="Van_Plane_Orange" data-name="Van+Plane_Orange">
            <g id="Background-Orange">
              <g class={classes.transfer_cls_3}>
                <path
                  className={cls1}
                  d="M512,256c0,141.385-114.615,256-256,256S0,397.385,0,256,114.615,0,256,0,512,114.615,512,256"
                />
              </g>
            </g>
            <g id="Van_Plane" data-name="Van+Plane">
              <rect
                className={classes.transfer_cls_5}
                x="56.335"
                y="376.504"
                width="399.329"
                height="28.748"
                rx="14.374"
                ry="14.374"
              />
              <path
                className={classes.transfer_cls_6}
                d="M460.995,332.136V345.48a19.563,19.563,0,0,1-19.558,19.558H93.89a39.914,39.914,0,0,1-39.829-42.783l7.029-98.707a22.145,22.145,0,0,1,22.1-20.577H293.019s35.143-.407,103.9,75.89l23.735,4.482C444.085,287.825,459.619,308.69,460.995,332.136Z"
              />
              <path
                className={classes.transfer_cls_7}
                d="M391.625,344.054H58.645a42.266,42.266,0,0,1-4.176-11.714H460.995V345.48a19.563,19.563,0,0,1-19.558,19.558h-49.71V344.054Z"
              />
              <path
                className={classes.transfer_cls_7}
                d="M347.212,364.02a36.57,36.57,0,0,1,73.139,0,3.14,3.14,0,0,1-.1,1.019H347.313C347.313,364.733,347.212,364.326,347.212,364.02Z"
              />
              <path
                className={classes.transfer_cls_7}
                d="M95.011,364.02a36.57,36.57,0,0,1,73.139,0,3.14,3.14,0,0,1-.1,1.019H95.113A3.466,3.466,0,0,1,95.011,364.02Z"
              />
              <path
                className={classes.transfer_cls_8}
                d="M347.212,364.02a36.57,36.57,0,0,1,73.139,0,3.14,3.14,0,0,1-.1,1.019H347.313C347.313,364.733,347.212,364.326,347.212,364.02Z"
              />
              <path
                className={classes.transfer_cls_8}
                d="M95.011,364.02a36.57,36.57,0,0,1,73.139,0,3.14,3.14,0,0,1-.1,1.019H95.113A3.466,3.466,0,0,1,95.011,364.02Z"
              />
              <circle
                className={classes.transfer_cls_7}
                cx="383.781"
                cy="363.103"
                r="26.281"
              />
              <circle
                className={classes.transfer_cls_7}
                cx="131.58"
                cy="363.103"
                r="26.281"
              />
              <circle
                className={classes.transfer_cls_9}
                cx="383.781"
                cy="363.103"
                r="26.281"
              />
              <circle
                className={classes.transfer_cls_9}
                cx="131.58"
                cy="363.103"
                r="26.281"
              />
              <circle
                className={classes.transfer_cls_10}
                cx="383.781"
                cy="363.103"
                r="17.011"
              />
              <circle
                className={classes.transfer_cls_10}
                cx="131.58"
                cy="363.103"
                r="17.011"
              />
              <path
                className={classes.transfer_cls_11}
                d="M332.543,228.539h11.205c14.669,11.205,32.393,27.2,53.275,50.321H383.781Z"
              />
              <path
                className={classes.transfer_cls_7}
                d="M52.329,330.2H64.044a1.348,1.348,0,0,0,1.324-1.324V288.64a1.348,1.348,0,0,0-1.324-1.324H52.329a1.348,1.348,0,0,0-1.324,1.324v40.135A1.373,1.373,0,0,0,52.329,330.2Z"
              />
              <path
                className={classes.transfer_cls_8}
                d="M52.329,330.2H64.044a1.348,1.348,0,0,0,1.324-1.324V288.64a1.348,1.348,0,0,0-1.324-1.324H52.329a1.348,1.348,0,0,0-1.324,1.324v40.135A1.373,1.373,0,0,0,52.329,330.2Z"
              />
              <path
                className={classes.transfer_cls_12}
                d="M432.964,294.089s13.169,21.64,9.594,38.25h18.436S460.054,295.156,432.964,294.089Z"
              />
              <rect
                className={classes.transfer_cls_11}
                x="71.734"
                y="228.539"
                width="199.238"
                height="58.407"
                rx="9.244"
                ry="9.244"
                transform="translate(342.706 515.486) rotate(-180)"
              />
              <path
                className={classes.transfer_cls_11}
                d="M311.916,228.908h-20.44a7.014,7.014,0,0,0-7.014,7.014v21.862a21.366,21.366,0,0,0,21.366,21.366h64.164L327.2,235.344A21.366,21.366,0,0,0,311.916,228.908Z"
              />
              <path
                className={classes.transfer_cls_7}
                d="M212.8,130.327l22.522,21.481c1.226,1.175,3.777,18.49,2.6,19.716l-4.276,4.461a3.1,3.1,0,0,1-4.367.092l-2.342-2.245-17.839-17.1c-7.248-6.947-14.605-13.892-18.063-17.314l-2.23-2.137a3.1,3.1,0,0,1-.092-4.367l4.275-4.461c1.175-1.226,18.585.7,19.811,1.875Zm0,0"
              />
              <path
                className={classes.transfer_cls_7}
                d="M219.3,50.555a6.007,6.007,0,1,0,6.132,5.879,6.061,6.061,0,0,0-6.132-5.879ZM238,56.714a6.007,6.007,0,1,0,6.132,5.878A6.06,6.06,0,0,0,238,56.714Zm69.664,65.707a6.007,6.007,0,1,0-5.878,6.132,5.989,5.989,0,0,0,5.878-6.132Zm.811,12.544a6.007,6.007,0,1,0,6.133,5.879,6.061,6.061,0,0,0-6.133-5.879Zm0,0"
              />
              <path
                className={classes.transfer_cls_13}
                d="M268.279,72.9l22.076,21.161c2.454,2.352,27.665,68.345,25.313,70.8l-8.443,8.808a6.064,6.064,0,0,1-8.626.183l-49-59.59L188.1,68.038a6.064,6.064,0,0,1-.183-8.626l8.443-8.808c2.352-2.454,69.46,19.94,71.914,22.292Zm0,0"
              />
              <path
                className={classes.transfer_cls_14}
                d="M323.03,37.873c6.132,5.878,1.1,20.949-5.846,28.307l-76.42,79.613c-7.053,7.36-32.48,24.064-38.612,18.186s9.482-31.989,16.536-39.347L295,44.911c7.053-7.359,21.9-12.916,28.034-7.038Zm0,0"
              />
              <path
                className={classes.transfer_cls_15}
                d="M224.149,129.759l76.31-79.611c5.985-6.244,17.568-11.186,24.606-9.041a9.54,9.54,0,0,0-2.037-3.344c-6.133-5.878-20.979-.211-28.033,7.148l-76.311,79.611c-7.053,7.358-22.558,33.467-16.536,39.347a5.622,5.622,0,0,0,4.069,1.225c-.089-9.392,11.947-29.092,17.932-35.335Zm0,0"
              />
              <path
                className={classes.transfer_cls_16}
                d="M225.178,95.874l12.542,9.347L268.609,73l-.335-.321c-.669-.641-6.837-3.023-15.2-6.014L225.178,95.874Zm0,0"
              />
              <path
                className={classes.transfer_cls_16}
                d="M259.468,126.281l39.021,47.566a6.155,6.155,0,0,0,8.089.266l-43.049-52.069Zm-18.016-25.4L187.285,60.3a6.113,6.113,0,0,0,.819,7.739l49.284,36.971Zm0,0"
              />
              <path
                className={classes.transfer_cls_16}
                d="M237.388,105.009l4.063-4.128-12.21-9.136-4.063,4.129Zm0,0"
              />
            </g>
          </g>
        </svg>
      );
      break;
    case "train":
      cls1 =
        props.color == "white"
          ? classes.train_white_cls_1
          : classes.train_orange_cls_1;
      icon = (
        <svg
          id="Icons-Home"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <defs>
            <radialGradient
              id="radial-gradient"
              cx="252.892"
              cy="456.594"
              fy="483.86177800683055"
              r="108.861"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ffa736" />
              <stop offset="0.487" stop-color="#ff8f45" />
              <stop offset="0.984" stop-color="#ff8f45" />
            </radialGradient>
            <linearGradient
              id="linear-gradient"
              x1="191.425"
              y1="107.562"
              x2="323.425"
              y2="363.562"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.015" stop-color="#ffbd57" />
              <stop offset="0.341" stop-color="#ffa736" />
              <stop offset="0.611" stop-color="#ff8f45" />
              <stop offset="0.984" stop-color="#ff8f45" />
            </linearGradient>
          </defs>
          {/* <title>Train_Orange</title> */}
          <g id="Train_Orange">
            <circle
              id="background-Orange"
              className={cls1}
              cx="256"
              cy="256"
              r="256"
            />
            <g id="Train">
              <path
                className={classes.train_cls_2}
                d="M345.114,423.681,308.2,360.4v-3.569H285v3.565l13.856,23.754H213.148L227,360.4h0v-3.57H203.8V360.4l-36.915,63.282A4.2,4.2,0,0,0,170.514,430h13.474a4.2,4.2,0,0,0,3.629-2.085l5.87-10.063H318.515l5.868,10.061A4.2,4.2,0,0,0,328.012,430l13.472,0A4.2,4.2,0,0,0,345.114,423.681Zm-145.5-16.332,7.407-12.7h97.962l7.406,12.7Z"
              />
              <path
                className={classes.train_cls_3}
                d="M345.114,423.681,308.2,360.4v-3.569H285v3.565l13.856,23.754H213.148L227,360.4h0v-3.57H203.8V360.4l-36.915,63.282A4.2,4.2,0,0,0,170.514,430h13.474a4.2,4.2,0,0,0,3.629-2.085l5.87-10.063H318.515l5.868,10.061A4.2,4.2,0,0,0,328.012,430l13.472,0A4.2,4.2,0,0,0,345.114,423.681Zm-145.5-16.332,7.407-12.7h97.962l7.406,12.7Z"
              />
              <path
                className={classes.train_cls_4}
                d="M163.2,93.6A23.2,23.2,0,0,0,140,116.8v232A23.2,23.2,0,0,0,163.2,372h19a4.2,4.2,0,0,0,4.2-4.2v-7.4H325.6v7.4a4.2,4.2,0,0,0,4.2,4.2h19A23.2,23.2,0,0,0,372,348.8v-232a23.2,23.2,0,0,0-23.2-23.2H163.2Z"
              />
              <g className={classes.train_cls_5}>
                <path
                  className={classes.train_cls_6}
                  d="M172.4,372h9.8a4.2,4.2,0,0,0,4.2-4.2v-7.4h-14Z"
                />
                <path
                  className={classes.train_cls_6}
                  d="M348.8,93.6h-14A23.2,23.2,0,0,1,358,116.8v232A23.2,23.2,0,0,1,334.8,372h14A23.2,23.2,0,0,0,372,348.8v-232A23.2,23.2,0,0,0,348.8,93.6Z"
                />
              </g>
              <rect
                className={classes.train_cls_7}
                x="139.998"
                y="139.998"
                width="231.998"
                height="139.2"
              />
              <path
                className={classes.train_cls_8}
                d="M350.4,261.8H161.6a4.2,4.2,0,0,1-4.2-4.2v-96a4.2,4.2,0,0,1,4.2-4.2H350.4a4.2,4.2,0,0,1,4.2,4.2v96A4.2,4.2,0,0,1,350.4,261.8Z"
              />
              <rect
                className={classes.train_cls_9}
                x="357.998"
                y="139.998"
                width="14.004"
                height="139.2"
              />
              <path
                className={classes.train_cls_7}
                d="M218,82H294a4.2,4.2,0,0,1,3.758,2.322l4.195,8.389a4.2,4.2,0,0,1,.444,1.879V112.6a4.2,4.2,0,0,1-4.2,4.2H213.8a4.2,4.2,0,0,1-4.2-4.2V94.592a4.2,4.2,0,0,1,.443-1.879l4.2-8.391A4.2,4.2,0,0,1,218,82Z"
              />
              <path
                className={classes.train_cls_10}
                d="M301.957,92.712l-4.195-8.389A4.2,4.2,0,0,0,294,82H280a4.2,4.2,0,0,1,3.758,2.322l4.195,8.389a4.2,4.2,0,0,1,.444,1.879V112.6a4.2,4.2,0,0,1-4.2,4.2h14a4.2,4.2,0,0,0,4.2-4.2V94.59A4.216,4.216,0,0,0,301.957,92.712Z"
              />
              <path
                className={classes.train_cls_11}
                d="M256,98.85a5.251,5.251,0,0,0,5.252-5.252V82h-10.5V93.6A5.252,5.252,0,0,0,256,98.85Z"
              />
              <path
                className={classes.train_cls_11}
                d="M372,342.451v-10.5h-78.39l-10.042-15.061a5.25,5.25,0,0,0-4.369-2.339H232.8a5.249,5.249,0,0,0-4.369,2.339L218.39,331.948H140v10.5h81.2a5.25,5.25,0,0,0,4.369-2.339l10.041-15.061H276.39l10.042,15.061a5.25,5.25,0,0,0,4.369,2.339Z"
              />
              <circle
                className={classes.train_cls_8}
                cx="192"
                cy="302"
                r="13"
              />
              <circle
                className={classes.train_cls_8}
                cx="320"
                cy="302"
                r="13"
              />
            </g>
          </g>
        </svg>
      );
      break;
    case "collective":
      cls1 =
        props.color == "white"
          ? classes.collective_white_cls_1
          : classes.collective_orange_cls_1;
      icon = (
        <svg
          id="Icons-Home"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="98.631"
              y1="252.354"
              x2="413.369"
              y2="252.354"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ffa736" />
              <stop offset="0.487" stop-color="#ff8f45" />
              <stop offset="0.984" stop-color="#ff8f45" />
            </linearGradient>
          </defs>
          {/* <title>Colectivos_Orange</title> */}
          <g id="Colectivos_Orange">
            <circle
              id="Background-Orange"
              className={cls1}
              cx="256"
              cy="256"
              r="256"
            />
            <g id="Colectivos_Orange-2" data-name="Colectivos_Orange">
              <rect
                className={classes.collective_cls_2}
                x="91.998"
                y="385.231"
                width="328"
                height="18"
                rx="9"
                ry="9"
              />
              <path
                className={classes.collective_cls_3}
                d="M397.045,248.532,381.6,237.841l-14.168-61.766a32.615,32.615,0,0,0-31.793-25.324H176.365a32.622,32.622,0,0,0-31.793,25.324L130.4,237.841l-15.449,10.691a37.89,37.89,0,0,0-16.324,31.149v55.586a18.693,18.693,0,0,0,18.7,18.691H394.674a18.693,18.693,0,0,0,18.7-18.691V279.681a37.88,37.88,0,0,0-16.324-31.149Zm0,0"
              />
              <path
                className={classes.collective_cls_4}
                d="M367,234.955H145.006L158.7,175.27a15.43,15.43,0,0,1,15.108-12.039H338.2a15.436,15.436,0,0,1,15.111,12.039Zm0,0"
              />
              <path
                className={classes.collective_cls_5}
                d="M367,234.955H145.006L158.7,175.27a15.43,15.43,0,0,1,15.108-12.039H338.2a15.436,15.436,0,0,1,15.111,12.039Zm0,0"
              />
              <path
                className={classes.collective_cls_4}
                d="M123.752,284.154a24.65,24.65,0,1,0,49.3,0Zm0,0"
              />
              <path
                className={classes.collective_cls_4}
                d="M338.947,284.154a24.651,24.651,0,1,0,49.3,0Zm0,0"
              />
              <path
                className={classes.collective_cls_6}
                d="M406.658,327.271H105.342a13.344,13.344,0,1,0,0,26.687H406.658a13.344,13.344,0,1,0,0-26.687Zm0,0"
              />
              <path
                className={classes.collective_cls_7}
                d="M406.658,327.271H105.342a13.344,13.344,0,1,0,0,26.687H406.658a13.344,13.344,0,1,0,0-26.687Zm0,0"
              />
              <path
                className={classes.collective_cls_6}
                d="M116.221,353.958V382.37a11.916,11.916,0,0,0,11.916,11.916h21.394a11.92,11.92,0,0,0,11.92-11.92V353.958"
              />
              <path
                className={classes.collective_cls_8}
                d="M116.221,353.958V382.37a11.916,11.916,0,0,0,11.916,11.916h21.394a11.92,11.92,0,0,0,11.92-11.92V353.958"
              />
              <path
                className={classes.collective_cls_6}
                d="M350.221,353.958V382.37a11.916,11.916,0,0,0,11.916,11.916h21.394a11.92,11.92,0,0,0,11.92-11.92V353.958"
              />
              <path
                className={classes.collective_cls_8}
                d="M350.221,353.958V382.37a11.916,11.916,0,0,0,11.916,11.916h21.394a11.92,11.92,0,0,0,11.92-11.92V353.958"
              />
              <path
                className={classes.collective_cls_4}
                d="M367,234.955h-76.43L218.843,163.23H338.2a15.436,15.436,0,0,1,15.111,12.039Zm0,0"
              />
              <rect
                className={classes.collective_cls_7}
                x="198.803"
                y="287.154"
                width="120.801"
                height="7.85"
                rx="3.925"
                ry="3.925"
              />
              <rect
                className={classes.collective_cls_7}
                x="198.803"
                y="302.381"
                width="120.801"
                height="7.85"
                rx="3.925"
                ry="3.925"
              />
              <path
                className={classes.collective_cls_9}
                d="M323,155.313H189l4.016-34.036a14.2,14.2,0,0,1,14.1-12.507h97.774a14.2,14.2,0,0,1,14.1,12.507Z"
              />
              <path
                className={classes.collective_cls_10}
                d="M412.639,219.859a10.614,10.614,0,0,0-10.467-8.032h-8.887a10.307,10.307,0,0,0-10.307,10.307v6.334h-4.71l2.7,6.419h10.361a37.321,37.321,0,0,0,15.541-3.386A10.3,10.3,0,0,0,412.639,219.859Z"
              />
              <path
                className={classes.collective_cls_10}
                d="M129.01,228.468v-6.334a10.3,10.3,0,0,0-10.3-10.307h-8.887a10.614,10.614,0,0,0-10.467,8.032,10.3,10.3,0,0,0,5.768,11.632,37.358,37.358,0,0,0,15.541,3.386h10.361l2.7-6.419H129.01Z"
              />
              <text
                className={classes.collective_cls_11}
                transform="translate(204.11 147.283)"
              >
                T
                <tspan className={classes.collective_cls_12} x="23.982" y="0">
                  AXI
                </tspan>
              </text>
            </g>
          </g>
        </svg>
      );
      break;
    case "classes.toll":
      cls1 =
        props.color == "white"
          ? classes.classes.toll_white_cls_1
          : classes.classes.toll_orange_cls_1;
      icon = (
        <svg
          id="Icons-Home"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="168.108"
              y1="396.127"
              x2="168.108"
              y2="148.637"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ffaf41" />
              <stop offset="0.466" stop-color="#ffa736" />
              <stop offset="1" stop-color="#ff8f45" />
            </linearGradient>
          </defs>
          {/* <title>Pike_Orange</title> */}
          <g id="Pike_Orange">
            <circle
              id="Background-Orange"
              className={cls1}
              cx="256"
              cy="256"
              r="256"
            />
            <g id="Pike">
              <path
                className={classes.toll_cls_2}
                d="M432.538,114.731a18.73,18.73,0,0,0-19.587-4.395,18.458,18.458,0,0,0-7.031,4.395l-30.637,30.637-37.668,37.668L299.946,220.7l-52.108,52.108c2.448-1.193,27,26.242,27,26.242l25.112-25.112,37.668-37.668,37.668-37.668,37.668-37.668,19.587-19.587a18.794,18.794,0,0,0,0-26.619Z"
              />
              <path
                className={classes.toll_cls_3}
                d="M432.538,114.731a18.73,18.73,0,0,0-19.587-4.395,18.458,18.458,0,0,0-7.031,4.395l-30.637,30.637-37.668,37.668L299.946,220.7l-52.108,52.108c2.448-1.193,27,26.242,27,26.242l25.112-25.112,37.668-37.668,37.668-37.668,37.668-37.668,19.587-19.587a18.794,18.794,0,0,0,0-26.619Z"
              />
              <polygon
                className={classes.toll_cls_4}
                points="337.614 183.036 337.614 236.274 299.946 273.942 299.946 220.704 337.614 183.036"
              />
              <path
                className={classes.toll_cls_4}
                d="M412.95,110.337v50.6l-37.668,37.668V145.368l30.637-30.637A18.458,18.458,0,0,1,412.95,110.337Z"
              />
              <polygon
                className={classes.toll_cls_5}
                points="237.166 132.812 86.493 132.812 86.493 396.489 237.166 396.489 249.722 396.489 249.722 289.762 237.166 289.762 237.166 132.812"
              />
              <path
                className={classes.toll_cls_2}
                d="M73.937,113.978H249.722v18.834a12.556,12.556,0,0,1-12.556,12.556H86.493a12.556,12.556,0,0,1-12.556-12.556Z"
              />
              <path
                className={classes.toll_cls_6}
                d="M73.937,113.978H249.722v18.834a12.556,12.556,0,0,1-12.556,12.556H86.493a12.556,12.556,0,0,1-12.556-12.556Z"
              />
              <rect
                className={classes.toll_cls_4}
                x="111.606"
                y="170.48"
                width="100.448"
                height="106.726"
                rx="6.278"
                ry="6.278"
              />
              <path
                className={classes.toll_cls_2}
                d="M155.552,245.816h12.556a12.556,12.556,0,0,1,12.556,12.556v18.834H143V258.372A12.556,12.556,0,0,1,155.552,245.816Z"
              />
              <rect
                className={classes.toll_cls_2}
                x="117.884"
                y="302.318"
                width="87.892"
                height="69.058"
                rx="6.278"
                ry="6.278"
              />
              <g className={classes.toll_cls_7}>
                <path
                  className={classes.toll_cls_8}
                  d="M155.552,245.816h12.556a12.556,12.556,0,0,1,12.556,12.556v18.834H143V258.372A12.556,12.556,0,0,1,155.552,245.816Z"
                />
                <rect
                  className={classes.toll_cls_8}
                  x="117.884"
                  y="302.318"
                  width="87.892"
                  height="69.058"
                  rx="6.278"
                  ry="6.278"
                />
              </g>
              <g className={classes.toll_cls_9}>
                <path
                  className={classes.toll_cls_8}
                  d="M180.664,333.708H143a6.278,6.278,0,0,1,0-12.556h37.668a6.278,6.278,0,1,1,0,12.556Z"
                />
                <path
                  className={classes.toll_cls_8}
                  d="M180.664,352.543H143a6.278,6.278,0,0,1,0-12.556h37.668a6.278,6.278,0,1,1,0,12.556Z"
                />
              </g>
              <path
                className={classes.toll_cls_2}
                d="M274.834,289.762V396.489H237.166V289.762a18.834,18.834,0,0,1,37.668,0Z"
              />
              <path
                className={classes.toll_cls_10}
                d="M256,302.318a6.277,6.277,0,0,1-2.388-.5,7.3,7.3,0,0,1-2.069-1.318,6.5,6.5,0,0,1-1.321-2.072,6.272,6.272,0,0,1-.5-2.385,8.279,8.279,0,0,1,.126-1.257,3.985,3.985,0,0,1,.374-1.131,4.805,4.805,0,0,1,.567-1.128c.251-.316.5-.628.754-.941a6.454,6.454,0,0,1,2.069-1.321,6.276,6.276,0,0,1,6.845,1.321c.251.313.5.625.751.941a4.806,4.806,0,0,1,.567,1.128,4.092,4.092,0,0,1,.377,1.131,8.683,8.683,0,0,1,.125,1.257,6.274,6.274,0,0,1-.5,2.385,6.546,6.546,0,0,1-1.318,2.072c-.316.251-.628.5-.941.751a4.766,4.766,0,0,1-1.131.567,4.091,4.091,0,0,1-1.131.377A8.686,8.686,0,0,1,256,302.318Z"
              />
              <path
                className={classes.toll_cls_2}
                d="M438.063,402.767H73.937a6.278,6.278,0,0,1,0-12.556H438.063a6.278,6.278,0,0,1,0,12.556Z"
              />
              <path
                className={classes.toll_cls_6}
                d="M438.063,402.767H73.937a6.278,6.278,0,0,1,0-12.556H438.063a6.278,6.278,0,0,1,0,12.556Z"
              />
            </g>
          </g>
        </svg>
      );
      break;
    case "bip":
      cls1 =
        props.color == "white"
          ? classes.bip_white_cls_1
          : classes.bip_orange_cls_1;
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <defs>
            <style></style>
            <linearGradient
              id="linear-gradient"
              x1="204.195"
              y1="151.96"
              x2="334.862"
              y2="385.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ffa736" />
              <stop offset="0.487" stop-color="#ff8f45" />
              <stop offset="0.984" stop-color="#ff8f45" />
            </linearGradient>
          </defs>
          {/* <title>Bip!</title> */}
          <circle className={cls1} cx="256" cy="256" r="256" />
          <path
            className={classes.bip_cls_2}
            d="M352.345,355.217h-191.8a19.7,19.7,0,0,1-19.672-19.672V224.89a19.7,19.7,0,0,1,19.672-19.672h191.8a19.7,19.7,0,0,1,19.672,19.672V335.545A19.7,19.7,0,0,1,352.345,355.217Z"
          />
          <path
            className={classes.bip_cls_3}
            d="M367.385,330.217H145.615a22.772,22.772,0,0,1-22.746-22.746V179.528a22.772,22.772,0,0,1,22.746-22.746H367.385a22.772,22.772,0,0,1,22.746,22.746V307.472A22.772,22.772,0,0,1,367.385,330.217Z"
          />
          <path
            className={classes.bip_cls_4}
            d="M366.385,330.217H144.615a22.772,22.772,0,0,1-22.746-22.746V179.528a22.772,22.772,0,0,1,22.746-22.746H366.385a22.772,22.772,0,0,1,22.746,22.746V307.472A22.772,22.772,0,0,1,366.385,330.217Z"
          />
          <path
            className={classes.bip_cls_5}
            d="M246.214,224.311h15.435l2.114,4.663c6.776-8.229,18.581-8.065,24.967,1.7a27.568,27.568,0,0,1,4.879,15.975c-.114,4.4,0,8.95-1.061,13.161-2.228,8.816-7.122,16.942-17.585,18.129-2.554.29-5.323-1.163-7.968-1.9a18.847,18.847,0,0,1-2.792-1.386v25.712H246.214Zm17.97,27.934.22.017c0,1.862.109,3.732-.026,5.584-.194,2.676,1.353,3.677,3.6,4.234,2.13.528,3.9-.1,4.655-2.065A32.471,32.471,0,0,0,275,251.476a28.187,28.187,0,0,0-.942-8.48c-.569-2.511-3.155-4.458-5.013-4.371-2.24.1-3.551,1.4-4.1,4.775C264.468,246.312,264.42,249.294,264.184,252.246Z"
          />
          <path
            className={classes.bip_cls_5}
            d="M187.82,200.115V227.7a44.012,44.012,0,0,1,5.273-3.285c7.733-3.417,14.094-.859,18.767,5.7,5.05,7.086,5.963,15.15,5.166,23.383-.807,8.344-3.533,16.093-10.808,21.2-6.58,4.619-12.427,4.188-18.7-.921a15.082,15.082,0,0,0-1.572-1c-.191.079-.4.1-.473.206-3.665,5.666-9.387,3.206-14.37,3.565-.386.028-.95-.858-1.227-1.42a3.566,3.566,0,0,1-.042-1.444c0-23.553.029-47.106-.047-70.659-.007-2.254.76-2.969,2.9-2.932C177.637,200.173,182.584,200.115,187.82,200.115Zm-.339,52.418.394.053c0,1.944-.033,3.889.02,5.831.017.6.064,1.437.443,1.764,3.252,2.8,6.221,2.558,8.034-1.077a20.9,20.9,0,0,0,.849-16.852c-.745-2.136-2.07-3.531-4.245-3.564-2.278-.034-3.7,1.542-4.09,3.686C188.28,245.736,187.936,249.145,187.481,252.534Z"
          />
          <path
            className={classes.bip_cls_5}
            d="M325.961,260.431c-1.412-.644-2.614-1.228-3.844-1.748-4.3-1.817-8.57-3.711-12.932-5.365-1.692-.641-1.516-1.435-1.028-2.744,2.272-6.091,4.446-12.219,6.72-18.309,2.3-6.152,4.666-12.277,7.011-18.411,2.4-6.282,4.75-12.587,7.244-18.832,2.093-5.241,2.164-5.193,7.3-3.029q8.774,3.7,17.574,7.328c1.562.645,2.579,1.281,1.564,3.308-5,9.986-9.873,20.039-14.834,30.046-3.463,6.986-6.992,13.94-10.5,20.9-.96,1.9-1.93,3.8-2.967,5.664C327.026,259.679,326.5,259.958,325.961,260.431Z"
          />
          <path
            className={classes.bip_cls_5}
            d="M240.143,224v52.5H221.591c-.03-.557-.078-1.023-.078-1.489,0-13.3-.034-26.6.018-39.905.012-3.138.36-6.274.443-9.413.039-1.478.813-1.715,2.034-1.708C229.249,224.017,234.491,224,240.143,224Z"
          />
          <path
            className={classes.bip_cls_5}
            d="M308.187,289.805c-6.405.481-13.708-5.4-13.652-13.369a14.187,14.187,0,0,1,14.43-14.029c6.615.1,13.709,6.323,13.541,13.407C322.316,283.789,316.328,290.307,308.187,289.805Z"
          />
          <path
            className={classes.bip_cls_5}
            d="M231.281,218.151c-6.037,0-9.611-3.531-9.817-9.22-.22-6.095,4.335-9.739,9.82-9.753a9.749,9.749,0,0,1,9.835,9.541C241.094,213.344,237.083,218.788,231.281,218.151Z"
          />
        </svg>
      );
      break;
    case "go":
      cls1 =
        props.color == "white"
          ? classes.go_white_cls_1
          : classes.go_orange_cls_1;
      icon = (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <defs>
            <style></style>
            <radialGradient
              id="radial-gradient"
              cx="168.28"
              cy="159.472"
              r="359.104"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#ffa736" />
              <stop offset="0.487" stop-color="#ff8f45" />
              <stop offset="0.984" stop-color="#ff8f45" />
            </radialGradient>
            <clipPath id="clip-path">
              <path
                className={classes.go_cls_1}
                d="M359.642,244.144H156.792a7.657,7.657,0,0,1-7.555-8.9l11.939-72.463a7.657,7.657,0,0,1,7.555-6.412H347.7a7.657,7.657,0,0,1,7.555,6.412L367.2,235.242A7.657,7.657,0,0,1,359.642,244.144Z"
              />
            </clipPath>
          </defs>
          {/* <title>KuposGo</title> */}
          <circle className={cls1} cx="256" cy="256" r="256" />
          <rect
            className={classes.go_cls_2}
            x="124"
            y="408"
            width="269"
            height="36"
            rx="18"
            ry="18"
          />
          <rect
            className={classes.go_cls_3}
            x="375.258"
            y="205.611"
            width="35.365"
            height="10.983"
            transform="translate(-53.086 205.933) rotate(-27.582)"
          />
          <rect
            className={classes.go_cls_3}
            x="106.354"
            y="205.611"
            width="35.365"
            height="10.983"
            transform="translate(136.231 455.644) rotate(-152.418)"
          />
          <rect
            className={classes.go_cls_4}
            x="375.258"
            y="205.611"
            width="35.365"
            height="10.983"
            transform="translate(-53.086 205.933) rotate(-27.582)"
          />
          <rect
            className={classes.go_cls_4}
            x="106.354"
            y="205.611"
            width="35.365"
            height="10.983"
            transform="translate(136.231 455.644) rotate(-152.418)"
          />
          <rect
            className={classes.go_cls_3}
            x="134.578"
            y="332.404"
            width="47.512"
            height="99.691"
            rx="13.841"
            ry="13.841"
          />
          <rect
            className={classes.go_cls_3}
            x="334.322"
            y="332.404"
            width="47.512"
            height="99.691"
            rx="13.841"
            ry="13.841"
          />
          <rect
            className={classes.go_cls_5}
            x="134.578"
            y="332.404"
            width="47.512"
            height="99.691"
            rx="13.841"
            ry="13.841"
          />
          <rect
            className={classes.go_cls_5}
            x="334.322"
            y="332.404"
            width="47.512"
            height="99.691"
            rx="13.841"
            ry="13.841"
          />
          <path
            className={classes.go_cls_6}
            d="M360.992,391.95H155.442a13.027,13.027,0,0,1-12.053-8.084L129.5,349.994V255.54L151,98.73A12.372,12.372,0,0,1,163.266,88h189.9a12.372,12.372,0,0,1,12.262,10.73l21.5,156.81v94.454l-13.89,33.872A13.027,13.027,0,0,1,360.992,391.95Z"
          />
          <path
            className={classes.go_cls_4}
            d="M348.784,383.574c-14.163-24.505-30.45-23.739-30.45-23.739H198.091s-16.279-.766-30.45,23.739H143.16s3.345,8.376,11.759,8.376h206.6c8.572,0,11.759-8.376,11.759-8.376H348.784Z"
          />
          <path
            className={classes.go_cls_7}
            d="M156.792,247.967a11.482,11.482,0,0,1-11.328-13.346L157.4,162.158a11.445,11.445,0,0,1,11.328-9.614H347.7a11.445,11.445,0,0,1,11.328,9.612l11.938,72.465a11.481,11.481,0,0,1-11.328,13.346Z"
          />
          <path
            className={classes.go_cls_3}
            d="M347.7,156.367a7.657,7.657,0,0,1,7.555,6.412L367.2,235.242a7.657,7.657,0,0,1-7.555,8.9H156.792a7.657,7.657,0,0,1-7.555-8.9l11.939-72.463a7.657,7.657,0,0,1,7.555-6.412H347.7m0-7.647H168.731a15.25,15.25,0,0,0-15.1,12.815L141.692,234a15.3,15.3,0,0,0,15.1,17.792h202.85A15.3,15.3,0,0,0,374.742,234L362.8,161.536a15.25,15.25,0,0,0-15.1-12.815Z"
          />
          <path
            className={classes.go_cls_7}
            d="M359.642,244.144H156.792a7.657,7.657,0,0,1-7.555-8.9l11.939-72.463a7.657,7.657,0,0,1,7.555-6.412H347.7a7.657,7.657,0,0,1,7.555,6.412L367.2,235.242A7.657,7.657,0,0,1,359.642,244.144Z"
          />
          <path
            className={classes.go_cls_8}
            d="M359.642,244.144H156.792a7.657,7.657,0,0,1-7.555-8.9l11.939-72.463a7.657,7.657,0,0,1,7.555-6.412H347.7a7.657,7.657,0,0,1,7.555,6.412L367.2,235.242A7.657,7.657,0,0,1,359.642,244.144Z"
          />
          <rect
            className={classes.go_cls_3}
            x="86.959"
            y="180.58"
            width="32.976"
            height="60.351"
            rx="4.535"
            ry="4.535"
          />
          <rect
            className={classes.go_cls_3}
            x="395.815"
            y="180.58"
            width="32.976"
            height="60.351"
            rx="4.535"
            ry="4.535"
          />
          <path
            className={classes.go_cls_7}
            d="M191.621,340.336l-33.453-3.617a21.954,21.954,0,0,1-19.595-21.827v-17.48a10.774,10.774,0,0,1,15.978-9.433l25.6,14.124s-1.894,6.431,1.781,18.682C186.176,334.929,191.621,340.336,191.621,340.336Z"
          />
          <path
            className={classes.go_cls_7}
            d="M325.914,340.336l33.453-3.617a21.954,21.954,0,0,0,19.595-21.827v-17.48a10.774,10.774,0,0,0-15.978-9.433l-25.6,14.124s1.894,6.431-1.781,18.682C331.359,334.929,325.914,340.336,325.914,340.336Z"
          />
          <path
            className={classes.go_cls_4}
            d="M188.2,302.283H328.231a0,0,0,0,1,0,0v0a48.687,48.687,0,0,1-48.687,48.687H236.89A48.687,48.687,0,0,1,188.2,302.283v0A0,0,0,0,1,188.2,302.283Z"
          />
          <g className={classes.go_cls_9}>
            <path
              className={classes.go_cls_10}
              d="M309.377,312.151H207.069a4.572,4.572,0,1,0,0,9.144h102.3a4.572,4.572,0,0,0,.013-9.144Z"
            />
            <path
              className={classes.go_cls_10}
              d="M297.908,330.4H220.45a4.572,4.572,0,0,0,0,9.144H297.9a4.572,4.572,0,0,0,.013-9.144Z"
            />
          </g>
          <g className={classes.go_cls_11}>
            <path
              className={classes.go_cls_7}
              d="M301.833,209.544h0a32.717,32.717,0,0,1,32.717,32.717v1.589a4.962,4.962,0,0,1-4.962,4.962H273.962A4.962,4.962,0,0,1,269,243.849v-1.472a32.833,32.833,0,0,1,32.833-32.833Z"
            />
            <circle
              className={classes.go_cls_7}
              cx="301.775"
              cy="190.861"
              r="19.046"
            />
          </g>
        </svg>
      );
      break;
    default:
      icon = <span></span>;
      break;
  }
  return (
    <span
      className={
        classes.common_svg_circular_icons +
        " inline-block" +
        "svg_span" +
        classes.svg_span +
        " " +
        props.className
      }
      style={{ width: "80px" }}
    >
      {icon}
    </span>
  );
};

export default SvgCircularIcons;
