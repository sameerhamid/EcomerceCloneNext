import React, { Component } from "react";

import i18next from "i18next";
import DateService from "../../../services/dateService";
import classNames from "classnames";
import classes from "./kupos-calendar.module.less";
import SvgHome from "../svg-home/svg-home";

const monthNameEn = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const monthNameSp = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];
export default class KuposCalendar extends Component {
  showSelector = false;
  selectedDate = { year: 0, month: 0, day: 0 };

  selectionDayTxt = "";
  dayIdx = 0;
  today = null;

  PREV_MONTH = 1;
  CURR_MONTH = 2;
  NEXT_MONTH = 3;

  // Default options
  months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  dayLabels = {
    su: "Dom",
    mo: "Lun",
    tu: "Mar",
    we: "Mié",
    th: "Jue",
    fr: "Vie",
    sa: "Sáb",
  };
  dayLabelsOneLetter = {
    su: "D",
    mo: "L",
    tu: "M",
    we: "M",
    th: "J",
    fr: "V",
    sa: "S",
  };
  // dayLabels = { su: 'sunday', mo: 'monday', tu: 'tuesday', we: 'wednesday', th: 'thursday', fr: 'friday', sa: 'saturday' };
  dayLabelsArray = {
    1: "Sun",
    2: "Mon",
    3: "Tue",
    4: "Wed",
    5: "Thu",
    6: "Fri",
    7: "Sat",
  };
  dayLabelsArrayOneLetter = {
    1: "S",
    2: "M",
    3: "T",
    4: "W",
    5: "T",
    6: "F",
    7: "S",
  };
  monthLabelsEN = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
  monthLabels = {
    1: "Ene",
    2: "Feb",
    3: "Mar",
    4: "Abr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Ago",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dic",
  };
  todayBtnTxt = "Hoy";

  visibleMonth = { monthTxt: "", monthNbr: 0, year: 0 };

  constructor(props) {
    super(props);
    this.today = new Date();
    this.todayString = DateService.getTodayString("dd-mm-yyyy");
    this.state = {
      weekDays: [],
      dates: [],
      showView: "date",
      selectedYear: this.props.dateSelected
        ? +this.getyear(this.props.dateSelected)
        : new Date().getFullYear(),
    };
    this.currentYear = this.today.getFullYear();
    this.yearsList = [];
    let year = this.currentYear;
    for (let i = 1; i < 100; i++) {
      this.yearsList.push(year--);
    }
    this.selectedYearIndex = 0;
    if (this.props.dateSelected) {
      let year = +this.getyear(this.props.dateSelected);
      let selectedIndex = 0;
      for (let i = 0; i < 100; i += 12) {
        for (let j = i; j < i + 12; j++) {
          if (this.yearsList[j] == year) {
            this.selectedYearIndex = selectedIndex;
          }
        }
        selectedIndex++;
      }
    }
    this.state.selectedYearList = this.yearsList.filter(
      (val, i) =>
        i >= this.selectedYearIndex * 12 && i < this.selectedYearIndex * 12 + 12
    );
  }

