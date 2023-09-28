import React, { PureComponent } from "react";
import classes from "./date-time-picker.module.less";
import DateService from "../../../services/dateService";
import KuposDatePicker from "../date-picker/kupos-date-picker";
import KuposTimePicker from "../time-picker/time-picker";
import Image from "next/image";

export class KuposDateTimePicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showOnSelect: false,
    };
  }

  componentDidMount() {
    console.log("props in date-time-picker---", this.props.selectedTime);
    // this.setState({ dateTimeCleared: false });
  }
  onDateChangeInternal = (val) => {
    this.props.onDateChange(val, "date");
    this.setState({ showOnSelect: true });
  };

  clearDateTime = () => {
    this.setState({ showOnSelect: false });
    this.props.clearDateTime();
  };

  onDateFocus = () => {
    this.setState({ showOnSelect: false });
  };

  onDateBlur = () => {
    this.setState({ showOnSelect: false });
  };

  render() {
    // console.log('props in kupos date time------------', this.props);
    return (
      <div className={classes.common_kupos_date_time_picker}>
        <div
          className={classes.date_time_container}
          style={
            this.props.optional
              ? { backgroundColor: "#dedcd8" }
              : this.props.dateTimeContainerStyle
              ? this.props.dateTimeContainerStyle
              : null
          }
          // onClick={() => this.onDateTimeInFocus()}
        >
          <KuposDatePicker
            selectedDate={DateService.changeDateFormat(
              this.props.selectedDate,
              "dd-mm-yyyy",
              "dd/mm/yyyy"
            )}
            onDateChange={(val) => this.onDateChangeInternal(val)}
            minDate={
              this.props.optionalDatePicker
                ? this.props.transferData.selectedStartDate
                : this.props.minDate
                ? this.props.minDate
                : DateService.getTodayString()
            }
            // error={this.state.transferDateError ? true : false}
            // errorMessage={this.state.transferDateError}
            placeholder={
              this.props.optional
                ? this.props.t("HOME.OPTIONAL_DATE")
                : this.props.t("HOME.SELECT_DATE")
            }
            newStyle="border-less-date-input"
            disabled={this.props.disabled}
            maxDate={this.props.maxDate}
            optional={this.props.optional}
            startFromNextDate={this.props.startFromNextDate}
            originDate={this.props.originDate}
            // onFocus={this.onFocus}
            fontSize="font10"
            returnDate={this.props.returnDate}
            onFocus={this.onDateFocus}
            onBlur={this.onDateBlur}
            optionalDatePicker={this.props.optionalDatePicker}
            dateInnerStyle={this.props.dateInnerStyle}
          />

          {this.state.showOnSelect || this.props.showTimeInitially ? (
            <KuposTimePicker
              value={this.props.selectedTime ? this.props.selectedTime : null}
              onChange={(val) => this.props.onTimeChange(val, "time")}
              placeholder={this.props.optional ? "" : "00:00"}
              newStyle="border-less-time-input"
              hideIcon={true}
              fullWidthPicker={true}
              showIconsOnAmPm={true}
              showAmPm={this.props.optional ? false : true}
              disabled={this.props.disabled}
              optional={this.props.optional}
              showOnSelect={this.state.showOnSelect}
              fontSize="font10"
              timePickerTitle={this.props.timePickerTitle}
              t={this.props.t}
              hideArrorwButtons={this.props.hideArrorwButtons || false}
            />
          ) : null}
          {this.props.optionalDatePicker && this.props.selectedDate ? (
            <div className="cross mr-1" onClick={() => this.clearDateTime()}>
              <img
                className="input-cross"
                src="/images/icons/home/at-x-mark.png"
              />
            </div>
          ) : null}
        </div>

        {this.props.iconRight && this.props.showPickerInDateTimePicker ? (
          <Image
            onMouseEnter={() => this.props.iconRightClick(true)}
            onMouseLeave={() => this.props.iconRightClick(false)}
            className={classes.time_info_icon}
            src={this.props.iconRight}
            alt="right-icon"
            height={20}
            width={20}
          />
        ) : null}

        {this.props.error ? (
          <span className="error font9">{this.props.errorMessage}</span>
        ) : null}
      </div>
    );
  }
}

export default KuposDateTimePicker;
