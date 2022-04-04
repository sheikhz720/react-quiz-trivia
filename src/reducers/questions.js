import { INIT_QUESTIONS, MARK_ANSWER, RESET_QUESTIONS } from "../actions";

export const questions = (state = [], action) => {
    switch (action.type) {
        case INIT_QUESTIONS:
            return [...action.payload.questions];
        case MARK_ANSWER:
            return state.map((question) => {
                if (action.payload.questionId === question.id) {
                    return {
                        ...question,
                        marked_answer: action.payload.answer
                    }
                }
                return question;
            })
        case RESET_QUESTIONS:
            return [];
        default:
            return state;
    }
}