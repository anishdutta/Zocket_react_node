const express = require("express")
const app = express()
require("dotenv").config()

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/send_mail", cors(), async (req, res) => {
	let { text } = req.body
	const transport = nodemailer.createTransport({
		host: "smtp.mailtrap.io",
		port: "587",
		auth: {
			user: "ddbb9fe633b526",
			pass: "095c63fe32a284"
		}
	})

	await transport.sendMail({
		from: "anish2000.ad@gmail.com",
		to: "anish2000.ad@gmail.com",
		subject: "test email",
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email!</h2>
        <p>${text}</p>
    
        <p>All the best, Darwin</p>
         </div>
    `
	})
})


app.listen(4000, () => {
	console.log(`Example app listening at http://localhost: 4000`)
  })
