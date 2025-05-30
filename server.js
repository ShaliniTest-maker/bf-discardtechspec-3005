/**
 * Express.js Tutorial Server
 * 
 * This educational Node.js server demonstrates fundamental web development concepts
 * using Express.js 5.1.0 framework with Node.js 22.11.0 LTS runtime.
 * 
 * Learning Objectives:
 * - HTTP request/response cycle understanding
 * - Express.js route definition and handling
 * - Basic web server configuration and startup
 * - Plain text response generation
 * - Error handling for undefined routes
 */

// Import Express.js framework for HTTP server functionality
const express = require('express');

// Initialize Express application instance
// This creates the core app object that handles HTTP requests and responses
const app = express();

// Configure server port with environment variable support
// Defaults to port 3000 for local development if PORT environment variable is not set
const PORT = process.env.PORT || 3000;

/**
 * Root Endpoint Handler - Tutorial Demonstration
 * 
 * HTTP Method: GET
 * Path: /
 * Response: Plain text "Hello world"
 * Purpose: Demonstrates basic Express.js route handling and response generation
 */
app.get('/', (req, res) => {
    // Send plain text response with explicit content-type for educational clarity
    res.type('text/plain');
    res.send('Hello world');
});

/**
 * Evening Endpoint Handler - Secondary Tutorial Example
 * 
 * HTTP Method: GET
 * Path: /evening
 * Response: Plain text "Good evening"
 * Purpose: Shows how to define multiple routes within the same Express.js application
 */
app.get('/evening', (req, res) => {
    // Send plain text response demonstrating consistent response pattern
    res.type('text/plain');
    res.send('Good evening');
});

/**
 * Error Handling Middleware - 404 Not Found
 * 
 * This middleware catches all requests that don't match defined routes
 * and returns a proper HTTP 404 status with a helpful message.
 * 
 * Educational Note: This middleware must be defined after all route handlers
 * to catch unmatched requests properly.
 */
app.use((req, res) => {
    res.status(404).type('text/plain').send('404 - Route not found');
});

/**
 * Server Startup Configuration
 * 
 * Starts the Express.js server and binds it to the configured port.
 * Provides console feedback for educational verification and debugging.
 * 
 * The callback function executes once the server successfully starts listening,
 * demonstrating asynchronous server initialization patterns.
 */
app.listen(PORT, () => {
    console.log(`🚀 Express.js tutorial server is running!`);
    console.log(`📍 Server listening on http://localhost:${PORT}`);
    console.log(`✨ Available endpoints:`);
    console.log(`   GET / → "Hello world"`);
    console.log(`   GET /evening → "Good evening"`);
    console.log(`💡 Press Ctrl+C to stop the server`);
});

/**
 * Educational Notes for Tutorial Completion:
 * 
 * 1. Testing the Server:
 *    - Open browser to http://localhost:3000/ to see "Hello world"
 *    - Navigate to http://localhost:3000/evening to see "Good evening"
 *    - Try http://localhost:3000/invalid to test 404 error handling
 * 
 * 2. Command Line Testing:
 *    - curl http://localhost:3000/
 *    - curl http://localhost:3000/evening
 *    - curl -i http://localhost:3000/ (to see HTTP headers)
 * 
 * 3. Key Express.js Concepts Demonstrated:
 *    - Application initialization with express()
 *    - Route definition using app.get()
 *    - Request and response objects (req, res)
 *    - Middleware for error handling
 *    - Server startup with app.listen()
 * 
 * 4. Modern JavaScript ES2022 Features Used:
 *    - const/let declarations for block scoping
 *    - Arrow functions for concise syntax
 *    - Template literals for string formatting
 *    - Destructuring in function parameters
 */