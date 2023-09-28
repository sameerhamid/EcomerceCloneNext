import React, { Component } from "react";

import KuposCalendar from "./kupos-calendar";
import ReactDOM from "react-dom";
import CommonService from "../../../services/commonService";
import DateService from "../../../services/dateService";
import classes from "./kupos-date-picker.module.less";
import SvgHome from "../svg-home/svg-home";

export default class KuposDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  scrollIfNotInView = () => {
    if (this.el) {
      if (CommonService.isElementInView(this.el)) {
        console.log("In the viewport!");
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
      // console.log('clicked outside',event)
      this.setState({ showCalendar: false });
    }
  };

  onFocus = () => {
    this.props.onFocus && this.props.onFocus();

    setTimeout(() => {
      this.setState({ showCalendar: true });
      this.scrollIfNotInView();
    }, 250);
  };

  onBlur = () => {
    this.props.onBlur && this.props.onBlur();
  };

  onDateChange = (d) => {
    // if (d) {
    this.props.onDateChange(d);
    this.setState({ showCalendar: false });
    // }
  };

  render() {
    // const selected = moment('2019-12-27').toDate()
    return (
      <div
        className={
          classes.common_kupos_date_picker +
          " " +
          (this.props.error ? " error" : "") +
          (this.props.newStyle ? this.props.newStyle : "")
        }
        style={this.props.style}
      >
        <div
          className={
            "date-inner " +
            this.props.fontSize +
            (this.props.optional || this.props.disabed ? " grey-input" : "")
          }
        >
          <img src="/images/icons/home/icon_calendar.png" />
          {/* <SvgHome name="calendar" /> */}
          <input
            type="text"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            value={this.props.selectedDate || "dd-mm-yyyy"}
            readOnly
            placeholder={this.props.placeholder}
            disabled={this.props.disabled}
            style={
              this.props.disabled
                ? { backgroundColor: "rgba(239, 239, 239, 0.3)" }
                : null
            }
          />
        </div>
        {this.state.showCalendar ? (
          <div
            className={classes.date_picker_calendar + " hello"}
            ref={(el) => {
              this.el = el;
            }}
          >
            <KuposCalendar
              firstDayOfWeek="mo"
              sunHighlight={true}
              minDateSelection={this.props.minDate}
              deactivatePastDate={this.props.deactivatePastDate}
              maxDateSelection={this.props.maxDate}
              canChangeYear={this.props.canChangeYear}
              // returnDate
              dateSelected={
                this.props.selectedDate
                  ? this.props.selectedDate
                  : this.props.returnDate
                  ? this.props.originDate
                  : DateService.getTodayString("dd-mm-yyyy")
              }
              onDateSelect={(date) => this.onDateChange(date)}
              onMonthChange={(d) => {
                console.log(d);
              }}
              canEraseDate={this.props.canEraseDate}
            />
          </div>
        ) : null}
        {this.props.error ? (
          <span className="error font9">
            {this.props.t(this.props.errorMessage)}
          </span>
        ) : null}
      </div>
    );
  }
}
