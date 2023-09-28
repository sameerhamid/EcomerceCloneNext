import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KuposModal from '../kupos-modal/kupos-modal';
import classes from './index.module.less';


export default class KuposModalWithButtons extends Component {
  static propTypes = {
    showModal: PropTypes.bool,
    onHide: PropTypes.func,
    onButtonClick1: PropTypes.func,
    onButtonClick2: PropTypes.func,
    showButton1: PropTypes.bool,
    showButton2: PropTypes.bool,
    buttonText1: PropTypes.string,
    buttonText2: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    bodyText: PropTypes.string,
    icon: PropTypes.string,
    hideAllContent: PropTypes.bool,
    type: PropTypes.string,
    size: PropTypes.string,
    buttonWidth: PropTypes.string,
    showLoader: PropTypes.bool,
    hideIcon: PropTypes.string,
  };

  render() {
    return (
      <div className={classes.kupos_modal_with_buttons}>
        <KuposModal
          size={this.props.size ? this.props.size : 'sm'}
          showModal={this.props.showModal}
          onHide={this.props.onHide}
        >
          {!this.props.showLoader ? (
            !this.props.hideAllContent ? (
              <div className={classes.kupos_modal_with_buttons + ' modal-type-' + this.props.type}>
                {this.props.icon ? (
                  <div className="kupos-modal-icon">
                    <img src={this.props.icon} alt="" />
                  </div>
                ) : null}
                {this.props.title ? (
                  <div
                    className={
                      classes.kupos_modal_title2 + 
                      ' bold-text ' +
                      this.props.titleStyle +
                      (this.props.type == 'alert' ? ' font12' : ' font12')
                    }
                  >
                    {this.props.title}
                  </div>
                ) : null}
                {this.props.subTitle ? (
                  <div
                    className="kupos-modal-subTitle font12"
                    style={this.props.subTitleStyle ? this.props.subTitleStyle : null}
                  >
                    {this.props.subTitle}
                  </div>
                ) : null}
                {this.props.bodyText ? (
                  <div className={ classes.kupos_modal_bodyTex + " font10"}>{this.props.bodyText}</div>
                ) : null}
                {this.props.noTitleGap ? null : <div className="kupos-modal-gap"></div>}
                {this.props.children}
                <div className="kupos-modal-gap"></div>
                {this.props.showButton1 ? (
                  <div className="kupos-modal-button-div font12">
                    <button
                      style={{
                        width: this.props.buttonWidth ? this.props.buttonWidth : '100%',
                      }}
                      className="kupos-button"
                      onClick={
                        this.props.onButtonClick1 ? this.props.onButtonClick1 : this.props.onHide
                      }
                    >
                      {this.props.buttonText1 ? this.props.buttonText1 : 'OK'}
                    </button>
                  </div>
                ) : null}
                {this.props.showButton2 ? (
                  <div className="kupos-modal-button-div font12">
                    <button
                      style={{
                        width: this.props.buttonWidth ? this.props.buttonWidth : '100%',
                      }}
                      className="kupos-button2"
                      onClick={this.props.onButtonClick2}
                    >
                      {this.props.buttonText2}
                    </button>
                  </div>
                ) : null}

                {this.props.hideIcon ? (
                  <div className="kupos-modal-cross-icon" onClick={this.props.onHide}>
                    <img src={this.props.hideIcon} alt="" />
                  </div>
                ) : null}
              </div>
            ) : (
              this.props.children
            )
          ) : (
            <div className="modal-loader">
              <div className="loader-cricle"></div>
            </div>
          )}
        </KuposModal>
      </div>
    );
  }
}
