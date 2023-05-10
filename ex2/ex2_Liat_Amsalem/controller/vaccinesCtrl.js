(()=>{
    const db = require("../models");

    exports.addVaccines = async (req, res) => {
        try {
            const { vaccine_date, vaccine_manufacturer, patient_id } = req.body;
            const patient = await db.Patients.findOne({ where: { patient_id } });
            if (!patient) {return res.status(400).send("The patient does not exist");}

            const vaccineCount = await db.VaccineDetails.count({
                where: { patient_id },});

            if (vaccineCount > 4)
                return res.status(400).send("The patient has already received 4 vaccines");

            const vaccine = await db.VaccineDetails.create({vaccine_date, vaccine_manufacturer, patient_id,});
            return res.send(vaccine);
        } catch (err) {
            console.log("***Error creating vaccine details", JSON.stringify(err));
            return res.status(400).send(err);
        }
    };

    exports.getVaccinesByParams = (req, res) => {
        // Get the query parameters from the request object
        const query = req.query;

        // Build the query based on the query parameters
        const where = {};
        for (const key in query) {
            where[key] = query[key];
        }

        // Find all patients matching the query
        return db.VaccineDetails.findAll({where})
            .then((vaccines) => res.send(vaccines))
            .catch((err) => {
                return res.status(400).send(err)
            });
    }

    exports.getAllVaccines = (req, res) => {
        return db.VaccineDetails.findAll()
            .then((vaccines) => res.send(vaccines))
            .catch((err) => {
                return res.status(400).send(err)
            });
    }
})();