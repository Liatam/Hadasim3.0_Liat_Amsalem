'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class CovidDetails extends Model {
        static associate(models) {
            CovidDetails.belongsTo(models.Patients, {foreignKey: 'patient_id'});
        }
    }

    CovidDetails.init({
        positive_test_date:
            {
                type: DataTypes.DATEONLY,
                validate: {isDate: true,}
            },
        recovery_date:
            {
                type: DataTypes.DATEONLY,
                validate: {isDate: true,}
            },
        patient_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {isNumeric: true,}
        }
    }, {
        sequelize,
        modelName:'CovidDetails',
    });
    // count patients who haven't received any vaccine
    CovidDetails.count({
        where: {
            vaccine_date_1: null,
            vaccine_date_2: null,
            vaccine_date_3: null,
            vaccine_date_4: null,
        },
    }).then(count => {
        console.log(`There are ${count} patients who haven't received any vaccine.`);
    }).catch(error => {
        console.error(error);
    });
    return CovidDetails;
};
