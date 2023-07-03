const jobSchema = require("../model/jobs.model");
const loggerEvent= require("../services/logger")
const logger= loggerEvent("job");


const createJob = (req, res) => {
  const {
    companyName,
    field,
    location,
    companyLogo,
    aboutCompany,
    position,
    type,
    minRange,
    maxRange,
    currency,
    description,
    requirements,
    skills,
    status,
    postedAT,
  } = req.body;

  const newJob = new jobSchema({
    companyName,
    field,
    location,
    companyLogo,
    aboutCompany,
    position,
    type,
    minRange,
    maxRange,
    currency,
    description,
    requirements,
    skills,
    status,
    postedAT,
  });

  newJob
    .save()
    .then((job) => {
      res.status(201).send(job);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const getJobs = (req, res) => {
  jobSchema
    .find({})
    .then((jobs) => {
      res.status(200).send(jobs);
    })
    .catch((error) => {
      res.status(500).send(error);
      logger.error(error.message)
    });
};

const getJobsOnly=(req,res)=>{
    jobSchema
      .find({}, "-applications") 
      .then((jobs) => {
        res.status(200).send(jobs);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
}

const getJApplications = (req, res) => {
  jobSchema
    .find({}, "applications")
    .then((jobs) => {
      res.status(200).send(jobs);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const createJobApplication = (req, res) => {
  const _id = req.params.id;
  const { yearsExp, email, phone, cv, Name } = req.body;

  jobSchema
    .findById(_id)
    .then((job) => {
      if (!job) {
        return res.status(404).send("Job not found.");
      }
      const newApplication = {
        jobID: _id,
        Name,
        yearsExp,
        email,
        phone,
        cv,
      };
      job.applications.push(newApplication);
      return job.save();
    })
    .then((updatedJob) => {
      res.status(201).send(updatedJob);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const getJob=(req,res)=>{
     const _id = req.params.id;
     jobSchema
       .findById(_id)
       .then((job) => {
         if (!job) {
           return res.status(404).send("Job not found.");
         }
         res.status(200).send(job);
       })
       .catch((error) => {
         res.status(500).send(error);
       });
}

const getJobOnly = (req, res) => {
  const _id = req.params.id;
  jobSchema
    .findById(_id, "-applications")
    .then((job) => {
      if (!job) {
        return res.status(404).send("Job not found.");
      }
      res.status(200).send(job);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const getApplication = (req, res) => {
  const _id = req.params.id;
  const _ida = req.params.ida;
  jobSchema.findById(_id, "applications")
    .then((job) => {
      if (!job) {
        return res.status(404).send("Job not found.");
      }
      const application = job.applications.id(_ida);
      if (!application) {
        return res.status(404).send("Application not found.");
      }
      res.status(200).send(application);
    })
    .catch((error) => {
      res.status(500).send(error);
    });



};

const deleteJob=(req,res)=>{
    const _id = req.params.id;
    jobSchema
      .findByIdAndDelete(_id)
      .then((job) => {
        if (!job) {
          return res.status(404).send("Job not found.");
        }
        res.status(200).send("Job deleted successfully.");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
}

const deleteApplication = (req, res) => {
  const applicationId = req.params.id;
  jobSchema
    .updateOne(
      { "applications._id": applicationId },
      { $pull: { applications: { _id: applicationId } } }
    )
    .then((job) => {
      if (!job) {
        return res.status(404).send("application not found.");
      }
      res.status(200).send("application deleted successfully.");
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const updateApplication=(req,res)=>{
     const applicationId = req.params.id;
     const updatedApplication = req.body;

     jobSchema
       .findOneAndUpdate(
         { "applications._id": applicationId },
         { $set: { "applications.$": updatedApplication } },
         { new: true , validator:true }
       )
       .then((updatedJob) => {
         if (!updatedJob) {
           return res.status(404).send("Application not found.");
         }
         res.status(200).send(updatedJob);
       })
       .catch((error) => {
         res.status(500).send(error);
       });
}

const updateJob=(req,res)=>{
     const jobId = req.params.id;
     const updatedJob = req.body;

     jobSchema
       .findByIdAndUpdate(jobId, updatedJob, { new: true })
       .then((updatedJob) => {
         if (!updatedJob) {
           return res.status(404).send("Job not found.");
         }
         res.status(200).send(updatedJob);
       })
       .catch((error) => {
         res.status(500).send(error);
       });
}

module.exports = {
  createJob,
  getJobs,
  getJobsOnly,
  getJApplications,
  createJobApplication,
  getJob,
  getJobOnly,
  getApplication,
  deleteJob,
  deleteApplication,
  updateApplication,
  updateJob,
};
