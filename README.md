# Express Password Check App

This is a simple Node.js application using Express.js that verifies a password entered by the user. If the correct password is entered, the user is granted access to a secret page.



## Features
- User can enter a password.
- If the password is correct (`rahul`), the user is redirected to a secret page.
- If the password is incorrect, the user remains on the input page.

## Technologies Used
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Body-Parser](https://www.npmjs.com/package/body-parser)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/my-secrets-nodejs-expressjs.git

    Navigate into the project directory:

    bash

cd your-repo-name

Install the required dependencies:

bash

npm install

Start the application:

bash

    npm start

    Open your browser and navigate to http://localhost:3000.

##Usage

To use the application:

   - Enter the password in the input field on the home page.
    -If you enter the correct password (rahul), you will be redirected to the secret page.
    -If the password is incorrect, you will remain on the home page.

##Endpoints
GET /

    Serves the home page (index.html).

##POST /check

  - Checks the password entered by the user.
-If the password is correct, serves the secret page (secret.html).
   - If the password is incorrect, serves the home page again.
