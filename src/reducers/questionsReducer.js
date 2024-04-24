import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
} from "../actions/types"; // Import the action types

const initialState = {
  loading: false,
  error: null,
  questionsByChapter: {},
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        questionsByChapter: {
          ...state.questionsByChapter,
          [action.payload.chapter]: action.payload.questions,
        },
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default questionReducer;
