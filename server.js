require("dotenv").config(); // Load environment variables
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the "public" folder
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

// Handle the POST request for sending email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: "gmail", // Using Gmail
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail password
      },
    });

    // Email details
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "danksahil895@gmail.com", // Your recipient email
      subject: `New Message from ${name}`,
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
