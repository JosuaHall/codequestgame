import axios from "axios";
import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
} from "./types";
import packageInfo from "../../package.json";

export const fetchQuestions = (chapter) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_QUESTIONS_REQUEST });

    try {
      const response = await axios.get(
        `${packageInfo.proxy}/api/questions/chapter/${chapter}`
      );

      dispatch({
        type: FETCH_QUESTIONS_SUCCESS,
        payload: {
          chapter,
          questions: response.data,
        },
      });
    } catch (error) {
      dispatch({
        type: FETCH_QUESTIONS_FAILURE,
        payload: error.response ? error.response.data : "Network error",
      });
    }
  };
};
