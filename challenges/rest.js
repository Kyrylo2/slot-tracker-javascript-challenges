// const fetch = require('node-fetch');
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * Implement the loadPosts() function that returns a Promise with posts
 * loaded from https://jsonplaceholder.typicode.com/posts and alphabetically sorted by title
 *
 *
 * Usage example:
 * ```
 * loadPosts().then(posts => {
 *      console.log(posts); // [{ title: ... } ...]
 * });
 * ```
 */

const axios = require('axios');
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

/**
 * Fetches posts from an API endpoint and sorts them by title.
 *
 * @async
 * @function loadPosts
 * @returns {Promise<Array<Object>>} An array of post objects sorted by title.
 * @throws {Error} If there's an error fetching or sorting the posts.
 */
async function loadPosts() {
  try {
    const posts = await axios.get(API_URL);
    const sortedPosts = posts.data.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    return sortedPosts;
  } catch (err) {
    throw new Error('Failed to fetch or sort posts.');
  }
}

module.exports = loadPosts;
