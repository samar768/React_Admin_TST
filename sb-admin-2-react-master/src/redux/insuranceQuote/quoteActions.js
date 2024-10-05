// Action to fetch data with thunk
export const fetchData = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_DATA_REQUEST' });

        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
        }
    };
};

// Action to fetch data with thunk
export const FetchQuotes = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_DATA_REQUEST' });

        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
        }
    };
};