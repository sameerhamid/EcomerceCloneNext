import React, { PureComponent } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import AppData from "../../../services/appData";
import CommonService from "../../../services/commonService";
import classes from "./kupos-hybrid-input.module.less";
import Image from "next/image";

class KuposHybridInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focused: this.props.focused,
    };
  }

  componentDidMount() {
    this.renderAutoComplete();
  }

  renderAutoComplete = () => {
    const { google } = this.props;

    if (!google) return;
    var options = {
      componentRestrictions: { country: "cl" },
    };

    const autocomplete = new google.maps.places.Autocomplete(
      this.autocomplete,
      options
    );
    // autocomplete.bindTo('bounds', map);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      console.log("place.geometry.location.lat()", place);
      if (!place.geometry) return;
      this.props.onChange({
        location: {
          lat: place.geometry.location.lat(),
          lon: place.geometry.location.lng(),
        },
        address:
          (place.name
            ? place.formatted_address
                .toLowerCase()
                .indexOf(place.name.toLowerCase()) < 0
              ? place.name + " - "
              : ""
            : "") + CommonService.normalizeAddress(place.formatted_address),
      });
      if (this.props.onTextChange) {
        this.props.onTextChange(
          (place.name
            ? place.formatted_address
                .toLowerCase()
                .indexOf(place.name.toLowerCase()) < 0
              ? place.name + " - "
              : ""
            : "") + CommonService.normalizeAddress(place.formatted_address)
        );
      }
    });
  };

  onFocusChange = () => {
    // this.props.focused ? this.setState({ focused: false }) : null;
  };

  render() {
    return (
      <div className={classes.common_kupos_input} style={this.props.style}>
        <div
          className={
            classes.input_outer +
            " " +
            this.props.className +
            " flex-row " +
            (this.props.error ? " error" : "")
          }
          style={this.props.inputOuterStyle}
        >
          {this.props.icon ? (
            <Image
              className={classes.icon_size + " " + classes.icon_left}
              src={this.props.icon}
              height={20}
              width={20}
              alt="icon-left"
            />
          ) : null}

          <input
            ref={(ref) => (this.autocomplete = ref)}
            type="text"
            className={
              this.props.fontSize
                ? this.props.fontSize + " common-kupos-pleaces-input"
                : " common-kupos-pleaces-input"
            }
            placeholder={this.props.placeholder}
            onFocus={(event) => this.props.onFocus(event.target)}
            value={this.state.focused ? null : this.props.value}
            style={this.props.inputWidth}
            onChange={
              this.props.onTextChange
                ? (event) => this.props.onTextChange(event.target.value)
                : null
            }
            onBlur={
              this.props.onBlur
                ? (event) => this.props.onBlur(event.target.value)
                : null
            }
            disabled={this.props.disabled}
            readOnly={this.props.readOnly}
          />

          {this.props.value && this.props.erasable ? (
            <div
              className={classes.cross}
              onClick={this.props.eraseSelectedInput}
            >
              <Image
                className={"input-cross"}
                src="/images/icons/home/at-x-mark.png"
                height={15}
                width={15}
                alt="cross-icon"
              />
            </div>
          ) : null}
        </div>
        {this.props.error ? (
          <span className="error font8">
            {this.props.t(this.props.errorMessage)}
          </span>
        ) : null}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: AppData.MAP_API_KEY,
})(KuposHybridInput);
