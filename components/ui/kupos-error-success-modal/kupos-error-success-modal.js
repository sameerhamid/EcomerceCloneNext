import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./kupos-error-success-modal.module.less";
import KuposModal from "../kupos-modal/kupos-modal";

export default class KuposErrorSuccessModal extends Component {
  static propTypes = {
    showModal: PropTypes.bool,
    onButtonClick: PropTypes.func,
    success: PropTypes.bool,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    bodyText: PropTypes.string,
    showButton1: PropTypes.bool,
    onButtonClick1: PropTypes.func,
    buttonText1: PropTypes.string,
    showButton2: PropTypes.bool,
    onButtonClick2: PropTypes.func,
    buttonText2: PropTypes.string,
    t: PropTypes.func,
    showMyTitle: PropTypes.bool,
    generalButton: PropTypes.string,
  };

  render() {
    return (
      <div className={classes.common_sign_up_success_modal}>
        <KuposModal
          showModal={this.props.showModal}
          onHide={this.props.onHide || this.props.onButtonClick}
        >
          <div className="kupos-modal-icon">
            <img
              src={
                this.props.success
                  ? "/images/icons/circular-icons/icon-success.png"
                  : "/images/icons/circular-icons/icon-failure.png"
              }
              alt=""
            />
          </div>

          <div className="kupos-modal-title font13">
            <span className="bold-text">
              {this.props.showMyTitle
                ? this.props.t && this.props.t(this.props.title)
                : this.props.title ||
                  (this.props.success
                    ? this.props.t
                      ? this.props.t("HOME.THANK_YOU")
                      : "¡Listo!"
                    : this.props.t
                    ? this.props.t("HOME.WE_ARE_SORRY")
                    : "¡Lo sentimos!")}
            </span>
          </div>

          <div className="kupos-modal-subtitle font11">
            <span>
              {this.props.t
                ? this.props.t(this.props.subTitle)
                : this.props.subTitle}
            </span>
          </div>

          <div className="kupos-modal-bodytext font11">
            {this.props.bodyText
              ? this.props.bodyText.split("\n").map((val, i) => {
                  return (
                    <span key={i}>
                      {this.props.t ? this.props.t(val) : val}
                      <br />
                    </span>
                  );
                })
              : null}
          </div>

          {this.props.children}

          {!this.props.showButton1 ? (
            <div className="kupos-modal-button font12">
              <button
                className="kupos-button"
                onClick={
                  this.props.onButtonClick
                    ? this.props.onButtonClick
                    : this.props.onHide
                }
              >
                {this.props.success
                  ? this.props.generalButton
                    ? this.props.generalButton
                    : "OK"
                  : this.props.generalButton
                  ? this.props.generalButton
                  : this.props.t
                  ? this.props.t("PROFILE.GO_BACK")
                  : "Volver"}
              </button>
            </div>
          ) : null}

          {this.props.showButton1 ? (
            <div className="kupos-modal-button-div font12">
              <button
                className="kupos-button"
                onClick={
                  this.props.onButtonClick1
                    ? this.props.onButtonClick1
                    : this.props.onHide
                }
              >
                {this.props.buttonText1
                  ? this.props.buttonText1
                  : this.props.t
                  ? this.props.t("HOME.OK_CONTINUE")
                  : "OK, CONTINUAR"}
              </button>
            </div>
          ) : null}
          {this.props.showButton2 ? (
            <div className="kupos-modal-button-div font12">
              <button
                className="kupos-button2"
                onClick={this.props.onButtonClick2}
              >
                {this.props.buttonText2}
              </button>
            </div>
          ) : null}
        </KuposModal>
      </div>
    );
  }
}