  componentDidMount() {
    // Custom Editing Pardeep

    // this.border = 'none';
    // let doc = document.getElementsByTagName('html')[0];
    // doc.addEventListener('click', (event) => {
    //     true
    //     if (this.showSelector && event.target && this.elem.nativeElement !== event.target && !this.elem.nativeElement.contains(event.target)) {
    //         this.showSelector = true;
    //     }
    // }, true);

    // Custom Editing Pardeep

    let days = ["su", "mo", "tu", "we", "th", "fr", "sa"];
    this.dayIdx = days.indexOf(this.props.firstDayOfWeek || "su");
    let weekDays = [];
    if (this.dayIdx !== -1) {
      let idx = this.dayIdx;
      if (typeof this.dateFormat === "undefined") {
        this.dateFormat = "dd-mm-yyyy";
      }
      for (var i = 0; i < days.length; i++) {
        weekDays.push(this.dayLabelsOneLetter[days[idx]]);
        idx = days[idx] === "sa" ? 0 : idx + 1;
      }
    }
    if (this.props.dateSelected)
      this.visibleMonth = {
        monthTxt: this.getMonthName(this.props.dateSelected),
        monthNbr: +this.getMonth(this.props.dateSelected),
        year: +this.getyear(this.props.dateSelected),
      };
    else {
      if (
        new Date(
          this.getyear(this.props.minDateSelection),
          +this.getMonth(this.props.minDateSelection) - 1,
          this.getDay(this.props.minDateSelection)
        ) < new Date()
      ) {
        this.visibleMonth = {
          monthTxt: this.getMonthName(this.todayString),
          monthNbr: +this.getMonth(this.todayString),
          year: +this.getyear(this.todayString),
        };
      } else {
        this.visibleMonth = {
          monthTxt: this.getMonthName(this.props.minDateSelection),
          monthNbr: +this.getMonth(this.props.minDateSelection),
          year: +this.getyear(this.props.minDateSelection),
        };
      }
    }
    this.openBtnClicked(this.visibleMonth.monthNbr, this.visibleMonth.year);
    this.setState({ weekDays: weekDays });
  }

