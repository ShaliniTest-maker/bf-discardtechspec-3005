# Express.js Tutorial Server

A comprehensive tutorial implementation demonstrating fundamental Express.js concepts through hands-on Node.js server development. This educational project provides practical experience with HTTP server creation, endpoint routing, and local development workflow using modern JavaScript ES2022 features.

## Learning Objectives

This tutorial demonstrates essential web development concepts including:

- **Express.js Framework Integration**: Understanding HTTP request handling and routing capabilities
- **Node.js Server Development**: Practical server-side JavaScript implementation
- **HTTP Protocol Fundamentals**: Request/response cycles and status code handling
- **Local Development Workflow**: Complete setup, execution, and testing procedures
- **Modern JavaScript Patterns**: ES2022 syntax and async/await support through Node.js 22 LTS

## Prerequisites

### System Requirements

- **Node.js**: Version 22.11.0 LTS or compatible
- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **Internet Access**: Required for initial npm package installation
- **Available Port**: Port 3000 (or configurable alternative)

### Verification Commands

Before starting the tutorial, verify your environment:

```bash
# Confirm Node.js installation
node --version
# Expected: v22.11.0 or compatible LTS version

# Verify npm package manager
npm --version
# Expected: npm version bundled with Node.js
```

## Quick Start Guide

### Step 1: Project Initialization

Create a new project directory and initialize the Node.js project:

```bash
# Create project directory
mkdir express-tutorial
cd express-tutorial

# Initialize npm project with default values
npm init -y
```

### Step 2: Express.js Installation

Install Express.js 5.1.0 framework as a project dependency:

```bash
# Install Express.js framework
npm install express

# Verify installation success
cat package.json
```

### Step 3: Server Implementation

Create `server.js` file with the tutorial server implementation:

```javascript
// Import Express.js framework
const express = require('express');

// Create Express application instance
const app = express();

// Configure port from environment variable or default to 3000
const port = process.env.PORT || 3000;

// Define primary endpoint - Hello World response
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Define secondary endpoint - Good Evening response
app.get('/evening', (req, res) => {
    res.send('Good evening');
});

// Start HTTP server and listen on configured port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```

### Step 4: Server Execution

Start the Express.js server using Node.js runtime:

```bash
# Execute server.js with Node.js
node server.js

# Expected output: Server listening on port 3000
```

## API Endpoints

The tutorial server implements two educational endpoints demonstrating Express.js routing capabilities:

### GET / - Hello World Endpoint

- **URL**: `http://localhost:3000/`
- **Method**: HTTP GET
- **Response**: Plain text "Hello world"
- **Status Code**: 200 OK
- **Content-Type**: text/plain

### GET /evening - Good Evening Endpoint

- **URL**: `http://localhost:3000/evening`
- **Method**: HTTP GET
- **Response**: Plain text "Good evening"
- **Status Code**: 200 OK
- **Content-Type**: text/plain

## Testing Instructions

### Command-Line Testing with curl

Validate endpoint functionality using curl commands:

```bash
# Test primary endpoint
curl http://localhost:3000/
# Expected response: Hello world

# Test secondary endpoint
curl http://localhost:3000/evening
# Expected response: Good evening

# Inspect HTTP headers and status codes
curl -i http://localhost:3000/
# Expected: HTTP/1.1 200 OK with Hello world content

# Test error handling with invalid route
curl http://localhost:3000/invalid
# Expected: 404 Not Found status
```

### Browser-Based Testing

Open your web browser and navigate to the following URLs:

1. **Root Endpoint**: [http://localhost:3000/](http://localhost:3000/)
   - Should display "Hello world" text
   
2. **Evening Endpoint**: [http://localhost:3000/evening](http://localhost:3000/evening)
   - Should display "Good evening" text

3. **Error Testing**: [http://localhost:3000/invalid](http://localhost:3000/invalid)
   - Should display Express.js 404 error page

## Educational Context

### Express.js Framework Concepts

This tutorial demonstrates fundamental Express.js concepts:

- **Application Initialization**: Creating Express app instances with `express()`
- **Route Definition**: Using `app.get()` methods for HTTP GET endpoint handlers
- **Request/Response Objects**: Handling HTTP requests and sending responses
- **Server Lifecycle**: Starting HTTP servers with `app.listen()` method
- **Port Configuration**: Environment variable usage for flexible server setup

### HTTP Server Development Patterns

Key web development patterns illustrated:

- **Endpoint Creation**: Mapping URL paths to response handlers
- **HTTP Methods**: Implementing GET request processing
- **Status Codes**: Understanding successful 200 OK and error 404 responses
- **Content Types**: Serving plain text responses for educational clarity
- **Local Development**: Running servers on localhost for testing

### Modern JavaScript Features

The implementation uses ES2022 JavaScript features:

- **Module System**: CommonJS `require()` for Express.js import
- **Arrow Functions**: Concise callback function syntax
- **Template Literals**: String interpolation for console logging
- **Environment Variables**: `process.env` for configuration management

## Development Workflow

### Complete Development Cycle

1. **Environment Setup**: Node.js installation and verification
2. **Project Creation**: npm initialization and dependency management
3. **Server Implementation**: Express.js application development
4. **Local Execution**: Server startup and port binding
5. **Testing Validation**: Endpoint verification using multiple methods
6. **Iteration**: Code modification and restart capabilities

### Best Practices Demonstrated

- **Single File Architecture**: Simplified server structure for educational clarity
- **Environment Configuration**: Flexible port configuration for different environments
- **Error Handling**: Default Express.js error responses for undefined routes
- **Console Logging**: Development feedback through server status messages
- **Dependency Management**: Proper npm package installation and usage

## Troubleshooting

### Common Issues and Solutions

**Server Won't Start**
- Verify Node.js installation: `node --version`
- Check port availability: Ensure port 3000 is not in use
- Review server.js syntax for JavaScript errors

**Endpoints Not Responding**
- Confirm server is running: Look for "Server listening" message
- Verify URL paths: Ensure correct localhost:3000 addresses
- Check browser/curl syntax: Confirm proper HTTP request format

**Express Module Not Found**
- Reinstall Express.js: `npm install express`
- Verify package.json: Confirm Express dependency listed
- Check node_modules: Ensure Express.js files downloaded

### Development Tips

- **Server Restart**: Use Ctrl+C to stop server, then `node server.js` to restart
- **Code Changes**: Restart server after modifying server.js file
- **Port Conflicts**: Set custom port with `PORT=3001 node server.js`
- **Testing Tools**: Use browser developer tools to inspect HTTP responses

## Educational Outcomes

Upon completing this tutorial, developers will have practical experience with:

- **Node.js Project Setup**: npm initialization and dependency management
- **Express.js Framework Usage**: HTTP server creation and route configuration
- **Local Development Process**: Complete development workflow from setup to testing
- **HTTP Protocol Understanding**: Request/response cycles and status codes
- **Command-Line Tools**: Using curl for API testing and validation
- **Modern JavaScript Development**: ES2022 features in server-side environment

This foundational knowledge provides the basis for advancing to more complex web development concepts including middleware, authentication, database integration, and production deployment strategies.

## Next Steps

After mastering this tutorial, consider exploring:

- **Express.js Middleware**: Request processing and response modification
- **Database Integration**: Adding MongoDB or PostgreSQL data persistence
- **Authentication**: Implementing user login and session management
- **API Development**: Creating RESTful endpoints with JSON responses
- **Production Deployment**: Deploying applications to cloud platforms
- **Testing Frameworks**: Automated testing with Jest or Mocha