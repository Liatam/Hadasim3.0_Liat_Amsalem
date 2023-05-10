(()=>{
    const db = require("../models");

    exports.addPatient = async (req, res) => {
        try {
            const {firstName, lastName, patient_id, addressCity, addressStreet, addressNumber, dateOfBirth, phone, mobile,
            } = req.body;
            // Check if patient_id already exists
            const existingPatient = await db.Patients.findOne({
                where: { patient_id },
            });
            if (existingPatient)
                return res.status(400).send(`Patient with id ${patient_id} already exists`);
            // Create new patient
            const newPatient = await db.Patients.create({firstName, lastName, patient_id, addressCity,
                                                         addressStreet, addressNumber, dateOfBirth, phone, mobile,});
            res.send(newPatient);
        } catch (err) {
            if (err.name === "SequelizeValidationError")
                return res.status(400).send(err.errors);
             else
                return res.status(500).send("Error creating patient");
        }
    };


    exports.getPatientByParams = (req, res) => {
        // Get the query parameters from the request object
        const query = req.query;
        // Build the query based on the query parameters
        const where = {};
        for (const key in query) {
            where[key] = query[key];
        }
        // Find all patients matching the query
        return db.Patients.findAll({where})
            .then((patients) => res.send(patients))
            .catch((err) => {
                console.log('***Error finding patients', JSON.stringify(err))
                return res.status(400).send(err)
            });
    };

    exports.getAllPatients = (req, res) => {
        return db.Patients.findAll()
            .then((patients) => res.send(patients))
            .catch((err) => {
                console.log('***Error finding patients', JSON.stringify(err))
                return res.status(400).send(err)
            });
    }

})();