import React from "react";
import { connect } from "react-redux";
import ScreenWrapper from './ScreenWrapper';
import { useNavigate } from "react-router-dom";
import ResultList from "./ResultList";
import { resetQuestions } from "../actions";

const ResultScreen = (props) => {

    const { questions, resetQuestions } = props;

    const navigate = useNavigate();

    const handlePlayAgainClick = () => {
        resetQuestions();
        navigate("/");
    };

    const playAgainButtonConfig = {
        label: "Play Again?",
        onClick: handlePlayAgainClick,
    }

    const getCorrectAnswerCount = () => {
        const correctAnswers = questions.filter((question) => {
            return question.correct_answer === question.marked_answer;
        });
        return correctAnswers.length;
    };

    return (
        <ScreenWrapper heading={`You scored`} buttonConfig={playAgainButtonConfig}>
            <h1 className="result-score">{`${getCorrectAnswerCount()}/${questions.length}`}</h1>
        <ResultList questions={questions} />
    </ScreenWrapper>
    );
};


export default connect((state) => {
    return { questions: state.questions }
}, {
    resetQuestions
})(ResultScreen)