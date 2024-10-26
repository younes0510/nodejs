const nodemailer = require("nodemailer");

//Creating a transporter object and passing an option object
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "user email here",
    pass: "user password here",
  },
});
//Creating a reciver object that store the receiving ends credentials and the email subject and body
const receiver = {
  from: "user email here",
  to: "myotheremail@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Hey that works!!!",
};

//Sending the email to the receiver's email
transporter.sendMail(receiver, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});