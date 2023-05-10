(()=>{
    const db = require("../models");
    /**
     * the cunction check if there is patient with the id number she got
     * and if there is patient , she adds the patient to the db
     * @param req
     * @param res
     */
    exports.addCvdDetails = async (req, res) => {
        try {
            const {positive_test_date, recovery_date, patient_id
            } = req.body;

            const patient = await db.Patients.findOne({ where: { patient_id } });
            if (!patient) {return res.status(400).send("The patient does not exist");}

            const existingCvdDetails = await db.CovidDetails.findOne({where: { patient_id },});
            if (existingCvdDetails) {return res.status(400).send("Covid details for this patient already exist");}
            const cvdDetails = await db.CovidDetails.create({
                positive_test_date, recovery_date, patient_id
            });
            return res.send(cvdDetails);
        } catch (err) {
            console.log('***Error creating cvdDetails', JSON.stringify(err));
            return res.status(400).send(err);
        }
    };

    exports.getCvdDetailsByParams = (req, res) => {
        // Get the query parameters from the request object
        const query = req.query;

        // Build the query based on the query parameters
        const where = {};
        for (const key in query) {
            where[key] = query[key];
        }

        // Find all patients matching the query
        return db.CovidDetails.findAll({where})
            .then((cvdDetails) => res.send(cvdDetails))
            .catch((err) => {
                return res.status(400).send(err)
            });
    }

    exports.getAllCvdDetails = (req, res) => {
        return db.CovidDetails.findAll()
            .then((cvdDetails) => res.send(cvdDetails))
            .catch((err) => {
                return res.status(400).send(err)
            });
    }

})();