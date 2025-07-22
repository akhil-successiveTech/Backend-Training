# Middleware in Express.js

## 📘 What is Middleware?

Middleware in Express.js are functions that execute during the request-response cycle. They can:
- Modify the request (`req`) and response (`res`) objects
- End the request-response cycle
- Call the next middleware in the stack

---

## Each middleware has access to:
- req – The request object
- res – The response object
- next() – A function to pass control to the next middleware

---

## Types of middleware
- Application level middleware
- Router level middleware
- Error handling middlware
- Build-in middleware
