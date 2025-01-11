# User Routes

This file defines the routes for user-related operations.

## Routes

- `POST /register`: Register a new user.
- `POST /login`: Log in a user.
- `GET /logout`: Log out a user.
- `POST /update`: Update user profile.

## Middleware

- `auth`: Middleware to authenticate the user.
- `singleUpload`: Middleware to handle single file uploads.

## Controllers

- `register`: Handles user registration.
- `loginUser`: Handles user login.
- `logoutUser`: Handles user logout.
- `updateProfile`: Handles updating user profile.

## Example Usage

```sh
curl -X POST http://localhost:3000/api/v1/user/register -d '{"fullName": "John Doe", "email": "john@example.com", "password": "password", "phoneNumber": "1234567890", "role": "student"}'