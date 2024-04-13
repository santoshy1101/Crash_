    // Implement a simple API call to a public API (e.g., JSONPlaceholder) using async/await and display the results.


// Function to make API call using async/await
async function fetchAPI() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data from API');
    }
}

// Example usage of fetchAPI with async/await
fetchAPI()
    .then(data => console.log('API response:', data))
    .catch(err => console.error('Error:', err.message));
