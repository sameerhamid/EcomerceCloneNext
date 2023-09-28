import Modal from "react-bootstrap/Modal";
import React from "react";
import classes from "./kupos-modal.module.less";

const KuposModal = (props) => {
  return (
    <div className={classes.common_kupos_modal} style1={props.style1}>
      <Modal
        backdrop={props.backdrop}
        show={props.showModal}
        onHide={props.onHide}
        size={props.size || "md"}
        aria-labelledby={"contained-modal-title-vcenter " + props.ariaLabel}
        centered
        style={props.style}
      >
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </div>
  );
};

export default KuposModal;
