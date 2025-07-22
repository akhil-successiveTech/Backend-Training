# Error Codes Documentation

This document provides a detailed explanation of common HTTP error codes used in the project and what they represent.

---

## 1xx: Informational Responses

- **100 Continue**  
  The initial part of a request has been received and the client can continue with the request.

- **101 Switching Protocols**  
  The server is switching protocols as requested by the client.

---

## 2xx: Successful Responses

- **200 OK**  
  The request was successful, and the response body contains the requested data.

- **201 Created**  
  The request was successful, and a new resource was created.

- **204 No Content**  
  The request was successful but there is no content to send back.

---

## 3xx: Redirection Messages

- **301 Moved Permanently**  
  The resource has been permanently moved to a new URL.

- **302 Found (Previously "Moved Temporarily")**  
  Temporary redirection to a different URL.

- **304 Not Modified**  
  The cached version of the requested resource is still valid.

---

## 4xx: Client Errors

- **400 Bad Request**  
  The server could not understand the request due to invalid syntax or missing fields.

- **401 Unauthorized**  
  Authentication is required and has either failed or not been provided.

- **403 Forbidden**  
  The client does not have permission to access the requested resource.

- **404 Not Found**  
  The server cannot find the requested resource.

- **409 Conflict**  
  The request could not be completed due to a conflict with the current state of the target resource.

- **422 Unprocessable Entity**  
  The server understands the content type and syntax, but was unable to process the contained instructions (often used for validation errors).

---

## 5xx: Server Errors

- **500 Internal Server Error**  
  A generic error message, something went wrong on the server.

- **502 Bad Gateway**  
  The server received an invalid response from the upstream server.

- **503 Service Unavailable**  
  The server is not ready to handle the request (e.g., down for maintenance).

- **504 Gateway Timeout**  
  The server did not receive a timely response from an upstream server.

---

## Custom Application-Level Errors

You may use custom error codes/messages in the response body to indicate specific application issues, such as:

```json
{
  "error": "ValidationError",
  "message": "Username must be at least 3 characters."
}
