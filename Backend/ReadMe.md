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

## Get All Jobs

**Endpoint:** `POST /api/v1/job/get`

**Description:** Retrieves all jobs. .

**Response:**
- `200 OK`: 
```json
 {
  "jobs": [ ... ],
  "success": true
}
 ```


 ## Get Admin Jobs

**Endpoint:** `GET /api/v1/job/getAdminJobs`

**Description:** Retrieves all jobs posted by the authenticated admin.

**Response:**
- `200 OK`: 
```json
 {
  "jobs": [ ... ],
  "success": true
}
 ```


 
 ## Get Job by ID

**Endpoint:** `GET /api/v1/job/get/:id`

**Description:**  Retrieves a job by its ID.

**Response:**
- `200 OK`: 
```json
 {
  "jobs": [ ... ],
  "success": true
}
 ```
 **Errors:**
- `400 Bad Request`: 
```json
{
  "message": "Job not found",
  "success": false
}
 ```


 

# Company Routes 

## Register Company

**Endpoint:** `POST /api/v1/company/register`

**Description:** Registers a new company.

**Request Body:**
- `title`: Company name 


**Response:**
- `200 OK`: 
  ```json
    {
    "message": "Company registered successfully",
    "createCompany": { ... },
    "success": true
  }

**Errors**
**400 Bad Request**
```json
{
  "message": "Company already exists",
  "success": false
}
```


 ## Get All Companies

**Endpoint:** `GET /api/v1/company/get`

**Description:**  Retrieves all companies.

**Response:**
- `200 OK`: 
```json
{
  "companies": [ ... ],
  "success": true
}
 ```

 ## Get Company by ID

**Endpoint:** `GET /api/v1/company/get/:id`

**Description:** Retrieves a company by its ID.

**Response:**
- `200 OK`: 
```json
{
  "companies": { ... },
  "success": true
}
 ```

**Errors:**
- `400 Bad Request`: 
```json
{
  "message": "Company not found",
  "success": false
}
 ```



 ## Update Company

**Endpoint:** `PUT /api/v1/company/update/:id`

**Description:**  Updates a company's information.

**Request Body:**
- `companyName`: Company name 
- `description`: Company description 
- `website`: Company website
- `locaton`: Company location 
- `logo`: Company logo (file upload)


**Response:**
- `200 OK`: 
```json
{
  "message": "Company information updated.",
  "company": { ... },
  "success": true
}
 ```

**Errors:**
- `400 Bad Request`: 
```json
{
  "message": "Company not found",
  "success": false
}
 ```


# Application  Routes 

## Apply for job

**Endpoint:** `GET /api/v1/application/apply/:id`

**Description:**  Applies for a job.


**Response:**
- `200 OK`: 
  ```json
     {
    "message": "Application submitted successfully",
    "application": { ... },
    "success": true
  }


**Errors**
**400 Bad Request**
```json
{
  "message": "Job not found",
  "success": false
}
```


 ## Get Applicants

**Endpoint:** `GET /api/v1/application/:id/applicants`

**Description:**  Retrieves all applicants for a job.

**Response:**
- `200 OK`: 
```json
{
  "applicants": [ ... ],
  "success": true
}
 ```

 ## Update Application Status

**Endpoint:** `POST /api/v1/application/status/:id/update`

**Description:** Updates the status of an application.

**Request Body:**
- `status`:New status 

**Response:**
- `200 OK`: 
```json
{
  "message": "Application status updated successfully",
  "updateApplication": { ... },
  "success": true
}
 ```

 **Errors**
**400 Bad Request**
```json
{
  "message": "Application not found",
  "success": false
}
```


These `README.md` files provide an overview of the routes, including the request body, response, and potential errors for each endpoint.
These `README.md` files provide an overview of the routes, including the request body, response, and potential errors for each endpoint.

