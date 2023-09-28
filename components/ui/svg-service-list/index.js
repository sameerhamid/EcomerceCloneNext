import classNames from 'classnames';
import React, { Component } from 'react';

import classes from './index.module.less'

export default class SvgServiceList extends Component {

  render() {
    let icon;
    switch (this.props.name) {
      case 'duration-arrow':
        icon = <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 34.621"><defs></defs><title>Two-Ways-Arrow</title><line className="duration-arrow-cls-1" x1="5.196" y1="17.311" x2="506.804" y2="17.311" /><polyline className="duration-arrow-cls-1" points="497.327 7.834 506.804 17.311 497.327 26.788" /><polyline className="duration-arrow-cls-1" points="14.673 26.788 5.196 17.311 14.673 7.834" /></svg>
        break;
      default:
        icon = <span></span>;
        break;

    }
    return (
      <span className={classNames({
        "inline-block": true,
        "svg-span": true,
        [classes.svg_service_list]: true,
        [this.props.className]: this.props.className
      })}>{icon}</span>
    );
  }
}
