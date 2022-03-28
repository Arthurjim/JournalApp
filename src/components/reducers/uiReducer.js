import { types } from "../types/types";

const initialState = {
    isLoading: false,
    msgError: null,
};
export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload,
            };
        case types.uiRemoveError:
            return {
                isLoading: false,
                msgError: null,
            };
        default:
            return state;
    }
};
