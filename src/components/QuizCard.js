import React, { useEffect, useState } from "react";
import RadioButtons from "./elements/RadioButtons";
import { sanitize } from 'dompurify';

 const radioOptions = [
    {
        value: "True",
        label: "True"
    },
    {
        value: "False",
        label: "False"
    },
]

const QuizCard = ({ question, setMarkedAnswer }) => {
    const [reset, setReset] = useState(false);

    useEffect(() => {
        setReset((prev) => !prev);
    }, [question]);

    return (
    <div className="quiz-card">
        <div className="question-name" dangerouslySetInnerHTML={{__html: sanitize(question.question)}} />
        <RadioButtons reset={reset} radioOptions={radioOptions} onValueChange={(value) => {setMarkedAnswer(value)}} />
    </div>
    );
};

export default QuizCard;