'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VaccineDetails extends Model {
    static associate(models) {
      VaccineDetails.belongsTo(models.Patients, {foreignKey: 'patient_id'});
    }
  }
  VaccineDetails.init({
    vaccine_date:
        {
          type: DataTypes.DATEONLY,
          validate: {isDate: true,}
        },
    vaccine_manufacturer: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        len: [2, 255],
      }
    },
    patient_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {isNumeric: true,}
    }

  }, {
    sequelize,
    modelName: 'VaccineDetails',
  });
  return VaccineDetails;
};