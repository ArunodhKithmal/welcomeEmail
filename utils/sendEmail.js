require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (to,name) => {
  const msg = {
    to,
    from: {
        name: 'WaveSuper',
        email: process.env.FROM_EMAIL},
    templateId: process.env.EMAIL_TEMPLATE_ID,
    dynamicTemplateData: { username: name}
  };

  sgMail.send(msg, function (err, result) {
    if (err) {
      console.log("Email Not Sent Error Occured");
    } else {
      console.log("Email was Sent");
    }
  });
};

module.exports = sendEmail;

