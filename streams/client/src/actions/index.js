import streamsApi from "../apis/streams";
import {
  NEW_STREAM,
  EDIT_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  SIGN_OUT,
  SIGN_IN,
} from "./types";
import history from "../history";

export const SignIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const SignOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streamsApi.post("/streams", { ...formValues, userId });
  dispatch({
    type: NEW_STREAM,
    payload: response.data,
  });

  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streamsApi.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streamsApi.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streamsApi.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });

  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await streamsApi.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });

  history.push("/");
};
