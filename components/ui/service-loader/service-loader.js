import classNames from "classnames";
import React from "react";
import classes from "./service-loader.module.less";

const ServiceLoader = ({ t }) => {
    return (
        <div className={classNames({ [classes.service_loader]: true, 'center-text': true })} >
            <span>
                <img className={classes.animation_gif} src="/images/animations/animation.gif" alt="img" />
                <div style={{ marginTop: 10 }}>
                    <span className="grey-text font12">{t('TRANSLATIONS.LOADING_MESSAGE')}</span>
                </div>
            </span>
        </div>
    );
};

export default ServiceLoader;