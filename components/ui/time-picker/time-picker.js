import React, { Component } from "react";

import ReactDOM from "react-dom";
import CommonService from "../../../services/commonService";
import DateService from "../../../services/dateService";
import SvgHome from "../svg-home/svg-home";
import classes from "./time-picker.module.less";

export default class KuposTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPicker: this.props.showOnSelect ? true : false,
      selectedPM: "PM",
      selectedAM: "AM",
    };
  }

  onAmPmChange = () => {
    this.setState({
      selectedAM: this.state.selectedPM,
      selectedPM: this.state.selectedAM,
    });
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  scrollIfNotInView = () => {
    if (this.el) {
      if (CommonService.isElementInView(this.el)) {
      } else {
        this.el.scrollIntoView(false);
      }
    }
  };

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  handleClickOutside = (event) => {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        showPicker: false,
        showHourPicker: false,
        showMinutePicker: false,
      });
    }

    // if (CommonService.isElementInView(this.el)) {
    //   console.log('In the viewport!');
    // } else {
    //   this.setState({ showPicker: false });
    // }
  };

  onFocus = (type) => {
    // if (!this.props.optional) {
    //   this.setState({ showPicker: true });
    //   setTimeout(() => {
    //     this.scrollIfNotInView();
    //   }, 250);
    // }

    // console.log('type is----', type);

    if (type === "minute") {
      this.setState({ showPicker: false, showMinutePicker: true });
    } else {
      this.setState({ showPicker: false, showHourPicker: true });
    }
  };

  onBlur = () => {
    // this.setState({ showPicker: false });
  };

  onChange = (counterType, arrowType) => {
    let time = this.props.value;
    let hours = time ? +time.split(":")[0] : 0;
    let minutes = time ? +time.split(":")[1] : 0;
    if (counterType == "hours") {
      if (arrowType == "up") {
        hours = hours + 1 >= 23 ? 23 : hours + 1;
      } else {
        hours = hours - 1 <= 0 ? 0 : hours - 1;
      }
    } else if (counterType == "minutes") {
      if (arrowType == "up") {
        minutes = minutes + 5 >= 55 ? 55 : minutes + 5;
      } else {
        minutes = minutes - 5 <= 0 ? 0 : minutes - 5;
      }
    }
    this.props.onChange(
      DateService.preZero(hours) + ":" + DateService.preZero(minutes)
    );
  };

  onChangeInput = (val, counterType) => {
    let time = this.props.value;
    let hours = time ? +time.split(":")[0] : "00";
    let minutes = time ? +time.split(":")[1] : "00";
    let lastChar = val.substr(val.length - 1);
    let matches = val.match(/(\d+)/);
    let valNew = matches ? matches[0] : 0;
    if (counterType == "hours") {
      valNew = +valNew >= 23 ? 23 : +valNew;
      hours = +valNew <= 0 ? "00" : +valNew;
    } else if (counterType == "minutes") {
      valNew = +valNew >= 55 ? 55 : +valNew;
      minutes = +valNew <= 0 ? "00" : +valNew;
    }
    this.props.onChange(
      CommonService.preZero(+hours) + ":" + CommonService.preZero(+minutes)
    );
  };
  onBlurInput = (val, counterType) => {
    let time = this.props.value;
    let hours = time ? +time.split(":")[0] : 0;
    let minutes = time ? +time.split(":")[1] : 0;
    this.props.onChange(
      DateService.preZero(hours) + ":" + DateService.preZero(minutes)
    );
  };

  renderTimePicker = () => {
    return (
      <div
        className={
          !this.props.fullWidthPicker
            ? classes.time_picker
            : classes.date_time_picker
        }
        ref={(el) => {
          this.el = el;
        }}
      >
        {this.props.timePickerTitle && (
          <div className={classes.time_picker_title}>
            {this.props.timePickerTitle}
          </div>
        )}
        <div
          className={classes.time_picker_grid + " font9"}
          style={
            this.props.hideArrorwButtons
              ? { marginTop: 10, marginBottom: 10 }
              : {}
          }
        >
          <div className={classes.time_counter + " " + classes.hours}>
            {!this.props.hideArrorwButtons && (
              <div
                className={classes.up + " " + classes.arrow}
                onClick={() => this.onChange("hours", "up")}
              >
                <img src="/images/svgs/generic/up.svg" />
              </div>
            )}
            <div className={classes.value}>
              {/* {this.props.value ? this.props.value.split(':')[0] : '00'} */}
              <input
                type="text"
                value={this.props.value ? this.props.value.split(":")[0] : "00"}
                onChange={(ev) => this.onChangeInput(ev.target.value, "hours")}
                onBlur={(ev) => this.onBlurInput(ev.target.value, "hours")}
                onFocus={() => this.onFocus("hour")}
              />
            </div>
            {!this.props.hideArrorwButtons && (
              <div
                className={classes.down + " " + classes.arrow}
                onClick={() => this.onChange("hours", "down")}
              >
                <img src="/images/svgs/generic/down.svg" />
              </div>
            )}
          </div>
          <div className={classes.time_counter + " " + classes.minutes}>
            {!this.props.hideArrorwButtons && (
              <div
                className={classes.up + " " + classes.arrow}
                onClick={() => this.onChange("minutes", "up")}
              >
                <img src="/images/svgs/generic/up.svg" />
              </div>
            )}
            <div className={classes.value}>
              {/* {this.props.value ? this.props.value.split(':')[1] : '00'} */}
              <input
                type="text"
                value={this.props.value ? this.props.value.split(":")[1] : "00"}
                onChange={(ev) =>
                  this.onChangeInput(ev.target.value, "minutes")
                }
                onBlur={(ev) => this.onBlurInput(ev.target.value, "minutes")}
                onFocus={() => this.onFocus("minute")}
              />
            </div>
            {!this.props.hideArrorwButtons && (
              <div
                className={classes.down + " " + classes.arrow}
                onClick={() => this.onChange("minutes", "down")}
              >
                <img src="/images/svgs/generic/down.svg" />
              </div>
            )}
          </div>
          <div
            className={
              !this.props.showIconsOnAmPm
                ? classes.time_counter + " " + classes.ampm
                : classes.time_counter
            }
          >
            {!this.props.hideArrorwButtons && (
              <div className={classes.up + " " + classes.arrow}>
                {/* <img src="/images/icons/icon-arrow.png" /> */}
                <img
                  src="/images/svgs/generic/up.svg"
                  onClick={() => this.onAmPmChange()}
                />
              </div>
            )}
            <div className={classes.value}>
              {+(this.props.value ? this.props.value.split(":")[0] : "00") >= 12
                ? this.state.selectedPM
                : this.state.selectedAM}
            </div>

            {!this.props.hideArrorwButtons && (
              <div className={classes.down + " " + classes.arrow}>
                <img
                  src="/images/svgs/generic/down.svg"
                  onClick={() => this.onAmPmChange()}
                />
                {/* <img src="/images/icons/icon-arrow.png" /> */}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  //HOUR SELECTION PROCESS LOGIC-------------------------
  onHourSelected = (hour) => {
    this.onChangeInput(hour, "hours");

    this.setState({ hoursSelected: hour });
    this.setState({
      showHourPicker: false,
      showPicker: false,
      showMinutePicker: true,
    });
  };

  renderHourRow = (item1, item2, item3, item4) => {
    return (
      <div className="hour-row">
        <div onClick={() => this.onHourSelected(item1)}>{item1}</div>
        <div onClick={() => this.onHourSelected(item2)}>{item2}</div>
        <div onClick={() => this.onHourSelected(item3)}>{item3}</div>
        <div onClick={() => this.onHourSelected(item4)}>{item4}</div>
      </div>
    );
  };

  renderHourPicker = () => {
    return (
      <div
        className={
          !this.props.fullWidthPicker
            ? "time-picker"
            : classes.date_time_picker_hour_min_sel
        }
      >
        <div className={classes.time_picker_title}>
          {this.props.t("VALIDATIONS.SELECT_HOUR")}
        </div>

        <div className="hour-selection-container">
          <div className="hour-selection-container-inner">
            <div className="hor-row">
              {this.renderHourRow("00", "01", "02", "03")}
            </div>
            <div className="hor-row">
              {this.renderHourRow("04", "05", "06", "07")}
            </div>
            <div className="hor-row">
              {this.renderHourRow("08", "09", "10", "11")}
            </div>
            <div className="hor-row">
              {this.renderHourRow("12", "13", "14", "15")}
            </div>
            <div className="hor-row">
              {this.renderHourRow("16", "17", "18", "19")}
            </div>
            <div className="hor-row">
              {this.renderHourRow("20", "21", "22", "23")}
            </div>
          </div>
        </div>
      </div>
    );
  };

  //MINUTE SELECTION PROCESS LOGIC-------------------------

  onMinuteSelect = (minute) => {
    this.onChangeInput(minute, "minutes");
    this.setState({
      showHourPicker: false,
      showMinutePicker: false,
      showPicker: false,
    });
  };

  renderMinuteRow = (item1, item2, item3, item4) => {
    return (
      <div className="hour-row">
        <div onClick={() => this.onMinuteSelect(item1)}>{item1}</div>
        <div onClick={() => this.onMinuteSelect(item2)}>{item2}</div>
        <div onClick={() => this.onMinuteSelect(item3)}>{item3}</div>
        <div onClick={() => this.onMinuteSelect(item4)}>{item4}</div>
      </div>
    );
  };
  renderMinutePicker = () => {
    return (
      <div
        className={
          !this.props.fullWidthPicker
            ? "time-picker"
            : "date-time-picker-hour-min-sel"
        }
      >
        <div className={classes.time_picker_title}>
          {this.props.t("VALIDATIONS.SELECT_MINUTE")}
        </div>

        <div className="hour-selection-container">
          <div className="hour-selection-container-inner">
            <div className="hor-row">
              {this.renderMinuteRow("00", "05", "10", "15")}
            </div>
            <div className="hor-row">
              {this.renderMinuteRow("20", "25", "30", "35")}
            </div>
            <div className="hor-row">
              {this.renderMinuteRow("40", "45", "50", "55")}
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div
        className={
          classes.common_kupos_time_picker +
          " " +
          (this.props.error ? " error" : "") +
          (this.props.newStyle ? this.props.newStyle : "")
        }
      >
        <div
          className={
            classes.date_inner +
            " " +
            this.props.fontSize +
            (this.props.optional ? " grey-input" : "")
          }
          style={this.props.fontSize === "font9" ? { paddingTop: 1 } : {}}
        >
          {/* <img src="/images/icons/home/icon_calendar.png" /> */}

          {!this.props.hideIcon ? <SvgHome name="time" /> : null}

          {!this.props.optional ? (
            <input
              type="text"
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              value={
                this.props.value &&
                this.props.value +
                  " " +
                  (this.props.value
                    ? +this.props.value.split(":")[0] < 12
                      ? this.state.selectedAM
                      : this.state.selectedPM
                    : " ")
              }
              readOnly
              placeholder={this.props.placeholder}
              style={
                this.props.hideIcon ? { paddingLeft: 0 } : { paddingLeft: 45 }
              }
            />
          ) : (
            <input
              type="text"
              // onFocus={this.onFocus}
              // onBlur={this.onBlur}
              value={""}
              readOnly
              // placeholder={this.props.placeholder}
              style={
                this.props.hideIcon ? { paddingLeft: 0 } : { paddingLeft: 45 }
              }
            />
          )}
          {this.props.iconRight ? (
            <img
              onMouseEnter={() => this.props.iconRightClick(true)}
              onMouseLeave={() => this.props.iconRightClick(false)}
              // onClick={() => this.props.iconRightClick(true)}
              className="time-info-icon"
              src={this.props.iconRight}
            />
          ) : null}
        </div>
        {this.state.showPicker
          ? this.renderTimePicker()
          : this.state.showHourPicker
          ? this.renderHourPicker()
          : this.state.showMinutePicker
          ? this.renderMinutePicker()
          : null}
        {this.props.error ? (
          <span className="error font9">{this.props.errorMessage}</span>
        ) : null}
      </div>
    );
  }
}
