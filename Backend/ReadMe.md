# User Routes

## Register User

**Endpoint:** `POST /api/v1/user/register`

**Description:** Registers a new user.

**Request Body:**
- `fullName`: Full name
- `email`: Email address
- `password`: Password
- `phoneNumber`: Phone number
- `role`: User role (student or recruiter)

**Response:**
- `200 OK`: 
  ```json
  {
    "message": "Account created successfully",
    "createUser": { ... },
    "success": true
  }

**400 Bad Request**
```json
{
  "message": "All fields are necessary in registration",
  "success": false
}
{
  "message": "All fields are necessary in registration",
  "success": false
}
```

## Login User

**Endpoint:** `POST /api/v1/user/login`

**Description:** Logs in a user .

**Request Body:**
- `email`: Email address
- `password`: Password
- `role`: User role (student or recruiter)


**Response:**
- `200 OK`: 
  ```json
  {
  "message": "Login successful",
  "token": "jwt-token",
  "loggedInUser": { ... },
  "success": true
  }


**400 Bad Request:**
```json
  {
  "message": "All fields are necessary in login",
  "success": false
 }
 {
  "message": "User doesn't find",
  "success": false
 }
 {
  "message": "Password is not matched",
  "success": false
 }
 {
  "message": "Account doesn't exist with current role",
  "success": false
}
```


## LogOut User

**Endpoint:** `POST /api/v1/user/logout`

**Description:** Logs out  a user .

**Response:**
- `200 OK`: 
```json
 {
  "message": "Logout successful",
  "success": true
 }
 ```

 ## Update User Progile 

**Endpoint:** `POST /api/v1/user/update`

**Description:** Updates the profile of a user.

**Request Headers:**
- `Authorizaton`: Bearer token

**Request Body:**
- `fullName`: Full name
- `email`: Email address
- `phoneNumber`: Phone number
- `bio`: Bio
- `skills`:Skills


**Response:**
- `200 OK`: 
```json
 {
  "message": "Profile updated successfully",
  "user": { ... },
  "success": true
 }
 ```


 **400 Bad Request:**
 ```json
  {
  "message": "User not found",
  "success": false
  }
 ```


# Job Routes 

## Post Job

**Endpoint:** `POST /api/v1/job/post`

**Description:** Posts a new job..

**Request Body:**
- `title`: Job title
- `descrpton`: Job descripton
- `requirement`: job requirements
- `salary`: job salary
- `location`: Job location
- `jobType`: :Job type
- `position`:  Job position
- `experienceLevel`: Experience level
- `companyId`:  company ID

**Response:**
- `200 OK`: 
  ```json
  {
  "message": "Job posted successfully",
  "createJob": { ... },
  "success": true
  }

**400 Bad Request**
```json
{
  "message": "All fields are necessary in job posting",
  "success": false
}
```






