import { FETCH_DATA_START, FETCH_DATA_SUCCESS } from "../actions/rootActions.js";

const initialState = {
    isLoadingUser: false,
    fetchedData: [],
    error: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fetchedData: action.payload,
        error: ""
      }
    default:
      return state;
  }
}