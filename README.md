# Node.js Unhandled Exception Bug

This repository demonstrates a common error in Node.js applications: the lack of proper error handling in HTTP servers.  The `bug.js` file shows a basic server without error handling.  The `bugSolution.js` file provides a corrected version with comprehensive error handling.

## Bug

The original server in `bug.js` lacks any error handling. If an error occurs during the request handling (e.g., a database error, network issue, or an unexpected exception), the server will crash without any graceful recovery.

## Solution

The `bugSolution.js` file demonstrates how to implement error handling to prevent server crashes.  It uses `try...catch` blocks to handle potential exceptions, logs errors for debugging, and sends appropriate error responses to the client.