import React from "react";
import ScreenWrapper from './ScreenWrapper';
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
    const navigate = useNavigate();

    const handleBeginClick = () => {
        navigate("/quiz");
    };

    const beginButtonConfig = {
        label: "Begin",
        onClick: handleBeginClick,
    }

    return (
        <ScreenWrapper heading="Welcome to the Trivia Challenge!" buttonConfig={beginButtonConfig}>
        <>
            <div className="home-screen-text-1">You will be presented with 10 True or False questions.</div>
            <div>Can you score 100%?</div>
        </>
    </ScreenWrapper>);
};

export default HomeScreen;