import React from "react";
import classes from "./kupos-checkbox.module.less";

const KuposCheckbox = (props) => {
  return (
    <div className={classes.common_kupos_checkbox}>
      <label onClick={props.onChange}>
        <div className={classes.kupos_checkbox}>
          {props.circular ? (
            props.checked ? (
              <div className={classes.icon_selection_circle_selected}></div>
            ) : (
              <div className={classes.icon_selection_circle_not_selected}></div>
            )
          ) : props.checked ? (
            <div className={classes.icon_check_square_pink}></div>
          ) : (
            <div className={classes.icon_check_square_pink_line}></div>
          )}
        </div>
        {props.label ? (
          <span className={classes.checkbox_label + " font9 general-text"}>
            {props.t ? props.t("PROFILE." + props.label) : props.label}
          </span>
        ) : null}
      </label>
      {props.error ? (
        <span className="errorMessageInput font8">{props.errorMessage}</span>
      ) : null}
    </div>
  );
};

export default KuposCheckbox;
