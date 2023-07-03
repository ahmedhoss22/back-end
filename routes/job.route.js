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