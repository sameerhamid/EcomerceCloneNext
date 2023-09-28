import Image from "next/image";
import React from "react";
import classes from "./my-button.module.less";
const MyButton = (props) => {
  return (
    <>
      <div
        className={classes.product_button}
        onClick={props.onClick}
        style={props.style ? props?.style : null}
      >
        {props.src ? <Image src={props.src} width={20} height={20} alt="" /> : null}
        <span className="font10">{props.label}</span>
      </div>
    </>
  );
};

export default MyButton;
