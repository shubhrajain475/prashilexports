Welcome to "Prashil Export" , your premier destination for high-quality spices sourced directly from the finest farms. At Prashil Export, we are dedicated to bringing the rich flavors and aromatic essences of the world's best spices to your kitchen. Our extensive selection includes a variety of spices such as turmeric, cumin, coriander, black pepper, and more, each meticulously harvested and processed to preserve their natural goodness. Whether you're a home cook or a professional chef, our spices are sure to elevate your culinary creations. Experience the true essence of flavor with Prashil Export, where quality meets authenticity.
## API Reference


```sh
  POST /sign-up
```


```sh
  POST /login
```


```sh
  POST /contactus
```


```sh
  GET /dashboard
```

  
```sh
  POST /photoupload
```


```sh
  DELETE /photos/:photoId
```
  

```sh
  PUT /photos/:photoId/caption
```
  

```sh
  GET /productdashboard
```
 

```sh
  POST /otp
```
   

```sh
  POST /verifyotp
```
   

```sh
  POST /forgotpassword
```
   

```sh
  GET /qr
```

## APPENDIX

A. Authentication
JWT Token Authentication

Purpose: Securely authenticate users and manage sessions.
Description: JSON Web Tokens (JWT) are used for authenticating users. Tokens are generated upon successful login and are required for accessing protected routes.

QR Code Generator

Purpose: Enhance login security and provide an alternative login method.
Description: QR codes are generated for users to scan and authenticate. This adds an extra layer of security and convenience.


Nodemailer for OTP Generation

Purpose: Verify user identity during registration and sensitive actions.
Description: Nodemailer is used to send OTPs (One-Time Passwords) to users' email addresses for verification purposes.

B. File Management
Multer for File Transfer

Purpose: Handle binary files transfer between frontend and backend.
Description: Multer middleware is used for handling multipart/form-data, allowing for easy file uploads and transfers in the application.

Cloudinary for Cloud Storage

Purpose: Store and manage binary files on the cloud.
Description: Cloudinary is used to upload and store binary files. It provides publicly accessible links, functioning similarly to AWS S3 buckets. These links can be used directly in the project to access the stored files.


C. Implementation
JWT Token Authentication

Generate JWT token upon successful login.
Include token in the authorization header for protected routes.
Verify token on the backend to grant access to resources.

QR Code Generation

Generate QR code on user request.
Implement QR code scanning functionality for login.

OTP Generation with Nodemailer

Generate and send OTP via email using Nodemailer.
Verify OTP input from the user during registration or sensitive actions.

File Transfers with Multer

Configure Multer to handle file uploads from the frontend.
Process and store uploaded files on the server.

Cloudinary Integration

Upload files to Cloudinary and retrieve public links.
Use public links to access and display files in the application.

## Authors 
 
 [shubhrajain475](https://github.com/shubhrajain475/prashilexports.git)


## Demo

https://www.prashilexports.com/


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`MONGO_URI`
`secret_key`
`CLOUD_NAME`
`API_KEY`
`API_SECRET`
`CLOUDINARY_URL`
