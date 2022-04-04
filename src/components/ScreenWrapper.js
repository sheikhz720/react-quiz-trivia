import React from "react";
import Title from "./elements/Title";
import Button from "./elements/Button";


const ScreenWrapper = ({ heading, buttonConfig, children }) => {
    return (
        <div className="screen-wrapper">
            <div className="title-div">
                <Title title={heading}></Title>
            </div>
            <div className="content">
                {children}
            </div>
            {buttonConfig && <div className="button-div">
                <Button buttonConfig={buttonConfig}></Button>
            </div>}
        </div>
    );
};

export default ScreenWrapper;