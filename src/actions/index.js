
import { axiosClient } from "../apis";

export const INIT_QUESTIONS = "INIT_QUESTIONS";
export const MARK_ANSWER = "MARK_ANSWER";
export const RESET_QUESTIONS = "RESET_QUESTIONS";

export const initQuestions = (questions) => ({
    type: INIT_QUESTIONS,
    payload: {
        questions
    }
});

export const fetchQuestions = () => async (dispatch) => {
    try {
        const response = await axiosClient.get('/api.php', {
            params: {
                amount: 10,
                difficulty: "hard",
                type: "boolean",
            }
        });
        dispatch({
            type: INIT_QUESTIONS, payload: {
            questions: response.data.results
        } })
    }
    catch (e) {
        console.error(e);
    }
};

export const markAnswer = (questionIdx, answer) => ({
    type: MARK_ANSWER,
    payload: {
        questionIdx,
        answer
    }
});

export const resetQuestions = () => ({
    type: RESET_QUESTIONS,
});