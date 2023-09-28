import React, { Component } from "react";

import CommonService from "../../../services/commonService";
import Image from "next/image";
import Select from "react-select";

// import classes from "./select-dropdown.module.less";

export default class SelectDropdown extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      cursor: 0,
      options: this.props.options,
      showSuggestions: false,
    };
  }
  componentDidMount() {
    if (this.props.selectType && this.props.options && !this.optionsFull)
      this.optionsFull = this.props.options;
    this.setState({
      options: this.props.options,
    });
  }
  componentWillUpdate() {
    if (this.props.selectType && this.props.options && !this.optionsFull)
      this.optionsFull = this.props.options;
    if (this.optionsFull && !this.optionsFull.data && !this.optionsLoaded) {
      this.setState({
        options: this.optionsFull.slice(0, 100),
      });
      this.optionsLoaded = true;
    }
    if (
      typeof this.textValue === "undefined" &&
      this.props.selectedOption &&
      this.props.selectedOption.label
    ) {
      this.textValue = this.props.selectedOption.label;
      this.setState({ textValue: this.props.selectedOption.label });
    }
  }

  scrollIfNotInView = (el) => {
    // if (el) {
    //   if (CommonService.isElementInView(el)) {
    //     console.log('In the viewport!');
    //   } else {
    //     el.scrollIntoView(false);
    //   }
    // }
  };

  clearValue = () => {
    setTimeout(() => {
      this.setState({ textValue: undefined });
      this.onSelect(null);
    }, 300);
  };
  handleKeyDown(e) {
    try {
      const { cursor, options } = this.state;
      // arrow up/down button should select next/previous list element
      if (e.keyCode === 38 && cursor > 0) {
        this.setState((prevState) => ({
          cursor: prevState.cursor - 1,
        }));
      } else if (e.keyCode === 40 && cursor < options.length) {
        this.setState((prevState) => ({
          cursor: prevState.cursor + 1,
        }));
      } else if (e.keyCode === 13 && cursor > 0) {
        this.onSelect(this.state.options[cursor - 1]);
      }
      setTimeout(() => {
        var c = document.querySelector(".auto-suggestions .cursor");
        if (c) {
        }
      }, 300);
    } catch (error) {
      console.log("Error caught---- handleKeyDown");
    }
  }

  gotoActive = () => {
    var act = document.querySelector(".auto-suggestions .active");
    if (act) {
      var topPos = act.offsetTop;
      document.querySelector(".auto-suggestions").scrollTop = topPos - 10;
    }
  };

  inputChange = (ev) => {
    try {
      let val = ev.target.value;
      let ops =
        val && !this.props.showAll
          ? this.props.options &&
            this.props.options.filter((it) => {
              return (
                CommonService.getStringWithoutAccent(
                  it.label.toLowerCase()
                ).indexOf(
                  CommonService.getStringWithoutAccent(val.toLowerCase())
                ) >= 0
              );
            })
          : this.props.options;
      this.setState({
        options: ops,
        textValue: val,
      });
      if (this.el) {
        setTimeout(() => {
          this.scrollIfNotInView(this.el);
        }, 250);
      }

      if (this.props.selectType && this.optionsFull && !this.optionsFull.data) {
        let selectOptions = this.optionsFull.filter((it) => {
          return (
            it["label"].indexOf(val.toLowerCase()) > -1 ||
            it["label"].toLowerCase().indexOf(val.toLowerCase()) > -1 ||
            it["label"].indexOf(val.toLowerCase()) >= 0
          );
        });
        // this.selectOptions = CommonService.copyObject(selectOptions.slice(0,100))
        this.setState({
          options:
            selectOptions && selectOptions.length
              ? selectOptions.slice(0, 100)
              : this.optionsFull.slice(0, 100),
        });
      }
      if (this.props.onInputChange) this.props.onInputChange(val);
    } catch (error) {
      console.log("error caught-----", error);
    }
  };

  onSelect = (val) => {
    this.setState({
      textValue:
        val && val.label && val.label.indexOf(":") < 0
          ? this.props.t(val.label)
          : val && val.label,
      showSuggestions: false,
      cursor: 0,
    });
    this.props.onChange(val);
  };

  onFocus = (toggle = false) => {
    try {
      if (toggle === true) {
        this.setState({ showSuggestions: !this.state.showSuggestions });
      } else {
        this.setState({ showSuggestions: true });
      }
      setTimeout(() => {
        if (this.el) {
          setTimeout(() => {
            this.scrollIfNotInView(this.el);
          }, 250);
          this.gotoActive();
        }
      }, 300);
    } catch (error) {
      console.log("Error caught---", error);
    }
  };

  onBlur = () => {
    setTimeout(() => {
      this.setState({ showSuggestions: false, cursor: 0 });
      if (this.props.onBlur) this.props.onBlur();
    }, 250);
  };

  render() {
    return (
      <div
        className={"common-kupos-select-box-outer"}
        style={
          this.props.disabled ? { pointerEvents: "none", opacity: 0.6 } : {}
        }
      >
        <div className={"react-selectbox"} style={this.props.style}>
          {this.props.icon ? (
            <Image
              alt={this.props.t("TRANSLATIONS.ICON_SOURCE")}
              className={"icon-size" + " " + "icon-left"}
              src={this.props.icon}
              style={this.props.error ? { marginTop: "-18px" } : null}
              width={20}
              height={20}
            />
          ) : null}

          <Select
            menuColor="red"
            ref={this.props.selectRef}
            value={this.props.selectedOption}
            onChange={this.props.onChange}
            onInputChange={this.props.onInputChange}
            isDisabled={this.props.disabled}
            isSearchable={this.props.searchable}
            options={this.props.options ? this.props.options : []}
            placeholder={this.props.placeholder}
            styles={{ fontSize: 12,}}
          />
        </div>

        {this.props.error ? (
          <span className="error font9">
            {this.props.t(this.props.errorMessage)}
          </span>
        ) : null}

        {!this.props.disabled &&
        this.props.options &&
        this.state.showSuggestions &&
        this.state.options &&
        this.state.options.length ? (
          <div
            ref={(el) => {
              this.el = el;
            }}
            className={
              "auto-suggestions font10 scroll-style " +
              (this.props.error ? "error-shown" : "")
            }
          >
            {this.state.options &&
              this.state.options.map((val, key) => {
                return (
                  <a
                    className={
                      (this.props.selectedOption &&
                      val.value == this.props.selectedOption.value
                        ? "active "
                        : "") + (this.state.cursor == key + 1 ? "cursor" : "")
                    }
                    key={key}
                    onClick={() => !this.props.disabled && this.onSelect(val)}
                  >
                    {val.label && val.label.indexOf(":") < 0
                      ? this.props.t(val.label)
                      : val.label}
                  </a>
                );
              })}
          </div>
        ) : null}
      </div>
    );
  }
}
