require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const transporter = require("./nodemailerConfig");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/auth/callback", async (req, res) => {
    const { token, email } = req.body;
    try {
        // Validate token with Auth0
        const response = await axios.get(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        // Send Email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your Auth Token",
            text: `Your Auth0 token: ${token}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: "Email sending failed" });
            }
            res.json({ message: "Email sent successfully" });
        });

    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
