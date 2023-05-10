Liat Amsalem ID 324816214

This project is built using Node.js and Sequelize ORM to interact with a MySQL database.
It provides APIs for managing patients, their COVID details, and their vaccine details.

I run the APIs in postman. screenshots at the 'PostmanScreenshots' folder.
here a link to the collection of the APIs in postman:
https://universal-equinox-658084.postman.co/workspace/New-Team-Workspace~f49c1fe3-f2df-426f-a65d-e8c46a95a618/collection/27289122-3504e9e1-26a4-43a5-8ee5-9b9ca035afd9?action=share&creator=27289122
you need will need to change the params/body as you have in your database.

**Installation**
Clone the repository
Install dependencies with npm install, npm install sequelize , npm install mysql2, npm install express

**Configuration**
The project requires a MySQL database for storing data. 
The database connection details are configured in config/config.json.
I used xampp to create the database. the tables were created using sequelize-cli.

to run new database:
1. delete the folder migrations in the project
2. create new database in xampp
3. run the command sequelize db:migrate

Running the project:
Start the server by running npm start.

**API endpoints**
_Patients_
POST /api/patients - Creates a new patient. Requires the following fields in the request body:
firstName
lastName
patient_id
addressCity
addressStreet
addressNumber
dateOfBirth
phone
mobile

GET /api/patients - Retrieves all patients.
GET /api/patients/search - Retrieves patients that match the query parameters provided in the request. 
Query parameters should match the field names of the patient model.

_COVID details_
POST /api/covid_details - Creates COVID details for an existing patient. Requires the following fields in the request body:
positive_test_date
recovery_date
patient_id

GET /api/covid_details - Retrieves all COVID details.
GET /api/covid_details/search - Retrieves COVID details that match the query parameters provided in the request. Query parameters should match the field names of the COVID details model.

_Vaccine details_
POST /api/vaccine_details - Creates vaccine details for an existing patient. Requires the following fields in the request body:
vaccine_date
vaccine_manufacturer
patient_id
GET /api/vaccine_details - Retrieves all vaccine details.
GET /api/vaccine_details/search - Retrieves vaccine details that match the query parameters provided in the request. Query parameters should match the field names of the vaccine details model.

