const mustache = require("mustache");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "Gmail",
    auth: {
      user: process.env.APP_EMAIL_ADDRESS,
      pass: process.env.APP_EMAIL_PASSWORD,
    },
  })
);

const sendEmail = (email, subject, templatePath, templateData) => {
  const template = fs.readFileSync(templatePath, "utf8");
  const renderedTemplate = mustache.render(template, templateData);
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: process.env.APP_EMAIL_ADDRESS,
      to: email,
      subject: subject,
      html: renderedTemplate,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(`Failed to send ${subject} email:`, error);
        reject(error);
      } else {
        console.log(`${subject} email sent:`, info.response);
        resolve(info);
      }
    });
  });
};

const sendUserIdEmail = (email, userId) => {
  const templatePath = path.join(__dirname, "./Templates/userId.html");
  const templateData = { userId };
  const subject = "Your User ID";

  return sendEmail(email, subject, templatePath, templateData);
};

module.exports = {
  sendUserIdEmail,
};
