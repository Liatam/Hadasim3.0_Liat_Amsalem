'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patients extends Model {
    static associate(models){
        Patients.hasOne(models.CovidDetails, {foreignKey: 'patient_id'});
          Patients.hasOne(models.VaccineDetails, {foreignKey: 'patient_id'});
    }
}
  Patients.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 255]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 255]
      }
    },
    patient_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [8, 9]
      }
    },
    addressCity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 20]
      }
    },
    addressStreet: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    addressNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 3]
      }
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        is: /^0\d{8,9}$/
      }
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true,
      }
    }
  }, {
    sequelize,
    modelName: 'Patients',
  });
  return Patients;
};
