const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors');
const port = process.env.PORT || 8000
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db.config')
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
dotenv.config({ path: './config/config.env' })
connectDB()


const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:8000",
			},
		],
	},
	apis: ["./routes/*.js"],
};

app.use(cors({}));
app.use(cookieParser())
app.use(express.json())



const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

const Contacts=require("./routes/contact")
app.use('/api/Contacts',Contacts);

app.listen(port,console.log( `Server is running in ${process.env.NODE_ENV} mode on port ${port}`)
)
