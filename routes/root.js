// const express=require('express');
// const app=express;
// const router = app.Router();
// const jobSchema = require('../model/jobs.model');
// router.post("/jobs", (req, res) => {
//   const {
//     companyName,
//     field,
//     location,
//     companyLogo,
//     aboutCompany,
//     position,
//     type,
//     minRange,
//     maxRange,
//     currency,
//     description,
//     requirements,
//     skills,
//     status,
//   } = req.body;
//     const newJob = new jobSchema({
//         companyName,
//         field,
//         location,
//         companyLogo,
//         aboutCompany,
//         position,
//         type,
//         minRange,
//         maxRange,
//         currency,
//         description,
//         requirements,
//         skills,
//         status,
//     });
//   newJob.save().then((job) => {
//       res.status(201).send(job);
//     }).catch((error) => {
//       res.status(500).send(error);
//     });
// });
// router.get("/jobs", (req, res) => {
//   jobSchema.find({}).then((job) => {
//     res.status(200).send(job)
// }).catch((e)=>{console.log(e)})
// })
// router.post("/jobs/:id", (req, res) => {
//   const _id = req.params.id;
//   const { yearsExp, email, phone, cv } = req.body;


//   jobSchema.findById(_id).then((job) => {
//       if (!job) {
//         return res.status(404).send("Job not found.");
//       }
//       const newApplication = {
//         jobID: _id,
//         yearsExp,
//         email,
//         phone,
//         cv,
//       };
//       job.applications.push(newApplication);
//       return job.save();
//     })
//     .then((updatedJob) => {
//       res.status(201).send(updatedJob);
//     }).catch((error) => {
//       res.status(500).send(error);
//     });
// });
// module.exports=router



const express = require("express");
const router = express.Router();
const jobsController = require("../controller/job.controller");

router.post("/jobs", jobsController.createJob);
router.post("/jobs/:id", jobsController.createJobApplication);
router.get("/jobs", jobsController.getJobs);
router.get("/job/:id", jobsController.getJob);
router.get("/jobsOnly", jobsController.getJobsOnly);
router.get("/jobOnly/:id", jobsController.getJobOnly);
router.get("/applications", jobsController.getJApplications);
router.get("/job/:id/:ida", jobsController.getApplication);
router.delete("/job/:id", jobsController.deleteJob);
router.delete("/application/:id", jobsController.deleteApplication);
router.patch("/application/:id", jobsController.updateApplication);
router.patch("/job/:id", jobsController.updateJob);


module.exports = router;
// for crud operations