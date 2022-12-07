import React from "react";
import PropTypes from "prop-types";
import "./customButton.css";
import classNames from "classnames";

function CustomButton({ onClick, type, children, size = "s" }) {
    const btnClass = classNames({
        "btn--a": true,
        "btn--secondary": type === "secondary",
        "btn--primary": type === "primary",
        "btn--small": size === "s",
        "btn--medium": size === "m"
    });
    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    );
}

CustomButton.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    children: PropTypes.string,
    size: PropTypes.string
};

export default CustomButton;
