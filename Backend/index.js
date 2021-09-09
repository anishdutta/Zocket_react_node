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
		service: "gmail",
		auth: {
			user: "deepdutta1729@gmail.com",
			pass: "Deep_2000"
		}
	})

	await transport.sendMail({
		from: "anish2000.ad@gmail.com",
		to: text,
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
    
        <p>All the best man</p>
         </div>
    `
	})
})


app.listen(4000, () => {
	console.log(`Example app listening at http://localhost: 4000`)
  })
