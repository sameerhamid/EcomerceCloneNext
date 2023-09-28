import classNames from "classnames";
import React, { useEffect, useState } from "react";
import classes from "./kupos-steps.module.less";

const KuposSteps = (props) => {
  const { t } = props;

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setupStepMenu(props.activeStep || 1);
  }, [props.activeStep]);

  const setupStepMenu = (step) => {
    try {
      let stepsMenu;
      if (props.type == "ONWARD") {
        stepsMenu = [
          { label: "GOING", active: step == 1 },
          { label: "PAYMENT", active: step == 2 },
          { label: "CONFIRMATION", active: step == 3 },
        ];
      } else {
        stepsMenu = [
          { label: "GOING", active: step == 1 },
          { label: "RETURN", active: step == 2 },
          { label: "PAYMENT", active: step == 3 },
          { label: "CONFIRMATION", active: step == 4 },
        ];
      }
      setMenu(stepsMenu);
    } catch (e) {
      console.log(e);
    }
  };

  const onStepClick = (step) => {
    // setupStepMenu(step);
    if (props.onStepClick) props.onStepClick(step);
  };

  return (
    <div className={classes.common_kupos_steps}>
      {menu
        ? menu.map((value, key) => {
            return (
              <a
                className={classNames({
                  [classes.kupos_step_item]: true,
                  [classes.active]: value.active,
                  font10: true,
                })}
                key={key}
                onClick={() => onStepClick(key + 1)}
              >
                <span className={classes.step_number}>{key + 1}</span>
                <span className={classes.step_label}>
                  {t("PASSENGER_DETAILS." + value.label)}
                </span>
              </a>
            );
          })
        : null}
    </div>
  );
};

export default KuposSteps;
