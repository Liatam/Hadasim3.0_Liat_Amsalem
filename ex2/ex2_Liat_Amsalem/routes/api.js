const express = require('express');
const router = express.Router();
const controllerPatient = require('../controller/patientCtrl');
const controllerCvdDetails = require('../controller/cvdDetailsCtrl');
const controllerVaccines = require('../controller/vaccinesCtrl');

//this route add new patient to the patients table
router.post('/patients/add', controllerPatient.addPatient);
router.get('/patients/all', controllerPatient.getAllPatients);
//this route get all patients from the patients table by parameter in query
//for example : http://localhost:3000/api/patients/search?patient_id=123456789
router.get('/patients/search', controllerPatient.getPatientByParams);

//this route add new cvdDetails of exist user to the cvdDetails table
router.post('/cvdDetails/add', controllerCvdDetails.addCvdDetails);
router.get('/cvdDetails/all', controllerCvdDetails.getAllCvdDetails);
//this route get all cvdDetails from the cvdDetails table by parameter in query
//for example : http://localhost:3000/api/cvdDetails/search?positive_test_date=2021-01-01
router.get('/cvdDetails/search', controllerCvdDetails.getCvdDetailsByParams);

//this route add new vaccine to the vaccines table
router.post('/vaccines/add', controllerVaccines.addVaccines);
router.get('/vaccines/all', controllerVaccines.getAllVaccines);
//this route get all vaccines from the vaccines table by parameter in query
//for example : http://localhost:3000/api/vaccines/search?vaccine_manufacturer=ofizer
router.get('/vaccines/search', controllerVaccines.getVaccinesByParams);

module.exports = router;
