import React from "react";

const Button = ({ buttonConfig }) => {
    const {
        label,
        onClick
    } = buttonConfig;
    return (
        <button onClick={() => {
            onClick();
        }}>{label.toUpperCase()}</button>
    );
};

export default Button;