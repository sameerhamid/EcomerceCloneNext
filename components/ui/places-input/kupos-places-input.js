import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import AppData from "../../../services/appData";
import CommonService from "../../../services/commonService";

class KuposPlacesInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: this.props.focused,
    };

    // this.textInput = React.createRef();
    // this.focusTextInput = this.focusTextInput.bind(this);
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
          (place.name ? place.name + " - " : "") +
          CommonService.normalizeAddress(place.formatted_address),
      });
      if (this.props.onTextChange) {
        this.props.onTextChange(
          (place.name ? place.name + " - " : "") +
            CommonService.normalizeAddress(place.formatted_address)
        );
      }
    });
  };

  onFocusChange = () => {
    // this.props.focused ? this.setState({ focused: false }) : null;
  };

  render() {
    return (
      <input
        ref={(ref) => (this.autocomplete = ref)}
        type="text"
        className={
          this.props.fontSize
            ? this.props.fontSize + " common-kupos-pleaces-input"
            : "font11 common-kupos-pleaces-input"
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
        // ref={input => {
        //   this.nameInput = input;
        // }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: AppData.MAP_API_KEY,
})(KuposPlacesInput);
