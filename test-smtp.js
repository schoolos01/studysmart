require('dotenv').config();
const nodemailer = require('nodemailer');

async function test() {
  const port = Number(process.env.EMAIL_PORT) || 465;
  console.log("Host:", process.env.EMAIL_HOST);
  console.log("Port:", port);
  console.log("User:", process.env.EMAIL_USER);
  console.log("Pass length:", process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0);

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: port,
    secure: port === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.verify();
    console.log("Server is ready to take our messages");
  } catch (error) {
    console.error("Error:", error);
  }
}

test();
