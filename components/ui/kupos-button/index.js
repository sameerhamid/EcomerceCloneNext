import React, { Component } from "react";

// import PropTypes from 'prop-types';
import classNames from "classnames";
import styles from "./kupos-button.module.less";

const KuposButton = (props) => {
  return (
    <button
      className={classNames({
        [styles.kupos_button]: true,
        'kupos-button': true,
        [props.className]: true,
      })}
      disabled={props.disabled || props.showLoader}
      onClick={props.onClick}
    >
      {props.showLoader ? (
        <div className="loader-cricle"></div>
      )
        : <span>{props.children}</span>}
    </button>
  );
};

export default KuposButton;
