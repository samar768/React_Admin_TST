// add a fetch api
import axios from 'axios';
import { GET_INSURANCE_QUOTES } from './servicesEndPoint';
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from '../../../redux/insuranceQuote/profileActiontypes';

// Function to fetch insurance quotes from API
export async function fetchInsuranceQuote() {
    try {
        const param = {

        }
        const response = await axios.get(GET_INSURANCE_QUOTES); // Replace with your actual API endpoint
        return response.data; // Return the fetched quotes data
    } catch (error) {
        console.error('Error fetching insurance quotes:', error);
        throw error; // Handle the error appropriately
    }
}


// persist quotedata  

export async function fetchInsuranceQuote() {

}

export async function updateProfile() {

}


// Mock signup action
