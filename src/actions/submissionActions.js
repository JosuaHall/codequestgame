import axios from "axios";
import {
  SUBMIT_SUBMISSION_REQUEST,
  SUBMIT_SUBMISSION_SUCCESS,
  SUBMIT_SUBMISSION_FAILURE,
} from "./types";

// Action Creator to submit the submission
export const submitSubmission =
  (name, studentId, questionId) => async (dispatch) => {
    dispatch({ type: SUBMIT_SUBMISSION_REQUEST });

    try {
      // Make API request to save submission on the server
      const response = await axios.post("/api/questions/submit", {
        name,
        studentId,
        questionId,
      });

      // Dispatch success action upon successful API response
      dispatch({
        type: SUBMIT_SUBMISSION_SUCCESS,
        payload: response.data, // Optionally pass any response data to the reducer
      });
    } catch (error) {
      // Dispatch failure action if API request fails
      dispatch({
        type: SUBMIT_SUBMISSION_FAILURE,
        payload: error.message, // Optionally pass error message to the reducer
      });
    }
  };