  componentWillUpdate() {
    this.dateFormat = "dd-mm-yyyy";
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state != nextState) {
      return true;
    } else {
      return false;
    }
  }

  getDay = (date) => {
    if (date) {
      return date.substr(0, 2);
    }
  };
  getMonth = (date) => {
    if (date) {
      return date.substr(3, 2);
    }
  };
  getyear = (date) => {
    if (date) {
      return date.substr(6, 4);
    }
  };
  getMonthName = (date) => {
    if (date) {
      return i18next.language == "es"
        ? this.monthLabels[+this.getMonth(date)]
        : this.monthLabelsEN[+this.getMonth(date)];
    }
  };

  componentDidUpdate() {
    try {
      // this.selectionDayTxt = changes['dateSelected'].currentValue;
      if (this.selectionDayTxt !== "") {
        if (this.props.dateSelected) {
          this.selectedDate.day = this.getDay(this.props.dateSelected);
          this.selectedDate.month = +this.getMonth(this.props.dateSelected);
          this.selectedDate.year = this.getyear(this.props.dateSelected);
        }
        //let fmt =  this.dateFormat;
        // let dpos:number = fmt.indexOf('dd');
        // let mpos:number = fmt.indexOf('mm');
        // let ypos:number = fmt.indexOf('yyyy');

        //this.selectedDate = {day: dpos, month: mpos, year: ypos};
        //this.formatDate(this.dateFormat);
        //this.selectedDate = {day: parseInt(this.selectionDayTxt.substring(dpos, dpos + 2)),
        //month: parseInt(this.selectionDayTxt.substring(mpos, mpos + 2)),
        //year: parseInt(this.selectionDayTxt.substring(ypos, ypos + 4))};
      }
    } catch (e) {
      console.log("error is->>", e);
    }
  }
  // Function for get Events List API //
  // API_getEvent() {
  // 	let url_newEvent = this.base_path_service.base_path_event() + 'event/?year='+this.visibleMonth.year+'&month='+this.visibleMonth.monthNbr;
  // 	this.base_path_service.GetRequestbase_path_servic(url_newEvent)
  // 		.subscribe(res=> {
  //             this.EventsBooked = res[0].json;
  //             this.createEventCalendar();
  // 		},
  // 		err=> {
  // 			console.log(err);
  // 		})
  // }
  // Function for get Events List API //

  openBtnClicked = (m, y) => {
    this.showSelector = !this.showSelector;
    if (this.showSelector) {
      //   let y = 0,
      //     m = 0;
      //   if (
      //     this.selectedDate.year === 0 &&
      //     this.selectedDate.month === 0 &&
      //     this.selectedDate.day === 0
      //   ) {
      //     y = this.today.getFullYear();
      //     m = this.today.getMonth() + 1;
      //   } else {
      //     y = this.selectedDate.year;
      //     m = this.selectedDate.month;
      //   }
      // Set current month
      this.visibleMonth = {
        monthTxt:
          i18next.language == "es"
            ? this.monthLabels[m]
            : this.monthLabelsEN[m],
        monthNbr: m,
        year: y,
      };

      // Create current month
      this.createMonth(m, y);
    }
  };
  prevMonth = () => {
    if (!this.hidePreviosMonth()) {
      let m = this.visibleMonth.monthNbr;
      let y = this.visibleMonth.year;
      if (m === 1) {
        m = 12;
        y--;
      } else {
        m--;
      }
      this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
      this.createMonth(m, y);
    }

    // this.API_getEvent();
  };

  nextMonth = () => {
    let m = this.visibleMonth.monthNbr;
    let y = this.visibleMonth.year;
    if (m === 12) {
      m = 1;
      y++;
    } else {
      m++;
    }
    this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
    this.createMonth(m, y);
    // this.API_getEvent();
  };

  setMonth = (m, y) => {
    this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
    this.createMonth(m, y);
    // this.API_getEvent();
  };
  setYear = (y) => {
    this.visibleMonth = {
      monthTxt: this.monthText(this.visibleMonth.monthNbr),
      monthNbr: this.visibleMonth.monthNbr,
      year: y,
    };
    this.createMonth(this.visibleMonth.monthNbr, y);
    // this.API_getEvent();
  };

  cellClicked = (cell) => {
    // Cell clicked in the selector
    if (!this.isPast(cell.day, cell.month, cell.year, cell.cmo)) {
      if (cell.cmo === this.PREV_MONTH) {
        // Previous month of day
        this.prevMonth();
      } else if (cell.cmo === this.CURR_MONTH) {
        // Current month of day

        this.selectDate(cell);
      } else if (cell.cmo === this.NEXT_MONTH) {
        // Next month of day
        this.nextMonth();
      }
    }
  };

  selectDate = (date) => {
    if (date == "remove") {
      this.props.onDateSelect("");
    } else {
      this.selectedDate = { day: date.day, month: date.month, year: date.year };
      this.selectionDayTxt = this.formatDate(date);
      // Custom Editing Pardeep
      this.showSelector = true;
      // Custom Editing Pardeep
      let selD = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
      //let epoAPI_getEventc = selD.getTime() / 1000.0;
      //console.log( 'calendar component---->selectDate',date);
      if (this.props.minDateSelection && this.props.maxDateSelection) {
        if (
          new Date(
            this.getyear(this.props.minDateSelection),
            +this.getMonth(this.props.minDateSelection) - 1,
            this.getDay(this.props.minDateSelection)
          ) <= new Date(date.year, date.month - 1, date.day) &&
          new Date(
            this.getyear(this.props.maxDateSelection),
            +this.getMonth(this.props.maxDateSelection) - 1,
            this.getDay(this.props.maxDateSelection)
          ) >= new Date(date.year, date.month - 1, date.day)
        ) {
          this.props.onDateSelect(this.selectionDayTxt);
        } else {
          return;
        }
      } else if (this.props.minDateSelection) {
        if (
          new Date(
            this.getyear(this.props.minDateSelection),
            +this.getMonth(this.props.minDateSelection) - 1,
            this.getDay(this.props.minDateSelection)
          ) <= new Date(date.year, date.month - 1, date.day)
        ) {
          this.props.onDateSelect(this.selectionDayTxt);
        } else {
          return;
        }
      } else if (this.props.maxDateSelection) {
        if (
          new Date(
            this.getyear(this.props.maxDateSelection),
            +this.getMonth(this.props.maxDateSelection) - 1,
            this.getDay(this.props.maxDateSelection)
          ) >= new Date(date.year, date.month - 1, date.day)
        ) {
          this.props.onDateSelect(this.selectionDayTxt);
        } else {
          return;
        }
      } else {
        this.props.onDateSelect(this.selectionDayTxt);
      }
    }
  };

  isDeactivated = (date) => {
    if (this.props.minDateSelection && this.props.maxDateSelection) {
      if (
        new Date(
          this.getyear(this.props.minDateSelection),
          +this.getMonth(this.props.minDateSelection) - 1,
          this.getDay(this.props.minDateSelection)
        ) <= new Date(date.year, date.month - 1, date.day) &&
        new Date(
          this.getyear(this.props.maxDateSelection),
          +this.getMonth(this.props.maxDateSelection) - 1,
          this.getDay(this.props.maxDateSelection)
        ) >= new Date(date.year, date.month - 1, date.day)
      ) {
        return false;
      } else {
        return true;
      }
    } else if (this.props.minDateSelection) {
      if (
        new Date(
          this.getyear(this.props.minDateSelection),
          +this.getMonth(this.props.minDateSelection) - 1,
          this.getDay(this.props.minDateSelection)
        ) <= new Date(date.year, date.month - 1, date.day)
      ) {
        return false;
      } else {
        return true;
      }
    } else if (this.props.maxDateSelection) {
      if (
        new Date(
          this.getyear(this.props.maxDateSelection),
          +this.getMonth(this.props.maxDateSelection) - 1,
          this.getDay(this.props.maxDateSelection)
        ) >= new Date(date.year, date.month - 1, date.day)
      ) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  };

  preZero = (val) => {
    // Prepend zero if smaller than 10
    return val < "10" ? "0" + val : val;
  };

  formatDate = (val) => {
    return this.dateFormat
      .replace("yyyy", val.year)
      .replace("mm", this.preZero(val.month))
      .replace("dd", this.preZero(val.day));
  };

  monthText = (m) => {
    // Returns mont as a text
    return i18next.language == "es"
      ? this.monthLabels[m]
      : this.monthLabelsEN[m];
  };

  monthStartIdx = (y, m) => {
    // Month start index
    let d = new Date();
    d.setDate(1);
    d.setMonth(m - 1);
    d.setFullYear(y);
    let idx = d.getDay() + this.sundayIdx();
    return idx >= 7 ? idx - 7 : idx;
  };

  daysInMonth = (m, y) => {
    // Retur of days of current month
    return new Date(y, m, 0).getDate();
  };

  daysInPrevMonth = (m, y) => {
    // Return number of days of the previous month
    if (m === 1) {
      m = 12;
      y--;
    } else {
      m--;
    }
    return this.daysInMonth(m, y);
  };

  isCurrDay = (d, m, y, cmo) => {
    // Check is a given date the current date
    return (
      d === this.today.getDate() &&
      m === this.today.getMonth() + 1 &&
      y === this.today.getFullYear() &&
      cmo === 2
    );
  };

  isSelectedDay = (d, m, y, cmo) => {
    // Check is a given date the current date
    return (
      d === +this.getDay(this.props.dateSelected) &&
      m === +this.getMonth(this.props.dateSelected) &&
      y === +this.getyear(this.props.dateSelected) &&
      cmo === 2
    );
  };

  isPast = (d, m, y, cmo) => {
    if (this.props.deactivatePastDate) {
      let month = m;
      switch (cmo) {
        case this.PREV_MONTH:
          month = m - 2;
          break;
        case this.CURR_MONTH:
          month = m - 1;
          break;
        default:
          break;
      }
      let dt = new Date(y, month, d + 1);
      if (dt < this.today) {
        return true;
      }
      return false;
    }
    return false;
  };

  isFuture = (d, m, y, cmo) => {
    if (this.props.deactivateFutureDate) {
      let month = m;
      switch (cmo) {
        case this.NEXT_MONTH:
          month = m;
          break;
        case this.CURR_MONTH:
          month = m - 1;
          break;
        default:
          break;
      }
      let dt = new Date(y, month + 1, d);
      if (dt > this.today) {
        return true;
      }
      return false;
    }
    return false;
  };

  hidePreviosMonth = () => {
    if (this.props.deactivatePastDate) {
      let m = this.visibleMonth.monthNbr - 1;
      let y = this.visibleMonth.year;
      let dt = new Date();
      let mt = dt.getMonth();
      let yt = dt.getFullYear();
      if (m <= mt && y <= yt) {
        return true;
      }
    }
    return false;
  };

  sundayIdx = () => {
    // Index of Sunday day
    return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
  };

  createMonth = (m, y) => {
    let selD = new Date(y, m - 1, 1, 0, 0, 0, 0);
    this.props.onMonthChange({
      day: 1,
      month: m,
      year: y,
      dayName: this.dayLabelsArrayOneLetter[selD.getDay() + 1],
      monthName:
        i18next.language == "es" ? this.monthLabels[m] : this.monthLabelsEN[m],
      formattedDate: "01-" + this.preZero(m.toString()) + "-" + y,
    });
    // this.dates.length = 0;
    let dates = [];
    let monthStart = this.monthStartIdx(y, m);
    let dInThisM = this.daysInMonth(m, y);
    let dInPrevM = this.daysInPrevMonth(m, y);
    let sunIdx = this.sundayIdx();

    let dayNbr = 1;
    let cmo = this.PREV_MONTH;
    for (var i = 1; i < 7; i++) {
      var week = [];
      if (i === 1) {
        // First week
        var pm = dInPrevM - monthStart + 1;
        // Previous month
        for (var j = pm; j <= dInPrevM; j++) {
          week.push({
            day: j,
            month: m,
            year: y,
            cmo: cmo,
            currDay: this.isCurrDay(j, m, y, cmo),
            sun: week.length === sunIdx,
          });
        }
        cmo = this.CURR_MONTH;
        // Current month
        var daysLeft = 7 - week.length;
        for (var j = 0; j < daysLeft; j++) {
          week.push({
            day: dayNbr,
            month: m,
            year: y,
            cmo: cmo,
            currDay: this.isCurrDay(dayNbr, m, y, cmo),
            sun: week.length === sunIdx,
          });
          dayNbr++;
        }
      } else {
        // Rest of the weeks
        for (var j = 1; j < 8; j++) {
          if (dayNbr > dInThisM) {
            // Next month
            dayNbr = 1;
            cmo = this.NEXT_MONTH;
          }
          week.push({
            day: dayNbr,
            month: m,
            year: y,
            cmo: cmo,
            currDay: this.isCurrDay(dayNbr, m, y, cmo),
            sun: week.length === sunIdx,
          });
          dayNbr++;
        }
      }
      dates.push(week);
    }
    this.setState({ dates: dates });
  };

  showMonthList = () => {
    this.setState({ showMonthList: true });
  };

  renderMonthList = () => {
    return this.state.showMonthList
      ? this.months.map((val, i) => (
          <div
            className={"col_mp span_1_of_3_mp "}
            key={i}
            onClick={() => this.onMonthChange(i)}
          >
            {this.getMonthName(i)}
          </div>
        ))
      : null;
  };

  renderDateCalendar = () => {
    return (
      <div className={classes.kupos_date_view}>
        <div className="tan-calendar">
          <div className="">
            <div className="main-">
              <div className="Event-calendar font10">
                <div className="years">
                  <div className={classes.month_label + " font10"}>
                    <div
                      className={
                        "unit prev month-arrow-controls" +
                        (this.state.hidePreviosMonth ? "transparent" : "")
                      }
                      onClick={this.prevMonth}
                    >
                      <SvgHome name="arrow-whight-left" />
                    </div>
                    {!this.props.canChangeYear ? (
                      <div
                        className={
                          classes.monyear +
                          " uppercase " +
                          (this.props.canChangeYear ? "pointer" : "")
                        }
                      >
                        <b>
                          {(this.visibleMonth.monthTxt
                            ? this.visibleMonth.monthTxt.toUpperCase()
                            : "") +
                            " " +
                            this.visibleMonth.year}
                        </b>
                      </div>
                    ) : (
                      <div
                        className={
                          classes.monyear +
                          " " +
                          classes.select_month_year +
                          " monyear uppercase"
                        }
                      >
                        <b className="pointer" onClick={this.showMonthView}>
                          <span>
                            {this.visibleMonth.monthTxt
                              ? this.visibleMonth.monthTxt.toUpperCase()
                              : ""}
                          </span>
                          <img
                            src="/images/icons/home/icon_arrow_down_white.png"
                            alt=""
                          />
                          {/* {
                              this.renderMonthList()
                            } */}
                        </b>
                        <b className="pointer" onClick={this.showYearView}>
                          <span>{this.visibleMonth.year}</span>
                          <img
                            src="/images/icons/home/icon_arrow_down_white.png"
                            alt=""
                          />
                        </b>
                      </div>
                    )}
                    <div
                      className="unit next month-arrow-controls"
                      onClick={this.nextMonth}
                    >
                      <SvgHome name="arrow-whight-right" />
                      {/* <img src="/images/icons/icon-arrow-right.png" /> */}
                    </div>
                  </div>
                  <div className={classes.week_days + " clearfix"}>
                    {this.state.weekDays.map((days, i) => {
                      return (
                        <div className={classes.unit} key={i}>
                          <b>{days.toUpperCase()}</b>
                        </div>
                      );
                    })}
                    <div className="clear"></div>
                  </div>
                </div>

                <div className={classes.days}>
                  {this.state.dates.map((w, i) => {
                    return w.map((d, j) => {
                      return (
                        <div
                          onClick={() => this.cellClicked(d)}
                          key={j}
                          className={
                            classes.day_number +
                            " " +
                            (d.cmo === this.PREV_MONTH && " older ") +
                            (d.cmo === this.NEXT_MONTH && " next-month ") +
                            (this.isCurrDay(d.day, d.month, d.year, d.cmo)
                              ? " " + classes.today + " "
                              : " ") +
                            (this.isPast(d.day, d.month, d.year, d.cmo)
                              ? " " + classes.past + " "
                              : " ") +
                            (this.isDeactivated(d)
                              ? " " + classes.deactivate + " "
                              : " ") +
                            (this.isFuture(d.day, d.month, d.year, d.cmo)
                              ? " " + classes.future + " "
                              : " ") +
                            (this.isSelectedDay(d.day, d.month, d.year, d.cmo)
                              ? " " + classes.selected + " "
                              : "") +
                            (!d.day ? "no-day" : "")
                          }
                        >
                          {d.cmo === this.CURR_MONTH ? (
                            <span className={classes.day_number_inner}>
                              {d.day}
                            </span>
                          ) : null}
                        </div>
                      );
                    });
                  })}
                </div>
                {this.props.canEraseDate ? (
                  <div
                    className="bold-text primary-text font9 "
                    style={{
                      textAlign: "center",
                      marginTop: 10,
                      cursor: "pointer",
                    }}
                    onClick={() => this.selectDate("remove")}
                  >
                    {i18next.language == "es"
                      ? "Eliminar fecha"
                      : "Remove date"}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div id="divcalendartable"></div>
      </div>
    );
  };

  showMonthView = () => {
    this.setState({ showView: "month" });
  };

  getMonthName = (i) => {
    return i18next.language == "es" ? monthNameSp[i] : monthNameEn[i];
  };

  onMonthChange = (selectedMonth) => {
    // let maskedValue = this.getMonthName(selectedMonth) + ' ' + this.state.selectedYear;
    // // setTimeout(() => {
    //   this.props.onMonthChange(maskedValue, this.state.selectedYear, selectedMonth);
    // }, 200);
    this.setMonth(selectedMonth + 1, this.state.selectedYear);
    this.setState({ showView: "date" });
  };

  prevYear = () => {
    this.setState({
      selectedYear: +this.state.selectedYear - 1,
    });
  };
  nextYear = () => {
    this.setState({
      selectedYear: +this.state.selectedYear + 1,
    });
  };

  renderMonthCalendar = () => {
    return (
      <div className={"month-picker font9 "}>
        {/* <MonthPickerInput
            year={this.props.selectedYear}
            month={this.props.selectedMonth}
            closeOnSelect={true}
            mode={"calendarOnly"}
            onChange={this.props.onMonthChange}
        /> */}
        <div className="month-calendar kupos-card">
          <div className={classes.month_label + " font10"}>
            <div
              className={
                "unit prev " +
                (this.state.hidePreviosMonth ? "transparent" : "")
              }
              onClick={this.prevYear}
            >
              {/* <img src="/images/icons/icon-arrow-left.png" /> */}
              <SvgHome name="arrow-whight-left" />
            </div>
            <div className={classes.monyear + " uppercase"}>
              {this.state.selectedYear}
            </div>
            <div className="unit next" onClick={this.nextYear}>
              <SvgHome name="arrow-whight-right" />
              {/* <img src="/images/icons/icon-arrow-right.png" /> */}
            </div>
          </div>
          <div className="calendar-container font10 light-text">
            {this.months.map((val, i) => (
              <div
                className={
                  "col_mp span_1_of_3_mp " +
                  (this.visibleMonth.monthNbr == i + 1 ? "selected_cell" : "")
                }
                key={i}
                onClick={() => this.onMonthChange(i)}
              >
                {this.getMonthName(i)}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  showYearView = () => {
    this.setState({ showView: "year" });
  };

  onYearChange = (selectedYear) => {
    // let maskedValue = this.getYearName(selectedYear) + ' ' + this.state.selectedYear;
    // // setTimeout(() => {
    //   this.props.onYearChange(maskedValue, this.state.selectedYear, selectedYear);
    // }, 200);
    this.setYear(selectedYear);
    this.setState({ showView: "date", selectedYear: selectedYear });
  };

  prevYearList = () => {
    this.selectedYearIndex++;
    this.setState({
      selectedYearList: this.yearsList.filter(
        (val, i) =>
          i >= this.selectedYearIndex * 12 &&
          i < this.selectedYearIndex * 12 + 12
      ),
    });
  };
  nextYearList = () => {
    if (this.selectedYearIndex <= 0) {
      return;
    }
    this.selectedYearIndex--;
    this.setState({
      selectedYearList: this.yearsList.filter(
        (val, i) =>
          i >= this.selectedYearIndex * 12 &&
          i < this.selectedYearIndex * 12 + 12
      ),
    });
  };

  renderYearCalendar = () => {
    return (
      <div className={"month-picker font9 "}>
        {/* <MonthPickerInput
            year={this.props.selectedYear}
            month={this.props.selectedMonth}
            closeOnSelect={true}
            mode={"calendarOnly"}
            onChange={this.props.onMonthChange}
        /> */}
        <div className="month-calendar kupos-card">
          <div className={classes.month_label + " font10"}>
            <div className={"unit prev "} onClick={this.prevYearList}>
              {/* <img src="/images/icons/icon-arrow-left.png" /> */}
              <SvgHome name="arrow-whight-left" />
            </div>
            <div className={classes.monyear + " uppercase"}>
              {this.state.selectedYearList[
                this.state.selectedYearList.length - 1
              ] +
                " - " +
                this.state.selectedYearList[0]}
            </div>
            <div className="unit next" onClick={this.nextYearList}>
              <SvgHome name="arrow-whight-right" />
              {/* <img src="/images/icons/icon-arrow-right.png" /> */}
            </div>
          </div>
          <div className="calendar-container font10 light-text">
            {this.state.selectedYearList.reverse().map((val, i) => (
              <div
                className={
                  "col_mp span_1_of_3_mp " +
                  (this.state.selectedYear == val ? "selected_cell" : "")
                }
                key={i}
                onClick={() => this.onYearChange(val)}
              >
                {val}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={classes.common_kupos_calendar}>
        {this.state.showView == "date"
          ? this.renderDateCalendar()
          : this.state.showView == "month"
          ? this.renderMonthCalendar()
          : this.renderYearCalendar()}
      </div>
    );
  }
}
