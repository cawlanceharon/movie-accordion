// Get the API URL from environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Fetches movie scores from the API.
 * @returns {Promise<any>} A promise that resolves to the movie scores data.
 * @throws {Error} Throws an error if the fetch operation fails or the response is not ok.
 */
export const getMovieScores = async () => {
  try {
    // Perform a GET request to the API endpoint
    const response = await fetch(`${API_URL}/movies/scores`, {
      method: 'GET',  // HTTP method
      headers: {
        'Content-Type': 'application/json',  // Specify the content type as JSON
      },
    });

    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error('Failed to fetch data');  // Throw an error if the response is not ok
    }

    // Parse and return the JSON data from the response
    return await response.json();
  } catch (error) {
    // Log the error to the console and rethrow it
    console.error('Fetch error:', error);
    throw error;
  }
};

// Export an object with the getMovieScores function
export default {
  getMovieScores,
};
