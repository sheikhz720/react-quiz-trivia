import React from "react";
import checkIcon from "../images/check-solid.svg";
import crossIcon from "../images/xmark-solid.svg";
import { sanitize } from 'dompurify';

const ResultList = ({questions}) => {
    return (
        <div className="result-list">
            {questions.map((question, index) => {
                const trueFalseIcon = question.marked_answer === question.correct_answer ? checkIcon : crossIcon;
                return (
                    <div className="result-item" key={index}>
                        <span><img className="true-false-icon" src={trueFalseIcon} alt="true-false-icon"/> <span dangerouslySetInnerHTML={{__html: sanitize(question.question)}} /></span>
                    </div>
                )
            })}
        </div>
    );
};

export default ResultList;