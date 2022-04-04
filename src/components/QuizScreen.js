import React, { useEffect, useState } from "react";
import ScreenWrapper from './ScreenWrapper';
import QuizCard from "./QuizCard";
import { connect } from "react-redux";
import { fetchQuestions, markAnswer } from "../actions";
import Loader from "./elements/Loader";
import { useNavigate } from "react-router-dom";

const QuizScreen = (props) => {

    const { fetchQuestions, markAnswer, questions = [] } = props;

    const navigate = useNavigate();

    const [visibleQuestion, setVisibleQuestion] = useState(null);
    const [visibleQuestionIdx, setVisibleQuestionIdx] = useState(null);
    const [markedAnswer, setMarkedAnswer] = useState("");

    useEffect(() => {
        fetchQuestions();
    }, [fetchQuestions]);

    useEffect(() => {
        if (!visibleQuestion && questions && questions.length > 0) {
            setVisibleQuestion(questions[0]);
            setVisibleQuestionIdx(0);
        }
    }, [questions, visibleQuestion])

    const getNextQuestionIdx = () => {
        if (visibleQuestionIdx < questions.length - 1) {
            return visibleQuestionIdx + 1;
        }
        return null;
    };
    
    const saveAnswerAndSwitchQuestion = (value) => {
        markAnswer(visibleQuestionIdx, value);
        const nextQuestionIdx = getNextQuestionIdx();
        if (nextQuestionIdx) {
            setVisibleQuestion(questions[nextQuestionIdx]);
            setVisibleQuestionIdx(nextQuestionIdx);
        } else {
            navigate("/results");
        }
    };

    const handleNextButtonClick = () => {
        saveAnswerAndSwitchQuestion(markedAnswer);
        setMarkedAnswer("");
    };

    return (
    visibleQuestion ? (    
    <ScreenWrapper heading={visibleQuestion.category} buttonConfig="">
        <QuizCard question={visibleQuestion} setMarkedAnswer={setMarkedAnswer} />
        {markedAnswer && <button className="btn-next" onClick={handleNextButtonClick}>Next</button>}  
        <div className="question-number">{visibleQuestionIdx+1} of {questions.length}</div>   
    </ScreenWrapper> ) : (<Loader/>)
    );
};

export default connect((state) => {
    return { questions: state.questions };
}, { fetchQuestions, markAnswer })
(QuizScreen);