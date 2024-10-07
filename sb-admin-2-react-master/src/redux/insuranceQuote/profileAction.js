// redux/actions/authActions.js
import axios from 'axios';
import { signup } from '../../pages/InsuranceQuote/services/services';
import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from './profileActiontypes';

// Action to handle user sign-up
// export const signUpUser = (formData) => {
//     return async (dispatch) => {
//         try {
//             dispatch({ type: SIGN_UP_REQUEST });
//             // Assuming your API endpoint is /api/signup
//             const response = await signup();

//             dispatch({
//                 type: SIGN_UP_SUCCESS,
//                 payload: response.data, // You might return a user object or token from the API
//             });
//         } catch (error) {
//             dispatch({
//                 type: SIGN_UP_FAILURE,
//                 payload: error.response?.data?.message || error.message,
//             });
//         }
//     };
// };


export const signUpUser = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SIGN_UP_REQUEST });

            // Simulate a network request using setTimeout
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2s delay

            // Mock response data
            const mockResponse = {
                user: {
                    id: 1,
                    username: payload.username,
                    email: payload.email,
                    token: 'mocked-jwt-token',
                },
                message: 'User registered successfully!',
            };

            // Dispatch the success action with mock data
            dispatch({
                type: SIGN_UP_SUCCESS,
                payload: mockResponse,
            });
        } catch (error) {
            // Simulate an error response
            dispatch({
                type: SIGN_UP_FAILURE,
                payload: 'Mock error: Sign-up failed!',
            });
        }
    };
};