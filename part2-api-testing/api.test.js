/**
 * JSONPlaceholder API Tests
 * 
 * This test suite tests the basic functionalities of the JSONPlaceholder API.
 * It covers:
 * 1. GET request - validate response structure
 * 2. POST request - verify creation of a new post
 * 3. Error handling - check 404 response for non-existent user
 * 
 * Notes:
 * - Edge cases are included in comments due to limitation of 3 test cases
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API Tests', () => {
  test('should fetch user successfully with valid response (GET /users/1)', async () => {
    const response = await fetch(`${BASE_URL}/users/1`);
    expect(response.status).toBe(200);

    const data = await response.json();
    // Validate fields
    expect(data).toHaveProperty('id', 1);
    expect(data).toHaveProperty('name');
    expect(data).toHaveProperty('email');

    // Could also check type of fields or empty strings
    // expect(typeof data.email).toBe('string');
  });

  test('should create new post (POST /posts)', async () => {
    const newPost = {
      title: 'test',
      body: 'post',
      userId: 1
    };

    // Send POST request to server with newPost JSON
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    });

    expect(response.status).toBe(201);

    const data = await response.json();

    // Validate fields match
    expect(data.title).toBe(newPost.title);
    expect(data.body).toBe(newPost.body);
    expect(data.userId).toBe(newPost.userId);
    expect(data).toHaveProperty('id'); // Example output has id field

    // Write GET request here for new post to validate post if on real server
    // Could test empty payload, missing/extra fields, or invalid types
  });

  test('should handle non-existent user (GET /users/999)', async () => {
    const response = await fetch(`${BASE_URL}/users/999`);
    expect(response.status).toBe(404);

    // Could test invalid IDs - negative, string, etc.
  });
});
