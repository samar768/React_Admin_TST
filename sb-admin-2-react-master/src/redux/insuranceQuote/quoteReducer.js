export const ADD_INSURANCE_QUOTE_STARTED = "ADD_INSURANCE_QUOTE_STARTED";
export const ADD_INSURANCE_QUOTE_COMPLETED = "ADD_INSURANCE_QUOTE_COMPLETED";
export const ADD_RISK_STARTED = "ADD_RISK_STARTED";
export const ADD_RISK_COMPLETED = "ADD_RISK_COMPLETED";
export const RETREIVE_QUOTE_STARTED = "RETREIVE_QUOTE_STARTED";
export const RETREIVE_QUOTE_COMPLETED = "RETREIVE_QUOTE_COMPLETED";

// Initial state
const initialState = {
    data: [],
    loading: false,
    error: null,
};

// Reducer
export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INSURANCE_QUOTE_STARTED':
            return { ...state, loading: true };
        case 'ADD_INSURANCE_QUOTE_COMPLETED':
            return { ...state, loading: false, data: action.payload };
        case 'ADD_RISK_STARTED':
            return { ...state, loading: false, error: action.payload };
        case 'ADD_RISK_COMPLETED':
            return { ...state, loading: false, error: action.payload };
        case 'RETREIVE_QUOTE_STARTED':
            return { ...state, loading: false, error: action.payload };
        case 'RETREIVE_QUOTE_COMPLETED':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
