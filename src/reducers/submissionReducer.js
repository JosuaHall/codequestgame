import {
  SUBMIT_SUBMISSION_REQUEST,
  SUBMIT_SUBMISSION_SUCCESS,
  SUBMIT_SUBMISSION_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  error: null,
  submission: null,
};

const submissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SUBMISSION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUBMIT_SUBMISSION_SUCCESS:
      return {
        ...state,
        loading: false,
        submission: action.payload, // Store the submitted data in state
      };
    case SUBMIT_SUBMISSION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default submissionReducer;
