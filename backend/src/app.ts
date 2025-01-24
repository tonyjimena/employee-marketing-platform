import cors from "cors"
import express from "express"
import setupSwagger from "./swagger"
import {Employee} from "./employee/domain/employee"
import initializeEmployees from "./employee/domain/seed"
import employeeRoutes from "./routes/employeeRoutes"

const app = express()
const port = 3000

app.use(express.static(__dirname + "/public"))

app.use(
	cors({
		origin: "http://localhost:5173",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
	})
)

app.use(express.json())

app.use("/api", employeeRoutes)

setupSwagger(app)

const startServer = async () => {
	try {
		await Employee.sync({force: true})

		await initializeEmployees()

		app.listen(port, () => {
			console.log(`Server is running at http://localhost:${port}`)
		})
	} catch (error) {
		console.error("Error during initialization:", error)
	}
}

startServer()
