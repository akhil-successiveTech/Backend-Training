# Validations and Their Role in Security

When building web applications, validations are like security guards at the door — they decide what’s allowed in and what should be kept out.

## What Are Validations?

Validations are rules we apply to user input to make sure the data is:
- Correct
- Expected
- Safe

They help prevent bad or harmful data from entering our system.

## Why Are Validations Important for Security?

### 1. **Protect Against Attacks**
Without proper validations, attackers can send malicious data (like scripts or SQL code) and break your system.

> Example: A user enters `<script>alert("Hacked!")</script>` instead of a name. Without validation, this can lead to XSS attacks.

### 2. **Prevent Unauthorized Access**
Validation ensures only properly formatted and authorized data is accepted — stopping hackers from bypassing authentication or roles.

### 3. **Ensure Data Integrity**
It keeps your database clean, consistent, and safe from accidental or intentional damage.

### 4. **Reduce Server Load**
Early validation rejects bad input before it even touches your logic or database, saving resources.

## Good Validation Practices

- Always validate **on the server** (client-side is not enough).
- Use libraries like **Joi**, **Yup**, or **Zod** for consistency.
- Validate:
  - Required fields
  - Email formats
  - Password strength
  - Input lengths
  - Types (string, number, etc.)