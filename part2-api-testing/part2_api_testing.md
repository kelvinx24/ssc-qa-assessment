# **Take-Home Assignment Part 2: "Basic API Testing"**

## **Context**
Write simple automated tests for a REST API to demonstrate basic QA automation skills relevant to testing cloud-based platforms.

## **Requirements**
**Language:** Use the same language from Part 1 (JavaScript, Python, C#, or Go)  
**Target API:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - a free REST API for testing

## **Tasks** (20-25 minutes)
Write **3 automated test cases** that cover:

1. **GET request** - Fetch a user and validate response structure
   - Test endpoint: `GET /users/1`
   - Validate: 200 status code, required fields exist (id, name, email)

2. **POST request** - Create a new post and verify creation  
   - Test endpoint: `POST /posts`
   - Send JSON data and validate the response

3. **Error handling** - Test 404 response for non-existent resource
   - Test endpoint: `GET /users/999` 
   - Validate: 404 status code and appropriate response

## **Test Framework**
Use any common testing framework for your chosen language:
- **JavaScript:** Jest, Mocha, or similar
- **Python:** pytest, unittest, or similar  
- **C#:** xUnit, NUnit, or similar
- **Go:** testing package or similar

## **Example Structure**

```javascript
// JavaScript example
describe('JSONPlaceholder API Tests', () => {
  test('should fetch user successfully', async () => {
    // Your implementation here
  });

  test('should create new post', async () => {
    // Your implementation here  
  });

  test('should handle non-existent user', async () => {
    // Your implementation here
  });
});
```

```python
# Python example
class TestJSONPlaceholderAPI:
    def test_fetch_user_successfully(self):
        # Your implementation here
        
    def test_create_new_post(self):
        # Your implementation here
        
    def test_handle_nonexistent_user(self):
        # Your implementation here
```

## **Documentation** (5 minutes)
- **Brief comments** in your test code explaining what each test validates
- **Simple run instructions** - how to install dependencies and run tests

## **Deliverables**
- Working test code that covers the 3 scenarios
- Basic run instructions (can be comments in the file or separate README)

## **Evaluation Focus**
- **API Testing Knowledge:** Understanding of GET/POST requests and HTTP status codes
- **Test Structure:** Clear test organization and meaningful test names
- **Assertions:** Proper validation of responses and data
- **QA Thinking:** Appropriate test scenarios and edge case consideration

**Time Estimate:** 30 minutes

## **Notes**
- Focus on demonstrating QA automation fundamentals
- Simple, working tests are better than complex, broken ones
- You can use any HTTP client library (fetch, requests, HttpClient, etc.)