import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "./profileActiontypes";

// Initial state
const initialState = {
    profileData: {},
    loading: false,
    error: null,
};

// Reducer
export const userProfilReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true,
                error: action.payload
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: false,
            };

        default:
            return state;
    }
};
