import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./kupos-radio.module.less";

export default class KuposRadio extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
  };

  render() {
    return (
      <div className={classes.common_kupos_radio}>
        {this.props.disabled ? (
          <span>
            <div className={classes.kupos_radio}>
              <span className={this.props.checked ? "active" : ""}></span>
              {this.props.checked ? (
                <div className="icon-selection-circle-selected"></div>
              ) : (
                <div className="icon-selection-circle-not-selected"></div>
              )}
            </div>
            <span>
              {this.props.t ? this.props.t(this.props.label) : this.props.label}
            </span>
          </span>
        ) : (
          <label>
            <div className={classes.kupos_radio} style={this.props.style}>
              <input
                type="radio"
                checked={this.props.checked}
                onChange={this.props.onChange ? this.props.onChange : () => {}}
              />
              <span className={this.props.checked ? "active" : ""}></span>
              {this.props.checked ? (
                <div className="icon-selection-circle-selected"></div>
              ) : (
                <div className="icon-selection-circle-not-selected"></div>
              )}
            </div>
            <span className="font10">
              {this.props.t ? this.props.t(this.props.label) : this.props.label}
            </span>
          </label>
        )}
      </div>
    );
  }
}
