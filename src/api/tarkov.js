// tarkov.js

// Import the request and gql functions from graphql-request
import {request} from 'graphql-request';

// Define the API endpoint
const API_ENDPOINT = 'https://api.tarkov.dev/graphql';

// Function to fetch data from the Tarkov API
async function fetchData(query, variables = {}) {
    return await request(API_ENDPOINT, query, variables);
}

// Export the fetchData function
export default fetchData;
