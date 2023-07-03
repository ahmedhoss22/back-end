const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.model;
const validator=require('validator')

const jobSchema = new Schema("jobSchema", {
  companyName: { type: String },
  field: { type: String },
  location: { type: String },
  companyLogo: { type: String, default: "/upload/download.png" },
  aboutCompany: { type: String },
  position: { type: String },
  type: { type: String },
  minRange: { type: Number },
  maxRange: { type: Number },
  currency: { type: String },
  description: { type: String },
  requirements: { type: String },
  skills: { type: String },
  status: { type: String },
  postedAT:{type:Date},
  applications: [
    {
      jobID: { type: ObjectId },
      Name:{type:String},
      yearsExp: {
        type: Number,
        validate(val) {
          if (val < 0) {
            throw new Error("there is no negative years");
          }
        },
      },
      email: {
        type: String,
        trim: true,
        match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      },
      phone: {
        type: String,
        trim: true,
        validate: {
          validator: function (phone) {
            return /^\d{1,11}$/.test(phone);
          },
          message: "Invalid phone number",
        },
      },
      cv: { type: String, default: "/upload/download.png" },
    },
  ],
});

module.exports = jobSchema;
