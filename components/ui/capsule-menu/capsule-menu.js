import classNames from 'classnames';
import React from 'react';
import SvgHome from '../../ui/svg-home/svg-home';
import classes from "./capsule-menu.module.less";

const KuposCapsuleMenu = (props) => {

    const { t } = props;
    return (
        <div className={classNames({
            [classes.common_kupos_capsule_menu]: true,
            [classes.capsule_menu]: true,
            [classes.capsule_menu + props.type]: true,
            'font10': true
        })}
        >
            {props.capsuleMenuIcons.map((value, key) => {
                return (
                    <div
                        className={classNames({
                            [classes.capsule_menu_item]: true,
                            [classes.active + ' bold-text']: props.activeTab == key,
                            [classes.no_active_icon]: !value.iconActive,
                            'mid': key == 2,
                            "pointer": true
                        })}

                        key={key}
                        onClick={() => props.onTabChange(key)}
                    >
                        <div className={classNames({ [classes.capsule_menu_icon]: true })}>
                            {!value.svgIcon
                                ? <img src={(props.activeTab == key && value.iconActive) ? value.iconActive : value.icon} />
                                : (value.svgPage == 'home' ? <SvgHome name={value.svgIcon} /> : null)
                            }
                        </div>
                        <span className={classes.capsule_menu_text}>
                            {t("RESULTS_PAGE." + value.label).split('\n').map((item, i) => {
                                return <p key={i}>{item}</p>;
                            })}
                        </span>
                        {props.showSortIcon && props.activeTab == key ? <img
                            className={classNames({
                                [classes.sort_icon]: true,
                                [classes.desc]: props.sortType == 'DESC',
                            })}
                            src="/images/icons/sort-arrow.png" /> : null}
                    </div>
                );
            })}
        </div>
    );
}

export default KuposCapsuleMenu